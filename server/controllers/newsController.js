const scraper = require('../utils/scraper')

const newsController = {};

//getNews middleware scrapes titles and links from source sites, as specified in server.js
newsController.getNews = (req, res, next) => {
  //SERVING UP LAFD headlines / links
  const LAFDArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFD()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD scrape failed'))
  })

  //SERVING UP LA Times headlines / links
  const LATimesArticles = new Promise((resolve, reject) => {
    scraper
      .scrapeLATimes()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LA Times scrape failed'))
    })

  //SERVING UP Youtube headlines / links
  const youtubeVideos = new Promise((resolve, reject) => {
    scraper
      .scrapeYoutube()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('YouTube scrape failed'))
  })

  Promise.all([ LAFDArticles, LATimesArticles, youtubeVideos ])
    .then(data => {
      res.locals.allNews = data;
      next()
    })
    .catch(err => res.status(500).send(err))
}

//getAlerts middleware scrapes top alerts from LAFD
  //this returns a single array of objects; not nested as returned by .getNews, as it's only scraping from one source
newsController.getAlerts = (req, res, next) => {
  //SERVING UP LAFD alerts
  const LAFDAlerts = new Promise((resolve, reject) => {
    scraper
      .scrapeLAFDAlerts()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('LAFD alerts scrape failed'))
  })
  Promise.all([ LAFDAlerts ])
    .then(data => {
      res.locals.alerts = data[0];
      next()
    })
    .catch(err => res.status(500).send(err))
}

module.exports = newsController;