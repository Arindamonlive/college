import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import principal from "../assets/images/sonali.png";

const Principal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
        Principal of the Institution
      </h1>
      <div className="bg-white p-6 shadow-lg rounded-lg text-center" data-aos="zoom-in">
        <img src={principal} alt="Dr. Sonali Sarkar" className="mx-auto w-48 h-48 rounded-full shadow-md mb-4" />
        <h2 className="text-xl font-semibold">Dr. Sonali Ghosh (Sarkar)</h2>
        <p className="text-gray-600">Principal</p>
        <p className="mt-2 font-medium">Email: <a href="mailto:drsonalisarkar30@gmail.com" className="text-blue-500 hover:underline">drsonalisarkar30@gmail.com</a></p>
        <p className="mt-1">Mobile: <a href="tel:+919433806989" className="text-blue-500 hover:underline">+91-9433806989</a> / <a href="tel:+917003599978" className="text-blue-500 hover:underline">+91-7003599978</a></p>
      </div>
      
      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4">Qualification & Experience</h3>
        <p><strong>Qualification:</strong> B.Sc.(H), B.Tech., M.Tech.(CU), GATE Qualified, Ph.D from IIT KGP with Institute Scholarship.</p>
        <p><strong>Experience:</strong> 9 years Research experience & more than 20 years of Teaching experience in Engineering Colleges.</p>
        <p><strong>Number of Publications:</strong> 13 in National & International Journals and Book Chapters.</p>
        <p><strong>Academic Contributions:</strong></p>
        <ul className="list-disc list-inside">
        <li>Worked as Guest Lecturer in BESU, USS, Paper Setter, Moderator, Examiner in Government University/ College</li>
            <li>Worked as Expert in Selection Panel and External Examiner in Engineering Colleges</li>
            <li>Worked as Observer for WBJEE</li>
            <li>Worked as Session Chair in two international conferences</li>
            <li>Received Certificate of Completion for Introduction to Sustainability from University of ILLINOIS (USA)</li>
            <li>Received Record of Achievement as Global Health Cluster from WHO (World Health Organization)</li>
            <li>Successfully completed Career Edge – Knock down the Lockdown course by TCS Ion</li>
            <li>Received appreciation by Maneka Gandhi (Minister of Women and Child Development) for important suggestions in drafting the National Policy for Women</li>
            <li>Received Advanced C1 Level Certificate in Test of English Proficiency from British Council</li>
            <li>Successfully completed 8-day course on Basics of Intellectual Property Rights</li>
            <li>Successfully completed AICTE Evaluated 2-Week Patent Course (Equivalent to 30 Hours work load)</li>
            <li>Felicitated with Certificate of Recognition for Valuable and Exemplary Contribution in the Education Sector in the New Normal Leadership Summit and Awards</li>
        </ul>
      </div>

      <div className="mt-8 bg-white p-6 shadow-lg rounded-lg" data-aos="fade-up">
        <h3 className="text-2xl font-semibold mb-4">Message from the Principal</h3>
        <p>India’s abundant manpower is an envy for many so-called developed countries, which needs to be transformed into skilled professionals to become a valuable human resource.</p>
        <p>SVIST, motivated by Swamiji’s dream to train and educate the young generation, has focused on educating budding engineers so that they can cope with the ever-changing global challenges. We not only teach students with high education standards but also fortify them with the latest advancements in technology. At the same time, we train students to develop them into successful professionals for the corporate world, instilling ethics and moral values to transform them into good human beings.</p>
        <p>The institute has a team of dedicated, experienced faculty members to ensure all-round development. Our USP includes year-round training programs, evening doubt-clearing sessions, video lectures for revision, GATE classes, software skill training, aptitude and soft skill classes, and sports facilities.</p>
        <p>All these features make SVIST the best destination for aspiring engineers. I wish all bright young minds the best in pursuing their careers at SVIST.</p>
      </div>

      <div className="mt-6">
          <h3 className="text-xl font-semibold">Video Profile:</h3>
          <div className="flex justify-center mt-4">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s42GR2xkLEc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div></div>

      
    </div>
  );
};

export default Principal;
