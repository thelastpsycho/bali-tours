'use client'

import Image from 'next/image'
import Link from 'next/link'
import { TravelGuide } from '@/types/travel-guide'
import Badge from '@/components/shared/Badge'
import { Clock, User, Eye, Heart } from 'lucide-react'

interface GuideCardProps {
  guide: TravelGuide
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-elegant transition-all duration-300 hover:shadow-elegant-lg hover:-translate-y-1"
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <Image
          src={guide.image}
          alt={guide.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />

        {/* Category badge overlay */}
        <div className="absolute top-4 left-4">
          <Badge
            variant="primary"
            className="bg-white/90 backdrop-blur-sm text-tours-primary-900"
          >
            {guide.category.replace('-', ' ')}
          </Badge>
        </div>

        {/* Featured badge */}
        {guide.featured && (
          <div className="absolute top-4 right-4">
            <Badge
              variant="accent"
              className="bg-tours-accent-100 text-tours-accent-900"
            >
              Featured
            </Badge>
          </div>
        )}

        {/* Reading time badge */}
        <div className="absolute bottom-4 left-4">
          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-white text-sm">
            <Clock className="w-4 h-4" />
            {guide.duration}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Title section */}
        <div className="space-y-2">
          <h3 className="text-xl font-display font-semibold text-tours-primary-950 group-hover:text-tours-primary-800 transition-colors">
            {guide.title}
          </h3>
          <p className="text-tours-neutral-600 text-sm leading-relaxed line-clamp-2">
            {guide.subtitle}
          </p>
        </div>

        {/* Author info */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-tours-neutral-200 flex-shrink-0">
            <Image
              src={guide.author.avatar}
              alt={guide.author.name}
              width={32}
              height={32}
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-tours-primary-900 truncate">
              {guide.author.name}
            </p>
            <p className="text-xs text-tours-neutral-500 truncate">
              {guide.author.role}
            </p>
          </div>
        </div>

        {/* Engagement metrics */}
        <div className="flex items-center justify-between pt-4 border-t border-tours-neutral-200">
          <div className="flex items-center gap-4 text-sm text-tours-neutral-500">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {guide.views >= 1000 ? `${(guide.views / 1000).toFixed(1)}K` : guide.views}
            </div>
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {guide.likes >= 1000 ? `${(guide.likes / 1000).toFixed(1)}K` : guide.likes}
            </div>
          </div>

          <span className="text-tours-primary-900 font-medium hover:text-tours-primary-700 transition-colors text-sm">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  )
}