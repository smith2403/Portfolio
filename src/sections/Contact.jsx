import { useState, useEffect } from "react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/contact/ContactExperience";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  useEffect(() => {
    if (!status) return;

    setShowToast(true);

    const hideTimer = setTimeout(() => {
      setShowToast(false);
    }, 5000);

    const clearTimer = setTimeout(() => {
      setStatus("");
    }, 5500);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(clearTimer);
    };
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const accessKey = import.meta.env.VITE_APP_WEB3FORMS_ACCESS_KEY;

      if (!accessKey) {
        throw new Error("Web3Forms access key is missing.");
      }

      const formData = new FormData(e.currentTarget);

      formData.append("access_key", accessKey);
      formData.append("subject", "New Contact Message from Your Portfolio");
      formData.append("from_name", "Portfolio Contact Form");
      formData.append("botcheck", "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setStatus("Message sent successfully! I'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      e.target.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus(error.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          subtitle="💬 Have questions or ideas? Let's talk! 🚀"
        />

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />

                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>

                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>

          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
      {status && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none transition-opacity duration-500 ${
            showToast ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`pointer-events-auto w-full max-w-sm flex items-center gap-4 rounded-2xl border border-white/15 bg-[#000000] p-5 shadow-2xl transition-all duration-500 ${
              showToast ? "translate-y-0 scale-100" : "translate-y-6 scale-95"
            }`}
          >
            <span className="text-2xl text-white">
              {status.includes("successfully") ? "✓" : "!"}
            </span>

            <div className="flex-1">
              <p className="font-semibold text-white tracking-wide">
                {status.includes("successfully") ? "Success!" : "Oops!"}
              </p>

              <p className="mt-1 text-sm text-white/75 leading-relaxed">
                {status}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
