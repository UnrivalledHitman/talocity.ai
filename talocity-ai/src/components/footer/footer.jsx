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
    <footer className="bg-blue-600 text-white py-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col min-h-[200px]">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/src/assets/navigation-bar/logo_full_horizontal_white.png"
            alt="company-logo"
            className="h-6"
          />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm mb-6">
          {/* Product Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-2">Products</h3>
            <ul className="space-y-1">
              {links.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-2">Useful Links</h3>
            <ul className="space-y-1">
              {links.useful.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center">
            <h3 className="font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1">
              {links.contact.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="mt-auto pt-4 border-t border-blue-500">
          <p className="text-xs text-center">
            © 2024 Talocity InstaSolutions Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
