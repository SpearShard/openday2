import Image from "next/image";
import Link from "next/link";
// import Navbar from "../components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
// import

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Schedule Section */}
      <Schedule />
      
      {/* Speakers Section */}
      <Speakers />
      
      <Footer />
    </main>
  );
}
