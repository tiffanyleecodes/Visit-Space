import React, { useState } from "react";
import Moon from "../starter-code/assets/destination/image-moon.png";
import Mars from "../starter-code/assets/destination/image-mars.png";
import Europa from "../starter-code/assets/destination/image-europa.png";
import Titan from "../starter-code/assets/destination/image-titan.png";

function Destination() {
  const [selectPlanet, setSelectPlanet] = useState("Moon");

  const planets = [
    {
      name: "Moon",
      image: Moon,
      description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
      regain perspective and come back refreshed. While you’re there, take in some history 
      by visiting the Luna 2 and Apollo 11 landing sites.`,
      distance: "384,400 km",
      travelTime: "3 days",
    },
    {
      name: "Mars",
      image: Mars,
      description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
      the tallest planetary mountain in our solar system. It’s two and a half times 
      the size of Everest!`,
      distance: "225 mil. km",
      travelTime: "9 months",
    },
    {
      name: "Europa",
      image: Europa,
      description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
  winter lover’s dream. With an icy surface, it’s perfect for a bit of 
  ice skating, curling, hockey, or simple relaxation in your snug 
  wintery cabin.`,
      distance: "628 mil. km",
      travelTime: " 3 years",
    },
    {
      name: "Titan",
      image: Titan,
      description: `The only moon known to have a dense atmosphere other than Earth, Titan 
      is a home away from home (just a few hundred degrees colder!). As a 
      bonus, you get striking views of the Rings of Saturn.`,
      distance: "1.6 bil. km",
      travelTime: "7 years",
    },
  ];

  const planet = planets.find((planet) => planet.name === selectPlanet);

  return (
    <div className="h-auto bg-no-repeat bg-cover pb-10 px-3 bg-dest-mobile-screen tablet:bg-dest-tablet-screen">
      <div className="text-white pt-24 px-5 tablet:pt-36 desktop:pt-48 ">
        <p className="text-base font-BarlowCondensed uppercase tracking-wider tablet:text-left desktop:px-20 desktop:text-2xl">
          <span className="font-bold opacity-25 mr-3">01</span> Pick your
          destination
        </p>
        <div className="desktop:grid desktop:grid-cols-2">
          <div className="flex justify-center items-center my-8 desktop:m-auto">
            <img
              src={planet.image}
              alt=""
              className="h-40 hover:h-48 duration-700 tablet:h-76 tablet:hover:h-84 desktop:w-445px desktop:h-445px desktop:hover:h-473px desktop:hover:w-473px"
            />
          </div>

          <div className="desktop:m-auto desktop:w-445px desktop:text-left desktop:my-16">
            <div className="flex justify-center gap-3 uppercase font-BarlowCondensed tracking-wide text-sm my-4 tablet:text-base tablet:gap-10 tablet:mt-16 desktop:my-0 desktop:justify-start">
              {planets.map((planet) => (
                <p
                  key={planet.name}
                  onClick={() => setSelectPlanet(planet.name)}
                  className={`cursor-pointer ${
                    selectPlanet === planet.name ? "border-b-2 pb-1" : ""
                  }`}
                >
                  {planet.name}
                </p>
              ))}
            </div>
            <div className=" tablet:px-16 desktop:px-0">
              <h1 className="text-5xl font-Bellefair uppercase mt-4 mb-2 tablet:text-80px desktop:text-8xl">
                {planet.name}
              </h1>
              <p className="text-sm  text-gray-blue leading-6 tablet:text-base desktop:text-18px desktop:leading-8">
                {planet.description}
              </p>
              <hr className="my-8 opacity-40 tablet:my-16" />
              <div className="tablet:flex tablet:items-center tablet:justify-center tablet:gap-28 desktop:justify-start">
                <div>
                  <p className="font-BarlowCondensed text-ssm text-gray-blue uppercase tracking-wide">
                    Avg. distance
                  </p>
                  <h2 className="font-Bellefair text-2xl uppercase my-2">
                    {planet.distance}
                  </h2>
                </div>
                <div className="mt-6 tablet:mt-0">
                  <p className="font-BarlowCondensed text-ssm text-gray-blue uppercase tracking-wide">
                    Est. travel time
                  </p>
                  <h2 className="font-Bellefair text-2xl uppercase my-2">
                    {planet.travelTime}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
