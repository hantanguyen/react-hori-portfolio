import React from "react"; 
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/hori-picture.png";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap"> 
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl" style={{ fontWeight: 200 }}>
                            hori nguyen
                            <span className="text-2xl font-regular ml-2">(he/him/his)</span>
                        </h1>
                        <span className="bg-blue-700 bg-clip-text text-4xl tracking-tight text-transparent">
                            computer science student
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter"> 
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8 ">
                    <div className="flex justify-center"> 
                        <img src={profilePic} alt="Hori Nguyen" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}; 

export default Hero;
