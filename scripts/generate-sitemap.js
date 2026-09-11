import fs from 'fs'

const createSlug = (str = '') =>
  String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

// Đọc base URL từ .env nếu có, fallback về domain chính thức
const envContent = fs.existsSync('.env') ? fs.readFileSync('.env', 'utf8') : ''
const matchEnv = envContent.match(/VITE_PUBLIC_APP_URL\s*=\s*(.+)/)
const BASE_URL = matchEnv ? matchEnv[1].trim().replace(/['"]/g, '') : 'https://htcsoftware.vn'

const urls = [
  '',
  '/mo-hinh',
  '/newDocuments/tin-tuc',
  '/newDocuments/tai-lieu',
  '/solution/RarEkycPlatform',
  '/solution/RarVNeidPlatform',
  '/solution/HtcEkycPlatform',
  '/products/checkID-SR',
  '/products/checkID-ET100',
  '/products/checkID-R301',
  '/products/checkID-HN212',
  '/products/meta-eye',
]

// Thêm tin tức chi tiết
if (fs.existsSync('./src/pages/news/pageNews/dataNewsDetail.js')) {
  const newsContent = fs.readFileSync('./src/pages/news/pageNews/dataNewsDetail.js', 'utf8')
  const newsRegex = /title:\s*['"`]([^'"`]+)['"`]/g
  let match
  while ((match = newsRegex.exec(newsContent)) !== null) {
    const title = match[1]
    urls.push(`/newDocuments/tin-tuc/${createSlug(title)}`)
  }
}

// Thêm tài liệu chi tiết
if (fs.existsSync('./src/pages/documents/pageDocuments/dataDocumentsDetail.js')) {
  const docContent = fs.readFileSync('./src/pages/documents/pageDocuments/dataDocumentsDetail.js', 'utf8')
  const docRegex = /title:\s*\n?\s*['"`]([^'"`]+)['"`]/g
  let match
  while ((match = docRegex.exec(docContent)) !== null) {
    const title = match[1]
    urls.push(`/newDocuments/tai-lieu/${createSlug(title)}`)
  }
}

// Thêm mô hình chi tiết
if (fs.existsSync('./src/pages/model/pageModel/dataModelDetail.js')) {
  const modelContent = fs.readFileSync('./src/pages/model/pageModel/dataModelDetail.js', 'utf8')
  const modelRegex = /title:\s*['"`]([^'"`\r\n]+)['"`]/g
  let match
  while ((match = modelRegex.exec(modelContent)) !== null) {
    const title = match[1]
    urls.push(`/mo-hinh/${createSlug(title)}`)
  }
}

// Lọc trùng lặp
const uniqueUrls = Array.from(new Set(urls))

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${uniqueUrls
  .map(
    url => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/solution') || url.startsWith('/products') ? '0.8' : '0.6'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

fs.writeFileSync('./public/sitemap.xml', xml, 'utf8')
console.log(`Sitemap generated successfully with ${uniqueUrls.length} URLs in public/sitemap.xml!`)
