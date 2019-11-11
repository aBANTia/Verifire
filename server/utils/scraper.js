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
    await page.goto('https://www.latimes.com/search?q=fire&f0=00000163-01e2-d9e5-adef-33e2984a0000&f0=0000016a-b70e-dd5c-abfe-bf3f7b290000&f0=00000168-8692-d5d8-a76d-efdb7d3c0000&f1=0000016a-ea2d-db5d-a57f-fb2dc8680000&s=0')
    const scrapedData = await page.evaluate(() => {
        return Array.from(
            document.querySelectorAll('.PromoMedium-title a:first-child')
        )
        .map(link => ({
            title: link.textContent,
            link: link.getAttribute('href')
        }))
    })
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