import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, CheckCircle2, ArrowUpRight } from "lucide-react";

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
    <section id="contact" className="relative py-28 lg:py-36 bg-ink overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[400px] h-[400px] bg-gold/[0.03] rounded-full blur-[120px] animate-blob transform-gpu" />
        <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[400px] h-[400px] bg-bronze/[0.03] rounded-full blur-[120px] animate-blob transform-gpu" style={{ animationDelay: "3s" }} />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="section-tag">Connect</span>
          <h2 className="section-heading">
            Let's build something <span className="text-gradient-gold">amazing.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative gold line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-transparent mb-8" />
            
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-white/90 mb-6 leading-snug">
              Get in <span className="text-gradient-gold italic">Touch</span>
            </h3>
            <p className="text-muted text-base leading-relaxed mb-12">
              Whether you have a question, a project idea, or just want to say hi — I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <motion.a
                href="mailto:parthdevaliya.official@gmail.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 group p-4 rounded-xl hover:bg-gold/[0.02] transition-all"
              >
                <div className="h-14 w-14 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold/60 group-hover:bg-gold/10 group-hover:border-gold/20 group-hover:text-gold group-hover:shadow-[0_0_20px_rgba(200,169,96,0.15)] transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-1">Email</h4>
                  <p className="text-white/80 text-base font-medium group-hover:text-gold transition-colors">
                    parthdevaliya.official@gmail.com
                  </p>
                </div>
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-5 group p-4 rounded-xl hover:bg-gold/[0.02] transition-all"
              >
                <div className="h-14 w-14 rounded-xl bg-gold/5 border border-gold/10 flex items-center justify-center text-gold/60 group-hover:bg-gold/10 group-hover:border-gold/20 group-hover:text-gold group-hover:shadow-[0_0_20px_rgba(200,169,96,0.15)] transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-1">Location</h4>
                  <p className="text-white/80 text-base font-medium group-hover:text-gold transition-colors">
                    Gujarat, India
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="premium-glass-card p-7 sm:p-9"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.15em]">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-ink/60 border border-gold/8 rounded-xl px-5 py-3.5 text-white/90 text-sm placeholder:text-white/15 focus:outline-none focus:border-gold/30 focus:ring-1 focus:ring-gold/20 focus:bg-ink transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.15em]">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-ink/60 border border-gold/8 rounded-xl px-5 py-3.5 text-white/90 text-sm placeholder:text-white/15 focus:outline-none focus:border-gold/30 focus:ring-1 focus:ring-gold/20 focus:bg-ink transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-semibold text-white/50 uppercase tracking-[0.15em]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full bg-ink/60 border border-gold/8 rounded-xl px-5 py-3.5 text-white/90 text-sm placeholder:text-white/15 focus:outline-none focus:border-gold/30 focus:ring-1 focus:ring-gold/20 focus:bg-ink transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full btn-gold flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <div className="h-5 w-5 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 size={18} />
                    Message Sent Successfully
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </motion.button>

              {status === "error" && (
                <p className="text-red-400 text-xs text-center font-medium bg-red-400/5 border border-red-400/10 py-2.5 rounded-lg">{errorMessage}</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
