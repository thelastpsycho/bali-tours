import Image from 'next/image'
import Button from '@/components/shared/Button'
import {
  Heart,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  Shield,
  Globe,
  Quote,
  Sparkles
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Wayan Sudana',
    role: 'Founder & Chief Driver',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    experience: '15+ years',
    languages: ['English', 'Indonesian', 'Japanese'],
    bio: 'Born and raised in Ubud, Wayan knows every hidden gem in Bali and ensures every guest has an authentic experience.'
  },
  {
    name: 'Kadek Sari',
    role: 'Tour Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    experience: '10+ years',
    languages: ['English', 'Indonesian'],
    bio: 'Kadek specializes in creating custom itineraries and ensuring every detail of your tour is perfectly organized.'
  },
  {
    name: 'Made Wijaya',
    role: 'Senior Driver & Guide',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    experience: '12+ years',
    languages: ['English', 'Indonesian', 'French'],
    bio: 'Made combines his passion for Balinese culture with expert driving skills to provide unforgettable cultural tours.'
  },
  {
    name: 'Nyoman Eka',
    role: 'Customer Service',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    experience: '8+ years',
    languages: ['English', 'Indonesian', 'Mandarin'],
    bio: 'Eka is your go-to person for all inquiries, ensuring smooth communication and exceptional service.'
  }
]

const stats = [
  {
    label: 'Happy Customers',
    value: '10,000+',
    icon: Users
  },
  {
    label: 'Years Experience',
    value: '15+',
    icon: Clock
  },
  {
    label: 'Tour Packages',
    value: '50+',
    icon: MapPin
  },
  {
    label: 'Customer Rating',
    value: '4.9/5',
    icon: Star
  }
]

const values = [
  {
    title: 'Safety First',
    description: 'Your safety is our priority. All vehicles are regularly maintained and our drivers are professionally trained.',
    icon: Shield
  },
  {
    title: 'Authentic Experiences',
    description: 'We connect you with genuine Balinese culture and hidden treasures beyond tourist hotspots.',
    icon: Heart
  },
  {
    title: 'Professional Service',
    description: 'English-speaking drivers with deep local knowledge and decades of experience.',
    icon: Award
  },
  {
    title: 'Fair Pricing',
    description: 'Transparent pricing with no hidden fees. We offer the best value for premium service.',
    icon: Globe
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Bali Tours
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Authentic Bali experiences with local experts since 2009.
          </p>
        </div>
      </section>

      {/* Stats - Ultra Compact */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="py-4">
                <div className="text-2xl font-bold text-emerald-600">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story - Compact */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Started in 2009 as one driver's passion to share authentic Bali experiences.
                Now a team of local experts dedicated to showcasing the island's hidden gems and genuine hospitality.
              </p>
              <p className="text-emerald-600 font-medium">
                Connecting travelers with the soul of Bali
              </p>
            </div>
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1711609110590-5ad5c4599e56?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071"
                alt="Bali Temple"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values - Minimal */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-slate-50">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{value.title}</h3>
                  <p className="text-sm text-slate-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Compact Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">Your Local Guides</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">{member.name}</h3>
                <p className="text-emerald-600 text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Minimal */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Explore Bali?</h2>
          <p className="text-slate-600 mb-8">
            Let our local experts create your perfect Bali experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" as="a" href="/booking">
              Book Your Tour
            </Button>
            <Button variant="secondary" as="a" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}