import React from 'react'
import Modal from './Modal'
import { useTranslation } from 'react-i18next'

const LangModal = ({open = true, setOpen}) => {
    const {i18n} = useTranslation("global")

    const handleChangeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
  return (
    <div>      
        
    <Modal open={open} onClose={setOpen}>
    <div className="text-center w-56 z-50">

      <div className="mx-auto my-4 w-48">
        <h3 className="text-lg font-black text-white">English / Español?</h3>
        <p className="text-sm text-gray-500">
          Choose your preffered language...<br/>
        </p>
        
      </div>
      <div className="flex gap-4">
        <button 
            className="btn bg-slate-900/40 hover:bg-slate-900/70 hover:text-white rounded-xl text-white font-bold h-[45px] border-none w-full"
            onClick={()=>{
                handleChangeLanguage("en")
                setOpen(false)    
            }}>
            English</button>
        <button
          className="bg-slate-900/40 hover:bg-slate-900/70 hover:text-white rounded-xl text-white font-bold h-[45px] border-none w-full"
          onClick={()=>{
            handleChangeLanguage("es")
            setOpen(false)    
        }}
        >
          Español
        </button>
      </div>
    </div>
      </Modal>
    </div>
  )
}

export default LangModal