import React, { useState } from "react";
import axios from "axios";

const Grievance = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    gender: "",
    mobile: "",
    email: "",
    complaintCategory: "",
    complaintDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/grievance", formData);
      alert("Grievance submitted successfully.");
    } catch (err) {
      console.error(err);
      alert("Failed to submit grievance. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold text-center mb-4">Grievance Redressal Portal</h1>
      <p className="mb-6 text-justify">
        The Online Grievance Redressal System attempts to address genuine problems and complaints of Students, Faculty and other Stakeholders. Complaints are handled with sensitivity and confidentiality. Use this power responsibly.
      </p>

      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">Grievance Redressal Committee Members</h2>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Dr. Sonali Ghosh – Principal, Chairperson</li>
          <li>Mr. Pabitra Gayen – Representative of Management</li>
          <li>Dr. Manasi Mukhopadhyay – Vice-Principal & HOD, BSH</li>
          <li>Dr. Anindya Sundar Das – IQAC Coordinator & HOD, ECE</li>
          <li>Dr. Suman Das – Registrar & HOD, ME</li>
          <li>Dr. Samrat Paul – Dean of Academics & HOD, EEE</li>
          <li>Dr. Krishna Kumar Jha – HOD, CSE</li>
          <li>Mrs. Somasree Bhadra – TIC, CSE</li>
          <li>Mr. Sourav Sarkar – HOD, CE</li>
        </ul>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          name="category"
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category *</option>
          <option value="Staff">Staff</option>
          <option value="Faculty">Faculty</option>
          <option value="Parent">Parent</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="name"
          placeholder="Name *"
          className="w-full p-2 border rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          className="w-full p-2 border rounded"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender *</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number *"
          className="w-full p-2 border rounded"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
        />

        <select
          name="complaintCategory"
          className="w-full p-2 border rounded"
          value={formData.complaintCategory}
          onChange={handleChange}
          required
        >
          <option value="">Complaint Category *</option>
          <option value="Academic">Academic</option>
          <option value="Examination">Examination and Results</option>
          <option value="Hostel">Hostel</option>
          <option value="Library">Library</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Harassment">Harassment & Discrimination</option>
          <option value="Administrative">Administrative Decision and Finance</option>
          <option value="Services">Services and Facilities</option>
        </select>

        <textarea
          name="complaintDetails"
          rows="4"
          maxLength="1000"
          placeholder="Complaint Details *"
          className="w-full p-2 border rounded"
          value={formData.complaintDetails}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Grievance;
