const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, 'public');

// Static: /data/global-data.json otomatis tersaji dari public/data/
app.use(express.static(PUBLIC));

// Route view (SPA): semua halaman dilayani satu file index.html
const view = (req, res) => res.sendFile(path.join(PUBLIC, 'index.html'));
['/', '/Awan_Kumulus_Lukisan_Transparan.png','/Rumput_Hijau.png', '/Lush_Grass_Tuft_with_White_Buds.png', '/Padang_Rumput_dan_Langit_Biru_Dramatis.png', '/Pohon_Tua_tanpa_Ayunan.png', '/Ayunan_Batu.png', '/porter.mpeg'].forEach((r) => app.get(r, view));

// Fallback
app.use((req, res) => res.status(404).sendFile(path.join(PUBLIC, 'index.html')));

app.listen(PORT, () => console.log(`Shelter running in http://localhost:${PORT}`));