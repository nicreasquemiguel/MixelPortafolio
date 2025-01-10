import React from 'react'
import tp from '../assets/screenshots/tp-2.png'
import { useTranslation } from 'react-i18next'

const Work = () => {
    const {t, i18n} = useTranslation("global")
  return (
    <div id="projects" className='py-6 px-6  mx-auto mx-4'>
        <div className=''>
            <div className='mb-4 flex flex-col  gap-8'>
                <div className='flex flex-col md:items-center md:justify-center '>
                    <h2 className='text-2xl m-0 lg:text-3xl text-white'>
                       {t("projects.my")} <span >{t("projects.projects")} </span>
                    </h2>
                    <p className='text-gray-500'>
                        {t("projects.latest")}
                    </p>
                </div>

            </div>
            <div className=" w-full  gap-4 flex-wrap flex flex-cols justify-center items-center">
    
                <div className="w-full md:w-2/5 sp-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img className="w-full md:h-40 object-cover   rounded-xl" src={tp} alt="Terraza Pineda Frontend"/>
                    <div className="p-2">
                        <h2 className="font-bold text-lg mb-2 text-center md:text-start ">Terraza Pineda</h2>
                        <p className="text-sm text-gray-600 text-center md:text-start">Event Booking Web App/ Frontend</p>
                    </div>
                    <div className="m-2 flex justify-center  md:justify-start gap-3">
                        <a role='button' href='https://terrazapineda.netlify.app/' className="text-white bg-purple-600 min-w-20 text-center px-3 py-1 rounded-lg  no-underline hover:bg-purple-700">LINK</a>
                        <a role='button' href='https://github.com/nicreasquemiguel/TerrazaPinedaFrontend' className="text-white bg-purple-600 min-w-20 text-center px-3 py-1 rounded-lg no-underline  hover:bg-purple-700">GITHUB</a>
                    </div>
                </div>


                <div className="w-full md:w-2/5 sp-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img className="w-full md:h-40 object-cover w-120  rounded-xl" src={tp} alt=" Terraza Pineda BE"/>
                    <div className="p-2">
                        <h2 className="font-bold text-lg mb-2 text-center md:text-start ">Terraza Pineda</h2>
                        <p className="text-sm text-gray-600 text-center md:text-start">Event Booking Web App/ Backend</p>
                    </div>
                    <div className="m-2 flex justify-center">
                        <a role='button' href='https://github.com/nicreasquemiguel/TerrazaPinedaBackend' className="text-white bg-purple-600 min-w-20 text-center px-3 py-1 rounded-lg hover:bg-purple-700 no-underline">GITHUB</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Work