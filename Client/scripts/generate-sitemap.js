const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Your site's base URL
const hostname = "https://matalogics.com";

// List all static routes
const staticPages = [
  "/",
  "/contact",
  "/quote",
  "/service",
  "/About",
  "/careers/join-us",
  "/careers/internships",
  "/portfolio",
  "/Courses",
  "/privacy",
  "/SuccessPage",
];

// For dynamic routes with IDs
const dynamicPages = [
  ...["service1", "service2", "service3"].map((id) => `/services/${id}`),
  ...["job1", "job2", "job3"].map((id) => `/careers/job/${id}`),
  ...["job1", "job2", "job3"].map((id) => `/careers/apply/${id}`),
  ...["usecase1", "usecase2"].map((id) => `/usecases/${id}`),
  ...["blog1", "blog2", "blog3"].map((id) => `/blogs/${id}`),
];

// Combine all routes
const allPages = [...staticPages, ...dynamicPages];

// Create sitemap
const sitemap = new SitemapStream({ hostname });

// Make sure public folder exists
const fs = require("fs");
const publicDir = path.resolve(__dirname, "../public");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

const writeStream = createWriteStream(path.join(publicDir, "sitemap.xml"));
sitemap.pipe(writeStream);

allPages.forEach((url) => {
  sitemap.write({ url, changefreq: "weekly", priority: 0.8 });
});

sitemap.end();

// Correct usage: pass sitemap stream to streamToPromise
streamToPromise(sitemap)
  .then(() => console.log("✅ Sitemap generated at /public/sitemap.xml"))
  .catch((err) => console.error(err));
