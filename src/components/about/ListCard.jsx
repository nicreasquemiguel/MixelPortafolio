import React from 'react'

const ListCard = ({ logo, size = 60, title, desc, link }) => {
  return (
    <div className="figma-frame p-4 flex flex-col gap-3">
      <img
        className="h-10 object-contain grayscale opacity-60 self-start"
        style={{ height: `${Math.min(size, 40)}px` }}
        src={logo}
        alt=""
      />
      <div>
        <h2 className="text-sm font-semibold text-white leading-tight">{title}</h2>
        <p className="text-xs text-red-400 mt-0.5">{desc}</p>
      </div>
      {link && (
        <button
          type="button"
          className="mt-auto text-xs text-white/50 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] rounded px-3 py-1.5 transition-colors duration-150 w-full text-left"
          onClick={() => window.open(link, '_blank')}
        >
          View certificate →
        </button>
      )}
    </div>
  )
}

export default ListCard
