// src/app/page.tsx
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Navbar from './components/Navbar';
// import Sponsors from './components/Sponsors';
import Venue from './components/Venue';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory overflow-y-auto h-screen">
      <section className="min-h-screen snap-start pt-16">
        <Navbar />
        <Hero />
      </section>
      <section className="min-h-screen snap-start pt-16">
        <About />
      </section>
      <section className="min-h-screen snap-start pt-16">
        <Schedule />
      </section>
      {/* <section className="min-h-screen snap-start pt-20">
        <Sponsors />
      </section> */}
      <section className="min-h-screen snap-start pt-16">
        <Venue />
      </section>
      <section className="min-h-screen snap-start pt-16">
        <Footer />
      </section>
    </div>
  );
}