
import React, { useState, useEffect } from "react";

const Rti = () => {
  const [isMobile, setIsMobile] = useState(false);
  const pdf1 = "/RTI-Act.pdf";
  const pdf2 = "/Statutory-Declaration-under-Section-41-b-of-the-RTI-Act-2005.pdf";

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth <= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">RTI ACT</h1>

      {isMobile ? (
        <div className="text-center">
          <p className="text-lg mb-4">PDF viewing is not supported on mobile browsers. Please download it.</p>
          <a href={pdf1} download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download PDF
          </a>
        </div>
      ) : (
        <div className="flex justify-center">
          <iframe
            src={pdf1}
            className="w-full h-[80vh] border rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
      <h1 className="text-3xl font-bold text-center mb-6">Statutory Declaration under Section 4(1) (b) of the RTI Act, 2005</h1>

      {isMobile ? (
        <div className="text-center">
          <p className="text-lg mb-4">PDF viewing is not supported on mobile browsers. Please download it.</p>
          <a href={pdf2} download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download PDF
          </a>
        </div>
      ) : (
        <div className="flex justify-center">
          <iframe
            src={pdf2}
            className="w-full h-[80vh] border rounded-lg shadow-lg"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Rti;
