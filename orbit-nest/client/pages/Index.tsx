import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Award } from "lucide-react";

const Index = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-black text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F006eb9df6da74c19b2090f6a136aac59?format=webp&width=1200')`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pattern"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="10" cy="10" r="1" fill="white" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm uppercase tracking-widest">
                Welcome to Munashe Gove
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Munashe Gove: <br />
              Zimbabwean Pencil Artistry
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-2xl leading-relaxed">
              <span className="text-white italic">
                Where African Soul Meets Graphite Realism
              </span>
            </p>

            <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Experience the depth of Zimbabwean culture and natural beauty
              through meticulous pencil artistry. Each drawing is a tribute to
              African heritage, capturing the essence of our people, wildlife,
              and stories with extraordinary detail and emotional resonance.
            </p>

            <blockquote className="border-l-4 border-white pl-6 mb-12 italic text-gray-200">
              "My pencil doesn't just draw what the eye sees—it reveals what the
              heart feels about our beautiful Zimbabwe."
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/gallery">
                <Button className="bg-white text-black hover:bg-gray-100 font-semibold py-6 px-8 text-lg">
                  Explore Collections <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/commission">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 font-semibold py-6 px-8 text-lg"
                >
                  Order a Piece
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
                Pencil & Charcoal Mastery
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I specialize in detailed portraits capturing the wisdom of
                African elders, the majesty of wildlife, and the cultural
                narratives that define our heritage. Each stroke reveals emotion
                and form through the raw honesty of graphite and charcoal.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                My work preserves African narratives and inspires the next
                generation of local artists to embrace their heritage as their
                greatest inspiration.
              </p>
              <Link to="/about">
                <Button className="bg-black text-white hover:bg-gray-900 font-semibold py-3 px-6">
                  My Journey <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-black">
              <img
                src="https://images.pexels.com/photos/5393822/pexels-photo-5393822.jpeg"
                alt="Munashe Gove - Artist Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Art Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Zimbabwean Portraits • Wildlife & Nature • Cultural Narratives •
              Custom Commissions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Zimbabwean Portraits",
                image:
                  "https://images.pexels.com/photos/34774600/pexels-photo-34774600.jpeg",
              },
              {
                title: "Wildlife & Nature",
                image:
                  "https://images.pexels.com/photos/34844428/pexels-photo-34844428.jpeg",
              },
              {
                title: "Cultural Narratives",
                image:
                  "https://images.pexels.com/photos/7859563/pexels-photo-7859563.jpeg",
              },
              {
                title: "Custom Commissions",
                image:
                  "https://images.pexels.com/photos/34750190/pexels-photo-34750190.jpeg",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="aspect-square rounded-lg overflow-hidden border-2 border-black hover:shadow-lg transition-all cursor-pointer relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button className="bg-black text-white hover:bg-gray-900 font-semibold py-3 px-8">
                View Full Collections <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <p className="text-lg text-gray-300">Original Artworks</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <p className="text-lg text-gray-300">Happy Collectors</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <p className="text-lg text-gray-300">Years Dedicated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
              Services & Offerings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-black rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-4">
                Order Custom Art
              </h3>
              <p className="text-gray-700 mb-6">
                Commission custom portraits, cultural art, or print collections
                tailored to your vision.
              </p>
              <Link to="/commission">
                <Button variant="outline" className="w-full">
                  Explore Commissions
                </Button>
              </Link>
            </div>
            <div className="p-8 border-2 border-black rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-4">
                Learn Pencil Art
              </h3>
              <p className="text-gray-700 mb-6">
                One-on-one sessions, online lessons, and group workshops for all
                skill levels.
              </p>
              <Link to="/other">
                <Button variant="outline" className="w-full">
                  Explore Lessons
                </Button>
              </Link>
            </div>
            <div className="p-8 border-2 border-black rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-4">Connect</h3>
              <p className="text-gray-700 mb-6">
                Get in touch via WhatsApp, email, or contact form. Follow for
                updates and new collections.
              </p>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Munashe Gove</h3>
              <p className="text-gray-400 text-sm">
                Zimbabwean pencil artist preserving African narratives through
                timeless graphite artistry.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    My Journey
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-white">
                    Collections
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link to="/commission" className="hover:text-white">
                    Order Art
                  </Link>
                </li>
                <li>
                  <Link to="/other" className="hover:text-white">
                    Art Lessons
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Connect
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>WhatsApp: +263778337688</li>
                <li>Location: Zimbabwe</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>
              © 2024 Munashe Gove. All rights reserved. | Zimbabwean Pencil
              Artist
            </p>
            <p className="mt-3">
              Designed by{" "}
              <a
                href="https://github.com/TatendaAngels"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
              >
                TatendaAngels
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
