import { MetadataRoute } from 'next'
import sitemapFunction from '@/sitemap'

export async function GET() {
  const sitemapData: MetadataRoute.Sitemap = sitemapFunction()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapData.map((item) => `
    <url>
      <loc>${item.url}</loc>
      <lastmod>${item.lastModified?.toISOString() || new Date().toISOString()}</lastmod>
      <changefreq>${item.changeFrequency || 'weekly'}</changefreq>
      <priority>${item.priority || 0.5}</priority>
    </url>
  `).join('')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}