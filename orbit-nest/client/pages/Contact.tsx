import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! This is a contact form submission:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/263778337688?text=${encodedMessage}`, "_blank");
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2F0c1b64b1979043569ad73c6d3af13691?format=webp&width=1200')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">Connect</h1>
          <p className="text-xl text-gray-300">
            Reach out for commissions, collaborations, or to say hello
          </p>
        </div>
      </section>

      {/* Primary Contact Info */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 border-2 border-black rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                WhatsApp / Calls
              </h3>
              <a
                href="https://wa.me/263778337688"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 text-lg font-semibold hover:text-black transition"
              >
                +263778337688
              </a>
              <p className="text-gray-600 text-sm mt-2">
                Preferred contact method
              </p>
            </div>

            <div className="text-center p-8 border-2 border-black rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Location</h3>
              <p className="text-gray-700 text-lg font-semibold">Zimbabwe</p>
              <p className="text-gray-600 text-sm mt-2">Harare-based artist</p>
            </div>

            <div className="text-center p-8 border-2 border-black rounded-lg hover:shadow-lg transition">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-gray-700 text-sm break-all">
                <a
                  href="mailto:munashe@munashegove.com"
                  className="hover:text-black transition font-semibold"
                >
                  munashe@munashegove.com
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-2">
                For detailed inquiries
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center py-12 border-t border-b border-black/20">
            <h3 className="text-2xl font-bold text-black mb-8">
              Follow for Updates
            </h3>
            <p className="text-gray-600 mb-8">
              Get notified about new collections, art process, and exclusive
              updates
            </p>
            <div className="flex gap-6 justify-center">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition"
                    title={social.name}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Send a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg border-2 border-black space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Your name"
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
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
                className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Your message here..."
                className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-center text-gray-600 mt-8 text-sm">
            For urgent inquiries, please contact via WhatsApp:{" "}
            <strong>+263778337688</strong>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Questions?
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How long does a custom commission take?",
                a: "Typically 4-8 weeks depending on complexity. Timeline is confirmed when you submit your inquiry.",
              },
              {
                q: "Do you ship internationally?",
                a: "Yes! I ship worldwide. Shipping costs are calculated based on destination, size, and weight of the artwork.",
              },
              {
                q: "Can I see progress updates during my commission?",
                a: "Absolutely! I provide regular updates and sketches throughout the creation process to ensure you're satisfied.",
              },
              {
                q: "What payment methods do you accept?",
                a: "Contact via WhatsApp for details on payment options. A 50% deposit is required to begin work.",
              },
              {
                q: "Can you work with my custom ideas?",
                a: "Yes! I love collaborating with clients. Share your vision, references, and ideas—I'll bring them to life.",
              },
              {
                q: "How do I stay updated on new collections?",
                a: "Follow my social media or subscribe for email updates about new artworks, exhibitions, and special offers.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="border-2 border-black p-6 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg text-black mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you want to commission a piece, take lessons, or just chat
            about art—I'd love to hear from you.
          </p>
          <a
            href="https://wa.me/263778337688?text=Hi%20Munashe%2C%20I%20am%20interested%20in%20your%20art%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black font-bold py-4 px-8 rounded hover:bg-gray-100 transition text-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
