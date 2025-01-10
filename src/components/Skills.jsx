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
  const {t, i18n} = useTranslation("global")
  return (
    <div id="skills" className="w-full flex flex-wrap text-center px-3 mt-4 md:mx-0 ">
        <div className='flex flex-col ml-5 text-left w-full self-center basis-5/5 items-left md:items-center '>
            <h2 className='text-2xl m-0 lg:text-3xl text-white'>
              {t("skills.my")} <span >{t("skills.skills")} </span>
            </h2>
            <p className='text-gray-500'>
                {t("skills.tech")}
            </p>
        </div>
        <div className="w-3/4 md:w-1/2 max-w-[1000px] mx-5 md:mx-auto  flex flex-row flex-wrap  gap-y-10  text-white font-xl text-5xl justify-items-center">
    
            <IoLogoPython data-tooltip-id="python" data-tooltip-content="Python" title="Python"  className="skill-icon " />
            <Tooltip id="python" />

            <IoLogoJavascript  data-tooltip-id="javascript" data-tooltip-content="Javascript" title="Javascript"  className="skill-icon "  />
            <Tooltip id="javascript" />
 
            <IoLogoHtml5  data-tooltip-id="HTML" data-tooltip-content="HTML" title="HTML"   className="skill-icon "  />
            <Tooltip id="HTML" />

            <IoLogoCss3  data-tooltip-id="CSS" data-tooltip-content="CSS" title="CSS"    className="skill-icon " />
            <Tooltip id="CSS" />

            <SiDjango  data-tooltip-id="Django" data-tooltip-content="Django" title="Django"    className="skill-icon" />
            <Tooltip id="Django" />

            <AiOutlineConsoleSql  data-tooltip-id="SQL" data-tooltip-content="SQL" title="SQL"    className="skill-icon" />
            <Tooltip id="SQL" />

            <SiTailwindcss   data-tooltip-id="Tailwind" data-tooltip-content="Tailwind" title="Tailwind"   className="skill-icon" />
            <Tooltip id="Tailwind" />  

            <IoLogoGithub  data-tooltip-id="Github" data-tooltip-content="Github" title="Github"   className="skill-icon"  />
            <Tooltip id="Github" />

            <HiComputerDesktop  data-tooltip-id="PC" data-tooltip-content="PC" title="PC"    className="skill-icon" />
            <Tooltip id="PC" />   

            <MdNetworkWifi3Bar data-tooltip-id="Network" data-tooltip-content="General Network" title="Network"    className="skill-icon" />
            <Tooltip id="Network" />  

            <MdOutlineSecurity  data-tooltip-id="security" data-tooltip-content="Security" title="Security"   className="skill-icon" />
            <Tooltip id="security" /> 

            <BiSupport  data-tooltip-id="support" data-tooltip-content="IT Support" title="IT Support"     className="skill-icon"  />
            <Tooltip id="support" /> 
        </div>

    </div>
  )
}

export default Skills