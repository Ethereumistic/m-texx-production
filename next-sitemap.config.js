/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://m-texx.com",
  generateRobotsTxt: true // (optional)
  // ...other options
};
