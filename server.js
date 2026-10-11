
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const PUBLIC = path.join(__dirname, 'public');

// Semua file dalam public dan subfolder-nya dapat diakses
app.use(express.static(PUBLIC));

// Halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(PUBLIC, 'index.html'));
});

// Halaman nurture
app.get('/nurture', (req, res) => {
    res.sendFile(path.join(PUBLIC, 'nurture.html'));
});

// 404 untuk URL yang tidak ditemukan
app.use((req, res) => {
    res.status(404).send('404 - File atau halaman tidak ditemukan');
});

app.listen(PORT, () => {
    console.log(`Server: http://localhost:${PORT}`);
    console.log(`Home: http://localhost:${PORT}/`);
    console.log(`Nurture: http://localhost:${PORT}/nurture`);
});
