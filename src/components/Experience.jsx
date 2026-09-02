import React, { useState } from 'react'
import { MdDateRange, MdLocationOn, MdExpandMore, MdWork } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const {t} = useTranslation("global")
    const [expandedCards, setExpandedCards] = useState([0])

    const toggleCard = (index) => {
        if (index === 0) return
        setExpandedCards(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        )
    }

    const getTranslatedType = (type) => {
        const typeMap = {
            'Full Time': t("experience.fulltime"),
            'Self-Employed': t("experience.selfemployed"),
            'Temporary': t("experience.temporary"),
            'Internship': t("experience.internship")
        }
        return typeMap[type] || type
    }

    const experiences = [
        {
            title: "Backend Development / Team Lead (Python / Django / FastAPI)",
            company: "Centra Med",
            type: "Full Time",
            period: "Mar 2025 - Present",
            location: "Guadalajara, Jalisco, México",
            description: "Leading backend development for an administrative medical management web application built to FHIR, HL7, and HIPAA standards.",
            responsibilities: [
                "Architected and maintained Django microservices powering core business logic",
                "Designed and implemented a FastAPI gateway to unify service communication",
                "Led AWS infrastructure integration for scalable, secure deployments",
                "Directed integration of an AI-powered chatbot with call handling capabilities",
                "Managed and mentored the development team, overseeing sprint planning and code quality"
            ],
            current: true
        },
        {
            title: "General Director",
            company: "Terraza Pineda",
            type: "Self-Employed",
            period: "2022 - Present",
            location: "Guadalajara, Jalisco, México",
            description: "Event management and business administration.",
            responsibilities: ["Business Management", "Web Development", "Event Planning"],
            current: true
        },
        {
            title: "Junior Software Engineer",
            company: "Hospital Civil De Guadalajara",
            type: "Temporary",
            period: "Jan 2021 - Oct 2021",
            location: "Guadalajara, Jalisco, México",
            description: "Software development and database management for hospital systems.",
            responsibilities: ["Junior Programmer", "Database Administrator"],
            current: false
        },
        {
            title: "University Intern",
            company: "Biblioteca Pública del Estado Juan José Arreola",
            type: "Internship",
            period: "2020",
            location: "Zapopan, Jalisco, México",
            description: "Web development and database management for public library systems.",
            responsibilities: ["Database Administrator", "Website Administrator", "Marketing Assistant"],
            current: false
        }
    ];

    return (
        <div id="experience" className='px-6 py-16 mx-auto max-w-7xl'>

            <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>experience — frame</p>
            <div className="figma-frame p-6 md:p-8">
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">
                        {t("experience.work")} {t("experience.experience")}
                    </span>
                    <div className="flex-1 h-px bg-white/[0.06]"></div>
                </div>

                <div className="space-y-3">
                    {experiences.map((exp, index) => {
                        const isExpanded = expandedCards.includes(index)
                        return (
                            <div key={index} className={`figma-frame p-4 md:p-5 group ${exp.current ? 'border-l-2 border-l-red-500/40' : ''}`}>
                                <div
                                    onClick={() => toggleCard(index)}
                                    className={`flex flex-wrap gap-3 justify-between items-start ${index !== 0 ? 'cursor-pointer' : ''} ${isExpanded ? 'mb-4' : 'mb-0'}`}
                                >
                                    <div className="flex gap-3 items-start flex-1 min-w-0">
                                        <div className={`flex items-center justify-center w-8 h-8 flex-shrink-0 ${exp.current ? 'text-green-400' : 'text-white/40'}`}>
                                            <MdWork className="text-lg" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className='text-sm font-semibold leading-snug text-white group-hover:text-red-400 transition-colors duration-150'>{exp.title}</h3>
                                            <p className='text-xs text-red-400/80 mt-0.5'>{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center flex-shrink-0">
                                        <span className={`text-[10px] px-2 py-0.5 rounded border font-medium whitespace-nowrap ${
                                            exp.current
                                                ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                                : 'bg-white/[0.04] text-white/30 border-white/[0.08]'
                                        }`}>
                                            {getTranslatedType(exp.type)}
                                        </span>
                                        {index !== 0 && (
                                            <button className="p-0 text-white/30 bg-transparent border-none outline-none hover:text-white/70 transition-colors">
                                                <MdExpandMore className={`text-lg transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {!isExpanded && (
                                    <div className="flex flex-wrap gap-3 mt-3 pt-3 text-[10px] text-white/30 border-t border-white/[0.06]">
                                        <div className="flex gap-1 items-center">
                                            <MdDateRange className='text-red-400/60'/>
                                            <span>{exp.period}</span>
                                        </div>
                                        <span className="text-white/10">•</span>
                                        <div className="flex gap-1 items-center">
                                            <MdLocationOn className='text-red-400/60'/>
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                )}

                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="mt-3 pl-3 border-l border-red-500/30">
                                        <p className='text-xs text-white/50 leading-relaxed'>{exp.description}</p>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.15em] mb-2">
                                            {t("experience.responsibilities")}
                                        </p>
                                        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <div key={idx} className="flex gap-2 items-start text-xs leading-relaxed text-white/50">
                                                    <div className="w-1 h-1 mt-1.5 bg-red-500/60 rounded-full flex-shrink-0"></div>
                                                    {resp}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-4 pt-3 text-[10px] text-white/30 border-t border-white/[0.06]">
                                        <div className="flex gap-1.5 items-center">
                                            <MdDateRange className='text-red-400/60'/>
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex gap-1.5 items-center">
                                            <MdLocationOn className='text-red-400/60'/>
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Experience
