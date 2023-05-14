import React from "react";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-full bg-no-repeat bg-cover m-0 z-10 bg-home-mobile-screen tablet:bg-home-tablet-screen desktop:bg-home-desktop-screen">
      <article className="text-white pt-48 px-6 desktop:grid desktop:grid-cols-2 desktop:pb-32 desktop:pt-80">
        <div className="desktop:text-left desktop:w-450px desktop:m-auto">
          <p className="uppercase font-BarlowCondensed text-gray-blue tracking-widest text-base tablet:text-lg desktop:text-2xl">
            So, you want to travel to
          </p>
          <h1 className="uppercase text-7xl font-Bellefair my-8 tablet:text-9xl tablet:my-0">
            Space
          </h1>
          <p className=" text-gray-blue text-sm  leading-7 tablet:px-36 tablet:text-base desktop:px-0 desktop:text-18px desktop:leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="desktop:flex desktop:justify-center desktop:items-end">
          <Link to="/Destination">
            <button className="mt-24 mb-12 text-black bg-white h-36 w-36 rounded-full uppercase font-Bellefair tracking-wider text-lg hover:h-40 hover:w-40 duration-500 tablet:mt-52 tablet:mb-28 tablet:w-60 tablet:h-60 tablet:text-3xl desktop:my-0 desktop:h-274px desktop:w-274px desktop:hover:h-76 desktop:hover:w-76">
              Explore
            </button>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default Home;
