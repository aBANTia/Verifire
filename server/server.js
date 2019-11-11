const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const newsController = require('./controllers/newsController');

app.use(express.json());
app.use(express.static('assets'))


app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Serve Particle SVG
app.get('/flare', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/assets/flare.svg'));
});
// '/news' route will respond with a nested array of arrays,
    //each nested array contains scraped data from sources LAFD, LA Times, and Youtube (respectively)
    //structured as follows:
    // [
    //     [ { title: 'LAFD Title', link: 'LAFD.com', picture: 'piclink.com' } ],
    //     [ { title: 'LA Times Title', link: 'LATimes.com', picture: 'piclink.com' } ],
    //     [ { title: 'Youtube Title', link: 'youtube.com', picture: 'piclink.com' } ]
    // ]

app.get('/news', newsController.getNews, (req, res) => {
  res.json(res.locals.allNews);
});
// '/alerts' route will respond with an array of alerts from LAFD: {title: 'Alert', link: 'www.alertLink.com'}
app.get('/alerts', newsController.getAlerts, (req, res) => {
  res.json(res.locals.alerts);
});

// Serve build
app.use('/build', express.static(path.join(__dirname, '../build')));

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