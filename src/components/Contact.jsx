import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const formPayload = new FormData();
      formPayload.append("name", formData.name);
      formPayload.append("email", formData.email);
      formPayload.append("message", formData.message);
      formPayload.append("access_key", "46b9a89d-7dbd-42bc-9d0a-9d628cc3eb8c");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to connect to the server.");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-ink overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] -translate-y-1/2 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] animate-blob transform-gpu" />
        <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob animation-delay-2000 transform-gpu" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-semibold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(139,92,246,0.1)]">
            Connect
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Let's build something <span className="text-gradient-primary">amazing.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-muted text-lg leading-relaxed mb-12">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-8">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-6 group"
              >
                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">Email</h4>
                  <a href="mailto:parthdevaliya12@gmail.com" className="text-white text-lg font-medium group-hover:text-primary transition-colors">
                    parthdevaliya.official@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-6 group"
              >
                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-secondary group-hover:border-secondary group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-1">Location</h4>
                  <p className="text-white text-lg font-medium group-hover:text-secondary transition-colors">
                    Gujarat, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="premium-glass-card p-8 sm:p-10"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-white/80 uppercase tracking-wide">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-ink/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-ink transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-white/80 uppercase tracking-wide">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  className="w-full bg-ink/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-ink transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-white/80 uppercase tracking-wide">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-ink/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:bg-ink transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={22} />
                    Message Sent
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center font-medium bg-red-400/10 py-2 rounded-lg">{errorMessage}</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
