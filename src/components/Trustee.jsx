import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Trustee = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    const trustees = [
        { name: "Dr. Ashoke Binaykia", role: "Chairman", image: "https://via.placeholder.com/150" },
        { name: "Dr. Nandan Gupta", role: "Secretary", image: "https://via.placeholder.com/150" },
        { name: "Dr. Rakesh Binaykia", role: "Trust Member", image: "https://via.placeholder.com/150" },
        { name: "Mr. Chandan Gupta", role: "Trust Member", image: "https://via.placeholder.com/150" },
        { name: "Mr. Dilip Kumar Gupta", role: "Trust Member", image: "https://via.placeholder.com/150" },
        { name: "Ms. Ila Binaykia", role: "Trust Member", image: "https://via.placeholder.com/150" },
        { name: "Ms. Madhu Jain", role: "Trust Member", image: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6" data-aos="fade-in">
                Board of Trustees
            </h1>
            <div className="grid md:grid-cols-3 gap-6" data-aos="fade-up">
                {trustees.map((trustee, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-2xl p-4 text-center">
                        {/* <img src={trustee.image} alt={trustee.name} className="w-24 h-24 mx-auto rounded-full mb-4" /> */}
                        <h2 className="text-xl font-semibold">{trustee.name}</h2>
                        <p className="text-gray-600">{trustee.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trustee;
