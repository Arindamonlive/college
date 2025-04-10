import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// Import hero image manually
import placementHero from "/placement/latest-placement-3.jpg";

// Full list of placement image filenames
const placementImages = [
    "Btech-placement-2020-svist-1.webp",
    "Btech-placement-2020-svist-2.webp",
    "Btech-placement-2020-svist-3.webp",
    "Btech-placement-2020-svist-4.webp",
    "Btech-placement-2021-svist-1.webp",
    "Btech-placement-2021-svist-2.webp",
    "Btech-placement-2021-svist-3.webp",
    "Btech-placement-2021-svist-4.webp",
    "Btech-placement-2021-svist-55.webp",
    "Btech-placement-2021-svist.webp",
    "excellent-placement1.webp",
    "latest-placement-1.jpg",
    "latest-placement-1.webp",
    "latest-placement-10.jpg",
    "latest-placement-10.webp",
    "latest-placement-11.jpg",
    "latest-placement-11.webp",
    "latest-placement-12.jpg",
    "latest-placement-12.webp",
    "latest-placement-13.jpg",
    "latest-placement-13.webp",
    "latest-placement-14.jpg",
    "latest-placement-14.webp",
    "latest-placement-15.jpg",
    "latest-placement-15.webp",
    "latest-placement-16.jpeg",
    "latest-placement-16.jpg",
    "latest-placement-16.webp",
    "latest-placement-17.jpeg",
    "latest-placement-17.jpg",
    "latest-placement-17.webp",
    "latest-placement-18.jpeg",
    "latest-placement-18.jpg",
    "latest-placement-18.webp",
    "latest-placement-19.jpg",
    "latest-placement-19.webp",
    "latest-placement-2.jpg",
    "latest-placement-2.webp",
    "latest-placement-20.jpg",
    "latest-placement-20.webp",
    "latest-placement-21.jpg",
    "latest-placement-21.webp",
    "latest-placement-22.jpg",
    "latest-placement-22.webp",
    "latest-placement-23.jpg",
    "latest-placement-23.webp",
    "latest-placement-24.jpg",
    "latest-placement-24.webp",
    "latest-placement-25.jpg",
    "latest-placement-25.webp",
    "latest-placement-26.jpg",
    "latest-placement-26.webp",
    "latest-placement-27.jpg",
    "latest-placement-27.webp",
    "latest-placement-28.jpg",
    "latest-placement-28.webp",
    "latest-placement-29.jpg",
    "latest-placement-29.webp",
    "latest-placement-3.jpg",
    "latest-placement-3.webp",
    "latest-placement-30.webp",
    "latest-placement-4.jpg",
    "latest-placement-4.webp",
    "latest-placement-5.jpg",
    "latest-placement-5.webp",
    "latest-placement-6.jpg",
    "latest-placement-6.webp",
    "latest-placement-7.jpg",
    "latest-placement-7.webp",
    "latest-placement-8.jpg",
    "latest-placement-8.webp",
    "latest-placement-9.jpg",
    "latest-placement-9.webp"
];

const PlacementPage = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % placementImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white text-gray-900 overflow-x-hidden">
            {/* Hero Section */}
            <section
                className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
                style={{ backgroundImage: `url(${placementHero})` }}
            >
                <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0" />
                <div className="relative z-10 max-w-4xl px-6">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Unveiling the Placement Triumph at SVIST
                    </h1>
                    <p className="mt-4 text-lg font-light">
                        Where educational prowess converges with unparalleled career
                        opportunities
                    </p>
                </div>
            </section>

            {/* About Placement */}
            <section className="px-6 py-12 max-w-6xl mx-auto">
                <p className="text-lg text-gray-700 mb-6">
                    Welcome to the esteemed halls of Swami Vivekananda Institute of Science and Technology (SVIST), where educational prowess converges with unparalleled career opportunities! Join us as we unveil the remarkable saga of B.Tech placement triumph at our institution.

                    SVIST is renowned for its excellent B.Tech Placement, with graduates securing coveted positions in leading companies. Rigorous training, industry exposure, and dedicated career support ensure our students are well-prepared for the professional world, making SVIST the preferred choice for aspiring engineers in Kolkata.
                </p>
                <h2 className="text-2xl font-semibold text-blue-700 mt-8 mb-4">
                    Why SVIST Stands Out for B.Tech
                </h2>
                <ul className="list-disc pl-6 space-y-4 text-gray-800">
                    <li>
                        <strong>Innovation-Infused Curriculum:</strong> At Swami Vivekananda Institute of Science and Technology (SVIST), innovation is not just encouraged; it’s ingrained in our DNA. Our B.Tech programs are meticulously curated to blend theoretical knowledge with hands-on experience, fostering agile minds poised to tackle the challenges of tomorrow.
                    </li>
                    <li>
                        <strong>Mentorship by Maestros:</strong> Prepare to be mentored by luminaries in the field. Our faculty roster comprises industry stalwarts and academic virtuosos who are dedicated to sculpting the leaders of tomorrow, imparting invaluable insights and igniting intellectual curiosity.
                    </li>
                    <li>
                        <strong>Technological Oasis:</strong> Step into a technological oasis where boundaries blur, and creativity thrives. From cutting-edge labs to futuristic infrastructure, our campus is a playground for exploration, innovation, and boundless possibilities.
                    </li>
                    <li>
                        <strong>Placement Paradigm Redefined:</strong> Witness the transformative power of our placement cell, redefining the paradigm of B.Tech placements. Armed with industry connections, career guidance, and personalized support, we pave the way for our students to secure coveted positions in leading organizations worldwide.
                    </li>
                </ul>
            </section>

            {/* Slideshow Section */}
            <section className="bg-gray-100 py-12 px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Placement Glimpses
                </h2>
                <div className="relative h-[400px] max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl">
                    <AnimatePresence>
                        <motion.img
                            key={current}
                            src={`/placement/${placementImages[current]}`}
                            alt={`Placement ${current + 1}`}
                            className="absolute w-full h-full object-contain rounded-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                </div>
            </section>

            {/* Glimpses Boxes */}
            <section className="bg-gray-50 py-16 px-6">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Glimpse of Placements – 2023
                </h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow">
                        Trainings for Skill Improvements
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        Excellent B.Tech Placements
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        Department-wise Training (1st to 4th Year)
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        A Glimpse to Our Excellent Placement Record
                    </div>
                </div>
            </section>

            {/* Brochure Download */}
            <section className="py-12 px-6 text-center bg-blue-600 text-white">
                <h2 className="text-3xl font-bold mb-4">Placement Brochure</h2>
                <a
                    href="/placement/Success-stories-placement-btech-SVIST.pdf"
                    download
                    className="bg-yellow-400 text-black px-6 py-3 rounded-lg inline-flex items-center gap-2 hover:bg-yellow-500 font-semibold"
                >
                    <FaDownload /> DOWNLOAD BROCHURE
                </a>
            </section>

            {/* Placement Cell Contacts */}
            <section className="px-6 py-16 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                    Placement Cell Core Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Mr. Tapas Bandopadhyay",
                            role: "General Manager",
                            phone: "+91 – 9748003415",
                            email: "vivekananda.tapas@svist.org",
                        },
                        {
                            name: "Ms. Jayita Chakraborty",
                            role: "Sr. Officer",
                            phone: "+91 – 9903509097",
                            email: "jayitachakraborty@svist.org",
                        },
                        {
                            name: "Mr. Viki Das",
                            role: "TPO",
                            phone: "+91 – 98836 51246",
                            email: "tposwamiji@gmail.com",
                        },
                        {
                            name: "Mr. Avishek Garai",
                            role: "Coordinator",
                            phone: "+91 – 81456 76428",
                            email: "avishekgarai.svist@gmail.com",
                        },
                        {
                            name: "Mr. Sudip Rajak",
                            role: "TPO",
                            phone: "+91 – 7003639269",
                            email: "sudip.rajaktpo@svist.co.in",
                        }
                    ].map((person, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-blue-700">
                                {person.name}
                            </h3>
                            <p className="text-gray-600">{person.role}</p>
                            <p className="mt-1">📞 {person.phone}</p>
                            <p className="mt-1">✉️ {person.email}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PlacementPage;