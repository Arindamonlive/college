import React,{ useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Policy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 data-aos="fade-up" className="text-3xl font-bold mb-6">Teacher Training Policy</h1>
      
      <section data-aos="fade-up" className="mb-6">
        <p>Teachers Training Policy at the institute is prepared using guidelines given by AICTE and considering practical scenarios in unaided professional technical institutes.</p>
        <p>The training need of teachers in their career can be classified under two distinct categories:</p>
        <ul className="list-disc ml-5">
          <li>Faculty Induction Program provided just after joining the institute.</li>
          <li>In-service training programs for specific requirements at various levels of the career.</li>
        </ul>
      </section>

      <section data-aos="fade-up" className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">A. Objectives</h2>
        <ul className="list-disc ml-5">
          <li>Identify training needs at different career levels.</li>
          <li>Prescribe training structures and content.</li>
          <li>Monitor, facilitate, and improve training quality.</li>
          <li>Ensure continuous technical subject expertise updates.</li>
          <li>Encourage Industry-Institute interaction.</li>
          <li>Develop a research-driven academic culture.</li>
        </ul>
      </section>

      <section data-aos="fade-up" className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">B. Training Policy</h2>
        <h3 className="text-xl font-medium">Faculty Induction Program</h3>
        <ul className="list-disc ml-5">
          <li>Orientation on technical education challenges and teamwork.</li>
          <li>Understanding of teaching-learning processes and ICT tools.</li>
          <li>Exposure to good teaching practices and Industry-Institute interaction.</li>
          <li>Familiarization with academic policies, administrative procedures, and research methodologies.</li>
        </ul>
      </section>

      <section data-aos="fade-up" className="mb-6">
        <h3 className="text-xl font-medium">In-service Training Program</h3>
        <p className="font-medium">During 1-5 years:</p>
        <ul className="list-disc ml-5">
          <li>Refresher modules, STTPs, FDPs for skill updates.</li>
          <li>Training for research guidance, patenting, and consultancy.</li>
          <li>Record-keeping for accreditation evaluations (NAAC, NBA).</li>
        </ul>
      </section>

      <section data-aos="fade-up" className="mb-6">
        <p className="font-medium">During 5-10 years:</p>
        <ul className="list-disc ml-5">
          <li>Advanced refresher modules and FDPs.</li>
          <li>Curriculum development and research best practices.</li>
          <li>Evaluation record-keeping and administrative contributions.</li>
        </ul>
      </section>

      <section data-aos="fade-up" className="mb-6">
        <p className="font-medium">During 10-30 years (Professor/ Associate Professor/ HOD/ Dean):</p>
        <ul className="list-disc ml-5">
          <li>Collaborative research with industries and agencies.</li>
          <li>Departmental and institutional growth planning.</li>
          <li>Effective interaction with regulatory bodies.</li>
          <li>Facilitating an ethical and value-based academic environment.</li>
        </ul>
      </section>
    </div>
  );
};

export default Policy;
