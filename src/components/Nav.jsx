import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(null);
        setSubDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <header className="w-full shadow-md font-sans">

      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 flex justify-between items-center px-6 py-2 text-white text-sm">
        <div className="flex gap-4 text-lg">
          <FaFacebook className="cursor-pointer hover:text-gray-200" />
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" />
        </div>
        <div className="hidden md:flex gap-6 font-bold">
          <a href="/scholarship" className="hover:bg-red-500 px-3 py-1 rounded">Scholarship</a>
          <a href="/fees" className="hover:bg-red-500 px-3 py-1 rounded">Fees Structure</a>
          <a href="/brochure" className="hover:bg-red-500 px-3 py-1 rounded">Brochure</a>
          <a href="/applynow" className="hover:bg-red-500 px-3 py-1 rounded">Apply Now</a>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition">Student Login</button>
        </div>
      </div>


      <nav className="bg-white px-6 py-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-14" />
          <div>
            <h1 className="text-red-700 font-bold text-2xl text-center">Swami Vivekananda Institute of Science & Technology</h1>
            <p className="text-gray-600 text-sm font-semibold text-center">AICTE Approved, Affiliated to MAKAUT & WBSCTE, NAAC Accredited</p>
          </div>
        </div>
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>


      <div ref={menuRef} className={`bg-blue-700 text-white text-sm py-3 shadow-md ${menuOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row justify-center items-center lg:gap-0 md:gap-8 tracking-wide text-start">
          <li><a href="/" className="hover:bg-red-500 px-3 py-2 rounded">Home</a></li>


          <li className="relative" onMouseEnter={() => setDropdownOpen("about")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              About Us <FaChevronDown />
            </div>
            {dropdownOpen === "about" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-58 z-10">
                <li><a href="/board-of-trustees" className="block px-4 py-2 hover:bg-gray-200">Board of Trustee</a></li>
                <li><a href="/message-from-the-chairman" className="block px-4 py-2 hover:bg-gray-200">Chairman Message</a></li>
                <li><a href="/message-from-the-director" className="block px-4 py-2 hover:bg-gray-200">Director Message</a></li>
                <li><a href="/message-from-the-principal" className="block px-4 py-2 hover:bg-gray-200">Principal Message</a></li>
                <li><a href="/vision-mission" className="block px-4 py-2 hover:bg-gray-200">Vission & Mission</a></li>
                <li><a href="/organogram" className="block px-4 py-2 hover:bg-gray-200">Organogram</a></li>
                <li><a href="/committee" className="block px-4 py-2 hover:bg-gray-200">Committees</a></li>
                <li><a href="/clubs" className="block px-4 py-2 hover:bg-gray-200">Clubs</a></li>
                <li><a href="/teacher-training-policy" className="block px-4 py-2 hover:bg-gray-200">Policies</a></li>
                <li><a href="/mous" className="block px-4 py-2 hover:bg-gray-200">MoUs</a></li>
                <li><a href="/recognization" className="block px-4 py-2 hover:bg-gray-200">Recognization/Affiliation</a></li>
                <li><a href="/mandatory-disclosure-new" className="block px-4 py-2 hover:bg-gray-200">Mandatory Disclosure</a></li>
              </ul>
            )}
          </li>


          <li className="relative" onMouseEnter={() => setDropdownOpen("academics")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              Academics <FaChevronDown />
            </div>
            {dropdownOpen === "academics" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-48 z-10">
                <li><a href="/dr-sonali-sarkar-principal" className="block px-4 py-2 hover:bg-gray-200">Principal of the Institute</a></li>
                <li>
                  <a
                    href="/naacnew/aicte2024-25/Sl_No_38.pdf"
                    className="block px-4 py-2 hover:bg-gray-200"
                    onClick={(e) => {
                      if (window.innerWidth <= 768) {
                        // Mobile: Trigger download
                        e.preventDefault();
                        const link = document.createElement("a");
                        link.href = "/naacnew/aicte2024-25/Sl_No_38.pdf";
                        link.download = "Sl_No_38.pdf"; // Sets a download filename
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      } else {
                        // Desktop: Open in a new tab
                        e.target.setAttribute("target", "_blank");
                      }
                    }}
                  >
                    SWAYAM
                  </a>
                </li>
                <li className="relative" onMouseEnter={() => setSubDropdownOpen("btech")} onMouseLeave={() => setSubDropdownOpen(null)}>
                  <div className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Bachelor's Programs <FaChevronDown />
                  </div>
                  {subDropdownOpen === "btech" && (
                    <ul className="bg-white text-black shadow-md rounded w-full md:w-48 md:absolute md:left-full md:top-0 md:block ">
                      <li><a href="/me" className="block px-4 py-2 hover:bg-gray-200">Department of Mechanical Engineering</a></li>
                      <li><a href="/eee" className="block px-4 py-2 hover:bg-gray-200">Department of Electrical and Electronics Engineering</a></li>
                      <li><a href="/ece" className="block px-4 py-2 hover:bg-gray-200">Department of Electronics and Communication Engineering</a></li>
                      <li><a href="/ce" className="block px-4 py-2 hover:bg-gray-200">Department of Civil Engineering</a></li>
                      <li><a href="/cse" className="block px-4 py-2 hover:bg-gray-200">Department of Computer Science and Engineering</a></li>
                      <li><a href="/aids" className="block px-4 py-2 hover:bg-gray-200">Department of Artificial Inilligence & Data Science Engineering</a></li>
                    </ul>
                  )}
                </li>
                <li className="relative" onMouseEnter={() => setSubDropdownOpen("mba")} onMouseLeave={() => setSubDropdownOpen(null)}>
                  <div className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Master's Programs <FaChevronDown />
                  </div>
                  {subDropdownOpen === "mba" && (
                    <ul className="bg-white text-black shadow-md rounded w-full md:w-48 md:absolute md:left-full md:top-0 md:block ">
                      <li><a href="/mba" className="block px-4 py-2 hover:bg-gray-200">Master's of Business Accountancy</a></li>
                    </ul>
                  )}
                </li>
                <li className="relative" onMouseEnter={() => setSubDropdownOpen("diploma")} onMouseLeave={() => setSubDropdownOpen(null)}>
                  <div className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Diploma Programs <FaChevronDown />
                  </div>
                  {subDropdownOpen === "diploma" && (
                    <ul className="bg-white text-black shadow-md rounded w-full md:w-48 md:absolute md:left-full md:top-0 md:block ">
                      <li><a href="/dcse" className="block px-4 py-2 hover:bg-gray-200">Department of Computer Science and Engineering</a></li>
                      <li><a href="/dme" className="block px-4 py-2 hover:bg-gray-200">Department of Mechanical Engineering</a></li>
                    </ul>
                  )}
                </li>
                <li className="relative" onMouseEnter={() => setSubDropdownOpen("bsh")} onMouseLeave={() => setSubDropdownOpen(null)}>
                  <div className="flex justify-between items-center px-4 py-2 cursor-pointer hover:bg-gray-200">
                    Basic Programs <FaChevronDown />
                  </div>
                  {subDropdownOpen === "bsh" && (
                    <ul className="bg-white text-black shadow-md rounded w-full md:w-48 md:absolute md:left-full md:top-0 md:block ">
                      <li><a href="/bsh" className="block px-4 py-2 hover:bg-gray-200">Department of Basic Science and Humanities</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="/faculty-members" className="block px-4 py-2 hover:bg-gray-200">Faculty Members</a></li>
                <li><a href="/academic-calendar" className="block px-4 py-2 hover:bg-gray-200">Academic Calender</a></li>
                <li><a href="/cos-and-pos" className="block px-4 py-2 hover:bg-gray-200">COs & POs</a></li>
                {/* <li><a href="/academics/curriculum" className="block px-4 py-2 hover:bg-gray-200">Faculty Members</a></li> */}
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setDropdownOpen("tpo")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              Training & Placement<FaChevronDown />
            </div>
            {dropdownOpen === "tpo" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-58 z-10">
                <li><a href="/training-and-placement" className="block px-4 py-2 hover:bg-gray-200">Department of Training & Placement</a></li>
                {/* <li><a href="/top/tma" className="block px-4 py-2 hover:bg-gray-200">Training/Workshop/Addon</a></li>
                <li><a href="/tpo/thank" className="block px-4 py-2 hover:bg-gray-200">Thank You Notes</a></li> */}
                <li>
                  <a
                    href="https://svist.org/naacnew/aicte2024-25/Placement Records_2020-21_to_2022-23.xlsx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Placement Records
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setDropdownOpen("iqac")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              IQAC<FaChevronDown />
            </div>
            {dropdownOpen === "iqac" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-58 z-10">
                <li><a href="/naac-ssr-2018-2019" className="block px-4 py-2 hover:bg-gray-200">NAAC Cycle 1</a></li>
                <li><a href="/naac-cycle-2" className="block px-4 py-2 hover:bg-gray-200">NAAC Cycle 2</a></li>
                {/* <li><a href="/iqac/naac96th" className="block px-4 py-2 hover:bg-gray-200">NAAC 96th Appened</a></li> */}
              </ul>
            )}
          </li>
          <li className="relative" onMouseEnter={() => setDropdownOpen("iiqa")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              IIQA<FaChevronDown />
            </div>
            {dropdownOpen === "iiqa" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-58 z-10">
                <li>
                  <a
                    href="/Statement-Compliance_SVIST.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Statement Compliance
                  </a>
                </li>
                <li>
                  <a
                    href="/Self_Declaration.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Self Decleration
                  </a>
                </li>
                <li><a href="/iiqa-committee" className="block px-4 py-2 hover:bg-gray-200">IIQA 2022-23</a></li>
              </ul>
            )}
          </li>
          <li><a href="/rti" className="hover:bg-red-500 px-3 py-2 rounded">RTI</a></li>
          <li className="relative" onMouseEnter={() => setDropdownOpen("feedback")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              Feedback<FaChevronDown />
            </div>
            {dropdownOpen === "feedback" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-58 z-10">
                <li><a href="/students-feedback" className="block px-4 py-2 hover:bg-gray-200">Student</a></li>
                <li><a href="/teachers-feedback" className="block px-4 py-2 hover:bg-gray-200">Teacher</a></li>
                <li><a href="/employer-feedback" className="block px-4 py-2 hover:bg-gray-200">Employer</a></li>
                <li><a href="/alumni-feedback" className="block px-4 py-2 hover:bg-gray-200">Alumni</a></li>
                <li><a href="/naacnew/1.4_Feedback_Analysis_and_Action_Taken.pdf" target="_blank"
                  rel="noopener noreferrer" className="block px-4 py-2 hover:bg-gray-200">Feedback Analysis and Action Taken</a></li>
              </ul>
            )}
          </li>
          <li><a href="/grievance-redressal-portal" className="hover:bg-red-500 px-3 py-2 rounded">Grievance Redressal</a></li>
          <li><a href="/career" className="hover:bg-red-500 px-3 py-2 rounded">Career</a></li>
          {/* <li className="relative" onMouseEnter={() => setDropdownOpen("event")} onMouseLeave={() => setDropdownOpen(null)}>
            <div className="flex items-center gap-1 cursor-pointer hover:bg-red-500 px-3 py-2 rounded justify-center">
              Events & More<FaChevronDown />
            </div>
            {dropdownOpen === "event" && (
              <ul className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black shadow-md rounded w-58 z-10">
                <li><a href="/event/notice" className="block px-4 py-2 hover:bg-gray-200">Notice</a></li>
                <li><a href="/event/cevents" className="block px-4 py-2 hover:bg-gray-200">Connect to Cultural events</a></li>
                <li><a href="/event/events" className="block px-4 py-2 hover:bg-gray-200">Events</a></li>
                <li><a href="/event/campus" className="block px-4 py-2 hover:bg-gray-200">Life at Campus</a></li>
                <li><a href="/event/alumni" className="block px-4 py-2 hover:bg-gray-200">Alumni</a></li>
                <li><a href="/event/testimonial" className="block px-4 py-2 hover:bg-gray-200">Coorporate Testimonials</a></li>
                <li><a href="/event/blog" className="block px-4 py-2 hover:bg-gray-200">Blog</a></li>
              </ul>
            )}
          </li> */}
          <li><a href="/contact-us" className="hover:bg-red-500 px-3 py-2 rounded">Contact Us</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;