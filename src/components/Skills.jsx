import React from 'react'
import { IoLogoPython, IoLogoGithub, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiDjango, SiTailwindcss } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdNetworkWifi3Bar, MdOutlineSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const {t} = useTranslation("global")
  return (
    <div id="skills" className="px-6 py-12 mx-auto max-w-7xl">
        <div className='flex flex-col justify-center items-center mb-12 text-center'>
            <h2 className='m-0 mb-2 text-3xl font-bold text-white lg:text-4xl'>
              {t("skills.my")} <span className='text-purple-500'>{t("skills.skills")}</span>
            </h2>
            <p className='text-base text-gray-400 md:text-lg'>
                {t("skills.tech")}
            </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center items-center mx-auto max-w-4xl md:gap-12">
    
            <IoLogoPython data-tooltip-id="python" data-tooltip-content="Python" title="Python" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="python" />

            <IoLogoJavascript data-tooltip-id="javascript" data-tooltip-content="Javascript" title="Javascript" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="javascript" />
 
            <IoLogoHtml5 data-tooltip-id="HTML" data-tooltip-content="HTML" title="HTML" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="HTML" />

            <IoLogoCss3 data-tooltip-id="CSS" data-tooltip-content="CSS" title="CSS" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="CSS" />

            <SiDjango data-tooltip-id="Django" data-tooltip-content="Django" title="Django" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="Django" />

            <AiOutlineConsoleSql data-tooltip-id="SQL" data-tooltip-content="SQL" title="SQL" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="SQL" />

            <SiTailwindcss data-tooltip-id="Tailwind" data-tooltip-content="Tailwind" title="Tailwind" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="Tailwind" />  

            <IoLogoGithub data-tooltip-id="Github" data-tooltip-content="Github" title="Github" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="Github" />

            <HiComputerDesktop data-tooltip-id="PC" data-tooltip-content="PC Support" title="PC Support" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="PC" />   

            <MdNetworkWifi3Bar data-tooltip-id="Network" data-tooltip-content="Network Administration" title="Network Administration" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="Network" />  

            <MdOutlineSecurity data-tooltip-id="security" data-tooltip-content="Security" title="Security" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="security" /> 

            <BiSupport data-tooltip-id="support" data-tooltip-content="IT Support" title="IT Support" className="text-6xl text-white transition-all duration-300 cursor-pointer md:text-7xl hover:text-purple-500 hover:scale-125 hover:-translate-y-2" />
            <Tooltip id="support" /> 
        </div>
    </div>
  )
}

export default Skills