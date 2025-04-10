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

const NAAC2C5 = () => {
    const [activeTab, setActiveTab] = useState("support");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);


    const table1 = [
        { year: "2018-19", description: "1099" },
        { year: "2019-20", description: "967" },
        { year: "2020-21", description: "1088" },
        { year: "2021-22", description: "1249" },
        { year: "2022-23", description: "1314" },
    ];
    const table2 = [
        { year: "2018-19", description: "507" },
        { year: "2019-20", description: "481" },
        { year: "2020-21", description: "630" },
        { year: "2021-22", description: "625" },
        { year: "2022-23", description: "645" },
    ];
    const table3 = [
        { year: "2018-19", description: "252" },
        { year: "2019-20", description: "278" },
        { year: "2020-21", description: "202" },
        { year: "2021-22", description: "228" },
        { year: "2022-23", description: "277" },
    ];
    const table4 = [
        { year: "2018-19", description: "415" },
        { year: "2019-20", description: "400" },
        { year: "2020-21", description: "364" },
        { year: "2021-22", description: "350" },
        { year: "2022-23", description: "438" },
    ];
    const table5 = [
        { year: "2018-19", description: "4" },
        { year: "2019-20", description: "1" },
        { year: "2020-21", description: "7" },
        { year: "2021-22", description: "11" },
        { year: "2022-23", description: "10" },
    ];
    const table6 = [
        { year: "2018-19", description: "1" },
        { year: "2019-20", description: "0" },
        { year: "2020-21", description: "2" },
        { year: "2021-22", description: "0" },
        { year: "2022-23", description: "1" },
    ];
    const table7 = [
        { year: "2018-19", description: "8" },
        { year: "2019-20", description: "8" },
        { year: "2020-21", description: "5" },
        { year: "2021-22", description: "8" },
        { year: "2022-23", description: "8" },
    ];


    return (
        <div className="bg-slate-50 font-sans min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Student Support and Progression(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'support' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("support")}>Student Support</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'progression' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("progression")}>Student Progression</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'participation' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("participation")}>Student Participation and Activities</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'alumni' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("alumni")}>Alumni Engagement</button>
                </div>




                {activeTab === "support" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">5.1 Student Support</h2>
                        <p className="">5.1.1 Percentage of students benefited by scholarships and freeships provided by the institution, government and non-government bodies, industries, individuals, philanthropists during the last five years</p>
                        <p className="">Response: 91.15%</p>
                        <p className="">5.1.1.1 Number of students benefited by scholarships and freeships provided by the institution, Government and non-government bodies, industries, individuals, philanthropists during the last five years</p>
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
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708265753_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.1 Year-wise list of beneficiary students
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708266682_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.1 Sanction letter of scholarship and free ships
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708265791_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.1 Policy document of the HEI
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.1_1708264282_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.1 Institutional data
                            </a>
                        </div>
                        <p className="">5.1.2 Following capacity development and skills enhancement activities are organised for improving students’ capability:</p>
                        <p className="">1.Soft skills</p>
                        <p className="">2.Language and communication skills</p>
                        <p className="">3.Life skills (Yoga, physical fitness, health and hygiene)</p>
                        <p className="">4.ICT/computing skills</p>
                        <p className="">Response: All of the above</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.2_1708263305_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.2 Report with photographs on Programmes /activities
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.2_1708263277_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.2 Report with photographs on ICT/computing skills enhancement programs
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.2_1708264597_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.2 Institutional data
                            </a>
                        </div>
                        <p className="">Number of students benefitted by guidance for competitive examinations and career counselling offered by the institution year wise during last five years</p>
                        <p className="">Response: All of the above</p>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.3_1708263837_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.3 Supporting document
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.3_1708511821_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.3 Institutional data
                            </a>
                        </div>
                        <p className="">5.1.4 The institution adopts the following for redressal of student grievances including sexual harassment and ragging cases</p>
                        <p className="">1.Implementation of guidelines of statutory/regulatory bodies</p>
                        <p className="">2.Organisation wide awareness and undertakings on policies with zero tolerance</p>
                        <p className="">3.Mechanisms for submission of online/offline students’ grievances</p>
                        <p className="">4.Timely redressal of the grievances through appropriate committees</p>
                        <p className="">Response: All of the above</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263434_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.4 Proof w.r.t Organisation wide awareness and undertakings on policies with zero tolerance
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263413_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.4 Proof related to Mechanisms for submission of online/offline students’ grievances
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263380_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.4 Proof for Implementation of guidelines of statutory/regulatory bodies
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708263738_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.4 Details of statutory/regulatory Committee
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.1.4_1708350968_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.1.4 Annual report of the committee motioning the activities
                            </a>
                        </div>
                    </div>
                )}








                {activeTab === "progression" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">5.2 Student Progression</h2>
                        <p className="">5.2.1 Percentage of placement of outgoing students and students progressing to higher education during the last five years</p>
                        <p className="">Response: 62.89%</p>
                        <p className="">5.2.1.1 Number of outgoing students placed and / or progressed to higher education year wise during the last five years</p>
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
                        <p className="">5.2.1.2 Number of outgoing students year wise during the last five years</p>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.1_1708441164_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.2.1 Number and List of students placed
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.1_1708441168_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.2.1 List of students progressing for Higher Education
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.1_1708512012_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.2.1 Institutional data
                            </a>
                        </div>
                        <p className="">5.2.2 Percentage of students qualifying in state/national/ international level examinations during the last five years</p>
                        <p className="">Response: 4.52%</p>
                        <p className="">5.2.2.1 Number of students qualifying in state/ national/ international level examinations year wise during last five years (eg: IIT/JAM/NET/SLET/GATE/GMAT/GPAT/CLAT/CAT/ GRE/TOEFL/IELTS/Civil Services/State government examinations etc.)</p>
                        <table className="w-full table-auto border border-gray-200">
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
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.2_1708438555_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.2.2 List of students qualified
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.2.2_1708435410_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.2.2 Institutional data
                            </a>
                        </div>

                    </div>
                )}





                {activeTab === "participation" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">5.3 Student Participation and Activities</h2>
                        <p className="">5.3.1 Number of awards/medals for outstanding performance in sports/ cultural activities at University / state/ national / international level (award for a team event should be counted as one) during the last five years</p>
                        <p className="">Response: 4</p>
                        <p className="">5.3.1.1 Number of awards/medals for outstanding performance in sports/cultural activities at national/international level (award for a team event should be counted as one) year wise during the last five years</p>
                        <table className="w-full table-auto border border-gray-200">
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.1_1708437244_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.3.1 list and links to e-copies of award letters and certificates
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.1_1708433571_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.3.1 Institutional data
                            </a>
                        </div>
                        <p className="py-4">5.3.2 Average number of sports and cultural programs in which students of the Institution participated during last five years (organised by the institution/other institutions)</p>
                        <p className="">Response: 7.4</p>
                        <p className="py-4">5.3.2.1 Number of sports and cultural programs in which students of the Institution participated year wise during last five years</p>
                        <table className="w-full table-auto border border-gray-200">
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
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.2_1708263907_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.3.2 Supporting document 
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.3.2_1708265490_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.3.2 Institutional data
                            </a>
                        </div>

                    </div>

                )}





                {activeTab === "activities" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">3.4 Extension Activities</h2>
                        <p className="">3.4.1 Outcomes of Extension activities in the neighborhood community in terms of impact and sensitizing the students to social issues for their holistic development during the last five years.</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup8.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.1_1708177584_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.1 Index of Additional information
                            </a>

                            <a
                                href="/naacnew/3.4.1Additional_information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.1 Additional information
                            </a>
                        </div>
                        <p className="">3.4.2 Awards and recognitions received for extension activities from government / government recognised bodies</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup9.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.2_1708352084_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.2 Index of Additional information
                            </a>

                            <a
                                href="/naacnew/3.4.2Supporting_documents.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.2 Additional information
                            </a>
                        </div>
                        <p className="">3.4.3 Number of extension and outreach programs conducted by the institution through organized forums including NSS/NCC with involvement of community during the last five years.</p>
                        <p className="">Response: 41%</p>
                        <p className="">3.4.3.1 Number of extension and outreach Programs conducted in collaboration with industry, community, and Non- Government Organizations through NSS/ NCC etc., year wise during the last five years</p>
                        <table className="py-2 w-full table-auto border border-gray-200">
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.3_1708155054_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.3 Photographs and any other supporting document 
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.3_1708154929_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.3 Institutional data
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.4.3_1708158559_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.4.3 Detailed report
                            </a>
                        </div>

                    </div>
                )}


                {activeTab === "alumni" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">5.4 Alumni Engagement</h2>
                        <p className="">5.4.1 There is a registered Alumni Association that contributes significantly to the development of the institution through financial and/or other support services</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup13.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/5.4.1_1708263548_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.4.1 Index of Additional information
                            </a>

                            <a
                                href="/naacnew/5.4.1Supporting_Documents.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                5.4.1 Additional information
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NAAC2C5;