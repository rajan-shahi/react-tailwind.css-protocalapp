import React from "react";
import { SiHiveBlockchain } from "react-icons/si";
const AboutCard = () => {
  return (
    <div className=" flex flex-col  border text-left rounded-2xl py-12 px-8">
      <div>
        <div className=" bg-[#00d8ff] inline-flex p-2 rounded-full">
          <SiHiveBlockchain  size={40}/>
        </div>
        <h3 className=" text-xl font-bold py-4 ">
          Reliable,tamoer-poor network
        </h3>
        <p>
          Use decentralization, trusted nodes, premium data, and cryptographic
          proofs to connect highly accurate and available
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
