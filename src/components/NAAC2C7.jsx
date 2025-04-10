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

const NAAC2C7 = () => {
    const [activeTab, setActiveTab] = useState("resource");

    useEffect(() => {
        AOS.init({ duration: 800 });
    }, []);


    const table1 = [
        { year: "2018-19", description: "3" },
        { year: "2019-20", description: "3" },
        { year: "2020-21", description: "2" },
        { year: "2021-22", description: "22" },
        { year: "2022-23", description: "13" },
    ];
    const table2 = [
        { year: "2018-19", description: "18" },
        { year: "2019-20", description: "17" },
        { year: "2020-21", description: "15" },
        { year: "2021-22", description: "15" },
        { year: "2022-23", description: "39" },
    ];
    const table3 = [
        { year: "2018-19", description: "1" },
        { year: "2019-20", description: "2" },
        { year: "2020-21", description: "9" },
        { year: "2021-22", description: "4" },
        { year: "2022-23", description: "18" },
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
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Institutional Values and Best Practices(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'resource' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("resource")}>Institutional Values and Social Responsibilities</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'ecosystem' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("ecosystem")}>Best Practices</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'research' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("research")}>Institutional Distinctiveness</button>



                </div>




                {activeTab === "resource" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">7.1 Institutional Values and Social Responsibilities</h2>
                        <p className="">7.1.1 Institution has initiated the Gender Audit and measures for the promotion of gender equity during the last five years.</p>
                        <div className="flex flex-col gap-2 mt-4">
                        <a
                                href="/naacnew/Writeup19.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.1_1708005021_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.1 Index of Additional information
                            </a>
                            <a
                                href="/naacnew/7.1.1Additional_information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.1 Additional information
                            </a>
                        </div>
                        <p className="">7.1.2 The Institution has facilities and initiatives for</p>
                        <p className="">1.Alternate sources of energy and energy conservation measures</p>
                        <p className="">2.Management of the various types of degradable and nondegradable waste</p>
                        <p className="">3.Water conservation</p>
                        <p className="">4.Green campus initiatives</p>
                        <p className="">5.Disabled-friendly, barrier free environment</p>
                        <p className="">Response: All of the above</p>
                        <div className="flex flex-col gap-2 mt-4">
                        <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1708005076_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.2 Policy document on the green campus/plastic free campus.
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1708081670_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.2 Geo-tagged photographs/videos
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1708005099_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.2 Circulars and report of activities
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.2_1707986032_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.2 Bills for the purchase of equipment’s 
                            </a>
                        </div>
                        <p className="">7.1.3 Quality audits on environment and energy regularly undertaken by the Institution. The institutional environment and energy initiatives are confirmed through the following</p>
                        <p className="">1. Green audit / Environment audit</p>
                        <p className="">2.Energy audit</p>
                        <p className="">3.Clean and green campus initiatives</p>
                        <p className="">4.Beyond the campus environmental promotion activities</p>
                        <p className="">Response: All of the above</p>
                        <div className="flex flex-col gap-2 mt-4">
                        <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708005175_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.3 Report on Environmental Promotional activities
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708068202_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.3 Policy document on environment and energy usage
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708081786_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.3 Green audit/environmental audit report
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.3_1708081793_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.3 Certificates of the awards received 
                            </a>
                        </div>
                        <p className="">7.1.4 Describe the Institutional efforts/initiatives in providing an inclusive environment i.e., tolerance and harmony towards cultural, regional, linguistic, communal socioeconomic and Sensitization of students and employees to the constitutional obligations: values, rights, duties and responsibilities of citizens</p>
                        <div className="flex flex-col gap-2 mt-4">
                        <a
                                href="/naacnew/Writeup20.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/7.1.4_1708005329_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.4 Index of Additional information
                            </a>
                            <a
                                href="/naacnew/7.1.4Additionalinformation.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.1.4 Additional information
                            </a>
                        </div>
                    </div>
                )}








                {activeTab === "ecosystem" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">7.2 Best Practices</h2>
                        <p className="">7.2.1 Describe two best practices successfully implemented by the Institution as per NAAC format provided in the Manual</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup21.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write Up
                            </a>
                            <a
                                href="/naacnew/7.2.1%20Best%20Practices%20Qualititative.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.2.1 Best practices as hosted on the Institutional we site
                            </a>
                            <a
                                href="/naacnew/7.2.1%20best%20practices%20-%20any%20other%20relevant%20information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.2.1 Relevant information
                            </a>
                        </div>
                        

                    </div>
                )}





                {activeTab === "research" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">7.3 Institutional Distinctiveness</h2>
                        <p className="">7.3.1 Portray the performance of the Institution in one area distinctive to its priority and thrust within 1000 words</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup22.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write up
                            </a>
                            <a
                                href="/naacnew/Indian_Red_Cross_Society_Certificate.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.3.1 Relevant information
                            </a>
                            <a
                                href="/naacnew/7.3.1%20portray%20the%20performance%20of%20the%20institution%20in%20one%20area%20distinctive%20to%20its%20priority%20and%20thrust%20supporting%20document.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                7.3.1 Appropriate web in the Institutional website
                            </a>
                        </div>
                        

                    </div>

                )}





                


            </div>
        </div>
    );
};

export default NAAC2C7;