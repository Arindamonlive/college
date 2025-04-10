import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import antiraging from "../assets/images/AntiRaggingCommittee202425.jpg";

const committees = [
    { 
        category: "Statutory", 
        items: [
            { 
                name: "Governing Body", 
                members: [
                    { name: "Prof. Dilip Kumar Bandyopadhyay", role: "Chairman" },
                    { name: "Prof. Amalendu Basu", role: "Nominee form DTE, WB" },
                    { name: "Prof. T.K.Parya", role: "Representative of MAKAUT" },
                    { name: "Regional Office – A.I.C.T.E", role: "Representative of ERO,AICTE" },
                    { name: "Dr. Ashok Binaykia", role: "Trust, MEMBER" },
                    { name: "Dr. Nandan Gupta", role: "Trust, MEMBER" },
                    { name: "Mr. Chandan Gupta", role: "Trust, MEMBER" },
                    { name: "Dr. Rakesh Binaykia", role: "Trust, MEMBER" },
                    { name: "Prof. Pradip Kumar Saha", role: "Governing Body Member" },
                    { name: "Dr. Sonali Sarkar, Principal SVIST", role: "Governing Body Member" },
                    { name: "Dr. Samrat Paul, Dean of Academics & HOD EEE Department, SVIST", role: "Governing Body Member" },
                    { name: "Dr. Manasi Mukhopadhyay, Vice-Principal & HOD Gen. Sc. & HU Department, SVIST", role: "Governing Body Member" },
                    { name: "Dr Suman Das, Registrar & HOD ME Department, SVIST", role: "Governing Body Member" },

                ]
            },
            { 
                name: "Academic Council", 
                members: [
                    { name: "Dr. Sonali Ghosh", role: "Principal, Convenor" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD, ME Department, Member" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Vice-Principal, Chemistry Department, Member" },
                    { name: "Dr. Somnath Das", role: "IQAC Coordinator & TIC, ME Department, Member" },
                    { name: "Dr. Samrat Paul", role: "Dean Academics & HOD, EEE Department, Member" },
                    { name: "Dr. Krishna Kumar Jha", role: "HOD, CSE Department, Member" },
                    { name: "Mrs. Somasree Bhadra", role: "TIC, CSE Department, Member" },
                    { name: "Dr.  Tithi Banerjee", role: "TIC, CE Department, Member" },
                    { name: "Dr.  Amitabha Gupta", role: "Dean Corporate Relations & HOD, MBA, Department, Member" },
                    { name: "Dr. Sk Rahaman", role: "TIC, CE Department, Member" },
                    { name: "Dr. Sourabh Bal", role: "HOD, Physics & Math, Member" },
                    { name: "Mr. Sheershendu Bhattacharya", role: "Controller of Examination, ECE Department, Member" },
                    { name: "Dr. Arpan Dutta", role: "Dean R & D, Chemistry Department, Member" },
                ]
            },
            { 
                name: "Finance & Purchase Committee 2024", 
                members: [
                    { name: "Dr. Nandan Gupta", role: "Managing Trustee – Chairperson" },
                    { name: "Dr. Sonali Ghosh", role: "Principal, Convenor" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD ME Department, Member" },
                    { name: "Dr. Somnath Das", role: "Deputy Registrar, TIC, Associate Professor, ME Department, Member" },
                    { name: "Dr. Samrat Paul", role: "Dean of Academics & HOD EEE Department, Member" },
                    { name: "Dr. Anindya Sundar Das", role: "IQAC Coordinator & HOD, ECE Department, Member" },
                    { name: "Mr. Somnath Roy", role: "General Manager, Member" }
                ]
            }
        ] 
    },
    { 
        category: "Non-Statutory", 
        items: [
            { 
                name: "Anti-Ragging Committee", 
                members: []
            },
            { 
                name: "Internal Complain Committee", 
                members: [
                    { name: "Dr. Sonali Ghosh", role: "Principal, Convenor" },
                    { name: "Mr. Samrat Paul", role: "Dean of Academics & HOD EEE Department" },
                    { name: "Mr. Sheershendu Bhattacharya", role: "Assistant Professor, ECE, Joint Convenor" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD ME Department, Member" },
                    { name: "Mrs. Somasree Bhadra", role: "TIC, CSE Department, Member" },
                    { name: "Mr. Krishna Kumar Jha", role: "HOD, CSE Department, Member" },
                    { name: "Dr. Manasi Mukhopadhyayh", role: "Vice-Principal & HOD Basic Science & HU Department, Member" },
                    { name: "Dr. Suorabh Bal", role: "Associate Professor Basic Science & HU Department, Member" },
                    { name: "Dr. Somnath Das", role: "Deputy Registrar, TIC, Associate Professor, ME Department, Member" },
                    { name: "Mr. Sourav Sarkar", role: "HOD, CE Department, Member" },
                    { name: "Dr. Anindya Sundar Das", role: "IQAC Coordinator & HOD, ECE Department, Member" },
                ]
            },
            { 
                name: "Grievance Redressal Committee", 
                members: [
                    { name: "Dr. Sonali Ghosh", role: "Principal, Chairperson" },
                    { name: "Mr. Pabitra Gayen", role: "Representative of Management" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Vice-Principal & HOD Basic Science & HU Departmen" },
                    { name: "Dr. Anindya Sundar Das", role: "IQAC Coordinator & HOD, ECE Department" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD ME Department" },
                    { name: "Dr. Samrat Paul", role: "Dean of Academics & HOD EEE Department" },
                    { name: "Dr. Krishna Kumar Jha", role: "HOD, CSE Department" },
                    { name: "Mrs. Somasree Bhadra", role: "TIC, CSE Department" },
                    { name: "Mr. Sourav Sarkar", role: "HOD, CE Department" },
                ]
            },
            { 
                name: "Examination Committee", 
                members: [
                    { name: "Mr. Sheershendu Bhattacharya", role: "Assistant Professor & Jt. HOD, ECE – OIC" },
                    { name: "Dr. Somnath Das", role: "Deputy Registrar, TIC, Associate Professor, ME Department – Supervisor" },
                    { name: "Dr. Suorabh Bal", role: "Associate Professor. & HOD, Basic Science & HU Department" },
                    { name: "Dr. Somnath Das", role: "Assistant Professor, EEE Department" },
                    { name: "Dr. Nilanjan Roy", role: "Assistant Professor, ME Department" },
                    { name: "Mr. Arindam Chakraborty", role: "Assistant Professor, ME Department" },
                    { name: "Mr. Jishnu Mondal", role: "Assistant Professor, CSE Department" },
                    { name: "Mr. Debkumar Chakraborty", role: "	Assistant Professor, Basic Science & HU Department" },
                    { name: "Mr. Md Arif Uddin Mondal", role: "Assistant Professor, Basic Science & HU Department" },
                    { name: "Mr. Anindya Ghosh", role: "Assistant Professor, ECE Department" },
                    { name: "Mrs. Moumita Ghosh", role: "Assistant Professor, CE Department" },
                    { name: "Mrs. Ipsita Ghosh", role: "Assistant Professor, ECE Department" },
                ]
            },
            { 
                name: "Library Committee", 
                members: []
            },
            { 
                name: "Student Welfare Committee", 
                members: [
                    { name: "Mr. Pabitra Gayen", role: "Deputy Director, Management Representative " },
                    { name: "Dr. Sonali Ghosh", role: "	Principal, Convener" },
                    { name: "Dr. Somnath Das", role: "Member, Deputy Registrar, TIC, Associate Professor, ME Department, Warden" },
                    { name: "Dr. Samrat Paul", role: "Member, Dean of Academics & HOD EEE Department" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Member, Vice-Principal & HOD Basic Science & HU Department" },
                    { name: "Mr. Pradipta Roy", role: "Member, HOD-CSE Department" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD ME Department" },
                    { name: "Dr. Anindya Sundar Das", role: "Member, IQAC Coordinator & HOD, ECE Department" },
                    { name: "Dr. Anindita Mukherjee", role: "Member, HOD – CE Department" },
                    { name: "Dr. Suorabh Bal", role: "Member, HOD – Basic Science & HU Department" },
                    { name: "Mr. Somnath Roy", role: "Member, General Manager" },
                    { name: "Mr. Arindam Paul", role: "Member, Admission Officer" },
                    { name: "Mr. Suprakash Dutta ", role: "Member, Maintenance Manager" },
                    { name: "Mr. Kalyan Kundu", role: "	Member, Accounts" },
                    { name: "Mr. Krishna Kanta Chanda", role: "Member, Office" },
                    { name: "Mr. Swadhin Adhikary", role: "Member, IT Administrator" },
                    { name: "Mr. Radha Kanta Sutradhar", role: "Member, Guardian" },
                    { name: "Mr. Saikat Roy", role: "Member, Guardian" },
                    { name: "Mr. Indrajit Roy ", role: "Member, Administration" },
                    { name: "Mr. Kunal Ghosh", role: "Member, Office" },
                    { name: "Mr. Santu Banerjee", role: "Member, Student Coordinator" },
                ]
            },
            { 
                name: "IQAC", 
                members: [
                    { name: "Dr. Sonali Ghosh", role: "Principal, Chairperson" },
                    { name: "Dr. Somnath Das", role: "IQAC Coordinator & Deputy Registrar, TIC, Associate Professor, ME Department" },
                    { name: "Dr. Nandan Gupta", role: "Managing Trustee" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD ME Department" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Vice-Principal & HOD Basic Science & HU Department" },
                    { name: "Dr. Samrat Paul", role: "Dean of Academics & HOD EEE Department" },
                    { name: "Dr. Krishna Kumar Jha", role: "HOD, CSE Department" },
                    { name: "Mrs. Somasree Bhadra", role: "TIC, CSE Department" },
                    { name: "Mr. Sheershendu Bhattacharya", role: "ECE Department" },
                    { name: "Mr. Sourav Sarkar", role: "HOD, CE Department" },
                    { name: "Dr. Sourabh Bal", role: "HOD, Basic Science & HU Department" },
                    { name: "Dr. Arpan Dutta", role: "Associate Professor, Basic Science & HU Department" },
                    { name: "Mr. Amitabha Gupta", role: "HOD, MBA Department" },
                    { name: "Mr. Tapas Bandhopadhay", role: "G.M. T&P Cell" },
                    { name: "Mr. Somnath Roy", role: "General Manager" },
                    { name: "Mr. Tanmoy Roy", role: "Director & Founder, M/S Romas Electro Engineering Pvt. Ltd" },
                    { name: "Mrs. Manasi Saha", role: "Owner & Founder, Macaws InfoTech" },
                    { name: "Mr. Sumit Kar", role: "Software Engineer at Cisco System India Pvt. Ltd, Alumni" },
                    { name: "Mr. Sayan Bhattacharya", role: "ECE 4th year student, SVIST" }
                ]
            },
            { 
                name: "Timetable Committee", 
                members: []
            },
            { 
                name: "Alumni Association Committee", 
                members: []
            },
            { 
                name: "R & D Cell", 
                members: []
            },
            { 
                name: "Women Grievance Redressal Cell", 
                members: [
                    { name: "Dr. Sonali Ghosh", role: "Principal, Chairperson (9433806989)" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Vice-Principal & HOD Basic Science & HU Department – Convener (9831158870)" },
                    { name: "Dr. Anindya Sundar Das", role: "IQAC Coordinator & HOD, ECE Department– Joint Convener (9831439857)" },
                    { name: "Dr. Sreetama Dutta", role: "Assistant Professor, Basic Science & HU Department (9830632612)" },
                    { name: "Mrs. Somasree Bhadra", role: "TIC, CSE Department (9903701449)" },
                    { name: "Ms. Sangita Purkait", role: "Assistant Professor, Basic Science & HU Department (9732284069)" },
                    { name: "Ms. Pallabi Gharami", role: "Assistant Professor, Basic Science & HU Department (7980339386)" },
                    { name: "Ms. Moumita Ghosh", role: "Assistant Professor, CE Department (9476424216)" },
                    { name: "Ms. Yutika Jana", role: "Technical Assistant, ECE Department (9153190389)" },
                    { name: "Ms. Barnali Jana", role: "Technical Assistant, ECE Department (9836637955)" },
                    { name: "Mrs. Jayanti Chowdhury", role: "Member, Hostel In Charge (7718477952)" }
                ]
            },
            { 
                name: "SC-ST & Minority Committee", 
                members: [
                    { name: "Dr. Somnath Das", role: "Deputy Registrar, TIC, Associate Professor, ME Department Convener" },
                    { name: "Mr. Anindya Ghosh", role: "Assistant Professor – ECE Department, Joint Convener" },
                    { name: "Dr. Sourav Debnath", role: "Assistant Professor – EEE Department" },
                    { name: "Mr. Subhajit Brojabasi", role: "Assistant Professor – CSE Department" },
                    { name: "Mr. Habib Laskar", role: "Assistant Professor – CE Department" },
                    { name: "Mr. Somnath Roy", role: "General Manager" },
                    { name: "Mr. Sumit Das", role: "Administrative Officer" },
                    { name: "Mr. Rajat Chanda", role: "Office Assistant" }
                ]
            },
            { 
                name: "Admission Committee 2024", 
                members: [
                    { name: "Dr. Sonali Ghosh", role: "Principal, Chairperson" },
                    { name: "Dr. Suman Das", role: "Registrar & HOD ME Department, Convenor" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Vice-Principal & HOD Basic Science & HU Department, Member" },
                    { name: "Dr. Samrat Paul", role: "Dean of Academics & HOD EEE Department, Member" },
                    { name: "Dr. Somnath Das", role: "Deputy Registrar, TIC, Associate Professor, ME Department, Member" },
                    { name: "Mr. Somnath Roy", role: "General Manager, Member" },
                    { name: "Mr. Arindam Paul", role: "Admission Officer, Member" },
                    { name: "Mrs. Tanaya Paul", role: "Admission Officer, Member" },
                    { name: "Mr. Santu Banerjee", role: "Student Coordinator, Member" }
                ]
            },
        ]
    }
];

const CommitteePage = () => {
    const [open, setOpen] = useState(false);
    const [selectedCommittee, setSelectedCommittee] = useState(null);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleOpen = (committee) => {
        setSelectedCommittee(committee);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedCommittee(null);
    };

    return (
        <div className="container mx-auto px-6 py-10 text-center">
            <h1 className="text-3xl font-bold text-blue-700 mb-6" data-aos="fade-down">
                Committees of Swami Vivekananda Institute of Science & Technology
            </h1>
            <div className="grid md:grid-cols-2 gap-6" data-aos="fade-up">
                {committees.map((group, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold text-blue-600 mb-4">{group.category}</h2>
                        <ul className="space-y-2">
                            {group.items.map((item, idx) => (
                                <li 
                                    key={idx} 
                                    className="cursor-pointer text-gray-700 hover:text-blue-500 underline"
                                    onClick={() => handleOpen(item)}
                                >
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            {open && selectedCommittee && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold mb-4 text-center">{selectedCommittee.name}</h2>
                        {selectedCommittee.name === "Anti-Ragging Committee" ? (
                            <img src={antiraging} alt="Anti-Ragging Committee" className="w-full rounded-lg" />
                        ) : (
                            <ul className="mt-2 space-y-2 text-left">
                                {selectedCommittee.members.map((member, index) => (
                                    <li key={index} className="text-gray-700">
                                        <span className="font-semibold">{member.name}</span> - 
                                        <span className="text-blue-600"> {member.role}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="flex justify-center mt-4">
                            <button onClick={handleClose} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CommitteePage;
