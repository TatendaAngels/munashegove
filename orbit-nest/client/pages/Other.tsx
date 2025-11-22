import { useState } from "react";
import { Star, Mail, BookOpen, Users } from "lucide-react";

const Other = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "Grace Mwamba",
      image: "👩",
      text: "Munashe's portrait of my grandmother beautifully captures her dignity and wisdom. The level of detail is extraordinary. Truly proud to support a Zimbabwean artist.",
      rating: 5,
    },
    {
      id: 2,
      name: "Tafadzwa Ndlela",
      image: "👨",
      text: "The wildlife piece I commissioned is absolutely breathtaking. It perfectly captures the majesty of our African animals with such respect and authenticity.",
      rating: 5,
    },
    {
      id: 3,
      name: "Chipo Mukwada",
      image: "👩",
      text: "Beyond impressed with Munashe's professionalism and passion. The commission process was seamless, and the final artwork exceeded all expectations.",
      rating: 5,
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    message: "",
    rating: 5,
  });

  const [newsletter, setNewsletter] = useState("");
  const [lessonFormData, setLessonFormData] = useState({
    studentName: "",
    contactMethod: "",
    skillLevel: "Beginner - I'm just starting",
    learningGoals: "",
    preferredFormat: "Online Video Lessons",
  });

  const handleLessonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! This is a lesson inquiry:\n\nStudent Name: ${lessonFormData.studentName}\nContact Method: ${lessonFormData.contactMethod}\nSkill Level: ${lessonFormData.skillLevel}\nPreferred Format: ${lessonFormData.preferredFormat}\n\nLearning Goals:\n${lessonFormData.learningGoals}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/263778337688?text=${encodedMessage}`, "_blank");
    alert(
      "Thank you! Your lesson inquiry has been sent to WhatsApp. I'll contact you within 48 hours.",
    );
    setLessonFormData({
      studentName: "",
      contactMethod: "",
      skillLevel: "Beginner - I'm just starting",
      learningGoals: "",
      preferredFormat: "Online Video Lessons",
    });
  };

  const handleTestimonialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.message) {
      setTestimonials([
        ...testimonials,
        {
          id: testimonials.length + 1,
          name: newTestimonial.name,
          image: "👤",
          text: newTestimonial.message,
          rating: newTestimonial.rating,
        },
      ]);
      setNewTestimonial({ name: "", message: "", rating: 5 });
      alert("Thank you for your testimonial! It means so much.");
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing! Check your email for updates.`);
    setNewsletter("");
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2Fff31432263dc4d88a7305f6b5aa5f657%2Fbc7c3f811fde496294a5ed7cf362ca5c?format=webp&width=1200')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Art Lessons & Community
          </h1>
          <p className="text-xl text-gray-300">
            Learn, connect, and be part of the Munashe Gove artistic community
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-black mb-4">Stay Updated</h2>
            <p className="text-lg text-gray-600">
              Subscribe for exclusive news about new collections, art process
              behind-the-scenes, lessons, and special offers
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="bg-white p-8 rounded-lg border-2 border-black"
          >
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                type="email"
                value={newsletter}
                onChange={(e) => setNewsletter(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="bg-black text-white font-bold px-8 py-3 rounded hover:bg-gray-900 transition flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Mail className="w-5 h-5" />
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, only
              meaningful updates.
            </p>
          </form>
        </div>
      </section>

      {/* Art Lessons Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Learn Pencil Art with Munashe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white border-2 border-black p-8 rounded-lg hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-8 h-8 text-black" />
                <h3 className="text-2xl font-bold text-black">
                  Online Video Lessons
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Learn at your own pace from anywhere in the world with
                comprehensive video courses:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✓ Beginner fundamentals & techniques</li>
                <li>✓ Portrait drawing mastery</li>
                <li>✓ Wildlife & nature art</li>
                <li>✓ Charcoal & toning methods</li>
                <li>✓ Cultural narrative composition</li>
                <li>✓ Professional portfolio building</li>
              </ul>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> Self-paced, lifetime access
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Price:</strong> Contact for details
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-black p-8 rounded-lg hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-black" />
                <h3 className="text-2xl font-bold text-black">
                  In-Person & Group Sessions
                </h3>
              </div>
              <p className="text-gray-700 mb-6">
                Direct mentorship and intensive workshops available:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✓ One-on-one mentoring sessions</li>
                <li>✓ Weekend & evening workshops</li>
                <li>✓ Small group masterclasses</li>
                <li>✓ Custom curriculum tailored to you</li>
                <li>✓ Local Zimbabwe-based instruction</li>
                <li>✓ Flexible scheduling & availability</li>
              </ul>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> Harare, Zimbabwe
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Price:</strong> Contact for pricing
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black text-white p-8 rounded-lg border-2 border-black mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">Skill Levels</div>
                <p className="text-gray-200">Beginner to Advanced</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Flexible</div>
                <p className="text-gray-200">Online & In-Person</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Individual</div>
                <p className="text-gray-200">Custom-Tailored</p>
              </div>
            </div>
          </div>

          {/* Lesson Inquiry Form */}
          <div className="bg-gray-50 p-8 rounded-lg border-2 border-black">
            <h3 className="text-2xl font-bold text-black mb-6">
              Interested in Lessons?
            </h3>
            <p className="text-gray-700 mb-6">
              Fill out this form and Munashe will contact you within 48 hours to
              discuss your learning goals.
            </p>
            <form onSubmit={handleLessonSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Student Name *
                  </label>
                  <input
                    type="text"
                    value={lessonFormData.studentName}
                    onChange={(e) =>
                      setLessonFormData({
                        ...lessonFormData,
                        studentName: e.target.value,
                      })
                    }
                    placeholder="Your name"
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Contact Method *
                  </label>
                  <input
                    type="text"
                    value={lessonFormData.contactMethod}
                    onChange={(e) =>
                      setLessonFormData({
                        ...lessonFormData,
                        contactMethod: e.target.value,
                      })
                    }
                    placeholder="Email or WhatsApp"
                    required
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Skill Level *
                  </label>
                  <select
                    value={lessonFormData.skillLevel}
                    onChange={(e) =>
                      setLessonFormData({
                        ...lessonFormData,
                        skillLevel: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option>Beginner - I'm just starting</option>
                    <option>Intermediate - I have some experience</option>
                    <option>Advanced - I'm refining my skills</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Preferred Format *
                  </label>
                  <select
                    value={lessonFormData.preferredFormat}
                    onChange={(e) =>
                      setLessonFormData({
                        ...lessonFormData,
                        preferredFormat: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                  >
                    <option>Online Video Lessons</option>
                    <option>One-on-One Sessions</option>
                    <option>Group Workshops</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Learning Goals *
                </label>
                <textarea
                  value={lessonFormData.learningGoals}
                  onChange={(e) =>
                    setLessonFormData({
                      ...lessonFormData,
                      learningGoals: e.target.value,
                    })
                  }
                  placeholder="What would you like to learn? What are your artistic goals?"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-900 transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            What People Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border-2 border-black p-6 rounded-lg hover:shadow-lg transition-all bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <h3 className="font-bold text-black">{testimonial.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-black text-black"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* Share Your Experience */}
          <div className="bg-black text-white p-8 rounded-lg border-2 border-black">
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="text-gray-200 mb-6">
              Have you commissioned Munashe or taken lessons? Share your story
              with the community.
            </p>
            <form onSubmit={handleTestimonialSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) =>
                    setNewTestimonial((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border-2 border-white rounded text-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Your Testimonial *
                </label>
                <textarea
                  value={newTestimonial.message}
                  onChange={(e) =>
                    setNewTestimonial((prev) => ({
                      ...prev,
                      message: e.target.value,
                    }))
                  }
                  required
                  rows={4}
                  placeholder="Share your experience with Munashe's art or lessons..."
                  className="w-full px-4 py-3 border-2 border-white rounded text-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Rating
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() =>
                        setNewTestimonial((prev) => ({
                          ...prev,
                          rating: star,
                        }))
                      }
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= newTestimonial.rating
                            ? "fill-white text-white"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-bold py-3 rounded hover:bg-gray-100 transition"
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Latest News & Updates
          </h2>

          <div className="space-y-8">
            {[
              {
                date: "January 2025",
                title: "New Pencil Art Video Series Launched",
                excerpt:
                  "Munashe releases first online video lesson series covering beginner pencil techniques and fundamentals.",
              },
              {
                date: "December 2024",
                title: "Gallery Exhibition in Harare",
                excerpt:
                  "Featured in 'Contemporary African Voices' exhibition showcasing the best of Zimbabwean pencil artistry.",
              },
              {
                date: "November 2024",
                title: "Commission Request Milestone",
                excerpt:
                  "Over 100 custom commissions completed! Celebrating the community that makes this work possible.",
              },
              {
                date: "October 2024",
                title: "Art Lessons Program Begins",
                excerpt:
                  "Munashe Gove officially launches mentorship and group workshop programs for aspiring artists.",
              },
            ].map((news, idx) => (
              <div
                key={idx}
                className="border-l-4 border-black pl-6 py-4 hover:bg-gray-50 px-4 rounded transition"
              >
                <p className="text-sm text-gray-600 font-semibold">
                  {news.date}
                </p>
                <h3 className="text-xl font-bold text-black mt-2">
                  {news.title}
                </h3>
                <p className="text-gray-700 mt-2">{news.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Join the Community</h2>
          <p className="text-xl text-gray-300 mb-8">
            Be part of a growing community of art enthusiasts, collectors, and
            artists inspired by Zimbabwean excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-white text-black font-bold py-4 px-8 rounded hover:bg-gray-100 transition"
            >
              Get in Touch
            </a>
            <a
              href="https://wa.me/263778337688?text=I%20am%20interested%20in%20art%20lessons"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-white text-white font-bold py-4 px-8 rounded hover:bg-white/10 transition"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Other;
