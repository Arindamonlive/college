import React from "react";
import { FaGraduationCap, FaUniversity, FaBriefcase, FaPhone, FaEnvelope, FaGlobe, FaBuilding, FaUserTie, FaBullhorn } from "react-icons/fa";
import campusImage from "../assets/images/logo.png"; // Placeholder for campus image
import heroImage from "../assets/images/logo.png"; // Placeholder for hero image
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const announcementSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
    };


    const announcements = [
        { text: "Upcoming Class Test - 15th April 2025", link: "/class-test" },
        { text: "New Routine for Semester 2 Released", link: "/routine" },
        { text: "Workshop on AI & Machine Learning - Register Now!", link: "/workshop-ai" },
        { text: "Annual Sports Meet - Registrations Open", link: "/sports-meet" },
        { text: "Industry Interaction Session with Top IT Leaders", link: "/industry-session" },
        { text: "New Announcement", link: "/new-announcement" },
    ];

    return (
        <div className="bg-gray-100 text-gray-900 overflow-x-hidden">
            {/* Hero Section with Slideshow */}
            <section className="relative text-white text-center bg-gray-900 "data-aos="fade-in">
                <Slider {...sliderSettings}>
                    <div>
                        <img src={heroImage} alt="Hero 1" className="w-full h-[500px] object-cover" />
                    </div>
                    <div>
                        <img src={campusImage} alt="Hero 2" className="w-full h-[500px] object-cover" />
                    </div>
                </Slider>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                    <h1 className="text-5xl font-extrabold uppercase">Swami Vivekananda Institute of Science & Technology</h1>
                    <p className="mt-3 text-lg font-light max-w-2xl mx-auto">Excellence in Education, Innovation & Research</p>
                    <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg shadow-lg">Apply Now</button>
                </div>
            </section>

            {/* About Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Why Choose SVIST?</h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-600">A premier institution providing top-notch education with state-of-the-art infrastructure.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="p-8 bg-white shadow-lg rounded-xl">
                        <FaUniversity className="text-blue-700 text-5xl mx-auto" />
                        <h3 className="mt-4 font-semibold text-xl">Accredited & Recognized</h3>
                        <p className="text-gray-600 mt-2">AICTE Approved, Affiliated to MAKAUT, NAAC Accredited</p>
                    </div>
                    <div className="p-8 bg-white shadow-lg rounded-xl">
                        <FaUserTie className="text-blue-700 text-5xl mx-auto" />
                        <h3 className="mt-4 font-semibold text-xl">100% Placement Assistance</h3>
                        <p className="text-gray-600 mt-2">Top recruiters offer high salary packages</p>
                    </div>
                    <div className="p-8 bg-white shadow-lg rounded-xl">
                        <FaBuilding className="text-blue-700 text-5xl mx-auto" />
                        <h3 className="mt-4 font-semibold text-xl">World-Class Infrastructure</h3>
                        <p className="text-gray-600 mt-2">Modern classrooms, laboratories, and hostels</p>
                    </div>
                </div>
            </section>



            {/* Campus Tour */}
            <section className="relative text-white text-center py-24 bg-cover bg-center" style={{ backgroundImage: `url(${campusImage})` }}>
                <div className="bg-black bg-opacity-60 py-20">
                    <h2 className="text-4xl font-semibold">Experience Our Campus</h2>
                    <p className="mt-3 text-lg max-w-2xl mx-auto">Take a virtual tour and explore the vibrant campus life at SVIST.</p>
                    <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg shadow-lg">Watch Video</button>
                </div>
            </section>

            {/* News & Events */}
            <section className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-bold text-gray-800">News & Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="grid grid-rows-3 gap-4">
                        <div className="p-6 bg-white shadow-lg rounded-xl">
                            <h3 className="font-semibold text-lg">Tech Fest 2025</h3>
                            <p className="mt-3 text-gray-600">Join the biggest tech fest with innovative projects and competitions.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl">
                            <h3 className="font-semibold text-lg">Placement Drive</h3>
                            <p className="mt-3 text-gray-600">Top companies are visiting our campus for recruitments.</p>
                        </div>
                        <div className="p-6 bg-white shadow-lg rounded-xl">
                            <h3 className="font-semibold text-lg">International Conference</h3>
                            <p className="mt-3 text-gray-600">Global experts share insights on cutting-edge research.</p>
                        </div>
                    </div>
                    {/* Announcements Section */}
                    <section className="container mx-auto px-6 py-12">
                        <h2 className="text-4xl font-bold text-gray-800 text-center">Latest Announcements</h2>
                        <div className="mt-6 bg-white p-6 shadow-lg rounded-lg">
                            <Slider {...announcementSettings}>
                                {announcements.map((announcement, index) => (
                                    <a key={index} href={announcement.link} className="flex items-center justify-center h-12 hover:text-blue-600 transition duration-300">
                                        <FaBullhorn className="text-red-500 text-xl mr-2" />
                                        <p className="font-semibold text-lg">{announcement.text}</p>
                                    </a>
                                ))}
                            </Slider>
                        </div>
                    </section>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-blue-600 text-white py-12 text-center">
                <h2 className="text-4xl font-semibold">Contact Us</h2>
                <p className="mt-4 flex justify-center items-center"><FaPhone className="mr-2" /><a href="tel:+911234567890" className="hover:underline">+91 1234567890</a></p>
                <p className="mt-2 flex justify-center items-center"><FaEnvelope className="mr-2" /><a href="mailto:info@svist.edu.in" className="hover:underline">info@svist.edu.in</a></p>
            </section>
        </div>
    );
};

export default HomePage;