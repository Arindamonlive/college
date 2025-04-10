import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import chairman from "../assets/images/chairman.png";
const ChairmanMessage=()=>{
        useEffect(() => {
            AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
        }, []);

    return(
        <div className="">
                  <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <div className="flex-shrink-0" data-aos="zoom-in">
          <img
            src={chairman}
            alt="President"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-justify" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-blue-600">Chairman Message</h2>
          <h1 className="font-bold text-2xl">"Wish you all the very best for their career.“</h1>
          <p className="mt-4 text-gray-700 leading-relaxed"><p className="font-bold">” Dear Student,</p>
          

Welcome to Swami Vivekananda Institute of Science and Technology. You are about to start a new journey in your life, a journey that will help you to identify your true dreams and aspirations to shape your future. Our institute strives to arouse students’ strong feelings for their dreams of reaching the top, whatever field they choose, wherever they want to go and inspires them to ask themselves what they are meant for, and to find out what is hidden within them – the innate quality of great leader. It should be remembered that only you hold the keys of your destiny.
          </p>
          <p className="mt-4 font-semibold text-gray-900">- Dr. Ashoke Binaykia, MS </p>
        </div>
      </section>
        </div>
    )
}
export default ChairmanMessage;