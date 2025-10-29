import robotsFunction from '@/robots'

export async function GET() {
  const robotsData = robotsFunction()

  const txt = `User-agent: *
${robotsData.rules.allow ? `Allow: ${robotsData.rules.allow}` : ''}
${robotsData.rules.disallow?.map(d => `Disallow: ${d}`).join('\n') || ''}

Sitemap: ${robotsData.sitemap}
Host: ${robotsData.host}`

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}