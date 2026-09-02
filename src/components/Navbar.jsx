import {useState , useRef, useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import LangModal from './LangModal'
import MixelTerminal from './MixelTerminal'
import { US, MX } from 'country-flag-icons/react/3x2'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [open, setOpen] = useState(true)
    const [terminal, setTerminal] = useState(false)

    const ref = useRef()
    const {t, i18n} = useTranslation("global")

    const callbackOpen = () => setOpen(false)
    const closeNav = () => setNav(false)

    useEffect(()=>{
        let handler = (e) =>{
            if(ref.current && !ref.current.contains(e.target)){
                setNav(false)
            }
        }
        document.addEventListener("mousedown", handler)
        return()=>{ document.removeEventListener("mousedown", handler) }
    })

  return (
    <>
      <LangModal open={open} setOpen={callbackOpen}/>
      {terminal && <MixelTerminal onClose={() => setTerminal(false)} />}

      {/* Backdrop */}
      {nav && (
        <div
          onClick={closeNav}
          className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* Mobile drawer */}
      <div
        ref={ref}
        style={{ height: '100dvh' }}
        className={`fixed top-0 left-0 w-[75%] max-w-xs z-[60] flex flex-col overflow-y-auto transition-transform duration-300 bg-[#1a1a1a]/90 backdrop-blur-xl border-r border-white/[0.08]
          ${nav ? 'translate-x-0' : '-translate-x-full'}`}
      >
          <div className="flex items-center justify-between px-5 h-14 border-b border-white/[0.06]">
            <h1 onClick={() => setTerminal(true)} className='text-base font-bold tracking-wider cursor-pointer primary-color'>MIXEL</h1>
            <button onClick={closeNav} className="text-white/50 hover:text-white bg-transparent border-none cursor-pointer">
              <AiOutlineClose size={18}/>
            </button>
          </div>

          <ul className='px-4 py-4 text-base list-none space-y-1 flex-1'>
              <li><a onClick={closeNav} className='nav-link block px-3 py-2.5 rounded hover:bg-white/[0.06]' href='#home'>{t("nav.home")}</a></li>
              <li><a onClick={closeNav} className='nav-link block px-3 py-2.5 rounded hover:bg-white/[0.06]' href='#about'>{t("nav.about")}</a></li>
              <li><a onClick={closeNav} className='nav-link block px-3 py-2.5 rounded hover:bg-white/[0.06]' href='#skills'>{t("nav.skills")}</a></li>
              <li><a onClick={closeNav} className='nav-link block px-3 py-2.5 rounded hover:bg-white/[0.06]' href='#experience'>Experience</a></li>
              <li><a onClick={closeNav} className='nav-link block px-3 py-2.5 rounded hover:bg-white/[0.06]' href='#projects'>{t("nav.projects")}</a></li>
              <li><a onClick={closeNav} className='nav-link block px-3 py-2.5 rounded hover:bg-white/[0.06]' href='#contact'>{t("nav.contact")}</a></li>
          </ul>

          <div className='px-5 py-4 border-t border-white/[0.06]'>
            <button onClick={()=>{ setOpen(true); closeNav() }} className='w-10 h-auto text-white bg-transparent border-none cursor-pointer'>
                {i18n.language === 'en' ? <US/> : <MX/>}
            </button>
          </div>
      </div>

      {/* Top navbar */}
      <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-12 px-5 bg-[#1e1e1e]/95 backdrop-blur-md border-b border-white/[0.08]'>
          <h1 onClick={() => setTerminal(true)} className='text-base font-bold tracking-wider cursor-pointer primary-color'>MIXEL</h1>

          <ul className='hidden list-none gap-1 md:flex items-center'>
              <li><a className='nav-link text-sm px-3 py-1.5 rounded hover:bg-white/[0.06]' href='#home'>{t("nav.home")}</a></li>
              <li><a className='nav-link text-sm px-3 py-1.5 rounded hover:bg-white/[0.06]' href='#about'>{t("nav.about")}</a></li>
              <li><a className='nav-link text-sm px-3 py-1.5 rounded hover:bg-white/[0.06]' href='#skills'>{t("nav.skills")}</a></li>
              <li><a className='nav-link text-sm px-3 py-1.5 rounded hover:bg-white/[0.06]' href='#experience'>Experience</a></li>
              <li><a className='nav-link text-sm px-3 py-1.5 rounded hover:bg-white/[0.06]' href='#projects'>{t("nav.projects")}</a></li>
              <li><a className='nav-link text-sm px-3 py-1.5 rounded hover:bg-white/[0.06]' href='#contact'>{t("nav.contact")}</a></li>
              <li className='ml-2 pl-2 border-l border-white/[0.1]'>
                  <button onClick={()=>setOpen(true)} className='w-7 h-auto text-white bg-transparent border-none cursor-pointer'>
                      {i18n.language === 'en' ? <US/> : <MX/>}
                  </button>
              </li>
          </ul>

          <button onClick={()=>setNav(true)} className='block md:hidden cursor-pointer text-white/70 bg-transparent border-none'>
              <AiOutlineMenu size={18}/>
          </button>
      </div>
    </>
  )
}

export default Navbar
