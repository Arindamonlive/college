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

const NAAC2C2 = () => {
    const [activeTab, setActiveTab] = useState("enrollment");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);


    const table1 = [
        { year: "2018-19", description: "157" },
        { year: "2019-20", description: "168" },
        { year: "2020-21", description: "118" },
        { year: "2021-22", description: "189" },
        { year: "2022-23", description: "209" },
    ];
    const table2 = [
        { year: "2018-19", description: "450" },
        { year: "2019-20", description: "450" },
        { year: "2020-21", description: "450" },
        { year: "2021-22", description: "450" },
        { year: "2022-23", description: "450" },
    ];
    const table3 = [
        { year: "2018-19", description: "23" },
        { year: "2019-20", description: "42" },
        { year: "2020-21", description: "31" },
        { year: "2021-22", description: "42" },
        { year: "2022-23", description: "63" },
    ];
    const table4 = [
        { year: "2018-19", description: "195" },
        { year: "2019-20", description: "195" },
        { year: "2020-21", description: "195" },
        { year: "2021-22", description: "195" },
        { year: "2022-23", description: "195" },
    ];

    const table5 = [
        { year: "2018-19", description: "103" },
        { year: "2019-20", description: "109" },
        { year: "2020-21", description: "106" },
        { year: "2021-22", description: "100" },
        { year: "2022-23", description: "94" },
    ];

    const table6 = [
        { year: "2018-19", description: "13" },
        { year: "2019-20", description: "15" },
        { year: "2020-21", description: "13" },
        { year: "2021-22", description: "18" },
        { year: "2022-23", description: "20" },
    ];
    const table7 = [
        { year: "2018-19", description: "392" },
        { year: "2019-20", description: "380" },
        { year: "2020-21", description: "356" },
        { year: "2021-22", description: "346" },
        { year: "2022-23", description: "404" },
    ];
    const table8 = [
        { year: "2018-19", description: "415" },
        { year: "2019-20", description: "400" },
        { year: "2020-21", description: "364" },
        { year: "2021-22", description: "350" },
        { year: "2022-23", description: "438" },
    ];

    return (
        <div className="bg-slate-50 font-sans min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Teaching-learning and Evaluation(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'enrollment' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("enrollment")}>Student Enrollment and Profile</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'ratio' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("ratio")}>Student Teacher Ratio</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'process' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("process")}>Teaching- Learning Process</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("profile")}>Teacher Profile and Quality</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'reforms' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("reforms")}>Evaluation Process and Reforms</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'outcomes' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("outcomes")}>Student Performance and Learning Outcomes</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'survey' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("survey")}>Student Satisfaction Survey</button>


                </div>

                {activeTab === "enrollment" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.1 Student Enrollment and Profile</h2>
                        <p className="">2.1.1 Enrolment percentage</p>
                        <p className="">Response: 37.38%</p>
                        <p className="">2.1.1.1 Number of seats filled year wise during last five years (Only first year admissions to be considered)</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
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
                        <p className="py-2">2.1.1.2 Number of sanctioned seats year wise during last five years</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708071976_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.1.1 Institutional data
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708071994_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.1.1 Final admission list as published by the HEI and endorsed by the competent authority
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.1_1708072056_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.1.1 Document related to sanction of intake from affiliating University/ Government/statutory body for first year’s students only.
                            </a>
                        </div>
                        <p className="">2.1.2 Percentage of seats filled against reserved categories (SC, ST, OBC etc.) as per applicable reservation policy for the first year admission during the last five years</p>
                        <p className="">Response: 20.62%</p>
                        <p className="py-2">2.1.2.1 Number of actual students admitted from the reserved categories year wise during last five years (Exclusive of supernumerary seats)</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table3.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="py-2">2.1.2.2 Number of seats earmarked for reserved category as per GOI/ State Govt rule year wise during the last five years</p>
                        <table className="w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table4.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708072189_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.1.2 Institutional data
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708157550_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.1.2 Final admission list indicating the category as published by the HEI and endorsed by the competent authority.
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.1.2_1708076186_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.1.2 Copy of communication issued by state govt. or Central Government indicating the reserved categories(SC,ST,OBC,Divyangjan,etc.) to be considered as per the state rule ( Translated copy in English to be provided as applicable)
                            </a>
                        </div>
                    </div>
                )}








                {activeTab === "ratio" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.2 Student Teacher Ratio</h2>
                        <p className="">2.2.1 Student – Full time Teacher Ratio (Data for the latest completed academic year)</p>
                        <p className="">Response: 14.96%</p>


                    </div>
                )}





                {activeTab === "process" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.3 Teaching- Learning Process</h2>
                        <p className="">2.3.1 Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences and teachers use ICT- enabled tools including online resources for effective teaching and learning process 2.3.1 Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences and teachers use ICT- enabled tools including online resources for effective teaching and learning process</p>

                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup3.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write Up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.3.1_1708179957_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.3.1 Index of Supporting Document
                            </a>

                            <a
                                href="/naacnew/2.3.1Supporting_Document.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.3.1 Supporting Document
                            </a>
                        </div>

                    </div>

                )}




                {activeTab === "profile" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.4 Teacher Profile and Quality</h2>
                        <p className="">2.4.1 Percentage of full-time teachers against sanctioned posts during the last five years</p>
                        <p className="">2.4.1.1 Number of sanctioned posts year wise during the last five years</p>

                        <table className="py-2 w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table5.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <a
                            href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.1_1708072339_13845.pdf"
                            download
                            className="text-blue-700 underline hover:text-blue-900"
                        >
                            2.4.1.1 Sanction letters
                        </a>
                        <p className="">2.4.2 Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt./L.L.D. during the last five years (consider only highest degree for count)</p>
                        <p className="">Response: 15:43%</p>
                        <p className="">2.4.2.1 Number of full time teachers with NET/SET/SLET/Ph. D./ D.Sc. / D.Litt./L.L.D year wise during the last five years</p>
                        <table className="py-2 w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table6.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.2_1708351944_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.4.2.1 List of faculties having Ph. D. / D.Sc. / D.Litt./L.L.D
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.2_1708511207_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.4.2.1 Institution data
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.4.2_1708072460_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.4.2.1 Copies of Ph.D./D.Sc / D.Litt./ L.L.D awareded by UGC recognized universities
                            </a>
                        </div>
                    </div>
                )}


                {activeTab === "reforms" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.5 Evaluation Process and Reforms</h2>
                        <p className="">2.5.1 Mechanism of internal/ external assessment is transparent and the grievance redressal system is time- bound and efficient</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup4.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.5.1_1708179906_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.5.1 Index of Supporting Document
                            </a>

                            <a
                                href="/naacnew/2.5.1Supporting_Documents.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.5.1 Supporting Document
                            </a>
                        </div>
                    </div>
                )}


                {activeTab === "outcomes" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.6 Student Performance and Learning Outcomes</h2>
                        <p className="">2.6.1 Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup5.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.1_1708257432_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.1 Index of Supporting Document
                            </a>

                            <a
                                href="/naacnew/2.6.1Supporting_Documents.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.1 Supporting Document
                            </a>
                        </div>
                        <p className="py-4">2.6.2 Attainment of POs and COs are evaluated.</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup6.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.2_1708257633_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.2 Index of Supporting Document
                            </a>

                            <a
                                href="/naacnew/2.6.2Supporting_document.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.2 Supporting Document
                            </a>
                        </div>
                        <p className="">2.6.3 Pass percentage of Students during last five years (excluding backlog students)</p>
                        <p className="">Response: 14.96%</p>
                        <p className="">2.6.3.1 Number of final year students who passed the university examination year wise during the last five years</p>
                        <table className="py-2 w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table7.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p className="py-2">2.6.3.2 Number of final year students who appeared for the university examination year-wise during the last five years</p>
                        <table className="py-2 w-full table-auto border border-gray-200">
                            <thead>
                                <tr className="bg-blue-100">
                                    <th className="border px-4 py-2 text-left">Academic Year</th>
                                    <th className="border px-4 py-2 text-left">Total Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {table8.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50">
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.3_1708072677_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.3 Institutional data
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.3_1708072670_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.3 Certified report from Controller Examination
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.6.3_1708072665_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.6.3 Annual report of controller of Examinations(COE)
                            </a>
                        </div>
                    </div>
                    
                )}


{activeTab === "survey" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">2.7 Student Satisfaction Survey</h2>
                        <p className="">2.7.1 Online student satisfaction survey regarding teaching learning process</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/2.7.1_1708072887_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                2.7.1 Institutional data
                            </a>

                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default NAAC2C2;