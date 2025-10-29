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
  CheckCircle,
  Star,
  Shield,
  Globe
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&h=800&fit=crop&crop=entropy"
            alt="Bali Landscape"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6 text-slate-300">About Bali Tours Transportation</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Your trusted partner for discovering the true beauty of Bali with professional drivers
              and authentic local experiences since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-tours-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-tours-primary-600" />
                </div>
                <div className="text-3xl font-bold text-tours-primary-600">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-neutral-600">
                <p>
                  Bali Tours Transportation began in 2009 with a simple mission: to provide visitors with
                  authentic, safe, and memorable experiences across Bali. What started as a single driver
                  with a passion for sharing his homeland has grown into a team of professional guides
                  dedicated to showcasing the best of Bali.
                </p>
                <p>
                  Our founder, Wayan Sudana, recognized that many visitors were missing out on the true
                  essence of Bali. He wanted to create a service that went beyond transportation – one
                  that would connect travelers with local culture, hidden gems, and genuine Balinese
                  hospitality.
                </p>
                <p>
                  Today, we serve thousands of happy customers each year, offering personalized tours
                  with comfortable vehicles and knowledgeable guides who are passionate about sharing
                  their love for Bali.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1543118397-9ebd69a06974?w=800&h=600&fit=crop&crop=entropy"
                alt="Bali Temple"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do and ensure you receive the best possible experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-tours-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-tours-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our passionate team of local experts is dedicated to making your Bali experience unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-tours-primary-600 font-medium mb-3">{member.role}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-neutral-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{member.experience} experience</span>
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <Globe className="h-4 w-4 mr-2" />
                      <span>{member.languages.join(', ')}</span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 mt-3 line-clamp-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-tours-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-tours-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Local Expertise</h4>
                    <p className="text-neutral-600">Our drivers are born and raised in Bali, offering authentic local insights.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-tours-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Flexible Itineraries</h4>
                    <p className="text-neutral-600">Custom tours tailored to your interests and pace.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-tours-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900">24/7 Support</h4>
                    <p className="text-neutral-600">Round-the-clock assistance for all your needs during your stay.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-tours-primary-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Competitive Pricing</h4>
                    <p className="text-neutral-600">Fair and transparent pricing with no hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-neutral-600">
                    <Phone className="h-5 w-5 text-tours-primary-600 mr-3" />
                    <span>+62 812-3456-7890</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <Mail className="h-5 w-5 text-tours-primary-600 mr-3" />
                    <span>info@balitourstransportation.com</span>
                  </div>
                  <div className="flex items-center text-neutral-600">
                    <MapPin className="h-5 w-5 text-tours-primary-600 mr-3" />
                    <span>Ubud, Bali, Indonesia</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button variant="primary" className="w-full" as="a" href="/contact">
                    Contact Us
                  </Button>
                  <Button variant="secondary" className="w-full" as="a" href="https://wa.me/6281234567890?text=Hi! I'm interested in learning more about your Bali tours." target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}