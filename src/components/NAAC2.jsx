import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';

const recognitions = [
  {
    title: "AQAR 2022-23",
    pdf: "/naacnew/AQAR_2022-23.pdf",
  },
  {
    title: "NAAC SSR 2024",
    pdf: "/naacnew/NAAC%20SSR%20CYCLE2_2K24_Final.pdf",
  },
];

const NAAC2 = () => {
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
        NAAC(National Assessment and Accreditation Council) Cycle-2, Year: 2018-23
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
      <Link to="/naac-cycle-2/extendedprofile" data-aos="fade-up">
  <h2 className="text-3xl font-bold text-center mb-8 pt-2 cursor-pointer text-blue-700 transition-all">
    Extended Profile
  </h2>
</Link>

<h2 className="text-2xl font-bold text-center mb-6" data-aos="fade-up">
  Criteria-wise Reports
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10" data-aos="fade-up">
  {[
    { title: "Criterion 1", subtitle: "Curricular Aspects", path: "/naac-cycle-2/criterion1" },
    { title: "Criterion 2", subtitle: "Teaching-Learning & Evaluation", path: "/naac-cycle-2/criterion2" },
    { title: "Criterion 3", subtitle: "Research, Innovations & Extension", path: "/naac-cycle-2/criterion3" },
    { title: "Criterion 4", subtitle: "Infrastructure & Learning Resources", path: "/naac-cycle-2/criterion4" },
    { title: "Criterion 5", subtitle: "Student Support & Progression", path: "/naac-cycle-2/criterion5" },
    { title: "Criterion 6", subtitle: "Governance, Leadership & Management", path: "/naac-cycle-2/criterion6" },
    { title: "Criterion 7", subtitle: "Institutional Values and Best Practices", path: "/naac-cycle-2/criterion7" },
  ].map((criterion, index) => (
    <Link
      to={criterion.path}
      key={index}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-200 hover:border-blue-400 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="text-blue-700 text-xl font-bold mb-2">{criterion.title}</div>
        <div className="text-gray-600 text-sm">{criterion.subtitle}</div>
      </div>
    </Link>
  ))}
</div>


    </div>
  );
};

export default NAAC2;
