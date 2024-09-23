import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../../assets/navigation-bar/logo_full_horizontal_white.png";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-sky-500 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo that routes to Home */}
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/products"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link
                to="/clients"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Clients
              </Link>
              <Link
                to="/company"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Company
              </Link>
              <Link
                to="/resources"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Resources
              </Link>
              {/* Link to Contact Us page */}
              <Link
                to="/contact"
                className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-sky-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu when toggled */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 py-3 flex flex-col sm:flex-row justify-center items-center overflow-x-auto">
            <Link
              to="/products"
              className="text-white hover:text-gray-200 px-3 py-2 mx-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              Products
            </Link>
            <Link
              to="/clients"
              className="text-white hover:text-gray-200 px-3 py-2 mx-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              Clients
            </Link>
            <Link
              to="/company"
              className="text-white hover:text-gray-200 px-3 py-2 mx-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              Company
            </Link>
            <Link
              to="/resources"
              className="text-white hover:text-gray-200 px-3 py-2 mx-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 px-3 py-2 mx-2 rounded-md text-sm font-medium whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
