import React from 'react'
import { MdOutlineEmail, MdOutlineTagFaces } from "react-icons/md";
import { useTranslation } from 'react-i18next';


const ContactMe = () => {
    const {t, i18n} = useTranslation("global")
  return (
    <div id='contact' className='flex w-full  justify-center my-5 h-full md:h-[50vh] md:min-h-[300px] items-center'>
        <div className='max-w-[1200px] mx-auto w-5/6'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='p-6 mr-2 bg-[#333333]/50 rounded-xl dlex felx-col justify-around'>
                        <h1 className='text-4xl  sm:text-5xl text-white'>
                            {t("contact.contact")}<span>{t("contact.me")}</span>
                        </h1>
                        <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
                            {t("contact.work")}
                        </p>
                        
                        <div className='flex items-center flex-wrap mt-2 text-gray-400'>

                            <div className='flex justify-around items-center gap-4 '>
       
                                <p className='text-xl'>Miguel Pineda</p>

                                </div>
            
                            <div className='ml-4 basis-3/4 text-md tracking-wide flex justify-around items-center font-semibold w-40'>
                            <MdOutlineEmail/>
                            <p>mixelthedev@gmail.com</p>
                            </div>


                        </div>
                    </div>
                    <form action="https://getform.io/f/bvrrqgxb" method="post" className='p-6 flex flex-col justify center max-w-[700px]'>
                        <div className='flex flex-col'>
                            <input type='name' name='name' id='name' placeholder={t("contact.name")} className='w-100 mt-2 py-3 px-3 rounded-lg bg-[#333333]/50 border border-[#333333]/50  text-white '></input>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <input type='email' name='email' id='email' placeholder='Email...' className='w-100 mt-2 py-3 px-3 rounded-lg bg-[#333333]/50 border border-[#333333]/50  text-white '></input>
                        </div>
                        <div className='flex flex-col mt-2'>
                            <textarea  name='message' id='message' placeholder={t("contact.message")}  className='w-100 mt-2 py-3 px-3 rounded-lg bg-[#333333]/50 border border-[#333333]/50  text-white '></textarea>
                        </div>
                        <button type='submit' className='border-none bg-primary-color text-white py-3 px-6 rounded-lg mt-3'> 
                        {t("contact.submit")} 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactMe