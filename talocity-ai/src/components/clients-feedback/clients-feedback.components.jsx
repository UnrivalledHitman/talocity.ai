import React, { useState, useEffect } from "react";

const ClientsFeedback = () => {
  // State to manage the active carousel index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of testimonials and client info for the carousel
  const feedback = [
    {
      testimonial:
        "This company has exceeded our expectations. Their talent management helped us achieve unparalleled success.",
      image: "https://via.placeholder.com/100x100?text=Client+1",
      name: "John Doe",
      job: "CEO, Company A",
    },
    {
      testimonial:
        "The team is outstanding! They helped us streamline our operations and improve productivity.",
      image: "https://via.placeholder.com/100x100?text=Client+2",
      name: "Jane Smith",
      job: "COO, Company B",
    },
    {
      testimonial:
        "An incredible experience! Their talent management strategies are second to none.",
      image: "https://via.placeholder.com/100x100?text=Client+3",
      name: "Alex Johnson",
      job: "HR Manager, Company C",
    },
  ];

  // Automatically shift the carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % feedback.length);
    }, 5000); // Shift every 5 seconds
    return () => clearInterval(interval);
  }, [activeIndex, feedback.length]);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Clients Feedback
        </h2>
        <p className="text-lg mb-10 text-gray-600">
          We have already shaped talent management in many sectors for some of
          the biggest enterprises.
        </p>
        <div className="carousel flex justify-center items-center">
          {feedback.map((item, index) => (
            <div
              key={index}
              className={`testimonial-card p-6 mx-4 bg-white shadow-lg rounded-lg transition duration-500 ease-in-out transform ${
                index === activeIndex
                  ? "scale-105 opacity-100"
                  : "scale-100 opacity-50"
              } hover:scale-105 hover:shadow-xl w-full md:w-1/2 lg:w-1/3`}
            >
              <p className="text-gray-700 italic mb-6">{item.testimonial}</p>
              <br />
              <div className="flex items-center justify-center mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-600"
                />
                <div className="ml-4 text-left">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">{item.job}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
