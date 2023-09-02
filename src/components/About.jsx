import React from "react";
import { SiHiveBlockchain } from "react-icons/si";
// import { SiStrapi } from "react-icons/si";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { VscServerProcess } from "react-icons/vs";

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
            <div className=" flex flex-col  border text-left rounded-2xl py-12 px-8">
              <div>
                <div className=" bg-[#00d8ff] inline-flex">
                  <SiHiveBlockchain  size={40}/>
                </div>
                <h3 className=" text-xl font-bold py-4">Reliable,tamoer-poor network</h3>
                <p>
                  Use decentralization, trusted nodes, premium data, and
                  cryptographic proofs to connect highly accurate and available
                </p>
              </div>
            </div>
            <p>card</p>
            <p>card</p>
            <p>card</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
