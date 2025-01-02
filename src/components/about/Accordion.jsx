import { createContext, useContext, useRef, useEffect, useState } from "react"
import { FaChevronDown } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";

const AccordianContext = createContext()

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul className='list-none ' {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, icon,   trigger, ...props}) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="border-b bg-[#333333]/50 rounded-xl" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between text-white font-bold items-center p-4  uppercase"
      >
        <div className="gap-6 flex grid-cols-2 	 items-center">
        {icon}
        {trigger}
        </div>
        
        <FaChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4 text-purple-700" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}