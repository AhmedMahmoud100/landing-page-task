import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">

      <Container>
        <div className="flex flex-col lg:flex-row gap-12 items-center pt-[200px]">
          <div className="lg:w-1/2">
            <img src="/images/earth.png" alt="Globe" className="w-full h-auto" />
          </div>

          <div className="lg:w-1/2">
            <div className="bg-transparent p-8 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-white/70 mb-8 max-w-md">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <Button variant="primary" size="md" className="w-fit px-6">
                  Get in Touch
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
