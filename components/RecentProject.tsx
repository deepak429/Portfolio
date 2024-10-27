"use client";

import React, { useState } from "react";
import { projects } from "../data/data";
import { PinContainer } from "./ui/3d-pin";
// import { div } from "three/examples/jsm/nodes/Nodes.js";
import { FaLocationArrow } from "react-icons/fa6";
import { TracingBeam } from "./ui/tracing-beam";
import MagicButton from "./ui/MagicButton";
import { FaCloudDownloadAlt } from "react-icons/fa";

function RecentProject() {
  const [displayedData, setDisplayedData] = useState(projects.slice(0, 4)); // Initial 3 items
  const [visibleCount, setVisibleCount] = useState(1);
  const loadMore = () => {
    // Load 3 more items each time the button is clicked
    const newVisibleCount = visibleCount + 2;

    // Update the displayed data
    setDisplayedData(projects.slice(0, newVisibleCount));
    setVisibleCount(newVisibleCount);
  };
  return (
    <TracingBeam>
      <div className="py-10 " id="projects">
        <h1 className="heading">
          A small selection of {""}
          <span className="text-purple">recent project</span>
        </h1>
        <div className="flex flex-wrap item-center justify-center p-4 gap-x-24 ">
          {displayedData.map(({ id, title, des, img, iconLists, link,link_tag }) => (
            <div
              key={id}
              className=" sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <PinContainer title={link_tag} href={link}>
                <div className="relative flex item-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  {/* <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d">
                    {/* <img src="/bg.png" alt="" /> */}
                  {/* </div> */} 
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 object-cover   "
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mb-1">
                  {title}
                </h1>

                <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex item-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        key={index}
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center item-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className=" ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  );
}

export default RecentProject;
