import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='border-t border-white/[0.06] text-center py-8 px-6'>
      <div className='flex items-center justify-center gap-6 mb-4'>
        <a className="text-white/30 hover:text-white transition-colors duration-150 text-2xl" href="https://www.linkedin.com/in/mixel/"><AiFillLinkedin /></a>
        <a className="text-white/30 hover:text-white transition-colors duration-150 text-2xl" href="https://github.com/nicreasquemiguel"><AiFillGithub /></a>
        <a className="text-white/30 hover:text-white transition-colors duration-150 text-2xl" href="https://www.instagram.com/mixeldev"><AiFillInstagram /></a>
      </div>
      <p className='text-[10px] text-white/20 uppercase tracking-[0.2em]'>Mixel © 2025</p>
    </div>
  )
}

export default Footer