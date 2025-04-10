import React, { useState } from "react";
import axios from "axios";

const EnquireButton = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    department: "",
    name: "",
    email: "",
    phone: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("https://your-api-endpoint.com/enquiry", formData);
      alert("Form submitted successfully!");
      setFormData({
        department: "",
        name: "",
        email: "",
        phone: "",
        additionalInfo: "",
      });
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* Vertical Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-yellow-500 text-black font-bold px-2 py-2 z-50 shadow-lg hover:bg-yellow-600"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          borderRadius: "6px 0 0 6px",
        }}
      >
        ENQUIRE
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Department Dropdown */}
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Select Department</option>
                <option>B.Tech in Artificial intelligence & Data Science</option>
                <option>B.Tech in Computer Science And Engineering</option>
                <option>B.Tech in Electronics And Communication Engineering</option>
                <option>B.Tech in Electrical And Electronics Engineering</option>
                <option>B.Tech in Mechanical Engineering</option>
                <option>B.Tech in Civil Engineering</option>
                <option>Master of Business Administration</option>
                <option>Diploma in Mechanical Engineering</option>
                <option>Diploma in Computer Science and Engineering</option>
              </select>

              {/* Name */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-2 rounded"
                required
              />

              {/* Additional Info */}
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                placeholder="Additional Information"
                className="w-full border border-gray-300 p-2 rounded"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-yellow-600 text-black px-4 py-2 rounded hover:bg-yellow-500"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EnquireButton;
