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
  const {t, i18n} = useTranslation("global")
  return (
    <div id="about" className=' mx-auto text-white bg-[#232325] '>
        <div className='flex flex-col px-4 md:flex-wrap md:flex-row flex-col-reverse items-center md:gap-6  max-w-6xl mx-auto'>
            <div className='md:basis-1/6'>
                <div className='w-[400px] h-full flex items-center justify-center  '>
                    <img src={me} alt="about me"
                        className='object-cover bg-gray-700 rounded-xl h-[230px] md:h-[270px] mt-8 md:mt-0 md:h-[350px] brightness '/>
                </div>
            </div>


            <div className={"md:order-last w-full md:px-16"}>

                <Accordion title={t("about.studies")} answer={<Studies/>} icon={<IoMdSchool size={22} color='white'/>} />

                <Accordion title={t("about.courses")} answer={<Courses/>} icon={<IoBookSharp size={22} color='white'/>}/>
            </div> 
            <div className="w-auto md:w-1/2" >
                <div className='p-4'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-2xl md:text-5xl  flex font-semibold mb-5'>
                            {t("about.title")}    &lt;
                            <span className='m-0  font-bold '>
                            <TypeAnimation 
                            className='m-0 ml-0 text-2xl md:text-5xl'
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
                                / &gt;
                            </span>
                        </h3>
                        <p className='text-left leading-7 w-full mx-0 '>
                            {t("about.paragraph")}
                        </p>
                    </div>
                </div>
  
            </div>

        </div>
    </div>
  )
}

export default About