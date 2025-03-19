import Link from "next/link";
import { FaLinkedin, FaXTwitter, FaInstagram, FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black py-12 font-sans">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title & Description */}
        <h2 className="text-4xl md:text-5xl font-extrabold uppercase">Who We Are</h2>
        <p className="mt-4 text-lg md:text-xl font-medium max-w-3xl mx-auto">
          Cambridge Institute of Technology (CITech), Bengaluru, is a dynamic and innovative hub of education, fostering excellence in engineering and technology.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="#" className="text-black text-3xl hover:opacity-70 transition">
            <FaLinkedin />
          </Link>
          <Link href="#" className="text-black text-3xl hover:opacity-70 transition">
            <FaXTwitter />
          </Link>
          <Link href="#" className="text-black text-3xl hover:opacity-70 transition">
            <FaInstagram />
          </Link>
          <Link href="#" className="text-black text-3xl hover:opacity-70 transition">
            <FaFacebook />
          </Link>
        </div>

        {/* Address */}
        <p className="mt-6 text-lg font-medium">
          Cambridge Institute of Technology, Krishnarajapuram, Bengaluru - 560036 <br />
          Tel: +91 80 24494141 / 24494107 / 7411747070
        </p>

        {/* Copyright */}
        <div className="mt-8 text-black text-sm">
          <p>© CIT OPEN DAY | <Link href="#" className="underline">Privacy & Policy</Link></p>
        </div>
      </div>

      {/* Cookie Consent Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-black text-yellow-400 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="text-center md:text-left">
          We use cookies to enhance your browsing experience and analyze traffic. By clicking "Accept," you consent to the use of cookies.
        </p>
        <div className="mt-2 md:mt-0 flex space-x-4">
          <button className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
            Accept
          </button>
          <button className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition">
            Reject
          </button>
        </div>
      </div>
    </footer>
  );
}
