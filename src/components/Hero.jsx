import React from 'react'
import hero from '../assets/hero-purple.png'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const {t, i18n} = useTranslation("global")
  return (
    <div>
        <div className='my-0 md:my-7 max-w-[1200px] h-auto mx-auto md:mx-32 lg:mx-64 flex flex-col-reverse sm:flex-row 
                        justify-center align-center sm:mt-0' id='home'>
        
        <div className='flex flex-col mx-auto my-auto'>
            <p className='md:text-5xl m-0 sm:text-4xl text-xl font-bold text-gray-200'>{t("hero.hello")}</p>
            <div className='m-0'>
                <p className='md:text-5xl m-0 sm:text-4xl text-xl font-bold text-gray-200'>{t("hero.iam")} Miguel Pineda</p>

                <p className='md:text-3xl m-0 mt-2 sm:text-4xl text-xl font-bold text-gray-500'>{t("hero.working")}</p>
            </div>
            <h1 className='m-0 md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation 
              className='m-0'
              sequence={[
                "Web Dev...",
                1000,
                "IT Support",
                1000,
                "Backend...",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            </h1>

            <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600 ">
                <a className="text-white" href="https://www.linkedin.com/in/mixel/"><AiFillLinkedin/></a>
                <a className="text-white"  href="https://github.com/nicreasquemiguel"><AiFillGithub/></a>
                <a className="text-white"  href="https://www.instagram.com/mixeldev"><AiFillInstagram/></a>
            </div>
            <div className="relative inline-flex my-3">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                 from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
                 group-hover:-inset-1 group-hover:duration-200">
                </div>
                <a href="https://drive.google.com/file/d/130a_1r16xvI1kBLGeJy5QShjlvOUC8Wk/view?usp=drive_link" title="Download CV" role="button"
                    className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg 
                        font-bold text-white transition-all duration-200 bg-primary-color rounded-xl 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">{t("hero.download")}
                </a>
            </div>  
        </div>

        <div className='flex mx-auto h-1/2 justify-center items-center'>
          <img className='h-1/4  uto' src={hero} alt="profile pic" />
        </div>

        
        </div>
    </div>
  )
}

export default Hero