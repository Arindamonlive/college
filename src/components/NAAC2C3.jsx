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

const NAAC2C3 = () => {
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
                <h1 className="text-3xl font-bold text-blue-800 mb-6" data-aos="fade-down">Research , Innovations and Extensions(Cycle -2)</h1>

                <div className="flex flex-wrap gap-4 mb-6 overflow-x-auto" data-aos="fade-up">
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'resource' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("resource")}>Resource Mobilization for Research</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'ecosystem' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("ecosystem")}>Innovation Ecosystem</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'research' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("research")}>Research Publications and Awards</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'activities' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("activities")}>Extension Activities</button>
                    <button className={`px-4 py-2 rounded-full shadow ${activeTab === 'collaboration' ? 'bg-blue-600 text-white' : 'bg-white text-blue-700 border'}`} onClick={() => setActiveTab("collaboration")}>Collaboration</button>


                </div>




                {activeTab === "resource" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">3.1 Resource Mobilization for Research</h2>
                        <p className="">3.1.1 Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</p>
                        <p className="">Response: 78%</p>
                        <p className="">3.1.1.1 Total Grants from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.1.1_1708152422_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.1.1 Supporting document
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.1.1_1708152353_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.1.1 Institutional data
                            </a>
                        </div>
                    </div>
                )}








                {activeTab === "ecosystem" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">3.2 Innovation Ecosystem</h2>
                        <p className="">3.2.1 Institution has created an ecosystem for innovations, Indian Knowledge System (IKS),including awareness about IPR, establishment of IPR cell, Incubation centre and other initiatives for the creation and transfer of knowledge/technology and the outcomes of the same are evident</p>
                        <p className="">Response: 78%</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="/naacnew/Writeup7.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                Write Up
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.2.1_1708247435_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.2.1 Index of Additional Information
                            </a>
                            <a
                                href="/naacnew/3.2.1additional_information.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.2.1 Additional Information
                            </a>
                        </div>
                        <p className="">3.2.2 Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years</p>
                        <p className="">Response: 43%</p>
                        <p className="">3.2.2.1 Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years</p>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.2.2_1708526033_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.2.2 Supporting document
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.2.2_1708161861_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.2.2 Institutional data
                            </a>
                        </div>

                    </div>
                )}





                {activeTab === "research" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">3.3 Research Publications and Awards</h2>
                        <p className="">3.3.1 Number of research papers published per teacher in the Journals notified on UGC care list during the last five years</p>
                        <p className="">Response: 0.56%</p>
                        <p className="">3.3.1.1 Number of research papers in the Journals notified on UGC CARE list year wise during the last five years</p>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708161504_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.1 Link of Uploaded Papers
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708153853_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.1 Link of the source-cite of Uploaded Papers
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708153840_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.1 UGC Care published paper
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.1_1708153373_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.1 Institutional data
                            </a>
                        </div>
                        <p className="py-4">3.3.2 Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years</p>
                        <p className="">Response: 0.18%</p>
                        <p className="py-4">3.3.2.1 Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during last five years</p>
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
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.2_1708154283_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.2 List of chapter/book 
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.2_1708154256_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.2 Institutional data
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.3.2_1708154289_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.3.2 Cover page, content page and first page of the publication
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


                {activeTab === "collaboration" && (
                    <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">3.5 Collaboration</h2>
                        <p className="">3.5.1 Number of functional MoUs/linkages with institutions/ industries in India and abroad for internship, on-the-job training, project work, student / faculty exchange and collaborative research during the last five years.</p>
                        <p className="">Response: 28%</p>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708155301_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.5.1 Summary of the functional MoUs/linkage/collaboration
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708155324_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.5.1 List of year wise activities and exchange
                            </a>

                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708157864_13845.pdf"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.5.1 List and Copies of documents indicating the functional MoUs/linkage/collaborations
                            </a>
                            <a
                                href="https://assessmentonline.naac.gov.in/storage/app/hei/SSR/101780/3.5.1_1708161945_13845.xlsx"
                                download
                                className="text-blue-700 underline hover:text-blue-900"
                            >
                                3.5.1 Institutional data
                            </a>
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
};

export default NAAC2C3;