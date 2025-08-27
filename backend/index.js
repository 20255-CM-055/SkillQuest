// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// const PORT = 5000;

// app.use(cors());
// app.use(express.json());

// app.post('/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await axios.post(
//       'https://openrouter.ai/api/v1/chat/completions',
//       {
//         // model: 'qwen/qwen2.5-vl-72b-instruct:free',
//         model:'qwen/qwen2.5-vl-3b-instruct:free',
//         // model:'mistralai/mistral-small-3.2-24b-instruct:free',
//         messages: [{ role: 'user', content: message }],
//       },
//       {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, 
//           'Content-Type': 'application/json',
//           'HTTP-Referer': 'https://yourapp.com', 
//           'X-Title': 'YourApp'
//         }
//       }
//     );

//     res.json({ reply: response.data.choices[0].message.content });
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: 'OpenRouter API error' });
//   }
// });

// app.get('/', (req, res) => {
//   res.send('✅ OpenRouter backend running!');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://192.168.1.34:${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
console.log("Loaded API Key:", process.env.GEMINI_API_KEY);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: message }] }]
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );

    const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || '⚠️ No response generated.';
    res.json({ reply });

  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: 'Gemini API error' });
  }
});

app.get('/', (req, res) => {
  res.send('✅ Gemini backend running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://192.168.0.2:${PORT}`);
});
