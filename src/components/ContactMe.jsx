import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';


const ContactMe = () => {
    const { t } = useTranslation("global")
    return (
        <div id='contact' className='px-6 py-12 mx-auto max-w-7xl'>
            <div className='flex flex-col justify-center items-center mb-12 text-center'>
                <h2 className='m-0 mb-2 text-3xl font-bold text-white lg:text-4xl'>
                    {t("contact.contact")} <span className='text-purple-500'>{t("contact.me")}</span>
                </h2>
                <p className='text-base text-gray-400 md:text-lg'>
                    {t("contact.work")}
                </p>
            </div>

            <div className='grid grid-cols-1 gap-8 mx-auto max-w-6xl md:grid-cols-2'>
                <div className='flex flex-col justify-center p-8 bg-[#333333]/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20'>
                    <div className='mb-6'>
                        <h3 className='mb-4 text-2xl font-bold text-white'>Get in Touch</h3>
                        <div className='space-y-4 text-gray-400'>
                            <div className='flex gap-3 items-center'>
                                <div className='flex justify-center items-center w-10 h-10 bg-purple-600 rounded-lg'>
                                    <MdOutlineEmail className='text-xl text-white' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-500'>Email</p>
                                    <p className='font-semibold text-white'>mixelthedev@gmail.com</p>
                                </div>
                            </div>
                            {/* <div className='flex gap-3 items-center'>
                            <div className='flex justify-center items-center w-10 h-10 bg-purple-600 rounded-lg'>
                                <span className='text-xl text-white'>👤</span>
                            </div>
                            <div>
                                <p className='text-sm text-gray-500'>Name</p>
                                <p className='font-semibold text-white'>Miguel Pineda</p>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>

                <form action="https://getform.io/f/bvrrqgxb" method="post" className='flex flex-col gap-4 p-8 bg-[#333333]/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20'>
                    <div className='flex flex-col'>
                        <label htmlFor='name' className='mb-2 text-sm font-medium text-gray-300'>{t("contact.name")}</label>
                        <input
                            type='text'
                            name='name'
                            id='name'
                            placeholder={t("contact.name")}
                            className='py-3 px-4 text-white bg-[#232325] rounded-lg border border-gray-700 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='email' className='mb-2 text-sm font-medium text-gray-300'>Email</label>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email...'
                            className='py-3 px-4 text-white bg-[#232325] rounded-lg border border-gray-700 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='message' className='mb-2 text-sm font-medium text-gray-300'>{t("contact.message")}</label>
                        <textarea
                            name='message'
                            id='message'
                            rows='5'
                            placeholder={t("contact.message")}
                            className='py-3 px-4 text-white bg-[#232325] rounded-lg border border-gray-700 transition-all duration-300 resize-none focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                        />
                    </div>
                    <button
                        type='submit'
                        className='px-6 py-3 font-medium text-white bg-purple-600 rounded-lg border-none transition-all duration-300 hover:bg-purple-700 hover:scale-105 active:scale-95'
                    >
                        {t("contact.submit")}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe