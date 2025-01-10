import React, {useState , useRef, useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import LangModal from './LangModal'
import { US, MX } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(true)
    
    const ref = useRef()
    const {t, i18n} = useTranslation("global")

    const callbackOpen = () => {
        setOpen(false)
    }
    
    const handleNav = () =>{
        setNav(!nav)
    }

    useEffect(()=>{
        let handler = (e) =>{
            if(!ref.current.contains(e.target)){
                setNav(false)
            }}

            document.addEventListener("mousedown", handler)
        return()=>{
            document.removeEventListener("mousedown", handler)
        }
    })

  return (


    <div className='text-gray-300 flex justify-between items-center max-w-[1240px] mx-auto h-10 mt-2 px-4 text-l'>
        <LangModal  open={open} setOpen={callbackOpen}/> 
        <h1 className='w-full text-3xl font-bold primary-color ml-4'>MIXEL</h1>
        <ul className='hidden md:flex  text-gray-300 font-bold list-none'>
            <li  className='p-2 '><a className='nav-link' href='#home'>{t("nav.home")}</a></li>
            <li className='p-2'><a className='nav-link'  href='#about'>{t("nav.about")}</a> </li>
            <li className='p-2'><a className='nav-link'  href='#skills'>{t("nav.skills")}</a></li>
            <li className='p-2'><a className='nav-link'  href='#projects'>{t("nav.projects")}</a></li>
            <li className='p-2'><a className='nav-link'  href='#contact'>{t("nav.contact")}</a></li>
            <li className='p-2'><button onClick={()=>setOpen(true)} className=' h-auto p-auto w-[28px] text-black ' >{i18n.language === 'en' ? <US/>: <MX/> }</button></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div ref={ref} className= {nav 
         ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500'
         : 'fixed left-[-100%]'}>
            <h1 className='text-3xl primary-color m-4'>MIXEL</h1>
            <ul className='p-8 text-2xl list-none'>
            <li  className='p-2 '><a className='nav-link' href='#home'>{t("nav.home")}</a></li>
            <li className='p-2'><a className='nav-link'  href='#about'>{t("nav.about")}</a> </li>
            <li className='p-2'><a className='nav-link'  href='#skills'>{t("nav.skills")}</a></li>
            <li className='p-2'><a className='nav-link'  href='#projects'>{t("nav.projects")}</a></li>
            <li className='p-2'><a className='nav-link'  href='#contact'>{t("nav.contact")}</a></li>
                <li onClick={()=>setNav(!nav)} className='p-2'><button onClick={()=>setOpen(true)} className='p-auto w-[50px] text-black h-auto' >{i18n.language === 'en' ? <US/>: <MX/> }</button></li>

            </ul>
        </div>
    </div>
  )
}

export default Navbar