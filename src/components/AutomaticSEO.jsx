import {useEffect} from 'react'
import {Helmet} from 'react-helmet-async'
import {useLocation} from 'react-router-dom'
import {seoConfig} from '../config/seoConfig'
import modelData from 'pages/model/pageModel/dataModelDetail'
import newsData from 'pages/news/pageNews/dataNewsDetail'
import documentData from 'pages/documents/pageDocuments/dataDocumentsDetail'

const createSlug = (str = '') =>
  String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const formatTitle = titleStr => {
  if (!titleStr) return 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử'
  const suffix = ' | HTC Software'
  let cleaned = titleStr.trim()

  const suffixesToRemove = [
    '| HTC Software',
    '- HTC Software',
    '| HTC SOFTWARE',
    '- HTC SOFTWARE',
  ]
  for (const s of suffixesToRemove) {
    if (cleaned.endsWith(s)) {
      cleaned = cleaned.substring(0, cleaned.length - s.length).trim()
      break
    }
  }

  // Nếu tiêu đề đã là slogan đầy đủ của HTC Software thì giữ nguyên
  if (cleaned === 'HTC Software - Giải pháp Chuyển đổi số & Định danh điện tử') {
    return cleaned
  }

  return `${cleaned}${suffix}`
}

export default function AutomaticSEO() {
  const location = useLocation()
  let currentPath = location.pathname
  if (currentPath.endsWith('/') && currentPath !== '/') {
    currentPath = currentPath.slice(0, -1)
  }

  const defaultSeo = seoConfig.default || {}
  let pageSeo = seoConfig[currentPath] || {}
  const baseUrl = import.meta.env.VITE_PUBLIC_APP_URL || 'https://htcsoftware.vn'

  // 1. Xử lý SEO động cho chi tiết Mô hình: /mo-hinh/:id
  if (currentPath.startsWith('/mo-hinh/')) {
    const slug = currentPath.substring('/mo-hinh/'.length)
    if (slug) {
      const model = modelData.find(
        item => createSlug(item.title) === slug || String(item.id) === slug,
      )
      if (model) {
        pageSeo = {
          title: model.title,
          tabTitle: model.title,
          description: model.sections?.[0]?.items?.[0] || defaultSeo.description,
          image: model.image || defaultSeo.image,
          url: `${baseUrl}${currentPath}`,
        }
      }
    }
  }

  // 2. Xử lý SEO động cho chi tiết Tin tức: /newDocuments/tin-tuc/:id
  if (currentPath.startsWith('/newDocuments/tin-tuc/')) {
    const slug = currentPath.substring('/newDocuments/tin-tuc/'.length)
    if (slug) {
      const news = newsData.find(
        item => createSlug(item.title) === slug || String(item.id) === slug,
      )
      if (news) {
        pageSeo = {
          title: news.title,
          tabTitle: news.title,
          description: news.sectionsA?.[0]?.descriptions || defaultSeo.description,
          image: news.image || news.imageA || defaultSeo.image,
          url: `${baseUrl}${currentPath}`,
        }
      }
    }
  }

  // 3. Xử lý SEO động cho chi tiết Tài liệu / Văn bản: /newDocuments/tai-lieu/:id
  if (currentPath.startsWith('/newDocuments/tai-lieu/')) {
    const slug = currentPath.substring('/newDocuments/tai-lieu/'.length)
    if (slug) {
      const doc = documentData.find(
        item => createSlug(item.title) === slug || String(item.id) === slug,
      )
      if (doc) {
        pageSeo = {
          title: doc.title,
          tabTitle: doc.SoKyHieu ? `${doc.SoKyHieu} - ${doc.title}` : doc.title,
          description: doc.TrichYeu || doc.title || defaultSeo.description,
          image: defaultSeo.image,
          url: `${baseUrl}${currentPath}`,
        }
      }
    }
  }

  const defaultOg = defaultSeo.openGraph || {}
  const pageOg = pageSeo.openGraph || {}

  // Lấy dữ liệu cơ bản
  const title = pageSeo.title || defaultSeo.title
  const rawTabTitle = pageSeo.tabTitle || title || defaultSeo.tabTitle
  const description = pageSeo.description || defaultSeo.description
  const keywords = pageSeo.keywords || defaultSeo.keywords
  const url = pageSeo.url || `${baseUrl}${currentPath}`
  const image = pageSeo.image || defaultSeo.image

  const keywordsString = Array.isArray(keywords) ? keywords.join(', ') : keywords

  // Format tiêu đề tab
  const formattedTabTitle = formatTitle(rawTabTitle)

  // Đảm bảo document.title cập nhật ngay lập tức khi chuyển route
  useEffect(() => {
    if (formattedTabTitle) {
      document.title = formattedTabTitle
    }
  }, [formattedTabTitle])

  // Open Graph
  const ogTitle = pageOg.title || title || defaultOg.title
  const ogDescription = pageOg.description || description || defaultOg.description
  const ogUrl = pageOg.url || url
  const ogType = pageOg.type || defaultOg.type || 'website'
  const siteName = pageOg.siteName || defaultOg.siteName || 'HTC Software'
  const locale = pageOg.locale || defaultOg.locale || 'vi_VN'

  const ogImageObj = pageOg.image || defaultOg.image || image
  const ogImage = typeof ogImageObj === 'object' ? ogImageObj.url : ogImageObj
  const ogImageAlt = ogImageObj?.alt || formattedTabTitle
  const ogImageWidth = ogImageObj?.width || 1200
  const ogImageHeight = ogImageObj?.height || 630

  const phoneNumber = pageOg.phoneNumber || defaultOg.phoneNumber
  const email = pageOg.email || defaultOg.email
  const countryName = pageOg.countryName || defaultOg.countryName

  const formattedOgTitle = formatTitle(ogTitle)

  return (
    <Helmet>
      {/* Title & Canonical */}
      <title>{formattedTabTitle}</title>
      <link rel='canonical' href={url} />

      {/* Meta description & keywords */}
      <meta name='description' content={description} />
      {keywordsString && <meta name='keywords' content={keywordsString} />}

      {/* Open Graph */}
      <meta property='og:title' content={formattedOgTitle} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={ogUrl} />
      <meta property='og:site_name' content={siteName} />
      <meta property='og:locale' content={locale} />

      {ogImage && <meta property='og:image' content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />}
      {ogImageAlt && <meta property='og:image:alt' content={ogImageAlt} />}
      {ogImageWidth && <meta property='og:image:width' content={String(ogImageWidth)} />}
      {ogImageHeight && <meta property='og:image:height' content={String(ogImageHeight)} />}

      {/* Twitter Cards */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={formattedTabTitle} />
      <meta name='twitter:description' content={ogDescription} />
      {ogImage && <meta name='twitter:image' content={ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`} />}

      {/* Contact & Location */}
      {phoneNumber && <meta property='og:phone_number' content={phoneNumber} />}
      {email && <meta property='og:email' content={email} />}
      {countryName && <meta property='og:country-name' content={countryName} />}
    </Helmet>
  )
}
