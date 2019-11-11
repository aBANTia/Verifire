const puppeteer = require('puppeteer')

//the unfortunate part about using puppeteer is all of the necessary code reuse
//due to the way it accesses the browser

//scraping LAFD headlines, links, and alerts
const scrapeLAFD = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.lafd.org/news')
    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.field-content a:first-child')
        )
        .map(link => ({
            title: link.textContent,
            link: `https://www.lafd.org${link.getAttribute('href')}`
        }))
    )

    await browser.close()
    return scrapedData
}
const scrapeLAFDAlerts = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.lafd.org/alerts')
    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.alert-node-title a:first-child')
        )
        .map(link => ({
            title: link.textContent,
            link: `https://www.lafd.org${link.getAttribute('href')}`
        }))
    )

    await browser.close()
    return scrapedData
}

//scraping LA Times headlines and links
const scrapeLATimes = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://www.latimes.com/topic/fires')
    const scrapedData = await page.evaluate(() =>
        Array.from(
            document.querySelectorAll('.PromoLarge-title a:first-child')
        )
        .map(link => ({
            title: link.textContent,
            link: link.getAttribute('href')
        }))
    )
    await browser.close()
    return scrapedData
}

//scraping Youtube titles and links
const scrapeYoutube = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(
        'https://www.youtube.com/results?search_query=los+angeles+fires'
  )

  const scrapedData = await page.evaluate(() =>
    Array.from(document.querySelectorAll('.ytd-video-renderer #video-title'))
      .map(link => ({
        title: link.getAttribute('title'),
        link: `https://www.youtube.com/${link.getAttribute('href')}`
      }))
      .slice(0, 10)
  )
  
  await browser.close()
  return scrapedData
}


module.exports.scrapeLAFD = scrapeLAFD
module.exports.scrapeLAFDAlerts = scrapeLAFDAlerts
module.exports.scrapeLATimes = scrapeLATimes
module.exports.scrapeYoutube = scrapeYoutube