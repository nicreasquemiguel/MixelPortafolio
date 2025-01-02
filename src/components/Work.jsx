import React from 'react'
import tp from '../assets/screenshots/tp-2.png'

const Work = () => {
  return (
    <div className='py-6 max-w-[1000px] mx-auto m-'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justifty-between gap-8'>
                <div className='flex flex-col '>
                    <h2 className='text-2xl m-0 lg:text-3xl text-white'>
                       My <span >Projects</span>
                    </h2>
                    <p className='text-gray-500'>
                        These are my latest projects.
                    </p>
                </div>

            </div>
            <div class="bg--100 w-full  gap-4 flex-wrap flex flex-cols justify-center items-center">
    
                <div class="w-full md:w-2/5 sp-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <img class="h-40 object-cover   rounded-xl" src={tp} alt="Terraza Pineda Frontend"/>
                    <div class="p-2">
                        <h2 class="font-bold text-lg mb-2 text-center md:text-start ">Terraza Pineda</h2>
                        <p class="text-sm text-gray-600 text-center md:text-start">Event Booking Web App/ Frontend</p>
                    </div>
                    <div class="m-2 flex justify-center  md:justify-start gap-3">
                        <a role='button' href='https://terrazapineda.netlify.app/' className="text-white bg-purple-600 min-w-20 text-center px-3 py-1 rounded-lg  no-underline hover:bg-purple-700">LINK</a>
                        <a role='button' href='https://github.com/nicreasquemiguel/TerrazaPinedaFrontend' class="text-white bg-purple-600 min-w-20 text-center px-3 py-1 rounded-lg no-underline  hover:bg-purple-700">GITHUB</a>
                    </div>
                </div>


                <div class="w-full md:w-2/5 sp-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                    <img class="h-40 object-cover w-120  rounded-xl" src={tp} alt=" Terraza Pineda BE"/>
                    <div class="p-2">
                        <h2 class="font-bold text-lg mb-2 text-center md:text-start ">Terraza Pineda</h2>
                        <p class="text-sm text-gray-600 text-center md:text-start">Event Booking Web App/ Backend</p>
                    </div>
                    <div class="m-2 flex justify-center">
                        <a role='button' href='https://github.com/nicreasquemiguel/TerrazaPinedaBackend' class="text-white bg-purple-600 min-w-20 text-center px-3 py-1 rounded-lg hover:bg-purple-700 no-underline">GITHUB</a>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Work