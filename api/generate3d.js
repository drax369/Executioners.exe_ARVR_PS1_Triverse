export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { image } = req.body;
  const HF_TOKEN = process.env.HF_TOKEN;

  try {
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');

    const response = await fetch(
      'https://api-inference.huggingface.co/models/stabilityai/TripoSR',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`,
          'Content-Type': 'application/octet-stream',
          'Accept': 'model/gltf-binary'
        },
        body: buffer
      }
    );

    const contentType = response.headers.get('content-type') || '';
    console.log('HF response status:', response.status, 'content-type:', contentType);

    if (!response.ok) {
      const errText = await response.text();
      console.error('HF error:', errText);
      return res.status(500).json({ error: errText });
    }

    const arrayBuffer = await response.arrayBuffer();
    const glbBase64 = Buffer.from(arrayBuffer).toString('base64');
    const glbDataUrl = `data:model/gltf-binary;base64,${glbBase64}`;

    res.status(200).json({ output: glbDataUrl });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}