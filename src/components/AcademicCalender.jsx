import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const recognitions = [
  {
    title: "Academic Calender July 2023 – December 2023",
    pdf: "/Academic-Calender-July-2023-December-2023.pdf",
  },
  {
    title: "Academic Calendar January 2024 – June 2024",
    pdf: "/Academic-Calendar-January-2024-–-June-2024.pdf",
  },
];

const AcademicCalender = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Function to check if the device is mobile
  const isMobile = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  const handleDownload = (pdfUrl) => {
    if (isMobile()) {
      // Force download for mobile
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", "document.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Open in a new tab for desktop
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
      Academic Calender
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {recognitions.map((recognition, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
            data-aos="zoom-in"
          >
            <h2 className="text-xl font-semibold mb-4">{recognition.title}</h2>
            <button
              onClick={() => handleDownload(recognition.pdf)}
              className="text-blue-500 font-medium hover:underline"
            >
              {isMobile() ? "Download Document" : "View Document"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicCalender;
