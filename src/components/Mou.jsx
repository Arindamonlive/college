import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import edunet_1 from "../assets/images/edunet_1.jpg";
import edunet_2 from "../assets/images/edunet_2.jpg";
import elenation_1 from "../assets/images/elenation_1.jpg";
import elenation_2 from "../assets/images/elenation_2.jpg";
import endurance_1 from "../assets/images/endurance_1.jpg";
import endurance_2 from "../assets/images/endurance_2.jpg";
import hexa_1 from "../assets/images/hexa_1.jpg";
import hexa_2 from "../assets/images/hexa_2.jpg";
import pieinfocom_1 from "../assets/images/pieinfocom_1.jpg";
import pieinfocom_2 from "../assets/images/pieinfocom_2.jpg";

const mouData = [
  {
    title: "Edunet Foundation",
    images: [edunet_1, edunet_2],
    description: "Collaboration on research and student exchange programs."
  },
  {
    title: "Eleation",
    images: [elenation_1, elenation_2],
    description: "Industry partnership for skill development and innovation."
  },
  {
    title: "Endurance Technologies Limited",
    images: [endurance_1, endurance_2],
    description: "Joint research projects in emerging technologies."
  },
  {
    title: "Hexahire Private Limited",
    images: [hexa_1, hexa_2],
    description: "Policy development and technical collaboration."
  },
  {
    title: "Pie Infocom Private Limited",
    images: [pieinfocom_1, pieinfocom_2],
    description: "Global outreach programs and student scholarships."
  }
];

const Mou = () => {
  const [selectedMou, setSelectedMou] = useState(null);

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Memorandums of Understanding (MoUs)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {mouData.map((mou, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg cursor-pointer"
            data-aos="zoom-in"
            onClick={() => setSelectedMou(mou)}
          >
            <h2 className="text-xl font-semibold mb-2">{mou.title}</h2>
            <div className="grid grid-cols-2 gap-2">
              {mou.images.map((image, i) => (
                <img key={i} src={image} alt={`MoU ${index + 1} - ${i + 1}`} className="rounded-lg shadow-md" />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {selectedMou && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4"
          onClick={() => setSelectedMou(null)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedMou.title}</h2>
            <div className="grid grid-cols-2 gap-4">
              {selectedMou.images.map((image, i) => (
                <img key={i} src={image} alt={`Expanded MoU ${i + 1}`} className="rounded-lg shadow-md" />
              ))}
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 block mx-auto"
              onClick={() => setSelectedMou(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mou;