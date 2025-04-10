import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/images/organogram.jpeg";

const Organogram = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="container mx-auto px-6 py-10 text-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-6" data-aos="fade-down">Organogram Scheme</h1>
            <div className="flex justify-center" data-aos="fade-up">
                <img src={img} alt="Organogram" className="max-w-full rounded-lg shadow-lg" />
            </div>
        </div>
    );
};

export default Organogram;