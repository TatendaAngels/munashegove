import { useState } from "react";
import { CheckCircle } from "lucide-react";

const Commission = () => {
  const [step, setStep] = useState<number>(1);
  const [serviceType, setServiceType] = useState<string>("portrait");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    serviceType: "portrait",
    projectDescription: "",
    referenceImage: null,
    shippingDestination: "",
    timelinePreference: "3-6 weeks",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      const whatsappMessage = `Hello! This is a commission request:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nService Type: ${formData.serviceType === "portrait" ? "Custom Portraits" : formData.serviceType === "cultural" ? "Cultural Art Commissions" : "Print Collections"}\n\nProject Description:\n${formData.projectDescription}\n\nShipping Destination: ${formData.shippingDestination}\n\nTimeline Preference: ${formData.timelinePreference}`;
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/263778337688?text=${encodedMessage}`,
        "_blank",
      );
      alert(
        "Thank you! Your commission request has been sent to WhatsApp. I'll respond within 48 hours.",
      );
      setStep(1);
      setFormData({
        fullName: "",
        email: "",
        serviceType: "portrait",
        projectDescription: "",
        referenceImage: null,
        shippingDestination: "",
        timelinePreference: "3-6 weeks",
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fc8e8ddfc60ad48fab142c78b4eee0427?format=webp&width=1200')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Order Art</h1>
          <p className="text-xl text-gray-300">
            Work directly with Munashe Gove to create your custom artwork or
            order prints
          </p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl mb-16">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Service Categories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-4">
                🖼️ Custom Portraits
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Family portraits</li>
                <li>• Memorial drawings</li>
                <li>• Special occasion art</li>
                <li>• Personal stories</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Includes reference photo analysis and custom composition
              </p>
            </div>

            <div className="border-2 border-black p-8 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-4">
                🎭 Cultural Art Commissions
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Traditional scene requests</li>
                <li>• Heritage artwork</li>
                <li>• Custom cultural pieces</li>
                <li>• Historical narratives</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                Celebrating Zimbabwean and African heritage
              </p>
            </div>

            <div className="border-2 border-black p-8 rounded-lg hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-black mb-4">
                🖨️ Print Collections
              </h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Limited edition prints</li>
                <li>• Digital download options</li>
                <li>• Print series</li>
                <li>• Reproduction rights available</li>
              </ul>
              <p className="text-sm text-gray-600 italic">
                High-quality reproductions of original artworks
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`flex-1 h-2 rounded-full mx-2 transition-all ${
                    s <= step ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-gray-600 font-semibold">
              Step {step} of 3
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg border-2 border-black"
          >
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Your Information
                </h3>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    What type of art are you interested in? *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="portrait">Custom Portraits</option>
                    <option value="cultural">Cultural Art Commissions</option>
                    <option value="prints">Print Collections</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Describe Your Vision
                </h3>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder={
                      formData.serviceType === "portrait"
                        ? "Describe the portrait: Who is it? What mood do you want? Any specific pose or style?"
                        : formData.serviceType === "cultural"
                          ? "Describe the cultural scene: What story or narrative? Any specific traditions or ceremonies?"
                          : "Which artworks or style are you interested in? What size and format?"
                    }
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Reference Image(s) *
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Upload clear reference photos, inspiration images, or
                    reference materials
                  </p>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Delivery Details
                </h3>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Shipping Destination *
                  </label>
                  <textarea
                    name="shippingDestination"
                    value={formData.shippingDestination}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    placeholder="Full shipping address including country"
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    International shipping is available. Costs calculated based
                    on destination.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Timeline Preference *
                  </label>
                  <select
                    name="timelinePreference"
                    value={formData.timelinePreference}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option value="2-3 weeks">Urgent (2-3 weeks)</option>
                    <option value="3-6 weeks">Standard (3-6 weeks)</option>
                    <option value="6-8 weeks">Flexible (6-8 weeks)</option>
                    <option value="open">No rush, I'm patient</option>
                  </select>
                  <p className="text-xs text-gray-600 mt-2">
                    Timing depends on complexity. Urgent requests may incur an
                    additional fee.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded border-2 border-gray-200">
                  <h4 className="font-bold text-black mb-3">
                    Commission Summary
                  </h4>
                  <p className="text-sm text-gray-700">
                    <strong>Name:</strong> {formData.fullName || "Not filled"}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Service:</strong>{" "}
                    {formData.serviceType === "portrait"
                      ? "Custom Portraits"
                      : formData.serviceType === "cultural"
                        ? "Cultural Art"
                        : "Print Collections"}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    <strong>Timeline:</strong> {formData.timelinePreference}
                  </p>
                  <p className="text-xs text-gray-600 mt-3 italic">
                    A quote will be provided within 48 hours based on your
                    project details.
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex-1 px-6 py-3 border-2 border-black rounded font-bold text-black hover:bg-black/5 transition"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-black text-white rounded font-bold hover:bg-gray-900 transition"
              >
                {step === 3 ? "Submit Request" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Pricing Guide
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">
                Custom Portraits
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>A5 (15x21cm):</strong> $300-500
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>A4 (21x29cm):</strong> $600-900
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>A3 (29x42cm):</strong> $1200-1800
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>A2+ (larger):</strong> Contact for quote
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-black p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">
                Cultural Commissions
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Simple Scene:</strong> $500-800
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Detailed Scene:</strong> $1000-1500
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Complex Narrative:</strong> $2000+
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Wildlife Studies:</strong> $800-2000
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-black p-8 rounded-lg bg-gray-50">
              <h3 className="text-2xl font-bold text-black mb-4">
                Print Collections
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>A4 Print:</strong> $30-50
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>A3 Print:</strong> $50-80
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Digital Download:</strong> $10-20
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-black mr-3 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Shipping:</strong> Calculated per order
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-black text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Contact for Custom Quotes
            </h3>
            <p className="mb-4">
              Special sizes, complex projects, or bulk orders? Contact directly
              via WhatsApp
            </p>
            <a
              href="https://wa.me/263778337688?text=I%20am%20interested%20in%20custom%20quotes%20for%20my%20commission"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-semibold hover:underline"
            >
              WhatsApp: +263778337688
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commission;
