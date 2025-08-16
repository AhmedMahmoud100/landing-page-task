import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { MailIcon, PhoneIcon, LocationIcon } from '../icons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/70 mb-8">
              {"We're here to guide and help you at all times. Reach out to us with any questions or inquiries about our landing page services."}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <MailIcon />
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-white/70">info@rapid.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <PhoneIcon />
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <LocationIcon />
              </div>
              <div>
                <h3 className="font-semibold">Visit Us</h3>
                <p className="text-white/70">123 Innovation Street, Tech City</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-[#111] p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-6">Send us a message</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;