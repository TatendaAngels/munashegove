import { useState } from "react";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryData = [
    {
      title: "Zimbabwean Portraits",
      description: "Elder wisdom and community faces capturing the soul of Zimbabwe",
      details: [
        "Elder wisdom and community faces",
        "Cultural traditional portraits",
        "Contemporary African identities"
      ],
      images: [
        {
          id: "portrait-1",
          title: "Elder Wisdom",
          category: "Zimbabwean Portraits",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F358ba1f611d04d678ea3d17b5f8af62b?format=webp&width=800"
        },
        {
          id: "portrait-2",
          title: "Contemporary Identity",
          category: "Zimbabwean Portraits",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F0c1b64b1979043569ad73c6d3af13691?format=webp&width=800"
        },
        {
          id: "portrait-3",
          title: "Cultural Grace",
          category: "Zimbabwean Portraits",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fc8e8ddfc60ad48fab142c78b4eee0427?format=webp&width=800"
        },
        {
          id: "portrait-4",
          title: "Youth Portrait",
          category: "Zimbabwean Portraits",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F800f3de730df4d778951bb9154b8a0fa?format=webp&width=800"
        },
        {
          id: "portrait-5",
          title: "Heritage Face",
          category: "Zimbabwean Portraits",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fbc7c3f811fde496294a5ed7cf362ca5c?format=webp&width=800"
        },
        {
          id: "portrait-6",
          title: "Family Bond",
          category: "Zimbabwean Portraits",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fda040b52231f401aa4f3c5144bfe89d0?format=webp&width=800"
        }
      ],
    },
    {
      title: "Wildlife & Nature",
      description: "Native animal studies and landscapes celebrating Africa's majesty",
      details: [
        "Native animal studies",
        "Landscape drawings",
        "Conservation-focused art"
      ],
      images: [
        {
          id: "wildlife-1",
          title: "Majestic Eagle",
          category: "Wildlife & Nature",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F81d29978e8be46ffbec1fb3ba0e635a3?format=webp&width=800"
        },
        {
          id: "wildlife-2",
          title: "Tiger Majesty",
          category: "Wildlife & Nature",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F358ba1f611d04d678ea3d17b5f8af62b?format=webp&width=800"
        },
        {
          id: "wildlife-3",
          title: "Fierce Predator",
          category: "Wildlife & Nature",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F3bed59c96a324383b39b04e6bb6ff871?format=webp&width=800"
        },
        {
          id: "wildlife-4",
          title: "Cheetah Grace",
          category: "Wildlife & Nature",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F4142fec9f830478386a1cce6d4ce637e?format=webp&width=800"
        },
        {
          id: "wildlife-5",
          title: "Leopard Beauty",
          category: "Wildlife & Nature",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F006eb9df6da74c19b2090f6a136aac59?format=webp&width=800"
        },
        {
          id: "wildlife-6",
          title: "Elephant Power",
          category: "Wildlife & Nature",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F9941332167624f519392196ae481fb8b?format=webp&width=800"
        }
      ],
    },
    {
      title: "Cultural Narratives",
      description: "Traditional ceremonies and stories that define our heritage",
      details: [
        "Traditional ceremonies",
        "Everyday life scenes",
        "Historical moments"
      ],
      images: [
        {
          id: "cultural-1",
          title: "Traditional Keeper",
          category: "Cultural Narratives",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Ff1617b85dce34217a025d3dfa44245a5?format=webp&width=800"
        },
        {
          id: "cultural-2",
          title: "Cultural Heritage",
          category: "Cultural Narratives",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F3bed59c96a324383b39b04e6bb6ff871?format=webp&width=800"
        },
        {
          id: "cultural-3",
          title: "Mother & Child",
          category: "Cultural Narratives",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F9cfa09bf9e4d4c8aa29d6324c68dbe1a?format=webp&width=800"
        },
        {
          id: "cultural-4",
          title: "Women's Strength",
          category: "Cultural Narratives",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F2fc016d130db4878868b327bf69e07e1?format=webp&width=800"
        },
        {
          id: "cultural-5",
          title: "Community Bond",
          category: "Cultural Narratives",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F59cb1184dcaa4d2d8b29edd045994444?format=webp&width=800"
        },
        {
          id: "cultural-6",
          title: "Ancestral Wisdom",
          category: "Cultural Narratives",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F7c7cfe889d304f349ae8f733f07c5f89?format=webp&width=800"
        }
      ],
    },
    {
      title: "Custom Commission Showcase",
      description: "Client projects and special occasion pieces",
      details: [
        "Client project highlights",
        "Personal story artworks",
        "Special occasion pieces"
      ],
      images: [
        {
          id: "commission-1",
          title: "Custom Portrait",
          category: "Custom Commission Showcase",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fd5004b0fa71d40beac19f9ba2c6808aa?format=webp&width=800"
        },
        {
          id: "commission-2",
          title: "Wildlife Commission",
          category: "Custom Commission Showcase",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F7c7cfe889d304f349ae8f733f07c5f89?format=webp&width=800"
        },
        {
          id: "commission-3",
          title: "Family Portrait",
          category: "Custom Commission Showcase",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F9cfa09bf9e4d4c8aa29d6324c68dbe1a?format=webp&width=800"
        },
        {
          id: "commission-4",
          title: "Heritage Piece",
          category: "Custom Commission Showcase",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F0c1b64b1979043569ad73c6d3af13691?format=webp&width=800"
        },
        {
          id: "commission-5",
          title: "Special Order",
          category: "Custom Commission Showcase",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F0065a3085a8a481e9587b98b1044a41f?format=webp&width=800"
        },
        {
          id: "commission-6",
          title: "Commissioned Art",
          category: "Custom Commission Showcase",
          src: "https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fbc7c3f811fde496294a5ed7cf362ca5c?format=webp&width=800"
        }
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F006eb9df6da74c19b2090f6a136aac59?format=webp&width=1200')`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Art Collections</h1>
          <p className="text-xl text-gray-300">
            A curated collection of pencil and charcoal artworks from Zimbabwe
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      {galleryData.map((section, sectionIdx) => (
        <section
          key={sectionIdx}
          className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-8 ${
            sectionIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="container mx-auto max-w-6xl">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-black mb-3">{section.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{section.description}</p>
              <div className="flex flex-wrap gap-3">
                {section.details.map((detail, idx) => (
                  <span key={idx} className="inline-block bg-black text-white px-4 py-2 rounded text-sm">
                    {detail}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.images.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="aspect-square bg-gray-300 rounded-lg border-2 border-black hover:shadow-lg transition-all cursor-pointer flex items-center justify-center group overflow-hidden relative"
                >
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="aspect-square bg-gray-400 rounded-lg border-2 border-white flex items-center justify-center overflow-hidden">
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-4 justify-center mt-8 flex-wrap text-white">
              <button className="px-6 py-2 border border-white rounded hover:bg-white/10 transition">
                ❤️ Like
              </button>
              <button className="px-6 py-2 border border-white rounded hover:bg-white/10 transition">
                💾 Save
              </button>
              <button className="px-6 py-2 border border-white rounded hover:bg-white/10 transition">
                📤 Share
              </button>
            </div>

            <p className="text-white font-semibold text-center mt-4">{selectedImage.title}</p>
            <p className="text-gray-300 text-center">{selectedImage.category}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Interested in a Piece?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Commission a custom artwork or purchase prints from my latest collections.
          </p>
          <a href="/commission" className="inline-block bg-white text-black font-bold py-3 px-8 rounded hover:bg-gray-100 transition">
            Order Art
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
