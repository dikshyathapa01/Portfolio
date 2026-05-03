'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data';

const FORMSPREE_ID = 'mzdodvpy';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28 lg:py-32 bg-transparent">
      <div className="site-container w-full">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-14 md:mb-16"
        >
          <span className="section-badge">Contact</span>
          <h2 className="mt-4 mb-5 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl dark:text-stone-100">Get In Touch</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg dark:text-stone-200/80">
            Have a project in mind? Let&apos;s work together!
          </p>
        </motion.div>

        <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:gap-8 md:gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full space-y-6 sm:space-y-8"
          >
            {/* Email */}
            <Card className="flex items-center gap-3 text-center sm:gap-4">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800/70 dark:text-stone-300 sm:h-12 sm:w-12 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div className="min-w-0 flex-1 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-stone-100 mb-1 text-sm sm:text-base">Email</h3>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-600 dark:text-stone-200/75 hover:text-stone-700 dark:hover:text-stone-300 transition-colors break-all text-sm sm:text-base"
                >
                  {contactInfo.email}
                </a>
              </div>
            </Card>

            {/* Phone */}
            <Card className="flex items-center gap-3 text-center sm:gap-4">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800/70 dark:text-stone-300 sm:h-12 sm:w-12 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div className="flex-1 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-stone-100 mb-1 text-sm sm:text-base">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-slate-600 dark:text-stone-200/75 hover:text-stone-700 dark:hover:text-stone-300 transition-colors text-sm sm:text-base"
                >
                  {contactInfo.phone}
                </a>
              </div>
            </Card>

            {/* Location */}
            <Card className="flex items-center gap-3 text-center sm:gap-4">
              <div className="h-10 w-10 flex-shrink-0 rounded-full bg-stone-100 text-stone-700 dark:bg-stone-800/70 dark:text-stone-300 sm:h-12 sm:w-12 flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <div className="flex-1 text-center">
                <h3 className="font-semibold text-slate-900 dark:text-stone-100 mb-1 text-sm sm:text-base">Location</h3>
                <p className="text-slate-600 dark:text-stone-200/75 text-sm sm:text-base">{contactInfo.location}</p>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <Card>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                    className="mb-4"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Will get back to you soon! Love from Este ^_^
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-center sm:space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs font-medium text-gray-900 sm:text-sm dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-center text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-stone-400 focus:outline-none dark:border-stone-500/30 dark:bg-stone-900/45 dark:text-stone-100 dark:placeholder-stone-300/50 dark:focus:ring-stone-400 sm:rounded-xl sm:text-base"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-medium text-gray-900 sm:text-sm dark:text-white">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full resize-none rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-center text-sm text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-stone-400 focus:outline-none dark:border-stone-500/30 dark:bg-stone-900/45 dark:text-stone-100 dark:placeholder-stone-300/50 dark:focus:ring-stone-400 sm:rounded-xl sm:text-base"
                      placeholder="Your message... "
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full text-sm sm:text-base"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
