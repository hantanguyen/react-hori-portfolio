import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiJavascript } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { RiHtml5Fill } from "react-icons/ri";

const Technologies = () => {
    return (
        <div className="border-b border-neutrals-800 pb-24">
            <h2 className="my-20 text-center text-4xl">languages and technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTailwindcss  className="text-7xl text-cyan-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FcLinux  className="text-7xl" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className="text-7xl text-yellow-300" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiTensorflow  className="text-7xl text-orange-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoCss3 className="text-7xl text-blue-400" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiHtml5Fill  className="text-7xl text-orange-500" />
                </div>
            </div>
        </div>
    )
}; 

export default Technologies;