const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist/portfolio'));

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Contact form submitted:', { name, email, subject, message });

  res.json({ success: true, message: 'Contact request received.' });
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'Portfolio backend is running.' });
});

app.get('*', (req, res) => {
  res.sendFile(require('path').resolve(__dirname, '../dist/portfolio/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
