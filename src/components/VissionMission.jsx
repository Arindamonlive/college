import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VissionMission=()=>{
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);
    return(
        <div className="container mx-auto px-6 py-10">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white text-center py-20 rounded-lg shadow-lg" data-aos="fade-down">
          <h1 className="text-4xl font-bold">Our Mission & Vision</h1>
          <p className="text-lg mt-2">Empowering the Future with Knowledge & Innovation</p>
        </div>
  
        {/* Vision Section */}
        <div className="mt-12 flex flex-col items-center text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Vision</h2>
          <p className="max-w-2xl text-gray-700 text-lg">
          The Institute is driven to provide excellent educational opportunities that are responsive to the needs of our economically backward students, mostly educated through vernacular mediums and hail from rural areas,to transform them to meet and surpass the challenges of our nation’s growing socioeconomic and technical demands.
          </p>
        </div>
  
        {/* Mission Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6" data-aos="fade-up">Our Mission</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission Points */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Mission 1:</h3>
              <p className="text-gray-700">
              To be a student-centric Institute imbibing experiential learning skills,addressing the technological & professional needs of society.
              </p>
            </div>
  
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Mission 2:</h3>
              <p className="text-gray-700">
              To train students as industry-ready professionals.
              </p>
            </div>
  
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-right">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Mission 3:</h3>
              <p className="text-gray-700">
              To encourage students constantly towards research & higher studies as a part of career advancement.
              </p>
            </div>
  
            <div className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="fade-left">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Mission 4:</h3>
              <p className="text-gray-700">
              To promote cocurricular and extracurricular activities for the overall personality development of the students.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default VissionMission;