const scItems = require('./data/sc-items')
const posts = require('./data/posts')
const products = require('./data/products')
const { date: DEPLOY_DATE } = require('./deploy.json')

export default {
  modules: [
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://example.com',
    path: '/sitemap.xml',   // 인덱스 경로 (기본값은 /sitemapindex.xml)

    // sitemaps 배열 → 자동으로 sitemap index 생성
    sitemaps: [
      {
        path: '/sc.xml',
        filter({ routes }) {
          return routes
            .filter(r => r.url.startsWith('/sc/'))
            .map(r => ({
              ...r,
              lastmod: DEPLOY_DATE,
              changefreq: 'monthly',
              priority: 0.8,
            }))
        },
      },
      {
        path: '/bc.xml',
        filter({ routes }) {
          return routes
            .filter(r => r.url.startsWith('/bc/'))
            .map(r => ({
              ...r,
              lastmod: DEPLOY_DATE,
              changefreq: 'weekly',
              priority: 0.7,
            }))
        },
      },
      {
        path: '/data.xml',
        exclude: ['/**'],
        routes() {
          return products.map(product => ({
            url: `/data/${product.id}`,
            lastmod: DEPLOY_DATE,
            changefreq: 'weekly',
            priority: 0.9,
          }))
        },
      },
    ],
  },
}
