import React from "react";

const Footer = () => {
  const links = {
    product: [
      { href: "#video-interviews", text: "Video Interviews" },
      { href: "#voice-assessment", text: "Voice Assessment" },
      { href: "#assessment-platform", text: "Assessment Platform" },
      { href: "#typing-assessment", text: "Typing Assessment" },
      { href: "#tracking-system", text: "Tracking System" },
      { href: "#ai-proctoring", text: "AI Proctoring" },
    ],
    useful: [
      { href: "#privacy-policy", text: "Privacy Policy" },
      { href: "#terms-of-use", text: "Terms of Use" },
      { href: "#gdpr-report", text: "GDPR Report" },
    ],
    contact: [
      { href: "mailto:helpdesk@talocity.ai", text: "helpdesk@talocity.ai" },
      { href: "mailto:tse@talocity.ai", text: "tse@talocity.ai" },
      {
        href: "https://goo.gl/maps/XfMx6P6eYkFZwh6P8",
        text: "Gurugram, India",
      },
      { href: "https://goo.gl/maps/B8hYcHHM8Ju", text: "Redmond, USA" },
    ],
  };

  return (
    <footer className="bg-blue-600 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Company Logo */}
        <div className="flex justify-center mb-10">
          <img
            src="/navigation-bar/logo_full_horizontal_white.png"
            alt="company-logo"
            className="h-10 sm:h-12"
          />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-500">
              Products
            </h3>
            <ul className="space-y-2">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:underline transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-500">
              Useful Links
            </h3>
            <ul className="space-y-2">
              {links.useful.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:underline transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-500">
              Contact Us
            </h3>
            <ul className="space-y-2">
              {links.contact.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="hover:underline transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="text-center text-sm">
          <p>© 2024 Talocity InstaSolutions Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
