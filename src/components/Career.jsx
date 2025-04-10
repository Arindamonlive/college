import React, { useState } from "react";
import axios from "axios";

const careerNotifications = [
  { id: "VAC001", title: "Assistant Professor - CSE", description:"Qualification" },
  { id: "VAC002", title: "Lab Technician - CSE",description:"Qualification"},
  { id: "VAC003", title: "Marketing Officer -Admin Department",description:"Qualification" },
];

export default function Career() {
  const [selectedVacancy, setSelectedVacancy] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    vacancyId: "",
    qualification: "",
    phone: "",
    email: "",
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "cv") {
      const file = files[0];
      if (file && file.type !== "application/pdf") {
        alert("Only PDF files are allowed.");
        return;
      }
      if (file && file.size > 5 * 1024 * 1024) {
        alert("File size should not exceed 5MB.");
        return;
      }
      setFormData({ ...formData, cv: file });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.cv) return alert("Please upload a valid CV.");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) =>
      data.append(key, value)
    );

    try {
      await axios.post("/api/career/apply", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Application submitted successfully!");
      setFormData({
        name: "",
        department: "",
        vacancyId: "",
        qualification: "",
        phone: "",
        email: "",
        cv: null,
      });
      setSelectedVacancy(null);
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Career Opportunities</h1>

      <ul className="space-y-2 mb-6">
        {careerNotifications.map((job) => (
          <li
            key={job.id}
            className="border p-3 rounded cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setSelectedVacancy(job);
              setFormData({ ...formData, vacancyId: job.id });
            }}
          >
            <strong>{job.title}</strong> (ID: {job.id})
            <p className="">{job.description}</p>
          </li>
        ))}
      </ul>

      {selectedVacancy && (
        <form
          onSubmit={handleSubmit}
          className="border p-6 rounded shadow-md bg-white"
        >
          <h2 className="text-xl font-semibold mb-4">
            Apply for: {selectedVacancy.title}
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="department"
              value={formData.department}
              placeholder="Department"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              placeholder="Highest Qualification"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
              required
              className="border p-2 rounded"
            />
<div className="flex flex-col">
  <label className="mb-1 font-medium text-sm text-gray-700">Upload CV (PDF, max 5MB)</label>
  <div className="flex items-center space-x-4">
    <label
      htmlFor="cv"
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-md border border-gray-300 cursor-pointer shadow-sm transition-all duration-200 text-sm"
    >
      Choose File
    </label>
    <span className="text-sm text-gray-600 truncate max-w-xs">
      {formData.cv ? formData.cv.name : "No file chosen"}
    </span>
  </div>
  <input
    id="cv"
    type="file"
    name="cv"
    accept=".pdf"
    onChange={handleChange}
    className="hidden"
    required
  />
</div>


          </div>

          <button
            type="submit"
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit Application
          </button>
        </form>
      )}
    </div>
  );
}
