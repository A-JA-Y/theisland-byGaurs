/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.theislandsbygaurs.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  // Static export: write sitemap.xml / robots.txt into the deployed folder (./out),
  // which is what Cloudflare serves (see wrangler.jsonc).
  outDir: "out",


  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: "daily",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};