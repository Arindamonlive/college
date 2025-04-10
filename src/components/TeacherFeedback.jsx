import React, { useState } from "react";
import axios from "axios";

const TeacherFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    email: "",
    mobile: "",
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
    q13: "",
    q14: "",
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/teachers-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFormData({
          name: "",
          designation: "",
          department: "",
          email: "",
          mobile: "",
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
          q13: "",
          q14: "",
          comments: ""
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error. Try again later.");
    }
  };

  const options = ["Strongly Agree", "Agree", "Neutral", "Disagree", "Needs Improvement"];

  const renderQuestion = (label, name) => (
    <div className="mb-4">
      <label className="block font-medium mb-1">{label}</label>
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Select</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Teachers’ Feedback Form</h2>
      <h2 className="text-2xl font-bold mb-6 text-center">On Academic performance and Ambience of the Institute</h2>
      <p className="mb-6 text-center">
      This questionnaire is intended to collect information relating to your satisfaction towards on Academic performance and Ambience of the Institute. The information provided by you will be kept confidential and will be used as important feedback for quality improvement of the programme of studies/institution.
      </p>
      <form onSubmit={handleSubmit}>
        {[
          { label: "Name of Faculty", name: "name" },
          { label: "Designation", name: "designation" },
          { label: "Department of the faculty", name: "department" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Mobile", name: "mobile", type: "tel" },
        ].map(({ label, name, type = "text" }) => (
          <div className="mb-4" key={name}>
            <label className="block font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}

        {renderQuestion("The allocation of the credits to the course is appropriate.", "q1")}
        {renderQuestion("The depth of the course content is adequate to have significant learning outcomes.", "q2")}
        {renderQuestion("The syllabus bridges the gap between industry standards and academics.", "q3")}
        {renderQuestion("Timely coverage of the syllabus is possible in the mentioned hours.", "q4")}
        {renderQuestion("Units/sections in the syllabus are properly sequenced.", "q5")}
        {renderQuestion("Recommended textbooks are adequate and aligned to the syllabus.", "q6")}
        {renderQuestion("Sufficient reference material and books are available.", "q7")}
        {renderQuestion("The course prerequisites are appropriate.", "q8")}
        {renderQuestion("The course content supports follow-on courses.", "q9")}
        {renderQuestion("The curriculum is enriched compared to other universities.", "q10")}
        {renderQuestion("Designed experiments stimulate interest and relate theory to practice.", "q11")}
        {renderQuestion("Practicals help in developing design, analysis and problem-solving skills.", "q12")}
        {renderQuestion("The department environment is conducive to teaching and research.", "q13")}
        {renderQuestion("The college supports conferences, projects, and research.", "q14")}

        <div className="mb-6">
          <label className="block font-medium mb-1">Any Other Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            maxLength={750}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={4}
            placeholder="Enter any additional feedback..."
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeacherFeedback;
