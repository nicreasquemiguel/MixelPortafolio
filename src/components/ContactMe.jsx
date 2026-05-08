import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const ContactMe = () => {
    const { t } = useTranslation("global")
    return (
        <div id='contact' className='px-6 py-16 mx-auto max-w-7xl'>

            <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>contact — frame</p>
            <div className="figma-frame p-6 md:p-8">
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">
                        {t("contact.contact")} {t("contact.me")}
                    </span>
                    <div className="flex-1 h-px bg-white/[0.06]"></div>
                </div>

                <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>

                    <div className='figma-frame flex flex-col justify-center p-6'>
                        <h3 className='mb-5 text-sm font-semibold text-white'>Get in Touch</h3>
                        <div className='flex gap-3 items-center'>
                            <div className='flex justify-center items-center w-8 h-8 bg-red-500/10 border border-red-500/20 rounded'>
                                <MdOutlineEmail className='text-base text-red-400' />
                            </div>
                            <div>
                                <p className='text-[10px] text-white/30 uppercase tracking-[0.1em]'>Email</p>
                                <p className='text-sm text-white'>mixelthedev@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <form action="https://getform.io/f/bvrrqgxb" method="post" className='figma-frame flex flex-col gap-3 p-6'>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='name' className='text-[10px] font-medium text-white/30 uppercase tracking-[0.1em]'>{t("contact.name")}</label>
                            <input
                                type='text' name='name' id='name'
                                placeholder={t("contact.name")}
                                className='py-2 px-3 text-sm text-white bg-[#1e1e1e] rounded border border-white/[0.08] outline-none focus:border-red-500/40 transition-colors placeholder-white/20'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='email' className='text-[10px] font-medium text-white/30 uppercase tracking-[0.1em]'>Email</label>
                            <input
                                type='email' name='email' id='email'
                                placeholder='Email...'
                                className='py-2 px-3 text-sm text-white bg-[#1e1e1e] rounded border border-white/[0.08] outline-none focus:border-red-500/40 transition-colors placeholder-white/20'
                            />
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <label htmlFor='message' className='text-[10px] font-medium text-white/30 uppercase tracking-[0.1em]'>{t("contact.message")}</label>
                            <textarea
                                name='message' id='message' rows='4'
                                placeholder={t("contact.message")}
                                className='py-2 px-3 text-sm text-white bg-[#1e1e1e] rounded border border-white/[0.08] outline-none focus:border-red-500/40 transition-colors resize-none placeholder-white/20'
                            />
                        </div>
                        <button
                            type='submit'
                            className='py-2 px-4 text-sm font-medium text-white bg-red-500/20 hover:bg-red-500/30 border border-red-500/20 hover:border-red-500/40 rounded transition-all duration-150'
                        >
                            {t("contact.submit")}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ContactMe
