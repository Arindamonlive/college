import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import director from "../assets/images/nandan.png";

const DirectorMessage=()=>{
        useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        }, []);

    return(
        <div className="">
                  <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0" data-aos="zoom-in">
          <img
            src={director}
            alt="President"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-justify" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-blue-600">Director Message</h2>
          <h1 className="font-bold text-2xl">"Our aim is not only to make excellent professionals but also to make good human beings.“</h1>
          <p className="mt-4 text-gray-700 leading-relaxed">The quality of an organization is known by the quality of its people. Consequently creating human resource asset has become a top priority not only for organizations but also for responsive educational institutions like us who can serve the industry by offering talent to the industry. The location of our campus is very scenic. Vast expanse of greens enrich and refresh the minds of everyone associated with our institute. Close Proximity with Narendrapur Ramkrishna Mission as a student has driven me always to establish an institute where the cultural heritage of India will be blended with the latest methods of Western professional educational technique. The Institute has a faculty that combines the best in academic and practical experience.</p>
          <p className="mt-4 font-semibold text-gray-900">- Dr. Nandan Gupta, MBBS, MBA(IIM) – Gold Medalist </p>
        </div>
      </section>
        </div>
    )
}
export default DirectorMessage;