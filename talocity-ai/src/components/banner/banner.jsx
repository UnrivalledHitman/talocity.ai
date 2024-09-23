const Banner = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between bg-blue-600 min-h-[60vh] p-4 md:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-blue-800 opacity-50 z-0"></div>
      {/* Content Container */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col items-start justify-center space-y-2 mb-4 lg:mb-0 pl-4 lg:pl-8">
        {/* Heading Text */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Unleash Your Potential with Our Innovative Solutions
        </h1>

        <p className="text-white text-base md:text-lg">
          {" "}
          {/* Reduced paragraph size */}
          Discover how our cutting-edge technology can transform your business
          and propel you to new heights of success.
        </p>
      </div>
      {/* Illustration Container */}
      <div className="z-10 w-full lg:w-1/2 flex justify-center">
        <img
          src="/banner/coding-neon-icon-vector.jpg"
          alt="Illustration"
          className="max-w-full h-auto rounded-lg lg:max-w-[60%]" // Retaining image size adjustment
        />
      </div>
    </div>
  );
};

export default Banner;
