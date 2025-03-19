import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/80 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">TECH FEST 2024</h3>
            <p className="text-gray-300">
              Join us for an exciting day of innovation, technology, and networking on April 19, 2024.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-300 hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@techfest2024.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: Tech University Campus, Innovation Street, Tech City</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Tech Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}