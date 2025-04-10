import React,{ useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DCSE = () => {
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        AOS.init();

        // Simulated API call to ERP
        fetch("https://erp.svist.edu/api/faculty/mechanical")
            .then(res => res.json())
            .then(data => setFaculty(data))
            .catch(() => {
                setFaculty([
                    { name: "Dr. Suman Das", title: "Professor & HOD", photo: "https://via.placeholder.com/100" },
                    { name: "Dr. Somnath Das", title: "Associate Professor", photo: "https://via.placeholder.com/100" },
                    { name: "Dr. Nilanjan Roy", title: "Assistant Professor", photo: "https://via.placeholder.com/100" },
                    { name: "Mr. Arindam Chakraborty", title: "Assistant Professor & Website Administrator", photo: "https://via.placeholder.com/100" },
                ]);
            });
    }, []);

    return (
        <div className="font-sans bg-gradient-to-r from-slate-50 to-slate-100">
            <section className="max-w-6xl mx-auto py-10 px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-10" data-aos="zoom-in">
                    <div>
                        <h1 className="text-4xl font-extrabold text-blue-900 mb-4 underline decoration-wavy">Mechanical Engineering Department</h1>
                        <p className="text-gray-700">NAAC Accredited | AICTE Approved | Affiliated to MAKAUT & WBSCTE</p>
                    </div>
                    <div>
                        <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-100 rounded-xl shadow-inner flex items-center justify-center border border-dashed">
                            <span className="text-gray-500 text-lg italic">[Slideshow Placeholder - Department Activities]</span>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10" data-aos="fade-up">
                    <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">💼 Career Scope</h3>
                        <p className="text-gray-600 text-sm">Opportunities in core and interdisciplinary engineering domains, research, and entrepreneurship.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-500">
                        <h3 className="text-xl font-semibold text-green-700 mb-2">🧪 Labs & Innovation</h3>
                        <p className="text-gray-600 text-sm">State-of-the-art labs for Thermal, Design, Production, and Fluid Mechanics to encourage practical learning.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">📚 Research & Projects</h3>
                        <p className="text-gray-600 text-sm">Student-led innovations in robotics, automotive systems, and sustainable energy solutions.</p>
                    </div>
                </div>

                <div id="about" className="bg-white rounded-2xl p-6 shadow mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">About the Department</h2>
                    <p className="text-gray-700 leading-relaxed">The Department of Mechanical Engineering was established in 2008 and currently has an intake of 60 students. It boasts excellent infrastructural facilities, well-equipped laboratories, and a team of highly qualified and dedicated faculty members.</p>
                </div>

                <div id="hod-message" className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 shadow mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-blue-700 mb-2">Message from the HOD</h2>
                    <p className="text-gray-700 leading-relaxed">Welcome to the Department of Mechanical Engineering. We are committed to offering an inspiring and transformative learning experience, empowering our students to achieve new heights in their professional careers.</p>
                </div>

                <div id="faculty" className="bg-white rounded-2xl p-6 shadow mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Faculty Profiles</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                        {faculty.map((member, index) => (
                            <div key={index} className="bg-gray-50 p-4 rounded-xl shadow-inner flex items-center gap-4">
                                <img src={member.photo || "https://via.placeholder.com/100"} alt={member.name} className="w-16 h-16 rounded-full object-cover border" />
                                <div>
                                    <p className="font-semibold text-blue-800">{member.name}</p>
                                    <p className="text-sm text-gray-500">{member.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div id="placements" className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow mb-8" data-aos="fade-up">
                    <h2 className="text-2xl font-bold text-blue-700 mb-4">Placement Highlights</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-200 rounded-xl">
                            <thead>
                                <tr className="bg-blue-100 text-left">
                                    <th className="py-2 px-4 border-b">Student Name</th>
                                    <th className="py-2 px-4 border-b">Company</th>
                                    <th className="py-2 px-4 border-b">Salary Package</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border-b">Aritra Ghosh</td>
                                    <td className="py-2 px-4 border-b">Spinny</td>
                                    <td className="py-2 px-4 border-b">4.10 LPA</td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="py-2 px-4 border-b">Avijit Ghara</td>
                                    <td className="py-2 px-4 border-b">Cryogenic Concern Pvt. Ltd.</td>
                                    <td className="py-2 px-4 border-b">1.82 LPA</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4">Sourav Maity</td>
                                    <td className="py-2 px-4">Reliance Retail Ltd.</td>
                                    <td className="py-2 px-4">4 LPA</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <footer id="contact" className="text-center bg-blue-800 text-white py-6 rounded-xl" data-aos="fade-up">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p>Email: info@svist.edu</p>
                    <p>Phone: +91 12345 67890</p>
                </footer>
            </section>
        </div>
    );
};

export default DCSE;