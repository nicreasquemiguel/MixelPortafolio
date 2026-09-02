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

        <div className='flex justify-center items-center w-64 h-64 md:w-80 md:h-80'>
          <img className='object-cover w-full h-full rounded-full ring-2 ring-white/10' src={miguel} alt="profile pic" />
        </div>

        <div className='flex flex-col items-center text-center sm:items-start sm:text-left'>
          <span className='inline-flex gap-2 items-center px-3 py-1 mb-3 text-[11px] font-medium text-red-400 rounded-full border bg-red-500/10 border-red-500/20'>
            <span className='w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse'></span>
            {t("hero.hello")}
          </span>
          <p className='m-0 text-2xl font-bold text-white md:text-4xl'>{t("hero.iam")} Miguel Pineda</p>
          <p className='m-0 mt-1 text-base font-medium text-white/40 md:text-xl'>{t("hero.working")}</p>

          <h1 className='m-0 mt-4 text-5xl font-bold md:text-7xl'>
            <span className='inline-block primary-color min-w-[10ch]'>
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
            </span>
          </h1>

          <a href="#contact" className="inline-flex gap-2 items-center px-6 py-3 mt-8 text-sm font-semibold text-white rounded-lg transition-all duration-200 bg-primary-color hover:brightness-110 hover:scale-105">
            {t("contact.work")}
          </a>

          <div className="flex gap-5 mt-6 text-4xl justify-center sm:justify-start">
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
