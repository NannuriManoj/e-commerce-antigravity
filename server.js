import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ----- PORT CHECK (strict as required) -----
if (!process.env.PORT) {
  console.error('Error: PORT environment variable is not set.');
  process.exit(1);
}

const PORT = Number(process.env.PORT);

// ----- API ROUTES FIRST (IMPORTANT) -----
app.get('/', (req, res) => {
  res.json({
    app: 'e-commerce-antigravity',
    port: PORT
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// ----- FRONTEND SERVING (SCOPED) -----
// Serve React only under /app
app.use('/app', express.static(path.join(__dirname, 'dist')));

// SPA fallback ONLY for /app
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// ----- START SERVER -----
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

