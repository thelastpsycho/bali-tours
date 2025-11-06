import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { travelGuides, getGuideBySlug, getRelatedGuides } from '@/data/travel-guides'
import { GuideDetail } from '@/components/guides/GuideDetail'
import { GuideCard } from '@/components/guides/GuideCard'
import Card from '@/components/shared/Card'
import Button from '@/components/shared/Button'
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp'
import { ArrowLeft, BookOpen, MapPin, Heart, Share2 } from 'lucide-react'
import Link from 'next/link'

interface GuidePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return travelGuides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    return {
      title: 'Guide Not Found | Bali Tours',
      description: 'This travel guide could not be found.'
    }
  }

  return {
    title: `${guide.title} | Bali Tours Transportation`,
    description: guide.metaDescription,
    keywords: guide.keywords,
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      images: [
        {
          url: guide.image,
          width: 1200,
          height: 630,
          alt: guide.title,
        }
      ],
      type: 'article',
      publishedTime: guide.publishedAt,
      modifiedTime: guide.updatedAt,
      authors: [guide.author.name],
      tags: guide.category,
      section: guide.category,
      url: `https://balitours-transportation.com/guides/${guide.slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.metaDescription,
      images: [guide.image],
    },
    alternates: {
      canonical: `https://balitours-transportation.com/guides/${guide.slug}`
    }
  }
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug)

  if (!guide) {
    notFound()
  }

  const relatedGuides = getRelatedGuides(guide)

  // Find related tours
  const relatedTours = guide.relatedTours.length > 0 ? [] : [] // You would fetch these from your tours data

  return (
    <article className="min-h-screen bg-tours-neutral-50">
      {/* Back navigation */}
      <div className="bg-white border-b border-tours-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-tours-primary-900 hover:text-tours-primary-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all guides
          </Link>
        </div>
      </div>

      {/* Hero section */}
      <section className="bg-white pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Category and meta */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Link
              href={`/guides#${guide.category}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-tours-neutral-100 hover:bg-tours-neutral-200 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium text-tours-neutral-700 capitalize">
                {guide.category.replace('-', ' ')}
              </span>
            </Link>

            <div className="flex items-center gap-4 text-sm text-tours-neutral-500">
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {guide.likes.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                {guide.shares.toLocaleString()}
              </div>
              <div className="text-xs">
                {new Date(guide.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-6 mb-12">
            <h1 className="text-display-md md:text-display-lg font-display font-semibold text-tours-primary-950 leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-tours-neutral-600 leading-relaxed max-w-3xl">
              {guide.subtitle}
            </p>

            {/* Author info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-tours-neutral-200">
                  <img
                    src={guide.author.avatar}
                    alt={guide.author.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-tours-primary-900 text-lg">
                    {guide.author.name}
                  </p>
                  <p className="text-tours-neutral-600">
                    {guide.author.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main image */}
          <div className="aspect-[4/3] relative rounded-2xl overflow-hidden mb-12 shadow-elegant-lg">
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Guide content */}
      <section className="bg-tours-neutral-50 pb-20 -mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <GuideDetail guide={guide} />
        </div>
      </section>

      {/* Related guides section */}
      {relatedGuides.length > 0 && (
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-tours-primary-950 mb-4">
                Related Guides
              </h2>
              <p className="text-lg text-tours-neutral-600 max-w-2xl mx-auto">
                Explore more travel guides that might interest you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedGuides.map((relatedGuide) => (
                <GuideCard key={relatedGuide.id} guide={relatedGuide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related tours section */}
      {guide.relatedTours.length > 0 && (
        <section className="bg-tours-neutral-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-tours-primary-950 mb-4">
                Related Tours
              </h2>
              <p className="text-lg text-tours-neutral-600 max-w-2xl mx-auto">
                Experience these destinations with our expert guides
              </p>
            </div>

            {/* Tour grid would go here */}
            <Card className="p-12 text-center">
              <MapPin className="w-16 h-16 text-tours-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-display font-semibold text-tours-primary-950 mb-2">
                Tours Coming Soon
              </h3>
              <p className="text-tours-neutral-600 mb-6">
                Related tours for this guide will be available soon. Check back for updates!
              </p>
              <Link href="/tours">
                <Button variant="primary">
                  Browse All Tours
                </Button>
              </Link>
            </Card>
          </div>
        </section>
      )}

      {/* CTA section */}
      <section className="bg-tours-primary-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            Ready to Explore Bali?
          </h2>
          <p className="text-lg text-tours-primary-100 mb-8">
            Combine our travel guides with expert-led tours for the ultimate Bali experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours">
              <Button variant="accent">
                Browse Tours
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" className="border-white text-white hover:bg-white hover:text-tours-primary-900">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp button */}
      <FloatingWhatsApp />
    </article>
  )
}