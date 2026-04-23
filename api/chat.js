export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const { messages } = req.body;
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 800,
        system: 'Kamu Hasbhi Bot, asisten web development dari Kuy Nge Website. Jawab HANYA pertanyaan tentang HTML, CSS, JS, React, Node.js, database, hosting, deploy, dan web dev. Bahasa Indonesia santai.',
        messages: messages.slice(-10)
      })
    });
    const data = await response.json();
    const reply = data.content?.[0]?.text || 'Maaf, coba lagi!';
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: 'Server error' });
  }
}
