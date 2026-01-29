
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Globe, Mail, Phone, Instagram, Linkedin, Youtube, Facebook, Twitter, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
  isFullPage?: boolean;
}

// Live connection to CT Leads Google Sheet
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzsU7MKcykqhg36Z6TzqDS-lYYV8uJNGtEaU9uKGBXAkw-X1byvisoDo3Dk4Dk5tqgc/exec";

const Contact: React.FC<ContactProps> = ({ isDarkMode, isFullPage = false }) => {
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    subject: '', // Maps to "Service Interest" in the sheet
    message: ''  // Maps to "Enquiry" in the sheet
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setSubmitStatus('success');
      setFormData({
        fullName: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, link: "https://www.instagram.com/contenaissance/", name: "Instagram" },
    { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/company/108385521/", name: "LinkedIn" },
    { icon: <Youtube size={18} />, link: "https://www.youtube.com/@Contenaissance", name: "YouTube" },
    { icon: <Twitter size={18} />, link: "https://x.com/contenaissance", name: "X (Twitter)" },
    { icon: <Facebook size={18} />, link: "https://www.facebook.com/profile.php?id=61579738437856", name: "Facebook" }
  ];

  return (
    <section className={`${isFullPage ? 'min-h-screen pt-48 pb-24' : 'py-24'} px-6 relative overflow-hidden bg-zinc-950`}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-20 items-start">
        
        <div className="flex flex-col h-full">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-white leading-[0.9]"
          >
            Let's create the <br /> <span className="font-serif-brand italic font-normal">Next Wave.</span>
          </motion.h2>
          
          <div className="space-y-12 mb-auto">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-zinc-800 bg-zinc-900/50 group-hover:border-white/20 transition-all">
                <Mail size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-white/40">Email Studio</p>
                <p className="text-2xl md:text-3xl font-medium text-white tracking-tight">info@ritzmediaworld.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-zinc-800 bg-zinc-900/50 group-hover:border-white/20 transition-all">
                <Phone size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-white/40">Phone / Whatsapp</p>
                <p className="text-2xl md:text-3xl font-medium text-white tracking-tight">+91 99106 04107</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center border border-zinc-800 bg-zinc-900/50 group-hover:border-white/20 transition-all mt-1">
                <Globe size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-1 text-white/40">Our Base</p>
                <p className="text-2xl md:text-3xl font-medium text-white leading-tight tracking-tight">
                  Corporate Park, Tower A1<br />
                  Sector 142, Noida, UP, India
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center flex-wrap gap-6 mt-20 lg:mt-32">
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">Connect</p>
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all bg-zinc-900/30"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-transparent lg:pl-12"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-white/40">Full Name</label>
                <input 
                  required
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  type="text" 
                  className={`w-full bg-transparent border-b outline-none py-4 transition-all text-white text-xl placeholder:text-zinc-700 ${focused === 'name' ? 'border-white' : 'border-zinc-800'}`} 
                  placeholder="Enter your name"
                />
              </div>
              <div className="relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-white/40">Email Address</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  type="email" 
                  className={`w-full bg-transparent border-b outline-none py-4 transition-all text-white text-xl placeholder:text-zinc-700 ${focused === 'email' ? 'border-white' : 'border-zinc-800'}`} 
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-white/40">Contact Number</label>
                <input 
                  required
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  type="tel" 
                  className={`w-full bg-transparent border-b outline-none py-4 transition-all text-white text-xl placeholder:text-zinc-700 ${focused === 'phone' ? 'border-white' : 'border-zinc-800'}`} 
                  placeholder="+91 99999 99999"
                />
              </div>
              <div className="relative">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-white/40">Service Interest</label>
                <input 
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  type="text" 
                  className={`w-full bg-transparent border-b outline-none py-4 transition-all text-white text-xl placeholder:text-zinc-700 ${focused === 'subject' ? 'border-white' : 'border-zinc-800'}`} 
                  placeholder="e.g. AI Brand Film..."
                />
              </div>
            </div>

            <div className="relative">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block text-white/40">Enquiry Message</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused('msg')}
                onBlur={() => setFocused(null)}
                rows={4}
                className={`w-full bg-transparent border-b outline-none py-4 transition-all resize-none text-white text-xl leading-relaxed placeholder:text-zinc-700 ${focused === 'msg' ? 'border-white' : 'border-zinc-800'}`} 
                placeholder="Tell us about your brand vision..."
              />
            </div>

            <div className="pt-8">
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 py-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-bold uppercase tracking-[0.2em] text-[10px]"
                  >
                    <CheckCircle2 size={18} /> Inquiry Logged Successfully
                  </motion.div>
                ) : submitStatus === 'error' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 py-6 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 font-bold uppercase tracking-[0.2em] text-[10px]"
                  >
                    <AlertCircle size={18} /> Error Sending Inquiry. Please try again.
                  </motion.div>
                ) : (
                  <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-8 rounded-full font-bold uppercase tracking-[0.4em] text-[12px] flex items-center justify-center gap-4 transition-all bg-white text-black hover:bg-zinc-100 shadow-2xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>Processing <Loader2 size={20} className="animate-spin" /></>
                    ) : (
                      <>Dispatch Inquiry <Send size={20} strokeWidth={2} /></>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>

        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      </div>
    </section>
  );
};

export default Contact;
