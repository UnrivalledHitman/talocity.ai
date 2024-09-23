import React, { useState } from "react";

const FloatingLabelInput = ({ label, type, name, id }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative mb-4">
      <input
        type={type}
        name={name}
        id={id}
        className="peer w-full border-b-2 border-gray-300 bg-transparent pt-4 pb-1 font-sans text-sm text-gray-900 focus:border-blue-500 focus:outline-none"
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(e) => setValue(e.target.value)}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 -top-3.5 font-sans text-sm text-gray-600 transition-all
          ${isFocused || value ? "-top-3.5 text-xs text-blue-500" : "top-2"}`}
      >
        {label}
      </label>
    </div>
  );
};

const MultipleSelection = ({ label, options }) => (
  <div className="mb-4">
    <label className="block font-sans text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    {options.map((option, index) => (
      <div key={index} className="flex items-center mb-2">
        <input
          type="checkbox"
          id={`option-${index}`}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label
          htmlFor={`option-${index}`}
          className="ml-2 block text-sm text-gray-900"
        >
          {option}
        </label>
      </div>
    ))}
  </div>
);

const Form = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        End Nervous Hiring
      </h2>
      <h3 className="text-xl font-semibold mb-8 text-center text-blue-600">
        Start Touchless Hiring
      </h3>

      <form className="space-y-6">
        <FloatingLabelInput label="Name" type="text" name="name" id="name" />
        <FloatingLabelInput
          label="Email"
          type="email"
          name="email"
          id="email"
        />
        <FloatingLabelInput
          label="Company Name"
          type="text"
          name="company"
          id="company"
        />
        <FloatingLabelInput
          label="Designation"
          type="text"
          name="designation"
          id="designation"
        />
        <FloatingLabelInput
          label="No. of Employees"
          type="number"
          name="employees"
          id="employees"
        />
        <FloatingLabelInput
          label="Website URL"
          type="url"
          name="website"
          id="website"
        />
        <FloatingLabelInput
          label="Industry"
          type="text"
          name="industry"
          id="industry"
        />
        <FloatingLabelInput
          label="Additional Info"
          type="text"
          name="info"
          id="info"
        />

        <MultipleSelection
          label="What products are you interested in?"
          options={[
            "One-Way Video Interviews",
            "English Language Assessments",
            "Computer Proficiency Assessments (Typing)",
            "Domain MCQ Assessments",
            "Critical to Quality Assessments",
            "Complete Workflow Automation on ATS",
            "Others",
          ]}
        />

        <MultipleSelection
          label="Solutions"
          options={[
            "Touchless Hiring",
            "Assessment as means for learning",
            "Performance Management",
            "Exit Interviews",
            "Pulse Survey",
          ]}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Go Touchless!
        </button>
      </form>
    </div>
  );
};

export default Form;
