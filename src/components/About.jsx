import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className=" w-full bg-black  text-center text-white">
      <div className=" max-w-[1240px] mx-auto px-4 py-16 bg-black text-white text-center">
        <div>
          <h1 className=" py-4">A Growing Protocol Ecosystem</h1>
          <p className=" py-4 text-1xl">
            The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          {/* card Container */}
          <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* card */}
           <AboutCard/>
           <AboutCard/>
           <AboutCard/>
           <AboutCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
