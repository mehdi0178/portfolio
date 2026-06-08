"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setLoading(true);

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      );

      setSuccess("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      setSuccess("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Let's Work Together
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help
          bring your ideas to life.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Left Side */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-purple-500" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-gray-400">
                yourmail@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-purple-500" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-gray-400">
                +91 XXXXX XXXXX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-purple-500" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-gray-400">
                Mumbai, India
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none"
          />

          <textarea
            rows={6}
            name="message"
            placeholder="Tell me about your project..."
            required
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 outline-none resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-linear-to-r from-purple-600 to-blue-600 hover:scale-105 transition"
          >
            <Send size={18} />

            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}