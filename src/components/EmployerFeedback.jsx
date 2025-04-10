import React, { useState } from "react";
import axios from "axios";

const EmployerFeedback = () => {
    const [formData, setFormData] = useState({
    name: "",
    year: "",
    degree: "",
    email: "",
    mobile: "",
    position: "",
    skillCourses: "",
    relevance: "",
    activities: "",
    placementSupport: "",
    labs: "",
    relevanceJob: "",
    technicalKnowledge: "",
    facultySupport: "",
    updates: "",
    hospitality: "",
    proud: "",
    contribution: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/alumni-feedback", formData);
      alert("Feedback submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Submission failed. Try again later.");
    }
  };

  const renderRating = (fieldName) => (
    <div className="flex gap-4 mb-4">
      {["Strongly agree", "Agree", "Neutral", "Disagree", "Needs Improvement"].map((option) => (
        <label key={option} className="flex items-center gap-1">
          <input
            type="radio"
            name={fieldName}
            value={option}
            checked={formData[fieldName] === option}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Alumni Feedback Form</h1>
      <p className="mb-6 text-center">
        We are glad that you have spent valuable years pursuing courses of your choice at Swami Vivekananda Institute of Science & Technology. We shall be thankful if you can spare some of your valuable time to fill up this feedback form.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input type="text" name="name" placeholder="Name *" className="w-full p-2 border rounded" value={formData.name} onChange={handleChange} required />
        <input type="text" name="year" placeholder="Year of pass out *" className="w-full p-2 border rounded" value={formData.year} onChange={handleChange} required />
        <input type="text" name="degree" placeholder="Degree *" className="w-full p-2 border rounded" value={formData.degree} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address *" className="w-full p-2 border rounded" value={formData.email} onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile *" className="w-full p-2 border rounded" value={formData.mobile} onChange={handleChange} required />
        <input type="text" name="position" placeholder="Current Position & Company Name *" className="w-full p-2 border rounded" value={formData.position} onChange={handleChange} required />

        {/* Ratings */}
        {[
          ["skillCourses", "Skill-related courses match industry needs *"],
          ["relevance", "Courses suited to your current job *"],
          ["activities", "Institute organizes developmental activities *"],
          ["placementSupport", "T & P Cell placement support *"],
          ["labs", "Adequate lab and equipment support *"],
          ["relevanceJob", "Education is relevant to current job *"],
          ["technicalKnowledge", "Sufficient technical knowledge *"],
          ["facultySupport", "Faculty support *"],
          ["updates", "Receive regular updates *"],
          ["hospitality", "Hospitality as an alumnus *"],
          ["proud", "Proud to be an SVIST alumnus *"],
          ["contribution", "Willing to contribute to institute *"],
        ].map(([key, label]) => (
          <div key={key}>
            <label className="font-medium">{label}</label>
            {renderRating(key)}
          </div>
        ))}

        <textarea
          name="comments"
          rows="4"
          maxLength="750"
          placeholder="Any Other Information"
          className="w-full p-2 border rounded"
          value={formData.comments}
          onChange={handleChange}
        />

        <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployerFeedback;
