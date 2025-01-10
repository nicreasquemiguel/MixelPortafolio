import React from 'react'

const ListCard = ({logo, size=60, title, desc, link }) => {
  return (
    <>
        <div className="m-3 grid hover:shadow-neon grid-cols-3 w-auto h-auto p-4 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-none d hover:shadow-2xl">

            <img className={'h-['+size+`px] place-self-center  md:h-[80px] grayscale col-span-3 md:col-span-1 col-start-1 md:col-start-1  md:row-span-2  object-cover `} src={logo} alt=""/>
        <div className=" col-span-3 md:col-span-2 col-start-1 md:col-start-2">
            <h2 className="font-bold  text-center  md:text-start text-white text-lg md:text-3xl mb-1 ">{title}</h2>
        </div>

        <div className=" md:col-start-2 col-span-3">
          <p className="text-sm md:text-2xl text-center md:text-start text-purple-500 "> {desc}</p>

            {      
               link &&
                
                <button
                type="button"
                className='text-white bg-purple-500/20 hover:bg-purple-500/40 rounded-full w-full md:w-1/2 font-bold  border-none h-[30px]' 

                onClick={(e) => {
                  e.preventDefault();
                  window.location.href=link;
                  }}
                    > LINK
                    </button>
            }
        </div>
      </div>
      </>
  )
}

export default ListCard