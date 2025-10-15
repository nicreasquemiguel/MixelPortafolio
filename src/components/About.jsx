import React from 'react'
import me from '../assets/me.PNG'

import { IoMdSchool } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation'

import Studies from './about/Studies';
import Courses from './about/Courses';
import Accordion from './about/Accordion'
import { useTranslation } from 'react-i18next'



const About = () => {
  const {t} = useTranslation("global")
  return (
    <div id="about" className='px-6 py-12 mx-auto text-white bg-[#232325]'>
        <div className='flex flex-col-reverse gap-8 items-center mx-auto max-w-7xl md:flex-row md:gap-12'>
            <div className='flex justify-center items-center w-full md:w-auto'>
                <div className='overflow-hidden rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105'>
                    <img src={me} alt="about me"
                        className='object-cover w-full bg-gray-700 rounded-xl h-[280px] md:h-[350px] lg:h-[400px] brightness-100 transition-transform duration-500 hover:scale-110'/>
                </div>
            </div>

            <div className="flex-1 w-full">
                <div className='mb-8'>
                    <div className='text-gray-300'>
                        <h3 className='flex flex-wrap gap-2 items-center mb-6 text-3xl font-bold md:text-4xl lg:text-5xl'>
                            {t("about.title")} <span className='text-purple-500'>&lt;</span>
                            <span className='font-bold text-purple-400'>
                                <TypeAnimation 
                                    className='text-3xl md:text-4xl lg:text-5xl'
                                    sequence={[
                                        "Miguel",
                                        1000,
                                        "Me",
                                        1000,
                                        "Mixel",
                                        1000,
                                    ]}
                                    cursor={false}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                                <span className='text-purple-500'>/&gt;</span>
                            </span>
                        </h3>
                        <p className='mb-8 text-base leading-relaxed text-gray-400 md:text-lg'>
                            {t("about.paragraph")}
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    <Accordion title={t("about.studies")} answer={<Studies/>} icon={<IoMdSchool size={22} color='white'/>} />
                    <Accordion title={t("about.courses")} answer={<Courses/>} icon={<IoBookSharp size={22} color='white'/>}/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About