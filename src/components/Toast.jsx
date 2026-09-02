import React, { useEffect } from 'react'
import { AiOutlineFilePdf } from 'react-icons/ai'

const Toast = ({ message, visible, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!visible) return
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [visible, onClose, duration])

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[70] max-w-xs transition-all duration-300 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
    >
      <div className="figma-frame flex gap-3 items-start p-4 border-l-2 shadow-lg border-l-red-500/60 bg-[#1e1e1e]/95 backdrop-blur-md">
        <AiOutlineFilePdf className="flex-shrink-0 mt-0.5 text-lg text-red-400" />
        <p className="text-xs leading-relaxed text-white/70">{message}</p>
      </div>
    </div>
  )
}

export default Toast
