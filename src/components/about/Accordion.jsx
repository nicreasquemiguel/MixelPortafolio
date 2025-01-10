import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import React, { useState } from "react";

const Accordion = ({ title, answer, icon }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full bg-[#333333]/50 hover:b-[#333333]/20 border-none rounded-xl h-[40px] items-center p-6"
      >
        <div className="gap-6 flex grid-cols-2 	 items-center">
        <span className="">{icon}</span>
        <span className="gap-6 flex grid-cols-2  uppercase font-bold	 items-center text-white pt-1 text-lg">{title}</span>
        </div>
        {accordionOpen ? <FaChevronUp size={16} color="white" /> :  <FaChevronDown color="white" size={16}/>}

      </button>
      <div
        className={`grid overflow-hidden transition-all  bg-[#333333]/50 rounded-xl duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;