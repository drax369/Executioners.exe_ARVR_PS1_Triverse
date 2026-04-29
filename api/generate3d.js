export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).end();

  const { image } = req.body;
  const FAL_KEY = process.env.FAL_KEY;

  try {
    // Submit job to fal.ai TripoSR
    const submitRes = await fetch('https://queue.fal.run/fal-ai/triposr', {
      method: 'POST',
      headers: {
        'Authorization': `Key ${FAL_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_url: image,
        do_remove_background: true,
        foreground_ratio: 0.85
      })
    });

    const submitted = await submitRes.json();
    console.log('Submitted:', submitted);

    if (!submitted.request_id) {
      return res.status(500).json({ error: 'Failed to submit job', detail: submitted });
    }

    // Poll for result
    const requestId = submitted.request_id;
    for (let i = 0; i < 40; i++) {
      await new Promise(r => setTimeout(r, 3000));

      const statusRes = await fetch(`https://queue.fal.run/fal-ai/triposr/requests/${requestId}`, {
        headers: { 'Authorization': `Key ${FAL_KEY}` }
      });
      const status = await statusRes.json();
      console.log(`Poll ${i}:`, status.status);

      if (status.status === 'COMPLETED') {
        const glbUrl = status.output?.model_mesh?.url || status.output?.mesh?.url;
        if (glbUrl) return res.status(200).json({ output: glbUrl });
        return res.status(500).json({ error: 'No GLB in output', output: status.output });
      }

      if (status.status === 'FAILED') {
        return res.status(500).json({ error: 'Job failed', detail: status });
      }
    }

    res.status(500).json({ error: 'Timed out' });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}