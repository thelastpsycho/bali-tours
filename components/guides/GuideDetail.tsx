'use client'

import Image from 'next/image'
import { TravelGuide } from '@/types/travel-guide'
import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import {
  Clock,
  User,
  Eye,
  Heart,
  Share2,
  MapPin,
  Calendar,
  DollarSign,
  Backpack
} from 'lucide-react'

interface GuideDetailProps {
  guide: TravelGuide
}

export function GuideDetail({ guide }: GuideDetailProps) {
  return (
    <article className="max-w-4xl mx-auto space-y-12">
      {/* Hero section */}
      <header className="space-y-8">
        {/* Category and meta */}
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="primary">
            {guide.category.replace('-', ' ')}
          </Badge>
          {guide.featured && (
            <Badge variant="accent">Featured</Badge>
          )}
          <div className="flex items-center gap-1 text-sm text-tours-neutral-500">
            <Clock className="w-4 h-4" />
            {guide.duration}
          </div>
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-display-md md:text-display-lg font-display font-semibold text-tours-primary-950">
            {guide.title}
          </h1>
          <p className="text-xl text-tours-neutral-600 leading-relaxed">
            {guide.subtitle}
          </p>
        </div>

        {/* Author info */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-tours-neutral-200">
              <Image
                src={guide.author.avatar}
                alt={guide.author.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium text-tours-primary-900">
                {guide.author.name}
              </p>
              <p className="text-sm text-tours-neutral-500">
                {guide.author.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-tours-neutral-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {guide.views.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {guide.likes.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              {guide.shares.toLocaleString()}
            </div>
          </div>

          <div className="text-sm text-tours-neutral-500">
            Published {new Date(guide.publishedAt).toLocaleDateString()}
          </div>
        </div>

        {/* Main image */}
        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
          <Image
            src={guide.image}
            alt={guide.title}
            fill
            className="object-cover"
            priority={true}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </header>

      {/* Summary */}
      <section className="prose prose-lg max-w-none">
        <div className="bg-tours-neutral-50 rounded-2xl p-8">
          <h2 className="text-2xl font-display font-semibold text-tours-primary-950 mb-4">
            Guide Overview
          </h2>
          <p className="text-tours-neutral-700 leading-relaxed">
            {guide.summary}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <h2 className="text-2xl font-display font-semibold text-tours-primary-950 mb-4">
          Introduction
        </h2>
        <p className="text-tours-neutral-700 leading-relaxed">
          {guide.introduction}
        </p>
      </section>

      {/* Main content sections */}
      <div className="space-y-12">
        {guide.sections.map((section, index) => (
          <section key={index} className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-tours-primary-950">
              {section.title}
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-tours-neutral-700 leading-relaxed">
                {section.content}
              </p>
            </div>

            {/* Section images */}
            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="aspect-[4/3] rounded-xl overflow-hidden">
                    <Image
                      src={image}
                      alt={`${section.title} - Image ${imgIndex + 1}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Tips */}
            {section.tips && section.tips.length > 0 && (
              <Card className="p-6">
                <h3 className="text-lg font-display font-semibold text-tours-primary-950 mb-4">
                  Tips & Recommendations
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-2 h-2 mt-2 rounded-full bg-tours-accent-500 flex-shrink-0" />
                      <span className="text-tours-neutral-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Map location */}
            {section.mapLocation && (
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-tours-primary-600" />
                  <h3 className="text-lg font-display font-semibold text-tours-primary-950">
                    Location Reference
                  </h3>
                </div>
                <div className="bg-tours-neutral-100 rounded-lg p-4 text-center">
                  <p className="text-tours-neutral-700 mb-2">
                    {section.mapLocation.title}
                  </p>
                  <p className="text-sm text-tours-neutral-500">
                    Coordinates: {section.mapLocation.lat.toFixed(4)}, {section.mapLocation.lng.toFixed(4)}
                  </p>
                </div>
              </Card>
            )}
          </section>
        ))}
      </div>

      {/* Practical Information */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Best time to visit */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-tours-primary-600" />
            <h3 className="text-lg font-display font-semibold text-tours-primary-950">
              Best Time to Visit
            </h3>
          </div>
          <ul className="space-y-2">
            {guide.bestTimeToVisit.map((time, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-2 h-2 mt-2 rounded-full bg-tours-success-500 flex-shrink-0" />
                <span className="text-tours-neutral-700">{time}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* What to bring */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Backpack className="w-5 h-5 text-tours-primary-600" />
            <h3 className="text-lg font-display font-semibold text-tours-primary-950">
              What to Bring
            </h3>
          </div>
          <ul className="space-y-2">
            {guide.whatToBring.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-2 h-2 mt-2 rounded-full bg-tours-accent-500 flex-shrink-0" />
                <span className="text-tours-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Cost */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-5 h-5 text-tours-primary-600" />
            <h3 className="text-lg font-display font-semibold text-tours-primary-950">
              Cost Information
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-tours-neutral-600">Price Range</span>
              <span className="font-medium text-tours-primary-900">
                {guide.cost.min.toLocaleString()} - {guide.cost.max.toLocaleString()} {guide.cost.currency}
              </span>
            </div>
            {guide.cost.notes && (
              <p className="text-sm text-tours-neutral-600">{guide.cost.notes}</p>
            )}
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-tours-neutral-200 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-sm text-tours-neutral-500">
            Last updated {new Date(guide.updatedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-tours-primary-900 hover:text-tours-primary-700">
              <Heart className="w-4 h-4" />
              Like this guide
            </button>
            <button className="flex items-center gap-2 text-sm text-tours-primary-900 hover:text-tours-primary-700">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </footer>
    </article>
  )
}