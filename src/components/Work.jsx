import React from 'react'
import tp from '../assets/screenshots/tp-2.png'
import { useTranslation } from 'react-i18next'
import centramed from '../assets/screenshots/centramed.png'

const Work = () => {
    const {t} = useTranslation("global")
  return (
    <div id="projects" className='px-6 py-12 mx-auto max-w-7xl'>
        <div className=''>
            <div className='flex flex-col gap-4 mb-12'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <h2 className='m-0 mb-2 text-3xl font-bold text-white lg:text-4xl'>
                       {t("projects.my")} <span className='text-purple-500'>{t("projects.projects")}</span>
                    </h2>
                    <p className='text-base text-gray-400 md:text-lg'>
                        {t("projects.latest")}
                    </p>
                </div>
            </div>
            
            <div className="flex flex-wrap gap-8 justify-center items-stretch w-full">
    
                <div className="group flex flex-col overflow-hidden w-full bg-white rounded-xl shadow-lg transition-all duration-300 transform md:w-[calc(50%-1rem)] lg:w-[calc(45%-1rem)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="overflow-hidden">
                        <img className="object-cover w-full h-48 transition-transform duration-500 md:h-56 group-hover:scale-110" src={tp} alt="Terraza Pineda Frontend"/>
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                        <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-purple-600">Terraza Pineda</h2>
                        <p className="mb-1 text-base text-gray-600">Event Booking Web App</p>
                        <p className="mb-4 text-sm text-gray-500">Frontend • React • Tailwind CSS</p>
                        <div className="flex gap-3 mt-auto">
                            <a role='button' href='https://terrazapineda-app.netlify.app/' className="flex-1 px-4 py-2 text-sm font-medium text-center text-white no-underline bg-purple-600 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 active:scale-95">
                                {t("buttons.viewlive")}
                            </a>
                            <a role='button' href='https://github.com/nicreasquemiguel/TerrazaPineda_Frontend' className="flex-1 px-4 py-2 text-sm font-medium text-center text-purple-600 no-underline bg-purple-100 rounded-lg transition-all duration-300 hover:bg-purple-200 hover:scale-105 active:scale-95">
                                {t("buttons.github")}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col overflow-hidden w-full bg-white rounded-xl shadow-lg transition-all duration-300 transform md:w-[calc(50%-1rem)] lg:w-[calc(45%-1rem)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="overflow-hidden">
                        <img className="object-cover w-full h-48 transition-transform duration-500 md:h-56 group-hover:scale-110" src={tp} alt="Terraza Pineda Backend"/>
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                        <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-purple-600">Terraza Pineda</h2>
                        <p className="mb-1 text-base text-gray-600">Event Booking Web App</p>
                        <p className="mb-4 text-sm text-gray-500">Backend • Python • Django • DRF (APIs)</p>
                        <div className="flex gap-3 mt-auto">
                            <a role='button' href='https://github.com/nicreasquemiguel/TerrazaPineda_Backend' className="flex-1 px-4 py-2 text-sm font-medium text-center text-white no-underline bg-purple-600 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 active:scale-95">
                                {t("buttons.github")}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="group flex flex-col overflow-hidden w-full bg-white rounded-xl shadow-lg transition-all duration-300 transform md:w-[calc(50%-1rem)] lg:w-[calc(45%-1rem)] hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="overflow-hidden">
                        <img className="object-cover w-full h-48 transition-transform duration-500 md:h-56 group-hover:scale-110" src={centramed} alt="Centramed Medical ERM"/>
                    </div>
                    <div className="flex flex-col flex-grow p-6">
                        <h2 className="mb-2 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-purple-600">Centramed</h2>
                        <p className="mb-1 text-base text-gray-600">Medical ERM APP</p>
                        <p className="mb-4 text-sm text-gray-500">Microservices • Django • FastAPI • ChatBot</p>
                        <div className="flex gap-3 mt-auto">
                            <a role='button' href='https://www.gastroenterologydiagnosticscenter.com/' target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 text-sm font-medium text-center text-white no-underline bg-purple-600 rounded-lg transition-all duration-300 hover:bg-purple-700 hover:scale-105 active:scale-95">
                                {t("buttons.viewlive")}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Work