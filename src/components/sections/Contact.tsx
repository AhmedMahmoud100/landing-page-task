import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

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
              We're here to guide and help you at all times. Reach out to us with any questions or inquiries about our landing page services.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="text-white/70">info@rapid.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Call Us</h3>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
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