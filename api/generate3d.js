export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { image } = req.body;
  const TOKEN = process.env.REPLICATE_TOKEN;

  try {
    // Use model name directly — no version hash needed
    const response = await fetch('https://api.replicate.com/v1/models/camenduru/tripo-sr/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait=60'
      },
      body: JSON.stringify({
        input: {
          image: image,
          do_remove_background: true,
          foreground_ratio: 0.85
        }
      })
    });

    const data = await response.json();
    console.log('Replicate response:', JSON.stringify(data));
    res.status(200).json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}