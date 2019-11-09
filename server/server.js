const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

//JSON parser
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.get('/news', (req, res) => {
    //currently working on web scraping middleware
    res.sendStatus(404);    
})

//404 handler
app.use('*', (req, res) => {
    res.sendStatus(404);
  });
//global error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.sendStatus(500);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});