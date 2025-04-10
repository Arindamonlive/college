import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

const NAAC2Extended = () => {
    const [activeTab, setActiveTab] = useState("students");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);

    const tableOneData = [
        { year: "2018-19", description: "1110", link: "/naacnew/11SupportingDocuments-3.pdf" },
        { year: "2019-20", description: "1044", link: "/naacnew/11SupportingDocuments-4.pdf" },
        { year: "2020-21", description: "1365", link: "/naacnew/11SupportingDocuments-5.pdf" },
        { year: "2021-22", description: "1347", link: "/naacnew/11SupportingDocuments-6.pdf" },
        { year: "2022-23", description: "1406", link: "/naacnew/11Supportingdocuments-7.pdf" },
    ];

    const tableTwoData = [
        { year: "2018-19", description: "103" },
        { year: "2019-20", description: "109" },
        { year: "2020-21", description: "106" },
        { year: "2021-22", description: "100" },
        { year: "2022-23", description: "94" },
    ];

    const tableThreeData = [
        { year: "2018-19", description: "637.98" },
        { year: "2019-20", description: "546.77" },
        { year: "2020-21", description: "326.47" },
        { year: "2021-22", description: "367.38" },
        { year: "2022-23", description: "492.41" },
    ];

    return (
        <div className="bg-slate-50 font-sans min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Extended Profile(Cycle -2)</h1>

                <div className="flex gap-4 mb-6" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'students' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("students")}>Students</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'teachers' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("teachers")}>Teachers</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'institution' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("institution")}>Institution</button>
                </div>

                {activeTab === "students" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Student Details</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <p className="">1.1 Number of students year wise during the last five years</p>
                            <a
                                href="/naacnew/11Supportingdocuments-1.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Approved Program List & Intake Capacity
                            </a>

                            <a
                                href="/naacnew/11SupportingDocuments-2.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Approval Letter of affiliating University MAKAUT
                            </a>
                        </div>

                        <table className="w-full table-auto border border-gray-200 py-2 mt-4">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Intake</th>
                                    <th className="border px-4 py-2 text-left">Document</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableOneData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                        <td className="border px-4 py-2 text-blue-600 underline">
                                            <a href={item.link} download>Download</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708423736_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Institutional data in prescribed format
                            </a>
                    </div>
                )}

                {activeTab === "teachers" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Curriculum Details</h2>
                        <p className="">2.1 Number of teaching staff / full time teachers during the last five years (Without repeat count):</p>
                        <p className="">Response: 186</p>
                        <p className="">1.1 Number of students year wise during the last five years</p>
                        <div className="flex flex-col gap-2 mt-4 pt-2">
                            
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708341276_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Supporting Document
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708510605_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Institutional Data
                            </a>
                        </div>
                        <p className="">2.2 Number of teaching staff / full time teachers year wise during the last five years</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableTwoData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === "institution" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Academic Calendar</h2>
                        <p className="">3.1 Expenditure excluding salary component year wise during the last five years (INR in lakhs)</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableThreeData.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/dynamic_1708172191_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Supporting Document
                            </a>
                    </div>
                    
                )}
            </div>
        </div>
    );
};

export default NAAC2Extended;