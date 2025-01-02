import React, { useState } from 'react'
import me from '../assets/me.PNG'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
import { TypeAnimation } from 'react-type-animation'
import Studies from './about/Studies';
import Courses from './about/Courses';
import Accordian, {AccordianItem} from './about/Accordion';
import uvm from '../assets/logos/uvm.png'
import udg from '../assets/logos/udg.png'



const About = () => {

  return (
    <div className='py-10 text-white bg-[#232325] '>
        <div className='flex flex-col md:flex-wrap md:flex-row flex-col-reverse items-center md:gap-6 px-10 max-w-6xl mx-auto'>
            <div className='md:basis-1/6'>
                <div className='w-[400px] h-full flex items-center justify-center  '>
                    <img src={me} alt="about me"
                        className='object-cover bg-gray-700 rounded-xl h-[270px] mt-8 md:mt-0 md:h-[350px] brightness '/>
                </div>
            </div>


            <div className={"md:order-last w-full md:px-16"}>
            <Accordian className="p-0 list-none">
                    <AccordianItem value="1" trigger="Diplomas - 2" icon={<IoMdSchool size="24"/>}>
                        <Studies/>
                    </AccordianItem>
                    <AccordianItem value="2" trigger="Courses - 5" icon={<IoBookSharp size="24"/>}>
                        <Courses/>
                    </AccordianItem>
                </Accordian>
            </div>
            <div className="md:basis-3/6" >
                <div className='p-4'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-2xl md:text-5xl  flex font-semibold mb-5'>
                            About    &lt;
                            <span className='m-0  font-bold '>
                            <TypeAnimation 
                            className='m-0 ml-0 text-2xl md:text-5xl'
                            sequence={[
                                "Me",
                                1000,
                                "Miguel",
                                1000,
                                "Mixel",
                                1000,
                            ]}
                            
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            />
                                / &gt;
                            </span>
                        </h3>
                        <p className='text-left leading-7 w-full mx-0 '>
                        Versatile software developer with expertise in Python/Django backend development and a strong understanding of front-end technologies. Crafting robust and scalable solutions. Also extensive experience in IT support, ensuring smooth operations and troubleshooting technical issues.

                        </p>
                    </div>
                </div>
  
            </div>

        </div>
    </div>
  )
}

export default About