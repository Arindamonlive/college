import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Trustee from "./components/Trustee.jsx";
import ChairmanMessage from "./components/CharimanMessage.jsx";
import DirectorMessage from "./components/DirectorMessage.jsx";
import PrincipalMessage from "./components/PrincipalMessage.jsx";
import VissionMission from "./components/VissionMission.jsx";
import Organogram from "./components/Organogram.jsx";
import CommitteePage from "./components/Committee.jsx";
import Club from "./components/Club.jsx";
import Policy from "./components/Polices.jsx";
import Mou from "./components/Mou.jsx";
import Recognization from "./components/Recognization.jsx";
import Disclosure from "./components/Disclosure.jsx";
import Principal from "./components/Principal.jsx";
import BME from "./components/BME.jsx";
import BEEE from "./components/BEEE.jsx";
import BCE from "./components/BCE.jsx";
import CE from "./components/CE.jsx";
import CSE from "./components/CSE.jsx";
import AIDS from "./components/AIDS.jsx";
import MBA from "./components/MBA.jsx";
import DCSE from "./components/DCSE.jsx";
import DME from "./components/DME.jsx";
import BSH from "./components/BSH.jsx";
import NAAC1 from "./components/NAAC1.jsx";
import NAAC2 from "./components/NAAC2.jsx";
import NAAC2Extended from "./components/NAAC2Extended.jsx";
import NAAC2C1 from "./components/NAAC2C1.jsx";
import NAAC2C2 from "./components/NAAC2C2.jsx";
import NAAC2C3 from "./components/NAAC2C3.jsx";
import NAAC2C4 from "./components/NAAC2C4.jsx";
import NAAC2C5 from "./components/NAAC2C5.jsx";
import NAAC2C6 from "./components/NAAC2C6.jsx";
import NAAC2C7 from "./components/NAAC2C7.jsx";
import Iqa22_23 from "./components/Iiqa22_23.jsx";
import Rti from "./components/Rti.jsx";
import StudentFeedback from "./components/StudentFeedback.jsx";
import TeacherFeedback from "./components/TeacherFeedback.jsx";
import EmployerFeedback from "./components/EmployerFeedback.jsx";
import AlumniFeedback from "./components/AlumniFeedback.jsx";
import Grievance from "./components/Grievance.jsx";
import Career from "./components/Career.jsx";
import Contact from "./components/Contact.jsx";
import EnquireButton from "./components/EnquireButton.jsx";
import AcademicCalender from "./components/AcademicCalender.jsx";
import CoPo from "./components/CoPo.jsx";
import PlacementPage from "./components/PlacementDepartment.jsx";
import FacultyPage from "./components/Faculty.jsx";
import FacultyProfile from "./components/FacultyProfile.jsx";
import React from "react";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board-of-trustees"element={<Trustee/>}/>
        <Route path="/message-from-the-chairman"element={<ChairmanMessage/>}/>
        <Route path="/message-from-the-director"element={<DirectorMessage/>}/>
        <Route path="/message-from-the-principal"element={<PrincipalMessage/>}/>
        <Route path="/vision-mission"element={<VissionMission/>}/>
        <Route path="/organogram"element={<Organogram/>}/>
        <Route path="/committee"element={<CommitteePage/>}/>
        <Route path="/clubs"element={<Club/>}/>
        <Route path="/teacher-training-policy"element={<Policy/>}/>
        <Route path="/mous"element={<Mou/>}/>
        <Route path="/recognization"element={<Recognization/>}/>
        <Route path="/mandatory-disclosure-new"element={<Disclosure/>}/>
        <Route path="/dr-sonali-sarkar-principal"element={<Principal/>}/>
        <Route path="/me"element={<BME/>}/>
        <Route path="/eee"element={<BEEE/>}/>
        <Route path="/ece"element={<BCE/>}/>
        <Route path="/ce"element={<CE/>}/>
        <Route path="/cse"element={<CSE/>}/>
        <Route path="/aids"element={<AIDS/>}/>
        <Route path="/mba"element={<MBA/>}/>
        <Route path="/dcse"element={<DCSE/>}/>
        <Route path="/dme"element={<DME/>}/>
        <Route path="/bsh"element={<BSH/>}/>
        <Route path="/naac-ssr-2018-2019"element={<NAAC1/>}/>
        <Route path="/naac-cycle-2"element={<NAAC2/>}/>
        <Route path="/naac-cycle-2/extendedprofile"element={<NAAC2Extended/>}/>
        <Route path="/naac-cycle-2/criterion1"element={<NAAC2C1/>}/>
        <Route path="/naac-cycle-2/criterion2"element={<NAAC2C2/>}/>
        <Route path="/naac-cycle-2/criterion3"element={<NAAC2C3/>}/>
        <Route path="/naac-cycle-2/criterion4"element={<NAAC2C4/>}/>
        <Route path="/naac-cycle-2/criterion5"element={<NAAC2C5/>}/>
        <Route path="/naac-cycle-2/criterion6"element={<NAAC2C6/>}/>
        <Route path="/naac-cycle-2/criterion7"element={<NAAC2C7/>}/>
        <Route path="/iiqa-committee"element={<Iqa22_23/>}/>
        <Route path="/rti"element={<Rti/>}/>
        <Route path="/students-feedback"element={<StudentFeedback/>}/>
        <Route path="/teachers-feedback"element={<TeacherFeedback/>}/>
        <Route path="/employer-feedback"element={<EmployerFeedback/>}/>
        <Route path="/alumni-feedback"element={<AlumniFeedback/>}/>
        <Route path="/grievance-redressal-portal"element={<Grievance/>}/>
        <Route path="/career"element={<Career/>}/>
        <Route path="/contact-us"element={<Contact/>}/>
        <Route path="/academic-calendar"element={<AcademicCalender/>}/>
        <Route path="/cos-and-pos"element={<CoPo/>}/>
        <Route path="/training-and-placement"element={<PlacementPage/>}/>
        <Route path="/faculty-members"element={<FacultyPage/>}/>
        <Route path="/:facultyId" element={<FacultyProfile />} />
      </Routes>
      <EnquireButton />
      <Footer />
    </Router>
  );
}

export default App;