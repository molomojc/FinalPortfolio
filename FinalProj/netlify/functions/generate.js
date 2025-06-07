const fetch = require('node-fetch');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { prompt, schema } = JSON.parse(event.body);
    const geminiApiKey = process.env.GEMINI_API_KEY; // Securely accesses the key

    const payload = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      ...(schema && {
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: schema,
        },
      }),
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiApiKey}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    return {
      statusCode: response.status, // Pass along the status from the Gemini API
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error('Error in Netlify function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate content.' }),
    };
  }
};