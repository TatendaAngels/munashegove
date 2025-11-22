import { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState<"artist" | "philosophy" | "mission">("artist");

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fbc7c3f811fde496294a5ed7cf362ca5c?format=webp&width=1200')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">My Journey</h1>
          <p className="text-xl text-gray-300">
            The story of Munashe Gove, Zimbabwean pencil artist
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-black/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex gap-0 border-b border-black/20 overflow-x-auto">
            {[
              { id: "artist", label: "Meet the Artist" },
              { id: "philosophy", label: "Artistic Philosophy" },
              { id: "mission", label: "Vision & Mission" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-4 font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-black text-black"
                    : "border-transparent text-gray-600 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {activeTab === "artist" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="aspect-square bg-gray-200 rounded-lg border-2 border-black flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍🎨</div>
                  <p className="text-gray-600 font-semibold">Munashe Gove</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-black mb-4">I am Munashe Gove</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A Zimbabwean pencil artist born and raised in the heart of our beautiful nation.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  My artistic journey began not in a classroom, but in the vibrant streets and majestic landscapes that surround us. From sketching the wise faces of our elders to capturing the untamed spirit of African wildlife, I discovered that graphite could speak louder than words.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Each piece I create is a love letter to Zimbabwe—our resilience, our beauty, our stories. I work primarily with pencils and charcoal because they reflect the raw, unfiltered truth of our experiences. There's something profoundly honest about black and white art—it strips away distractions and focuses on pure emotion and form.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  My mission is to preserve our cultural narratives through art and inspire young African artists to embrace their heritage as their greatest inspiration.
                </p>

                <p className="text-gray-600 italic">
                  Thank you for supporting my vision.
                </p>
              </div>
            </div>
          )}

          {activeTab === "philosophy" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black">Artistic Philosophy</h2>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">The Power of Pencil & Charcoal</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I believe in the raw honesty of pencil and charcoal. These mediums don't allow for pretense—they demand truth, precision, and emotional authenticity. Every line, every shadow, every highlight tells part of the story I'm trying to convey.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">African Heritage as Inspiration</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My greatest inspiration comes from Zimbabwe itself—our people, our wildlife, our traditions, and our resilience. I don't need to look elsewhere when my own nation provides endless stories worth preserving in art. Through my work, I celebrate African excellence and prove that our narratives deserve global recognition.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-4">Mentorship & Community</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Art is meant to be shared and taught. I'm committed to mentoring the next generation of Zimbabwean artists, showing them that formal training isn't the only path to excellence. With passion, purpose, and practice, any artist can create something meaningful that moves the world.
                </p>
              </div>

              <div className="bg-black text-white p-8 rounded-lg border-2 border-black italic text-center text-xl">
                "My pencil doesn't just draw what the eye sees—it reveals what the heart feels about our beautiful Zimbabwe."
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="border-2 border-black p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-black mb-3">What I Create</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Zimbabwean Portraits & Elders</li>
                    <li>• Wildlife & Nature Studies</li>
                    <li>• Cultural Narratives</li>
                    <li>• Custom Commissions</li>
                  </ul>
                </div>
                <div className="border-2 border-black p-6 rounded-lg">
                  <h4 className="font-bold text-lg text-black mb-3">How I Work</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li>• With meticulous detail</li>
                    <li>• From the heart</li>
                    <li>• With cultural pride</li>
                    <li>• For emotional impact</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mission" && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-black mb-6">My Vision</h2>
                <div className="bg-gray-100 p-8 border-l-4 border-black">
                  <p className="text-lg text-gray-800 leading-relaxed font-semibold">
                    To become a bridge connecting Zimbabwean artistic excellence with global appreciation
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-6">My Mission</h2>
                <div className="bg-black text-white p-8 border-2 border-black">
                  <p className="text-lg leading-relaxed">
                    Preserving African narratives through timeless pencil artistry while mentoring the next generation of local artists
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-black mb-6">What This Means</h2>
                <div className="space-y-6">
                  <div className="border-2 border-black p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-black mb-3">Preserve Stories</h4>
                    <p className="text-gray-700">
                      Every artwork preserves a moment, a memory, or a cultural narrative that deserves to be remembered and celebrated for generations to come.
                    </p>
                  </div>
                  <div className="border-2 border-black p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-black mb-3">Inspire Artists</h4>
                    <p className="text-gray-700">
                      Through teaching, mentorship, and example, I inspire young Zimbabwean and African artists to embrace their heritage as their greatest artistic resource.
                    </p>
                  </div>
                  <div className="border-2 border-black p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-black mb-3">Create Excellence</h4>
                    <p className="text-gray-700">
                      Every piece I create meets the highest standards of craftsmanship, emotion, and authenticity, proving that African art belongs on the world stage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border-2 border-black">
                <h3 className="text-2xl font-bold text-black mb-4">The Bigger Picture</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I dream of a world where Zimbabwean and African artists are recognized globally for their excellence. Where young people see pencil artistry not as a hobby, but as a viable, respected, and celebrated profession. Where our cultural narratives are preserved through art and shared with the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through every piece, every lesson, and every connection, I'm working towards that vision. This is more than art—it's a movement to honor African excellence and inspire the next generation.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
