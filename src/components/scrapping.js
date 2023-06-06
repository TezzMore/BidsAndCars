import axios from 'axios';
import cheerio from 'cheerio';
async function scrapeWebsite() {
    try {
      const response = await axios.get('https://carsandbids.com/auctions/rJoDwPYv/1987-porsche-944-s-coupe');
      const websiteHtml = response.data;
      const $ = cheerio.load(websiteHtml);
  
      // Perform scraping operations using Cheerio
  
    } catch (error) {
      console.error('Error scraping website:', error);
    }
  }
  export default scrapeWebsite;
  