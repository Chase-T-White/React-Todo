import React from "react";
import Image from "next/image";

const CharacterSelect = ({ setCharacter }) => {
  return (
    <div className="absolute inset-0 w-full h-full bg-black/[0.8] backdrop-blur-sm z-10">
      <div className="h-full">
        <h2 className="mt-8 text-center">Choose your fighter</h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-8 z-20">
          <div
            className="w-[150px] h-[200px] relative hover:outline-[15px] hover:outline-green hover:outline focus:outline-[15px] focus:outline-green focus:outline cursor-pointer"
            onClick={() => setCharacter("Raiden")}
          >
            <Image src={"/images/raiden.png"} alt="Raiden" fill />
          </div>
          <div
            className="w-[150px] h-[200px] relative hover:outline-[15px] hover:outline-green hover:outline focus:outline-[15px] focus:outline-green focus:outline cursor-pointer"
            onClick={() => setCharacter("Scorpion")}
          >
            <Image src={"/images/scorpion.png"} alt="Scorpion" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
