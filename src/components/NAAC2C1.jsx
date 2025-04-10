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

const NAAC2C1 = () => {
    const [activeTab, setActiveTab] = useState("planning");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);



    const tableTwoData = [
        { year: "2018-19", description: "642" },
        { year: "2019-20", description: "753" },
        { year: "2020-21", description: "657" },
        { year: "2021-22", description: "863" },
        { year: "2022-23", description: "713" },
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
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Curricular Aspects(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'planning' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("planning")}>Curricular Planning and Implementation</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'academic' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("academic")}>Academic Flexibility</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'curriculum' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("curriculum")}>Curriculum Enrichment</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'feedback' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("feedback")}>Feedback System</button>
                </div>

                {activeTab === "planning" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">1.1 Curricular Planning and Implementation</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <p className="">1.1.1 The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment</p>
                            <a
                                href="/naacnew/Writeup.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write Up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.1.1_1708062291_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                1.1.1 Index
                            </a>

                            <a
                                href="/naacnew/1.1.1Writeup_Supporting_Documents.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                1.1.1 Supporting Document
                            </a>
                        </div>

                    </div>
                )}

                {activeTab === "academic" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">1.2 Academic Flexibility</h2>
                        <p className="">1.2.1 Number of Certificate/Value added courses offered and online courses of MOOCs, SWAYAM, NPTEL etc. (where the students of the institution have enrolled and successfully completed during the last five years)</p>
                        <p className="">Response: 48</p>

                        <div className="flex flex-col gap-2 mt-4 pt-2">

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708520642_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                a. List of students and the attendance sheet for the above mentioned programs
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708519076_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                b. Institutional programme brochure/notice for Certificate/Value added programs with course modules and outcomes
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708067739_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                c. Institutional data in the prescribed format modules and outcomes
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.1_1708062603_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                d. Evidence of course completion, like course completion certificate etc. Apart from the above:
                            </a>
                        </div>
                        <p className="">1.2.2 Percentage of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five years</p>
                        <p className="">Response: 57.48%</p>
                        <p className="">1.2.2.1 Number of students enrolled in Certificate/ Value added courses and also completed online courses of MOOCs, SWAYAM, NPTEL etc. as against the total number of students during the last five years</p>
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
                        <div className="flex flex-col gap-2 mt-4 pt-2">

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.2_1708071781_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                1.2.2 Index of Supporting Documents
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.2.2_1708067754_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                1.2.2 Institutional data
                            </a>
                        </div>
                    </div>
                )}

                {activeTab === "curriculum" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">1.3 Curriculum Enrichment</h2>
                        <p className="">1.3.1 Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum the last five years</p>
                        <a
                            href="/naacnew/Writeup2.pdf"
                            download
                            className="text-blue-700 underline hover:text-blue-900"
                        >
                            Write Up
                        </a>
                        <p className="">1.3.2 Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)</p>
                        <p className="">Response: 82.36%</p>
                        <p className="">1.3.2.1 Number of students undertaking project work/field work / internships</p>
                        <p className="">Response: 1158</p>
                        <div className="flex flex-col gap-2 mt-4 pt-2">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.3.2_1708064171_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                1.3.2.1 Index of Supporting Documents
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.3.2_1708073055_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                1.3.2.1 Institutional data
                            </a>
                        </div>
                    </div>

                )}
                {activeTab === "feedback" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">1.4 Feedback System</h2>
                    <p className="">1.4.1 Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website</p>
                    <p className="">Response: A. Feedback collected, analysed, action taken& communicated to the relevant bodies and feedback hosted on the institutional website</p>

                    <div className="flex flex-col gap-2 mt-4 pt-2">
                        <a
                            href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.4.1_1708064308_13845.pdf"
                            download
                            className="text-blue-700 underline hover:text-blue-900"
                        >
                            a. Feedback analysis report submitted to appropriate bodies
                        </a>
                        <a
                            href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.4.1_1708064473_13845.pdf"
                            download
                            className="text-blue-700 underline hover:text-blue-900"
                        >
                            b. At least 4 filled-in feedback form from different stake holders like Students, Teachers, Employers, Alumni etc
                        </a>
                        <a
                            href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/1.4.1_1708064279_13845.pdf"
                            download
                            className="text-blue-700 underline hover:text-blue-900"
                        >
                            c. Action taken report on the feedback analysis
                        </a>
                        <a
                            href="/naacnew/1.4.1action_taken_report.pdf"
                            download
                            className="text-blue-700 underline hover:text-blue-900"
                        >
                            d. Link of institution’s website where comprehensive feedback, its analytics and action taken report are hosted
                        </a>
                    </div>
                </div>

                )}
            </div>
        </div>
    );
};

export default NAAC2C1;