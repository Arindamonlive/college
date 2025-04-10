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

const NAAC2C4 = () => {
    const [activeTab, setActiveTab] = useState("physical");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);


    const table1 = [
        { year: "2018-19", description: "305.19" },
        { year: "2019-20", description: "217.17" },
        { year: "2020-21", description: "94.98" },
        { year: "2021-22", description: "93.22" },
        { year: "2022-23", description: "134.83" },
    ];
    const table2 = [
        { year: "2018-19", description: "290.51" },
        { year: "2019-20", description: "295.09" },
        { year: "2020-21", description: "204.63" },
        { year: "2021-22", description: "240.23" },
        { year: "2022-23", description: "326.98" },
    ];
    

    return (
        <div className="bg-slate-50 font-sans min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Infrastructure and Learning Resources(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'physical' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("physical")}>Physical Facilities</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'library' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("library")}>Library as a Learning Resource</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'it' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("it")}>IT Infrastructure</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'campus' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("campus")}>Maintenance of Campus Infrastructure</button>
                </div>




                {activeTab === "physical" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">4.1 Physical Facilities</h2>
                        <p className="">4.1.1 The Institution has adequate infrastructure and other facilities for, teaching – learning, viz., classrooms, laboratories, computing equipment etc ICT – enabled facilities such as smart class, LMS etc.</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup10.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.1.1_1708182381_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.1.1 Index of Additional Information
                            </a>
                            <a
                                href="/naacnew/411Additionalinformation.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.1.1 Additional Information
                            </a>
                        </div>
                        <p className="">4.1.2 Percentage of expenditure for infrastructure development and augmentation excluding salary during the last five years</p>
                        <p className="">Response: 35.66%</p>
                        <p className="">4.1.2.1 Expenditure for infrastructure development and augmentation, excluding salary year wise during last five years (INR in lakhs)</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">INR in lakhs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table1.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.1.2_1708175640_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.1.2.1 Institutional data
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.1.2_1708519457_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.1.2.1 Audited income and expenditure statement
                            </a>
                        </div>
                    </div>
                )}








                {activeTab === "library" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">4.2 Library as a Learning Resource</h2>
                        <p className="">4.2.1 Library is automated with digital facilities using Integrated Library Management System (ILMS), adequate subscriptions to e-resources and journals are made. The library is optimally used by the faculty and students</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup11.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write Up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.2.1_1708182415_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.2.1 Index of Additional Information
                            </a>
                            <a
                                href="/naacnew/421Additionalinformation.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.2.1 Additional Information
                            </a>
                        </div>
                    </div>
                )}





                {activeTab === "it" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">4.3 IT Infrastructure</h2>
                        <p className="">4.3.1 Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup12.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.3.1_1708182432_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.3.1 Index of Additional Information
                            </a>
                            <a
                                href="/naacnew/431Additionalinformation.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.3.1 Additional Information
                            </a>
                        </div>
                        <p className="">4.3.2 Student – Computer ratio (Data for the latest completed academic year)</p>
                        <p className="">Response: 0.56%</p>
                        <p className="">4.3.2.1 Number of computers available for students usage during the latest completed academic year:</p>
                        <p className="">Response: 320</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.3.2_1708182472_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.3.2 Purchased Bills/Copies
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.3.2_1708182494_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.3.2 Extracts stock register/ highlighting the computers
                            </a>
                        </div>
                    </div>

                )}





                {activeTab === "campus" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">4.4 Maintenance of Campus Infrastructure</h2>
                        <p className="">4.4.1 Percentage expenditure incurred on maintenance of physical facilities and academic support facilities excluding salary component, during the last five years (INR in Lakhs)</p>
                        <p className="">Response: 57.25%</p>
                        <p className="">4.4.1.1 Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)</p>
                        <table className="py-2 w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">INR in lakhs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table2.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.4.1_1708176122_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.4.1 Institutional data
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/4.4.1_1708519318_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                4.4.1 Audited income and expenditure statement
                            </a>
                        </div>
                    </div>
                )}





            </div>
        </div>
    );
};

export default NAAC2C4;