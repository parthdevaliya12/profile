import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "../lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "07ca9c25-2c1a-4b42-9d25-b4a3f5ffa5fb",
          subject: `New portfolio message from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMsg(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-ink-panel overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 mb-4 md:mx-auto">
            <span className="font-mono text-xs text-primary uppercase tracking-wider">Contact</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Let's Build <span className="text-gradient-primary">Together</span>
          </h2>
          <p className="font-body text-muted mt-4 max-w-xl md:mx-auto text-lg leading-relaxed">
            Have a project in mind, an opportunity, or just want to connect? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-mono text-sm font-semibold text-white mb-1">Email</h3>
                <p className="text-muted text-sm">parthdevaliya.official@gmail.com</p>
              </div>
            </div>
            
           
            
            <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-mono text-sm font-semibold text-white mb-1">Location</h3>
                <p className="text-muted text-sm">Gandhinagar, Gujarat, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3 glass shadow-2xl rounded-3xl border border-white/10 overflow-hidden"
          >
            {/* Editor-like Tab Bar */}
            <div className="flex items-center gap-2 bg-white/5 border-b border-white/10 px-6 py-4">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-muted">send-message.jsx</span>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-xs text-muted pl-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl bg-ink/50 border border-white/10 px-4 py-3.5 text-white placeholder:text-muted/40 font-body text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-xs text-muted pl-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl bg-ink/50 border border-white/10 px-4 py-3.5 text-white placeholder:text-muted/40 font-body text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-xs text-muted pl-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full rounded-xl bg-ink/50 border border-white/10 px-4 py-3.5 text-white placeholder:text-muted/40 font-body text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-body text-sm font-semibold text-white shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? (
                      <>
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </>
                    ) : status === "success" ? (
                      "Message Sent!"
                    ) : (
                      <>
                        Send Message <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0" />
                </button>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-sm text-green-400 flex items-center gap-2">
                  <span aria-hidden="true">✓</span> Message sent successfully. I'll respond soon!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-sm text-red-400 flex items-center gap-2">
                  <span aria-hidden="true">✕</span> {errorMsg}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
