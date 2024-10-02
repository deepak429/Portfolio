"use client";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { FaCloudDownloadAlt } from "react-icons/fa";
import React from "react";
import MagicButton from "./MagicButton";
import Link from "next/link";
import { socialMedia } from "@/data/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa6";

function AboutMe() {
  return (
    <div className=" flex flex-col items-center lg:flex-row pt-10  xl:pt-0 gap-x-10  rounded-2xl border border-b-0  border-slate-800 px-0 lg:px-16  md:w-[80vw] ">
      <div className="flex flex-col gap-y-6  w-5/6 justify-center items-center  ">
        <h1 className="font-semibold text-lg">
          {""}
          <span className=" text-xl font-bold  hover:underline underline-offset-4 decoration-2 decoration-purple text-purple">
            Deepak Choudhary
          </span>{" "}
          - Front-End Web Developer &{" "}
          <span className="text-purple">Aspiring Full Stack Developer</span>
        </h1>
        <div>
          Hi, I'm Deepak, a passionate Front-End Web Developer currently in my
          3rd year of BCA. I’ve gained experience in HTML, CSS, JavaScript,
          React.js, and Tailwind CSS. Right now, I’m working on a project to
          build a high-performance e-commerce app called Aora, using React
          Native for the front-end and Appwrite for the backend.
        </div>
        <div>
          I recently completed the BM Skill Build Front End Developer program,
          which helped me further develop my skills and dive deeper into
          front-end technologies. My goal is to become a Full Stack Developer,
          and I’m always exploring new tools and frameworks to expand my
          knowledge and expertise.
        </div>
        
        <div className="flex items-center justify-between  w-full  gap-x-2  h-20">
          <div>
            <Link
              href={
                "https://drive.google.com/file/d/1PhYOK3OFnBkpEbaaVsnPPFLeTGGtGucj/view"
              }
            >
             
            <MagicButton 
            title='Resume Download'
            icon={<FaCloudDownloadAlt size={25}/>}
            position="right"
            
          
     
          />
            </Link>
          </div>
          

          <div className="flex items-center md:gap-3 gap-">
            {socialMedia.map(({ id, img, url }) => (
              <div
                key={id}
                className="w-10 h-10 cursor-pointer border border-purple flex justify-center items-center  backdrop-blur-lg saturate-180 bg-opacity-75 bg-transparent rounded-lg hover:mb-6 ease-in-out duration-200 "
              >
                <Link href={url}>
                  <Image src={img} alt="" height={20} width={20} className="size-30"/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CardContainer className=" ">
        <CardItem translateZ="100" className="mt-4 ">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&"
            alt="owner_profile"
            height={200}
            width={250}
            className="object-cover rounded-xl group-hover/card:shadow-xl rounded-full dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] "
          />
        </CardItem>
      </CardContainer>
    </div>
  );
}

export default AboutMe;
