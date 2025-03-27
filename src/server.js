// src/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// ESM에서 __dirname 흉내내기
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// src 폴더(현재 __dirname) 정적 파일 서빙
app.use(express.static(__dirname));

// SPA 라우팅 fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 포트 설정
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
