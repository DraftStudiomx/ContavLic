import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.contavlic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs: string[] = await client.fetch(
    `*[_type == "service" && defined(slug.current)].slug.current`
  )

  const services: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: new Date(),
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...services,
  ]
}
