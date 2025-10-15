import React, { useState } from 'react'
import { MdDateRange, MdLocationOn, MdExpandMore, MdExpandLess } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const Experience = () => {
    const {t} = useTranslation("global")
    const [expandedCards, setExpandedCards] = useState([0]) // First card open by default
    
    const toggleCard = (index) => {
        // Keep first card always open
        if (index === 0) return
        
        setExpandedCards(prev => 
            prev.includes(index) 
                ? prev.filter(i => i !== index)
                : [...prev, index]
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
            title: "Backend Developer",
            company: "Centra Med",
            type: "Full Time",
            period: "Mar 2025 - Present",
            location: "Guadalajara, Jalisco, México",
            description: "Backend Development for an administrative medical management web app with FHIR/HL7/HIPAA standards.",
            responsibilities: [
                "Django Microservices",
                "FastAPI Gateway",
                "Chatbot with AI and call Integration"
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
            responsibilities: [
                "Business Management",
                "Web Development",
                "Event Planning"
            ],
            current: true
        },
        {
            title: "Junior Software Engineer",
            company: "Hospital Civil De Guadalajara",
            type: "Temporary",
            period: "Jan 2021 - Oct 2021",
            location: "Guadalajara, Jalisco, México",
            description: "Software development and database management for hospital systems.",
            responsibilities: [
                "Junior Programmer",
                "Database Administrator"
            ],
            current: false
        },
        {
            title: "University Intern",
            company: "Biblioteca Pública del Estado Juan José Arreola",
            type: "Internship",
            period: "2020",
            location: "Zapopan, Jalisco, México",
            description: "Web development and database management for public library systems.",
            responsibilities: [
                "Database Administrator",
                "Website Administrator",
                "Marketing Assistant"
            ],
            current: false
        }
    ];

    return (
        <div id="experience" className='px-2 py-12 mx-auto max-w-7xl sm:px-4 md:px-6'>
            <div className='flex flex-col justify-center items-center mb-8 text-center md:mb-12'>
                <h2 className='m-0 mb-2 text-3xl font-bold text-white lg:text-4xl'>
                    {t("experience.work")} <span className='text-purple-500'>{t("experience.experience")}</span>
                </h2>
                <p className='text-sm text-gray-400 md:text-base lg:text-lg'>
                    {t("experience.journey")}
                </p>
            </div>

            <div className="relative mx-auto max-w-5xl">
                {/* Vertical Timeline Line */}
                <div className="absolute left-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent sm:left-1 md:left-12"></div>

                <div className="space-y-3 sm:space-y-4 md:space-y-8">
                    {experiences.map((exp, index) => {
                        const isExpanded = expandedCards.includes(index)
                        return (
                        <div key={index} className="relative pl-4 sm:pl-6 md:pl-24">
                            {/* Content Card */}
                            <div className={`group relative p-3 sm:p-4 md:p-6 rounded-lg md:rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
                                isExpanded 
                                    ? 'bg-gradient-to-br from-[#232325] to-[#2a2a2c] hover:shadow-2xl hover:shadow-purple-500/20' 
                                    : 'bg-[#232325] hover:shadow-xl hover:shadow-purple-500/10'
                            }`}>
                                {/* Card Header - Always Visible */}
                                <div 
                                    onClick={() => toggleCard(index)}
                                    className={`flex flex-wrap gap-2 sm:gap-2 justify-between items-start md:gap-4 ${index !== 0 ? 'cursor-pointer' : ''} ${isExpanded ? 'mb-3 md:mb-4' : 'mb-0'}`}
                                >
                                    <div className="flex gap-1.5 sm:gap-2 items-start md:gap-3 flex-1 min-w-0 overflow-hidden">
                                        {/* Dot inside card */}
                                        <div className={`flex justify-center items-center w-2.5 h-2.5 md:w-3 md:h-3 mt-1 md:mt-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                                            exp.current ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-purple-600 shadow-lg shadow-purple-600/50'
                                        }`}>
                                            {exp.current && (
                                                <div className="absolute w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full opacity-75 animate-ping"></div>
                                            )}
                                        </div>
                                        <div className="overflow-hidden flex-1 min-w-0">
                                            <h3 className='text-base font-bold leading-tight text-white break-words transition-colors duration-300 sm:text-lg md:text-xl group-hover:text-purple-400'>
                                                {exp.title}
                                            </h3>
                                            <p className='mt-0.5 text-xs sm:text-sm font-semibold leading-tight text-purple-400 md:text-base break-words'>{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1.5 sm:gap-2 items-center">
                                        <span className={`inline-block px-2 sm:px-2.5 md:px-3 py-0.5 md:py-1 text-[9px] sm:text-[10px] md:text-xs font-medium rounded-full flex-shrink-0 whitespace-nowrap ${
                                            exp.current 
                                                ? 'bg-green-500/20 text-green-400 ring-1 ring-green-500/30' 
                                                : 'bg-gray-500/20 text-gray-400 ring-1 ring-gray-500/30'
                                        }`}>
                                            {getTranslatedType(exp.type)}
                                        </span>
                                        {index !== 0 && (
                                            <button 
                                                className="p-0 text-white bg-transparent border-none transition-all duration-300 outline-none hover:text-purple-400 hover:scale-125"
                                                aria-label={isExpanded ? 'Collapse' : 'Expand'}
                                            >
                                                {isExpanded ? <MdExpandLess className="text-xl sm:text-2xl md:text-3xl" /> : <MdExpandMore className="text-xl sm:text-2xl md:text-3xl" />}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Quick Info - Visible when collapsed */}
                                {!isExpanded && (
                                    <div className="flex flex-wrap gap-2 mt-2 pt-2 text-[9px] sm:text-[10px] text-gray-400 md:text-xs overflow-hidden border-t border-gray-700/50">
                                        <div className="flex flex-shrink-0 gap-1 items-center">
                                            <MdDateRange className='flex-shrink-0 text-xs text-purple-400'/>
                                            <span className="whitespace-nowrap">{exp.period}</span>
                                        </div>
                                        <span className="flex-shrink-0 text-gray-600">•</span>
                                        <div className="flex flex-1 gap-1 items-center min-w-0">
                                            <MdLocationOn className='flex-shrink-0 text-xs text-purple-400'/>
                                            <span className="truncate">{exp.location}</span>
                                        </div>
                                    </div>
                                )}

                                {/* Expandable Content */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'mt-3 opacity-100 max-h-[1000px]' : 'mt-0 max-h-0 opacity-0'}`}>
                                    {/* Description */}
                                    <div className="mb-3 md:mb-4 p-2.5 sm:p-3 bg-black/20 rounded-lg border-l-2 border-purple-500">
                                        <p className='text-xs leading-relaxed text-gray-300 break-words sm:text-sm md:text-base'>
                                            {exp.description}
                                        </p>
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="mb-3 md:mb-4">
                                        <h4 className="mb-2 text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-wide md:text-sm flex items-center gap-2">
                                            <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                                            {t("experience.responsibilities")}
                                        </h4>
                                        <div className="grid grid-cols-1 gap-2 md:gap-2.5 md:grid-cols-2">
                                            {exp.responsibilities.map((resp, idx) => (
                                                <div key={idx} className="flex gap-2 items-start text-[10px] sm:text-xs text-gray-300 md:text-sm overflow-hidden p-2 rounded bg-black/10 hover:bg-black/20 transition-colors">
                                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 mt-1 md:mt-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                                                    <span className="flex-1 leading-relaxed break-words">{resp}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Footer with Date and Location */}
                                    <div className="flex flex-wrap gap-3 pt-3 text-[10px] sm:text-xs border-t border-gray-700/50 md:gap-4 md:pt-4 md:text-sm">
                                        <div className="flex gap-1.5 items-center text-gray-400 md:gap-2 flex-shrink-0">
                                            <div className="p-1 rounded bg-purple-500/10">
                                                <MdDateRange className='flex-shrink-0 text-sm text-purple-400 md:text-base'/>
                                            </div>
                                            <span className="font-medium whitespace-nowrap">{exp.period}</span>
                                        </div>
                                        <div className="flex gap-1.5 items-center min-w-0 text-gray-400 md:gap-2 flex-1">
                                            <div className="p-1 rounded bg-purple-500/10">
                                                <MdLocationOn className='flex-shrink-0 text-sm text-purple-400 md:text-base'/>
                                            </div>
                                            <span className="font-medium truncate">{exp.location}</span>
                                        </div>
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

