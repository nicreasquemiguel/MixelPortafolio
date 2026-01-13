import React from 'react'
import hero from '../assets/hero-purple.png'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t, i18n } = useTranslation("global")

  // CV links for different languages
  const cvLinks = {
    es: "https://drive.google.com/file/d/14aMv2mIUO2_QwACmRGmq0i8LUqokK36Q/view?usp=sharing",
    en: "https://drive.google.com/file/d/1IjqHHZReQlTHgklYSQIJEDGuvHqccCIQ/view?usp=sharing"
  }

  const currentCvLink = cvLinks[i18n.language] || cvLinks.en

  return (
    <div>
      <div className='my-0 md:my-7 max-w-[1200px] h-auto mx-auto md:mx-32 lg:mx-64 flex flex-col-reverse sm:flex-row 
                        justify-center align-center sm:mt-0' id='home'>

        <div className='flex flex-col mx-auto my-auto'>
          <p className='m-0 text-xl font-bold text-gray-200 md:text-5xl sm:text-4xl'>{t("hero.hello")}</p>
          <div className='m-0'>
            {/* <p className='m-0 text-xl font-bold text-gray-200 md:text-5xl sm:text-4xl'>{t("hero.iam")} Miguel Pineda</p> */}

            <p className='m-0 mt-2 text-xl font-bold text-gray-500 md:text-3xl sm:text-4xl'>{t("hero.working")}</p>
          </div>
          <h1 className='m-0 text-4xl font-bold md:text-7xl sm:text-6xl md:py-6'>
            <TypeAnimation
              className='m-0'
              sequence={[
                "Web Dev...",
                1000,
                "IT Support",
                1000,
                "Backend...",
                1000,
                "Design...",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex gap-16 justify-start my-7 text-5xl text-purple-600">
            {/* <a className="text-white" href="https://www.linkedin.com/in/mixel/"><AiFillLinkedin /></a> */}
            <a className="text-white" href="https://github.com/nicreasquemiguel"><AiFillGithub /></a>
            <a className="text-white" href="https://www.instagram.com/mixeldev"><AiFillInstagram /></a>
          </div>
          <div className="inline-flex relative my-3 group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                 from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 
                 group-hover:-inset-1 group-hover:duration-200">
            </div>
            {/* <a href={currentCvLink}
              title="Download CV"
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex relative justify-center items-center px-6 py-3 text-base font-bold text-white no-underline bg-purple-600 rounded-xl transition-all duration-300 md:px-8 md:py-4 md:text-lg hover:bg-purple-700 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">{t("hero.download")}
            </a> */}
          </div>
        </div>

        <div className='flex justify-center items-center mx-auto h-1/2'>
          <img className='h-1/4 uto' src={hero} alt="profile pic" />
        </div>


      </div>
    </div>
  )
}

export default Hero