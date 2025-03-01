
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dubizzle-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About dubizzle</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-white transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/vehicles" className="text-gray-300 hover:text-white transition-colors">
                  Vehicles
                </Link>
              </li>
              <li>
                <Link to="/electronics" className="text-gray-300 hover:text-white transition-colors">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/furniture" className="text-gray-300 hover:text-white transition-colors">
                  Home & Furniture
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-300 hover:text-white transition-colors">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-gray-300 hover:text-white transition-colors">
                  Report an Issue
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect with Us</h3>
            <p className="text-gray-300 mb-4">
              Follow us on social media for the latest updates and offers
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-md font-bold mb-2">Download Our App</h4>
              <div className="flex space-x-3">
                <a href="#" className="block w-32">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on App Store" 
                    className="w-full"
                  />
                </a>
                <a href="#" className="block w-32">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold text-dubizzle-red mr-2">dubizzle</span>
              <span className="text-gray-400">Egypt</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} dubizzle Egypt. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
