import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useState } from "react";

const Accordion = ({ title, answer, icon }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full bg-slate-900/50 hover:bg-slate-900/20 border-none rounded-xl h-[40px] items-center p-6"
      >
        <div className="gap-6 flex grid-cols-2 	 items-center">
        <span className="">{icon}</span>
        <span className="gap-6 flex grid-cols-2  uppercase font-bold	 items-center text-white pt-1 text-lg">{title}</span>
        </div>
        {accordionOpen ? <FaChevronUp size={16} color="white" /> :  <FaChevronDown color="white" size={16}/>}

      </button>
      <div
        className={`overflow-hidden transition-all bg-[#333333]/50 rounded-xl duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? 'max-h-[1200px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-4">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;