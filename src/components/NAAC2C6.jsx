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

const NAAC2C6 = () => {
    const [activeTab, setActiveTab] = useState("resource");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);


    const table1 = [
        { year: "2018-19", description: "7" },
        { year: "2019-20", description: "7" },
        { year: "2020-21", description: "4" },
        { year: "2021-22", description: "15" },
        { year: "2022-23", description: "34" },
    ];
    const table2 = [
        { year: "2018-19", description: "99" },
        { year: "2019-20", description: "110" },
        { year: "2020-21", description: "117" },
        { year: "2021-22", description: "94" },
        { year: "2022-23", description: "105" },
    ];
    const table3 = [
        { year: "2018-19", description: "22" },
        { year: "2019-20", description: "25" },
        { year: "2020-21", description: "25" },
        { year: "2021-22", description: "26" },
        { year: "2022-23", description: "31" },
    ];
    const table4 = [
        { year: "2018-19", description: "2" },
        { year: "2019-20", description: "5" },
        { year: "2020-21", description: "2" },
        { year: "2021-22", description: "6" },
        { year: "2022-23", description: "26" },
    ];


    return (
        <div className="bg-slate-50 font-sans min-h-screen py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Governance, Leadership and Mqnagement(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'resource' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("resource")}>Institutional Vision and Leadership</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'ecosystem' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("ecosystem")}>Strategy Development and Deployment</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'research' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("research")}>Faculty Empowerment Strategies</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'activities' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("activities")}>Financial Management and Resource Mobilization</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'collaboration' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("collaboration")}>Internal Quality Assurance System</button>


                </div>




                {activeTab === "resource" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">6.1 Institutional Vision and Leadership</h2>
                        <p className="">6.1.1 The institutional governance and leadership are in accordance with the vision and mission of the Institution and it is visible in various institutional practices such as NEP implementation, sustained institutional growth, decentralization, participation in the institutional governance and in their short term and long term Institutional Perspective Plan.</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup14.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.1.1_1708172652_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.1.1 Index of Additional information
                            </a>
                            <a
                                href="/naacnew/6.1.1Additonal_Information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.1.1 Additional information
                            </a>
                        </div>
                    </div>
                )}








                {activeTab === "ecosystem" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">6.2 Strategy Development and Deployment</h2>
                        <p className="">6.2.1 The institutional perspective plan is effectively deployed and functioning of the institutional bodies is effective and efficient as visible from policies, administrative setup, appointment, service rules, and procedures, etc</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.1_1708172682_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.2.1 Index of Additional information
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.1_1708172686_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.2.1 Institutional perspective Plan and deployment documents on the website
                            </a>
                            <a
                                href="/naacnew/6.2.1additional_information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.2.1 Additional information
                            </a>
                        </div>
                        <p className="">6.2.2 Institution implements e-governance in its operations</p>
                        <p className="">1.Administration</p>
                        <p className="">2.Finance and Accounts</p>
                        <p className="">3.Student Admission and Support</p>
                        <p className="">4.Examination</p>
                        <p className="">Response: All of the above</p>

                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.2_1708356398_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.2.2 Screen shots of user interfaces
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.2_1708356355_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.2.2 Institutional expenditure statements 
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.2.2_1708356327_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.2.2 Annual e-governance report
                            </a>
                        </div>

                    </div>
                )}





                {activeTab === "research" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">6.3 Faculty Empowerment Strategies</h2>
                        <p className="">6.3.1 The institution has performance appraisal system, effective welfare measures for teaching and nonteaching staff and avenues for career development/progression</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup16.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.1_1708172725_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.1 Index of Additional information 
                            </a>
                            <a
                                href="/naacnew/6.3.1additional_information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.1 Additional information
                            </a>
                        </div>
                        <p className="">6.3.2 Percentage of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies during the last five years</p>
                        <p className="">Response: 13.09%</p>
                        <p className="">6.3.2.1 Number of teachers provided with financial support to attend conferences/workshops and towards membership fee of professional bodies year wise during the last five years</p>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708173053_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.2 Policy document on providing financial support
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708175028_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.2 Institutional data 
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708432176_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.2 Copy of letter/s indicating financial assistance
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.2_1708175319_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.2 Audited statement of account highlighting the financial support
                            </a>
                        </div>                     
                        <p className="py-4">6.3.3 Percentage of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development /administrative training programs during the last five years</p>
                        <p className="">Response: 81.9%</p>
                        <p className="py-4">6.3.3.1 Total number of teaching and non-teaching staff participating in Faculty development Programmes (FDP), Management Development Programmes (MDPs) professional development/administrative training programs during the last five years</p>
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
                        <p className="">6.3.3.2 Number of non-teaching staff year wise during the last five years</p>
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
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708173269_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.3 Policy document on providing financial support 
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708176708_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.3 Institutional data
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708173232_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.3 Copy of the certificates of the program attended
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.3.3_1708173207_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.3.3 Annual reports highlighting the programmes undertaken
                            </a>
                        </div>

                    </div>

                )}





                {activeTab === "activities" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">6.4 Financial Management and Resource Mobilization</h2>
                        <p className="">6.4.1 Institution has strategies for mobilization and optimal utilization of resources and funds from various sources (government/ nongovernment organizations) and it conducts financial audits regularly (internal and external)</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup17.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.4.1_1708175121_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.4.1 Index of Additional information
                            </a>

                            <a
                                href="/naacnew/6.4.1supporting_document.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.4.1 Additional information
                            </a>
                        </div>
                    </div>
                )}


                {activeTab === "collaboration" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">6.5 Internal Quality Assurance System</h2>
                        <p className="">6.5.1 Internal Quality Assurance Cell (IQAC) has contributed significantly for institutionalizing the quality assurance strategies and processes. It reviews teaching learning process, structures & methodologies of operations and learning outcomes at periodic intervals and records the incremental improvement in various activities</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup18.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.1_1708257779_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.5.1 Index of Additional information
                            </a>

                            <a
                                href="/naacnew/6.5.1Additional_Information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.5.1 Additional information
                            </a>
                        </div>
                        <p className="">6.5.2 Quality assurance initiatives of the institution include:</p>
                        <p className="">1.Regular meeting of Internal Quality Assurance Cell (IQAC); quality improvement initiatives identified and implemented</p>
                        <p className="">2.Academic and Administrative Audit (AAA) and follow-up action taken</p>
                        <p className="">3.Collaborative quality initiatives with other institution(s)</p>
                        <p className="">4.Participation in NIRF and other recognized rankings</p>
                        <p className="">5.Any other quality audit/accreditation recognized by state, national or international agencies such as NAAC, NBA etc.</p>
                        <p className="">Response: Any 4 or more of the above</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.2_1708431933_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.5.2 Quality audit reports/certificate
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.2_1708173622_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.5.2 NIRF report, AAA report and details on follow up actions
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/6.5.2_1708248008_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.5.2 List of Collaborative quality initiatives
                            </a>
                            <a
                                href="/naacnew/IQAC-Meeting-from-2018-2019-to-2022-2023.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                6.5.2 Link to Minute of IQAC meetings
                            </a>
                        </div>
                    
                    
                    </div>
                )}


            </div>
        </div>
    );
};

export default NAAC2C6;