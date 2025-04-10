import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Faculty = () => {
  const [facultyList, setFacultyList] = useState([]);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await axios.get("/api/faculty"); // Adjust API
        setFacultyList(res.data);
      } catch (error) {
        console.error("Error fetching faculty data:", error);
        setFacultyList([]); // Fallback to empty array
      }
    };
    fetchFaculty();
  }, []);

  const groupedByDept = Array.isArray(facultyList)
    ? facultyList.reduce((acc, faculty) => {
        if (!acc[faculty.department]) acc[faculty.department] = [];
        acc[faculty.department].push(faculty);
        return acc;
      }, {})
    : {};

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">Our Faculty</h1>

      {Object.keys(groupedByDept).map((dept) => (
        <div key={dept} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{dept}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groupedByDept[dept].map((faculty, index) =>
              faculty.website ? (
                <Link to={faculty.website} key={index}>
                  <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl font-semibold text-blue-700">{faculty.name}</h3>
                    <p className="text-gray-600">{faculty.designation}</p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faculty;
