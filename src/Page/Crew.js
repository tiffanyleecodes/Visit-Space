import React, { useState } from "react";
import Commander from "../starter-code/assets/crew/image-douglas-hurley.png";
import MissionSpecialist from "../starter-code/assets/crew/image-mark-shuttleworth.png";
import Pilot from "../starter-code/assets/crew/image-victor-glover.png";
import FlightEngineer from "../starter-code/assets/crew/image-anousheh-ansari.png";
function Crew() {
  const [roleName, setRoleName] = useState("Commander");
  const crews = [
    {
      name: "Douglas Hurley",
      image: Commander,
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      image: MissionSpecialist,
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      image: Pilot,
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      image: FlightEngineer,
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const crew = crews.find((crew) => crew.role === roleName);
  return (
    <div className="h-auto bg-no-repeat bg-cover bg-crew-mobile-screen tablet:bg-crew-tablet-screen">
      <p className="text-white pt-24 text-base font-BarlowCondensed uppercase tracking-wider tablet:text-left tablet:px-16 tablet:text-lg tablet:pt-32 desktop:text-2xl desktop:mb-0 desktop:pt-40 desktop:px-28 ">
        <span className="font-bold opacity-25 mr-3">02</span> Meet your crew
      </p>
      <div className="text-white  px-6  tablet:pt-8 tablet:px-10 desktop:grid desktop:grid-cols-2 desktop:px-24">
        <div className="desktop:m-auto desktop:text-left">
          <div className="hidden mt-5 pb-20 tablet:block tablet:mt-12 tablet:px-28  tablet:pb-4 desktop:px-0 desktop:w-614x">
            <p className="font-Bellefair   uppercase text-base opacity-50 tablet:text-xl tablet:mb-4 desktop:text-3xl">
              {crew.role}
            </p>
            <h2 className="font-Bellefair   uppercase text-xl tablet:text-40px desktop:text-5xl ">
              {crew.name}
            </h2>
            <p className="text-gray-blue text-sm my-4 leading-6 tablet:text-base desktop:text-18px desktop:w-444px desktop:leading-8  desktop:pb-6">
              {crew.bio}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={crew.image}
              alt=""
              className="h-56 mt-8 hover:h-64 duration-500 tablet:hidden"
            />
          </div>
          <hr className="opacity-30 tablet:hidden" />
          <div className="flex justify-center gap-4 text-grey text-4xl desktop:justify-start  ">
            {crews.map((crew) => (
              <p
                key={crew.role}
                onClick={() => setRoleName(crew.role)}
                className={`cursor-pointer ${
                  roleName === crew.role ? "text-white" : " "
                }`}
              >
                &bull;
              </p>
            ))}
          </div>
        </div>
        {/*  */}
        <div>
          <div className="mt-5 pb-20 tablet:hidden">
            <p className="font-Bellefair  uppercase text-base opacity-50">
              {crew.role}
            </p>
            <h2 className="font-Bellefair   uppercase text-xl">{crew.name}</h2>
            <p className="text-gray-blue text-sm my-4">{crew.bio}</p>
          </div>
          <div className="tablet:flex tablet:justify-center hidden tablet:mt-2 ">
            <img
              src={crew.image}
              alt=""
              className={
                (crew.image === Commander
                  ? "tablet:h-56 tablet:mt-8 tablet:hover:h-64 tablet:duration-500 desktop:h-712px desktop:hover:h-650px"
                  : " ",
                crew.image === MissionSpecialist
                  ? "tablet:h-56 tablet:mt-8 tablet:hover:h-64 tablet:duration-500 desktop:h-654px desktop:hover:h-572"
                  : " ",
                crew.image === Pilot || FlightEngineer
                  ? "tablet:h-56 tablet:mt-8 tablet:hover:h-64 tablet:duration-500 aspect-auto desktop:h-572 desktop:hover:h-445px"
                  : " ")
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crew;
