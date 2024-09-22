import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCard = ({ testimonial, image, name, job, isActive }) => (
  <div
    className={`testimonial-card bg-white rounded-lg transition-all duration-500 ease-in-out transform 
      ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"} 
      w-full max-w-lg mx-auto p-6 space-y-4`}
    style={{
      boxShadow:
        "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
    }}
  >
    <p className="text-gray-700 italic text-sm sm:text-base text-center">
      {testimonial}
    </p>
    <div className="flex flex-col items-center justify-center space-y-2">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full border-2 border-blue-600"
      />
      <div className="text-center">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm">{job}</p>
      </div>
    </div>
  </div>
);

const ClientsFeedback = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % feedback.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [feedback.length]);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % feedback.length);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-6 underline decoration-blue-600 decoration-2">
          Clients Feedback
        </h2>
        <p className="text-lg mb-10 text-gray-600 max-w-2xl mx-auto">
          We have already shaped talent management in many sectors for some of
          the biggest enterprises.
        </p>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {feedback.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <TestimonialCard {...item} isActive={index === activeIndex} />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6 text-blue-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
          >
            <ChevronRight className="w-6 h-6 text-blue-600" />
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {feedback.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
