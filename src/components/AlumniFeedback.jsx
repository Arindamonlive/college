import React, { useState } from "react";
import axios from "axios";

const AlumniFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    passOutYear: "",
    degree: "",
    email: "",
    mobile: "",
    currentPosition: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
    q11: "",
    q12: "",
    comments: "",
  });

  const options = [
    "Strongly agree",
    "Agree",
    "Neutral",
    "Disagree",
    "Needs Improvement",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://your-api-url.com/alumni-feedback", formData);
      alert("Feedback submitted successfully!");
      setFormData({ ...formData, comments: "" }); // Optionally clear form
    } catch (error) {
      alert("Error submitting feedback.");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">
        Alumni Feedback
      </h1>
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-800">
      Alumni Feedback Form on Academic Performance & Ambience of the institution
      </h2>
      <p className="text-gray-600 mb-6 text-center">
      We are glad that you have spent valuable years pursuing courses of your choice at Swami Vivekananda Institute of Science & Technology. We shall be thankful if you can spare some of your valuable time to fill up this feedback form.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name *" required className="input" />
          <input name="passOutYear" value={formData.passOutYear} onChange={handleChange} placeholder="Year of Pass Out *" required className="input" />
          <input name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree *" required className="input" />
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required className="input" />
          <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile *" required className="input" />
          <input name="currentPosition" value={formData.currentPosition} onChange={handleChange} placeholder="Current Position & Company Name *" required className="input" />
        </div>

        {/* Feedback Questions */}
        {[
          "The skill-related courses offered by the institution suit industry needs.",
          "The courses learned are suited to your current job.",
          "The institute organizes activities for student development.",
          "T&P Cell provides ample placement opportunities.",
          "The institute has adequate labs and equipment.",
          "The education at SVIST is relevant in your present job.",
          "You obtained sufficient technical knowledge at SVIST.",
          "Faculty members are competent and supportive.",
          "You receive regular updates from the institute.",
          "The institute provides good hospitality as an alumnus.",
          "You feel proud to be associated with SVIST.",
          "You are willing to contribute to the development of the Institute.",
        ].map((question, index) => (
          <div key={index}>
            <label className="block font-medium text-gray-700 mb-1">{question}</label>
            <select
              name={`q${index + 1}`}
              value={formData[`q${index + 1}`]}
              onChange={handleChange}
              required
              className="input"
            >
              <option value="">Select</option>
              {options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Other Comments */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Any Other Information</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="input"
            rows="4"
            maxLength={750}
          />
        </div>

        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AlumniFeedback;
