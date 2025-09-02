import api from "../../services/api";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/api/contact", formData);
      alert(response.data.message);
      setFormData({ email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong, try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 h-auto bg-gray-50 flex items-center justify-center py-10">
      <div className="w-full text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          <span role="img" aria-label="mail">📧</span> Contact Me
        </h2>
        <p className="text-gray-600 mb-10">
          Get in touch if you want to hire me, know me better, or need help with
          your project. <br />
          Let's connect and explore possibilities.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 text-left">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span role="img" aria-label="email">📮</span> Your email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="amazing_person@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span role="img" aria-label="subject">🪶</span> Subject*
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Let us know how we can help you"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <span role="img" aria-label="message">📜</span> Your message*
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Leave a comment..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-left">
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-400 hover:bg-gray-500 text-white font-medium px-6 py-2 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactPage;
