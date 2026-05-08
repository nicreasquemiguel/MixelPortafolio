import React from 'react'
import programar from '../assets/programar.png'
import { IoMdSchool } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation'

import Studies from './about/Studies';
import Courses from './about/Courses';
import { useTranslation } from 'react-i18next'

const About = () => {
  const {t} = useTranslation("global")
  return (
    <div id="about" className='px-6 py-16 mx-auto max-w-7xl'>

      {/* Intro frame */}
      <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>about — frame</p>
      <div className='figma-frame flex flex-col-reverse gap-8 items-center p-8 md:p-12 md:flex-row md:gap-12 mb-3'>
        <div className='flex justify-center items-center w-full md:w-auto'>
          <div className='overflow-hidden rounded-lg'>
            <img src={programar} alt="about me"
              className='object-cover w-full rounded-lg h-[260px] md:h-[320px] lg:h-[370px] brightness-90 transition-transform duration-500 hover:scale-105'/>
          </div>
        </div>

        <div className="flex-1 w-full">
          <h3 className='flex flex-wrap gap-2 items-center mb-5 text-3xl font-bold md:text-4xl lg:text-5xl'>
            {t("about.title")} <span className='text-red-500'>&lt;</span>
            <span className='font-bold text-red-400'>
              <TypeAnimation
                sequence={["Miguel", 1000, "Me", 1000, "Mixel", 1000]}
                cursor={false}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <span className='text-red-500'>/&gt;</span>
            </span>
          </h3>
          <p className='text-sm leading-relaxed text-white/50 md:text-base'>
            {t("about.paragraph")}
          </p>
        </div>
      </div>

      {/* Studies frame */}
      <div className="mt-10">
        <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>studies — frame</p>
        <div className="figma-frame p-6 md:p-8 mb-3">
          <div className="flex items-center gap-2 mb-6">
            <IoMdSchool size={16} className="text-red-400" />
            <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">{t("about.studies")}</span>
          </div>
          <Studies/>
        </div>
      </div>

      {/* Courses frame */}
      <div className="mt-3">
        <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>courses — frame</p>
        <div className="figma-frame p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <IoBookSharp size={16} className="text-red-400" />
            <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">{t("about.courses")}</span>
          </div>
          <Courses/>
        </div>
      </div>

    </div>
  )
}

export default About
