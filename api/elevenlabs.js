export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { text, voiceId = '8N2ng9i2uiUWqstgmWlH', voiceSettings } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  // Use the secure environment variable on the server side
  // Notice this DOES NOT have the VITE_ prefix
  const apiKey = process.env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'ELEVENLABS_API_KEY is not configured on the server.' });
  }

  try {
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: voiceSettings || {
          stability: 0.3,
          similarity_boost: 0.85,
          style: 0.5
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("ElevenLabs API Error:", errorText);
      return res.status(response.status).json({ error: 'ElevenLabs API failed' });
    }

    // Set the proper headers for audio streaming
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Cache-Control', 's-maxage=86400'); // Cache on Vercel Edge Network for 24 hours!

    // Stream the audio back to the client
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    return res.status(200).send(buffer);

  } catch (error) {
    console.error("Serverless function error:", error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
