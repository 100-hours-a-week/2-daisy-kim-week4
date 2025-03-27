import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 5500;

// 정적 파일 서빙
app.use(express.static(__dirname));

// SPA 라우팅 대응 (모든 경로 → index.html 반환)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ SPA server running at http://localhost:${PORT}`);
});
