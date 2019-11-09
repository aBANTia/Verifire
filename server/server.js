const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});