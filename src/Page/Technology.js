import React, { useState } from "react";
import vehicle from "../starter-code/assets/technology/image-launch-vehicle-landscape.jpg";
import Spaceport from "../starter-code/assets/technology/image-spaceport-landscape.jpg";
import capsule from "../starter-code//assets/technology/image-space-capsule-landscape.jpg";
import vehicleDesktop from "../starter-code/assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceportDesktop from "../starter-code/assets/technology/image-spaceport-portrait.jpg";
import capsuleDesktop from "../starter-code/assets/technology/image-space-capsule-portrait.jpg";

function Technology() {
  const [techName, setTechName] = useState("Launch vehicle");

  const technologies = [
    {
      number: "1",
      name: "Launch vehicle",
      images: vehicle,
      imageDesktop: vehicleDesktop,
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      number: "2",
      name: "Spaceport",
      images: Spaceport,
      imageDesktop: SpaceportDesktop,
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      number: "3",
      name: "Space capsule",
      images: capsule,
      imageDesktop: capsuleDesktop,
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];
  const technology = technologies.find(
    (technology) => technology.name === techName
  );
  return (
    <div className="bg-no-repeat h-full bg-cover bg-tech-mobile-screen tablet:bg-tech-tablet-screen">
      <div className="text-white pt-24 tablet:pt-36 desktop:pt-48 desktop:pb-40">
        <p className="text-base font-BarlowCondensed uppercase tracking-wider tablet:text-left tablet:px-8 desktop:text-2xl desktop:px-32 desktop:my-6 ">
          <span className="font-bold opacity-25 mr-3">03</span> Space launch 101
        </p>
        <div className="desktop:flex desktop:items-center desktop:justify-between">
          <div className="flex justify-center ">
            <img
              src={technology.images}
              alt=""
              className=" w-full my-8 tablet:my-16 desktop:hidden"
            />
          </div>
          <div className="desktop:flex desktop:items-center desktop:gap-28">
            <div className="flex justify-center items-center gap-4 mb-8 tablet:mb-12 desktop:block">
              {technologies.map((technology) => (
                <p
                  key={technology.name}
                  onClick={() => setTechName(technology.name)}
                  className={`flex justify-center items-center border-1 w-10 h-10 rounded-full tablet:w-60px tablet:h-60px  desktop:my-6 desktop:w-80px  desktop:h-80px  cursor-pointer ${
                    techName === technology.name ? "bg-white text-black" : " "
                  }`}
                >
                  {technology.number}
                </p>
              ))}
            </div>
            <div className="text px-6 pb-12 tablet:px-40 desktop:px-0  desktop:text-left">
              <p className="font-BarlowCondensed  uppercase text-ssm text-gray-blue tracking-wide mb-2 tablet:text-base desktop:text-16px">
                The terminology...
              </p>
              <h2 className="font-Bellefair   uppercase text-xl tablet:text-40px desktop:text-5xl">
                {technology.name}
              </h2>
              <p className="text-gray-blue text-sm my-3 leading-6 tablet:text-base desktop:text-18px desktop:w-444px">
                {technology.description}
              </p>
            </div>
          </div>
          <div>
            <img
              src={technology.imageDesktop}
              alt=""
              className=" hidden   desktop:flex desktop:w-515px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
