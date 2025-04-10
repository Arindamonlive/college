import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import antiraging from "../assets/images/AntiRaggingCommittee202425.jpg";

const committees = [
    { 
        category: "Non-Statutory", 
        items: [
            { 
                name: "Drawing & Painting Club", 
                members: [
                    { name: "Dr. Subhrajyoti Dey", role: "Assistant Professor-Basic Science & HU Department, Convenor" },
                    { name: "Mr. Swagata Banerjee", role: "Technical Assistant– ME Department, Joint Convenor" },
                    { name: "Dr. Debal Pramanik", role: "Assistant Professor-ME Department" },
                    { name: "Dr. Somnath Das", role: "Assistant Professor- EEE Department" },
                    { name: "Dr. Rajashree Dhua", role: "Assistant Professor- EEE Department" },
                    { name: "Mr. Utpal Madhu", role: "Assistant Professor- ME Department" },
                    { name: "Mr. Habib Laskar", role: "Assistant Professor – CE Department" },
                    { name: "Mr. Dhruba Banerjee", role: "Technical Assistant- Basic Science & HU Department" },
                    { name: "Mr. Brijit Bhattacharya", role: "Assistant Professor- CSE Department" },
                    { name: "Dr. Sreetama Dutta", role: "Assistant Professor-Basic Science & HU Department" },
                    { name: "Mr. Saurabh Pal", role: "Associate Professor- CSE Department" },
                    { name: "Mrs. Barnali Jana", role: "Technical Assistant-ECE Department" },
                    { name: "Mrs. Yuthika Jana", role: "Technical Assistant-ECE Department" },
                    { name: "Pratim Gayen", role: "Student Member – ME Department" },
                    { name: "Babusona Mondal", role: "Student Member – ME Department" },
                    { name: "Prerana Bhattacharya", role: "Student Member – ECE Department" },
                    { name: "Mayukh Sarkar", role: "Student Member– ECE Department" },
                    { name: "Saheli Srimani", role: "Student Member – EEE Department" },
                    { name: "Subhasish Bhowmik", role: "Student Member – EEE Department" },
                    { name: "Sourav Das", role: "Student Member – CSE Department" },
                    { name: "Jayanta Sarkar", role: "Student Member – CSE Department" },
                    { name: "Indibar Sarkar", role: "Student Member – CSE Department" },
                    { name: "Priya Singh", role: "Student Member – CE Department" },
                    { name: "Subhrapritam Sardar", role: "Student Member – CE Department" },
                    { name: "Sayani Mali", role: "Student Member – CE Department" }
                ]
            },
            { 
                name: "Music Club", 
                members: [
                    { name: "Dr. Samrat Paul", role: "HOD, EEE (Convenor)" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "HOD, Chemistry (Co-Convenor)" },
                    { name: "Dr. Arpan Dutta", role: "Assoc. Prof, Chemistry" },
                    { name: "Mrs. Somasree Bhadra", role: "Jt. HOD- CSE" },
                    { name: "Mrs. Sangita Purkait", role: "AP, Maths" },
                    { name: "Mr. Sudipta Nath", role: "AP, ME" },
                    { name: "Ms. Shromona Dey", role: "AP, MBA" },
                    { name: "Ms. Moumita Ghosh", role: "AP, CE" },
                    { name: "Mrs. Mousumi Dhara", role: "TA, ECE" },
                    { name: "Mr. Somnath Roy", role: "General Manager" },
                    { name: "Mr. Santu Banerjee", role: "Student Coordinator" },
                    { name: "Mr. Swadhin Adhikari", role: "Maintenance In-charge" },
                    { name: "Dr. Arpan Dutta", role: "Assoc. Prof, Chemistry" },
                    { name: "Mrs. Sangita Purkait", role: "AP, Mathematics" },
                    { name: "Mr. Sudipta Nath", role: "AP, ME" },
                    { name: "Ms. Shromona Dey", role: "AP, MBA" },
                    { name: "Ms. Moumita Ghosh", role: "AP, CE" },
                    { name: "Mrs. Mousumi Dhara", role: "TA, ECE" },
                    { name: "Mr. Somnath Roy", role: "General Manager" },
                    { name: "Mr. Santu Banerjee", role: "Student Coordinator" },
                    { name: "Mr. Swadhin Adhikari", role: "Maintenance In-charge" },
                    { name: "Anubhav Ghoshal", role: "Dept. – EEE (Students Convenor)" },
                    { name: "Indibar Sarkar", role: "Dept. – CSE" },
                    { name: "Ashmit Paul", role: "Dept. – CSE" }
                ]
            },
            { 
                name: "Photography & Reels Club", 
                members: [
                    { name: "Dr. Anindya Sundar Das", role: "IQAC Coordinator & HOD, ECE Department, Convenor" },
                    { name: "Mr. Abhijit Mitra", role: "Assistant Professor-CSE Department, Joint Convenor" },
                    { name: "Ms. Shromana Dey", role: "Assistant Professor-MBA Department" },
                    { name: "Mr. Anindya Ghosh", role: "Assistant Professor-ECE Department" },
                    { name: "Mr. Sudipta Nath", role: "Assistant Professor –ME Department" },
                    { name: "Dr. Arpan Dutta", role: "Associate Professor-Basic Science & HU Department" },
                    { name: "Dr. Sourav Debnath", role: "Assistant Professor- EEE Department" },
                    { name: "Mr. Dhruba Banerjee", role: "Technical Assistant –Basic Science & HU Department" },
                    { name: "Mr. Pritam Bhattacharya", role: "Technical Assistant-CE Department" },
                    { name: "Samiran Barik", role: "ME Department, Student Member" },
                    { name: "Krishnendu Roy", role: "ME Department, Student Member" },
                    { name: "Soumik Das", role: "ECE Department, Student Member" },
                    { name: "Sujan Poddar", role: "ECE Department, Student Member" },
                    { name: "Mousun Sarkar", role: "EEE Department, Student Member" },
                    { name: "Suman Patra", role: "EEE Department, Student Member" },
                    { name: "Supriyo Hazra", role: "EEE Department, Student Member" },
                    { name: "Subhakash", role: "CSE Department, Student Member" },
                    { name: "Rajashree Mondal", role: "CSE Department, Student Member" },
                    { name: "Argha Jyoti Mondal", role: "CE Department, Student Member" },
                    { name: "Sumit Dey", role: "CE Department, Student Member" },
                    { name: "Mainakh Chakraborty", role: "CE Department, Student Member" },
                    { name: "MD Kais Alam", role: "CE Department, Student Member" }
                ]
            },
            { 
                name: "Wall Magazine 2024", 
                members: [
                    { name: "Dr. Arpan Dutta", role: "Associate Professor Basic Science & HU Department, Convenor" },
                    { name: "Mr. Anindya Ghosh", role: "Assistant Professor ECE Department, Joint Convenor" },
                    { name: "Mrs. Ipshita Ghosh", role: "Assistant Professor ECE Department" },
                    { name: "Mr. Ashoke Kr. Laha", role: "Assistant Professor ME Department" },
                    { name: "Dr. Sreetama Dutta", role: "Assistant Professor Basic Science & HU Department" },
                    { name: "Ms. Mousumi Paul", role: "Assistant Professor Basic Science & HU Department" },
                    { name: "Mrs. Pallavi Bharati", role: "Assistant Professor EEE Department" },
                    { name: "Mr. Koushik Bhattacharyya", role: "Assistant Professor CSE Department" },
                    { name: "Mr. Jishnu Mondal", role: "Assistant Professor CSE Department" },
                    { name: "Mrs. Sangita Purkait", role: "Assistant Professor Basic Science & HU Department" },
                    { name: "Mr. Amir Sohel", role: "Assistant Professor CE Department" },
                    { name: "Mr. Gauranga Bor", role: "Technical Assistant ME Department" },
                    { name: "Ms. Tithi Das", role: "Technical Assistant EEE Department" }
                ]
            },
            { 
                name: "Nature Club 2024", 
                members: [
                    { name: "Dr. Sreetama Dutta", role: "Assistant Professor Basic Science & HU Department- Convenor" },
                    { name: "Dr. Manasi Mukhopadhyay", role: "Vice-Principal & HOD Basic Science & HU Department, Member" },
                    { name: "Dr. Sourabh Bal", role: "Associate Professor Basic Science & HU Department, Member" },
                    { name: "Dr. Subhrajyoti Dey", role: "Assistant Professor Basic Science & HU Department, Member" },
                    { name: "Mr. Dhruba Banerjee", role: "Technical Assistant Basic Science & HU Department, Member" },
                    { name: "Dr. Kabita Sarkar", role: "Associate Professor Basic Science & HU Department, Member" },
                    { name: "Ms. Aiswani Chakraborty", role: "Assistant Professor Basic Science & HU Department, Member" },
                    { name: "Mr. Jishnu Mondal", role: "Assistant Professor, CSE Department, Member" },
                    { name: "Mr. Ansuman Chakraborty", role: "Technical Assistant, EEE Department, Member" },
                    { name: "Mr. Subhadeep Paul", role: "Technical Assistant, CE Department, Member" },
                    { name: "Mrs. Mousumi Dhara", role: "Technical Assistant, ECE Department, Member" },
                    { name: "Mr. Netai Bor", role: "Technical Assistant, ME Department, Member" },
                    { name: "Mr. Santu Banerjee", role: "Student Coordinator, Member" },
                    { name: "Mohan Da", role: "Electrician, Member" },
                    { name: "Subal Da", role: "Office, Member" },
                    { name: "Basu Da", role: "Maintenance, Member" }
                ]
            },
            { 
                name: "Electoral Literacy Club 2024", 
                members: [
                    { name: "Mrs. Pallabi Gharami", role: "Assistant Professor, Basic Science & HU Department – Coordinator" },
                    { name: "Dr. Arpan Dutta", role: "Associate Professor, Basic Science & HU Department – Member" },
                    { name: "Dr. Sreetama Dutta", role: "Assistant Professor, Basic Science & HU Department – Member" },
                    { name: "Ms. Aiswani Chakraborty", role: "Assistant Professor, Basic Science & HU Department – Member" },
                    { name: "Mr. Arifuddin Mondal", role: "Assistant Professor, Basic Science & HU Department – Member" }
                ]
            },

        ]
    }
];

const Club = () => {
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
                Clubs of Swami Vivekananda Institute of Science & Technology
            </h1>
            <div className="grid md:grid-cols-1 gap-0" data-aos="fade-up">
                {committees.map((group, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                        {/* <h2 className="text-xl font-bold text-blue-600 mb-4">{group.category}</h2> */}
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

export default Club;
