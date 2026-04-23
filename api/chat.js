export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const { messages } = req.body;
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'API key not configured' });
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        max_tokens: 800,
        messages: [
          { role: 'system', content: 'Kamu Hasbhi Bot, asisten web development dari Kuy Nge Website. Jawab HANYA pertanyaan tentang HTML, CSS, JS, React, Node.js, database, hosting, deploy, dan web dev. Bahasa Indonesia santai, pakai emoji.' },
          ...messages.slice(-10)
        ]
      })
    });
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Maaf, coba lagi!';
    return res.status(200).json({ reply });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
