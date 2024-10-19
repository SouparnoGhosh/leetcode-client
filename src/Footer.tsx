import { Link } from "react-router-dom";
import {
  FaInstagram as Instagram,
  FaFacebook as Facebook,
  FaTwitter as Twitter,
  FaYoutube as Youtube,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/orders">Orders and delivery</Link>
              </li>
              <li>
                <Link to="/returns">Returns and refunds</Link>
              </li>
              <li>
                <Link to="/payment">Payment and pricing</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">About ACME</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/partners">ACME partner boutiques</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/app">ACME app</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Discounts and membership
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/affiliate">Affiliate program</Link>
              </li>
              <li>
                <Link to="/membership">ACME membership</Link>
              </li>
            </ul>
            <h3 className="font-semibold text-lg mt-6 mb-4">Follow us</h3>
            <div className="flex space-x-4">
              <Link
                to="https://instagram.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <Instagram size={24} />
              </Link>
              <Link
                to="https://facebook.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <Facebook size={24} />
              </Link>
              <Link
                to="https://twitter.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <Twitter size={24} />
              </Link>
              <Link
                to="https://youtube.com"
                className="text-gray-600 hover:text-gray-800"
              >
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm mt-2">
            Built with passion and <FaHeart className="inline text-red-500" />{" "}
            in 2024.
          </p>
        </div>
      </div>
    </footer>
  );
}
