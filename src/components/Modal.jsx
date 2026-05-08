import { X } from "react-feather"

export default function Modal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex z-40 justify-center items-center transition-colors
        ${open ? "visible bg-black/60 backdrop-blur-sm" : "invisible"}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-[#252525] border border-white/[0.08] rounded-xl shadow-xl p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-300 bg-slate-800 hover:bg-slate-700 hover:text-white"
        >
          <X />
        </button>
        {children}
      </div>
    </div>
  )}