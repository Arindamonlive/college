import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const recognitions = [
  {
    title: "Antiragging Committee",
    pdf: "/Antiragging-Committee.pdf",
  },
  {
    title: "Minority Committee",
    pdf: "/Minority-Committee.pdf",
  },
  {
    title: "SC, ST Committee",
    pdf: "/SC-ST-Committee.pdf",
  },
  {
    title: "OBC Cell",
    pdf: "/OBC-Cell.pdf",
  },
  {
    title: "Grievance Redressal Committee",
    pdf: "/Grievance-Redressal-Committee.pdf",
  },
  {
    title: "Internal Complain Committee",
    pdf: "/Internal-Complain-Committee.pdf",
  },
];

const Iiqa22_23 = () => {
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
        NAAC(National Assessment and Accreditation Council) Cycle-1 Year: 2013-18
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

      {/* Extra links */}
      <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4 text-center" data-aos="fade-up">
    Additional Documents & Reports
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* NAAC Cycle 1 (React page route) */}
    <Link
      to="/naac-ssr-2018-2019"
      className="block bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition duration-300 text-blue-800 hover:text-blue-900 font-medium text-center"
    >
      NAAC Cycle 1
    </Link>

    {/* All others (PDF downloads) */}
    {[
      { title: "AQAR 2022–2023", file: "/NAAC-AQAR-2022-23-1.pdf" },
      { title: "AQAR 2021–2022", file: "/AQAR-Report-2021-2022.pdf" },
      { title: "AQAR 2020–2021", file: "/AQAR-Report-2020-2021.pdf" },
      { title: "AQAR 2019–2020", file: "/AQAR-Report-2019-2020.pdf" },
      { title: "AQAR 2018–2019", file: "/AQAR-Report-2018-2019.pdf" },
      {
        title: "IQAC Meeting (2018–2023)",
        file: "/IQAC-Meeting-from-2018-2019-to-2022-2023.pdf",
      },
    ].map((item, idx) => (
      <a
        key={idx}
        href={item.file}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition duration-300 text-blue-800 hover:text-blue-900 font-medium text-center"
      >
        {item.title}
      </a>
    ))}
  </div>
</div>
    </div>
  );
};

export default Iiqa22_23;
