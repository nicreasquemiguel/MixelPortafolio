import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-t border-gray-500 text-center'>
      <p className='my-5 text-gray-500'>
        Mixel 2025
      </p>
      <div className='flex items-center justify-center'>
        <div className='flex w-1/3 justify-between items-center text-gray-500 text-3xl'>
          <a className="text-white" href="https://www.linkedin.com/in/mixel/"><AiFillLinkedin /></a>
          <a className="text-white" href="https://github.com/nicreasquemiguel"><AiFillGithub /></a>
          <a className="text-white" href="https://www.instagram.com/mixeldev"><AiFillInstagram /></a>
        </div>

      </div>
    </div>
  )
}

export default Footer