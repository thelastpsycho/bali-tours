import robotsFunction from '@/robots'

export async function GET() {
  const robotsData = robotsFunction()

  const rules = Array.isArray(robotsData.rules) ? robotsData.rules : [robotsData.rules]
const firstRule = rules[0]

const disallowRules = Array.isArray(firstRule.disallow)
  ? firstRule.disallow.map((d: string) => `Disallow: ${d}`).join('\n')
  : firstRule.disallow ? `Disallow: ${firstRule.disallow}` : ''

const txt = `User-agent: *
Allow: ${firstRule.allow}
${disallowRules}

Sitemap: ${robotsData.sitemap}
Host: ${robotsData.host}`

  return new Response(txt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  })
}