import { useState } from "react";
import { ChevronDown } from "lucide-react";

const Store = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const storeCategories = [
    {
      id: "commissions",
      title: "Commissions",
      description: "Custom, made-to-order pencil drawings",
      details: "Request a portrait of a loved one, a pet drawing, a gift, or any idea brought to life.",
      formFields: ["Full Name", "Surname", "Email", "Description", "Upload Reference Image", "Shipping Address"],
      note: "Originals only. No prints available.",
    },
    {
      id: "wildlife",
      title: "Wildlife",
      description: "Original wildlife artworks capturing Africa's natural beauty",
      details: "Buy existing artworks or request custom wildlife drawings.",
      formFields: ["Full Name", "Email", "Description", "Optional Reference Image", "Shipping Address"],
    },
    {
      id: "contemporary",
      title: "Contemporary Art",
      description: "Symbolic, abstract, and emotionally expressive works",
      details: "Buy available original/print works or request custom concept pieces.",
      formFields: ["Full Name", "Email", "Concept Description", "Optional Inspiration Image", "Shipping Address"],
    },
    {
      id: "supplies",
      title: "Art Supplies",
      description: "Curated selection of trusted art materials",
      details: "Pencils, charcoal, papers, and more used and trusted by the artist.",
      formFields: ["Full Name", "Email", "Supplies & Quantity", "Shipping Address"],
    },
    {
      id: "learn",
      title: "Learn Art",
      description: "Online and in-person art classes",
      details: "Learn to draw like a professional. Portraits, wildlife, and more.",
      formFields: ["Full Name", "Email", "City/Country", "Method (Online/In-person)", "What to Learn", "Additional Notes"],
    },
  ];

  const products = [
    { title: "A1 Original Artwork", price: "$2500", size: "A1 (58x84cm)" },
    { title: "A2 Original Artwork", price: "$1500", size: "A2 (42x59cm)" },
    { title: "A3 Original Artwork", price: "$800", size: "A3 (29x42cm)" },
    { title: "A4 Original Artwork", price: "$400", size: "A4 (21x29cm)" },
    { title: "A1 Print", price: "$150", size: "A1 Print" },
    { title: "A2 Print", price: "$100", size: "A2 Print" },
    { title: "A3 Print", price: "$75", size: "A3 Print" },
    { title: "A4 Print", price: "$50", size: "A4 Print" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Store</h1>
          <p className="text-xl text-gray-300">
            Commission custom pieces, buy original artwork, or shop art supplies
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {storeCategories.map((category) => (
              <div
                key={category.id}
                className="border-2 border-black rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.id ? null : category.id
                    )
                  }
                  className="w-full px-6 py-6 bg-gray-50 hover:bg-gray-100 transition flex items-center justify-between"
                >
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-black">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-black transition-transform ${
                      expandedCategory === category.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedCategory === category.id && (
                  <div className="px-6 py-8 bg-white border-t border-black">
                    <p className="text-gray-700 mb-6">{category.details}</p>

                    {category.note && (
                      <div className="bg-black text-white p-4 rounded mb-6 font-semibold">
                        ⚠️ {category.note}
                      </div>
                    )}

                    {/* Sample Products */}
                    {category.id !== "learn" && (
                      <div className="mb-8">
                        <h4 className="font-bold text-lg text-black mb-4">
                          Available Sizes & Prices
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {products.slice(0, 4).map((product, idx) => (
                            <div
                              key={idx}
                              className="border border-black/20 p-4 rounded hover:bg-gray-50 transition"
                            >
                              <p className="font-semibold text-black">
                                {product.title}
                              </p>
                              <p className="text-sm text-gray-600">
                                {product.size}
                              </p>
                              <p className="text-lg font-bold text-black mt-2">
                                {product.price}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quote Form */}
                    <div>
                      <h4 className="font-bold text-lg text-black mb-4">
                        Get a Quote
                      </h4>
                      <form className="space-y-4">
                        {category.formFields.slice(0, 3).map((field, idx) => (
                          <div key={idx}>
                            <label className="block text-sm font-semibold text-black mb-2">
                              {field}
                            </label>
                            <input
                              type="text"
                              placeholder={field}
                              className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                            />
                          </div>
                        ))}

                        {category.formFields.includes("Upload Reference Image") ||
                        category.formFields.includes("Optional Reference Image") ||
                        category.formFields.includes("Optional Inspiration Image") ? (
                          <div>
                            <label className="block text-sm font-semibold text-black mb-2">
                              Upload Image
                            </label>
                            <input
                              type="file"
                              className="w-full px-4 py-2 border-2 border-black rounded focus:outline-none"
                            />
                          </div>
                        ) : null}

                        <button
                          type="submit"
                          className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-900 transition"
                        >
                          Request Quote
                        </button>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Shipping & Pricing
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-black">
              <h3 className="font-bold text-lg text-black mb-2">Originals vs Prints</h3>
              <p className="text-gray-700">
                <strong>Originals:</strong> One-of-a-kind hand-drawn artworks. 
                <strong> Prints:</strong> High-quality reproductions of original pieces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-black">
              <h3 className="font-bold text-lg text-black mb-2">Where do you ship?</h3>
              <p className="text-gray-700">
                We ship worldwide! Costs vary by location. Specify your address in the quote form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-black">
              <h3 className="font-bold text-lg text-black mb-2">Custom commissions timeline</h3>
              <p className="text-gray-700">
                Custom pieces typically take 4-8 weeks depending on complexity. We'll confirm timeline after quote approval.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
