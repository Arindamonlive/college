import React, { useState } from "react";

const StudentFeedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    email: "",
    mobile: "",
    program: "",
    responses: {},
    comments: "",
  });

  const programs = [
    "B.Tech in Artificial intelligence & Data Science",
    "B.Tech in Computer Science And Engineering",
    "B.Tech in Electronics And Communication Engineering",
    "B.Tech in Electrical And Electronics Engineering",
    "B.Tech in Mechanical Engineering",
    "B.Tech in Civil Engineering",
    "Master of Business Administration",
    "Diploma in Mechanical Engineering",
    "Diploma in Computer Science and Engineering"
  ];

  const questions = [
    "How do you rate the relevance of the courses concerning the program?",
    "Does the curriculum have a good balance between theory and laboratory courses?",
    "Degree of satisfaction with the syllabus of the courses with the expected course outcomes.",
    "Are the courses offered in line with the technological advancement/ specialization streams?",
    "Is the curriculum effective in developing the professional skills required for the industry?",
    "How do you rate the offering of the electives in terms of their relevance to the specialization stream and technological advancements?",
    "Rate the relevance of the add-on courses offered by the institute",
    "Infrastructural facilities, such as smart classrooms, reading rooms and toilets are available in the Department / College",
    "The canteen is available on the Campus and provides hygienic, subsidized food.",
    "The administration is student-friendly and provides overall support",
    "The Institute provides adequate and smooth support for Laboratories, projects and research work",
    "Rate the library internet facility, computerized cataloguing with a subscription to open access journals",
    "How do you rate the overall ambience of the institute?",
    "Ample space and exposure for cultural and co-curricular activities",
    "Rate your satisfaction level with the safety of college premises (security personnel, CCTV facility, fire extinguisher, etc)",
  ];

  const options = ["Excellent", "Good", "Fair", "Needs improvement"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("q")) {
      setFormData((prev) => ({
        ...prev,
        responses: {
          ...prev.responses,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert("Thank you for your feedback!");
        setFormData({
          name: "",
          rollNumber: "",
          email: "",
          mobile: "",
          program: "",
          responses: {},
          comments: "",
        });
      } else {
        alert("Error submitting feedback");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting feedback");
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Students Feedback Form
      </h1>
      <h2 className="text-2xl font-bold mb-6 text-center">Students Feedback on Academic performance & Ambience of the Institute</h2>
      <p className="mb-6 text-center">
      This questionnaire is intended to collect information relating to your satisfaction towards the Academic performance & Ambience of the Institute. The information provided by you will be kept confidential and will be used as important feedback for quality improvement of the program of studies/institution.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Name *"
          required
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="rollNumber"
          placeholder="University Roll Number *"
          required
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          required
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile (India +91)"
          required
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="program"
          required
          className="w-full border p-2 rounded"
          onChange={handleChange}
        >
          <option value="">Select Program *</option>
          {programs.map((p, i) => (
            <option key={i} value={p}>
              {p}
            </option>
          ))}
        </select>

        {/* Feedback Questions */}
        {questions.map((q, i) => (
          <div key={i}>
            <p className="font-medium mb-2">{q}</p>
            <div className="flex flex-wrap gap-4">
              {options.map((opt, idx) => (
                <label key={idx} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={opt}
                    required
                    onChange={handleChange}
                  />
                  {opt}
                </label>
              ))}
            </div>
          </div>
        ))}

        <textarea
          name="comments"
          placeholder="Any Other Comments (Optional)"
          maxLength={450}
          rows={4}
          className="w-full border p-2 rounded"
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentFeedback;
