import React from 'react'
import miguel from '../assets/miguel.png'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { TypeAnimation } from 'react-type-animation'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation("global")

  return (
    <div className='px-6 pt-12 pb-16 mx-auto max-w-7xl' id='home'>
      <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>hero — frame</p>
      <div className='figma-frame flex flex-col gap-8 items-center justify-center p-8 md:p-16 sm:flex-row md:gap-20 min-h-[420px]'>

        <div className='flex justify-center items-center'>
          <img className='h-[320px] w-auto' src={miguel} alt="profile pic" />
        </div>

        <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
          <p className='m-0 text-lg font-medium text-white/60'>{t("hero.hello")}</p>
          <p className='m-0 mt-1 text-2xl font-bold text-white md:text-4xl'>{t("hero.iam")} Miguel Pineda</p>
          <p className='m-0 mt-1 text-base font-medium text-white/40 md:text-xl'>{t("hero.working")}</p>

          <h1 className='m-0 mt-4 text-5xl font-bold text-red-500 md:text-7xl'>
            <TypeAnimation
              sequence={[
                "Web Dev...", 1000,
                "IT Support", 1000,
                "Backend...", 1000,
                "Design...", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="flex gap-5 mt-8 text-4xl justify-center sm:justify-start">
            <a className="text-white/50 hover:text-white transition-colors duration-150" href="https://github.com/nicreasquemiguel">
              <AiFillGithub />
            </a>
            <a className="text-white/50 hover:text-white transition-colors duration-150" href="https://www.instagram.com/mixeldev">
              <AiFillInstagram />
            </a>
            <a className="text-white/50 hover:text-white transition-colors duration-150" href="https://www.linkedin.com/in/mixel/">
              <AiFillLinkedin />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
