import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Companies from '@/components/sections/Companies';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Companies />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
