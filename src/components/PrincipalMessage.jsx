import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import principal from "../assets/images/sonali.png";

const PrincipalMessage=()=>{
        useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        }, []);

    return(
        <div className="">
                  <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0" data-aos="zoom-in">
          <img
            src={principal}
            alt="President"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-justify" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-blue-600">Principal Message</h2>
          <h1 className="font-bold text-2xl">"I wish ‘ best wishes’ to all the bright young minds for pursuing your career in SVIST.“</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">India’s abundant man power is an envy for many so called developed Countries which needs to be transformed to skilled professionals to become Human Resource.
SVIST, motivated by Swamiji’s dream to train and educate the young generation has focused in educating the budding engineers so that they can cope up with the ever changing scenario of global challenges. In this Engineering college of high esteem, we not only teach the students with high standard of education, but also fortify them with the latest advancement in the technological field. At the same time we train students to develop them into a successful professional for the Corporate world restoring in them the ethics and moral values for transformation to a good human being.
The institute has a team of dedicated, experienced faculty members to enrich them for all round development. Our USP is the round the year training programs, special evening doubt clearing sessions, video lectures for revision, conduction of classes for GATE, software skill trainings, aptitude, softskill classes, sports facilities etc.
All these salient features make the college the best destination for aspiring engineers to choose Swami Vivekananda Institute of Science and Technology for their engineering career.</p>
          <p className="mt-4 font-semibold text-gray-900">- Dr. Sonali Ghosh (Sarkar), B.Sc.(H), B.Tech., M.Tech.(CU), Ph.D(IIT KGP) </p>
        </div>
      </section>
        </div>
    )
}
export default PrincipalMessage;