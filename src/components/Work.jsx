import React from 'react'
import tp from '../assets/screenshots/tp-2.png'
import centramed from '../assets/screenshots/centramed.png'
import trofi from '../assets/logos/TROFI.png'
import { useTranslation } from 'react-i18next'

const Work = () => {
    const {t} = useTranslation("global")
    return (
        <div id="projects" className='px-6 py-16 mx-auto max-w-7xl'>

            <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>projects — frame</p>
            <div className="figma-frame p-6 md:p-8">
                <div className="flex items-center gap-2 mb-8">
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">
                        {t("projects.my")} {t("projects.projects")}
                    </span>
                    <div className="flex-1 h-px bg-white/[0.06]"></div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">

                    <div className="figma-frame flex flex-col overflow-hidden group">
                        <div className="overflow-hidden border-b border-white/[0.06]">
                            <img className="object-cover w-full h-44 transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src={tp} alt="Terraza Pineda Frontend"/>
                        </div>
                        <div className="flex flex-col flex-grow p-5">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">Frontend</p>
                            <h2 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-150">Terraza Pineda</h2>
                            <p className="text-xs text-white/40 mt-1 mb-4">Event Booking Web App • React • Tailwind CSS</p>
                            <div className="flex gap-2 mt-auto">
                                <a href='https://terrazapineda-app.netlify.app/' className="flex-1 px-3 py-1.5 text-xs text-center text-white no-underline bg-red-500/20 hover:bg-red-500/30 border border-red-500/20 hover:border-red-500/40 rounded transition-all duration-150">
                                    {t("buttons.viewlive")}
                                </a>
                                <a href='https://github.com/nicreasquemiguel/TerrazaPineda_Frontend' className="flex-1 px-3 py-1.5 text-xs text-center text-white/50 hover:text-white no-underline bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded transition-all duration-150">
                                    {t("buttons.github")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="figma-frame flex flex-col overflow-hidden group">
                        <div className="overflow-hidden border-b border-white/[0.06]">
                            <img className="object-cover w-full h-44 transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src={tp} alt="Terraza Pineda Backend"/>
                        </div>
                        <div className="flex flex-col flex-grow p-5">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">Backend</p>
                            <h2 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-150">Terraza Pineda</h2>
                            <p className="text-xs text-white/40 mt-1 mb-4">Event Booking Web App • Python • Django • DRF</p>
                            <div className="flex gap-2 mt-auto">
                                <a href='https://github.com/nicreasquemiguel/TerrazaPineda_Backend' className="flex-1 px-3 py-1.5 text-xs text-center text-white/50 hover:text-white no-underline bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded transition-all duration-150">
                                    {t("buttons.github")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="figma-frame flex flex-col overflow-hidden group">
                        <div className="overflow-hidden border-b border-white/[0.06]">
                            <img className="object-cover w-full h-44 transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" src={centramed} alt="Centramed Medical ERM"/>
                        </div>
                        <div className="flex flex-col flex-grow p-5">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">Fullstack</p>
                            <h2 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-150">Centramed</h2>
                            <p className="text-xs text-white/40 mt-1 mb-4">Medical ERM APP • Microservices • Django • FastAPI</p>
                            <div className="flex gap-2 mt-auto">
                                <a href='https://www.gastroenterologydiagnosticscenter.com/' target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-1.5 text-xs text-center text-white no-underline bg-red-500/20 hover:bg-red-500/30 border border-red-500/20 hover:border-red-500/40 rounded transition-all duration-150">
                                    {t("buttons.viewlive")}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="figma-frame flex flex-col overflow-hidden group border-dashed">
                        <div className="flex items-center justify-center h-44 border-b border-white/[0.06] bg-white/[0.02] relative">
                            <img src={trofi} alt="Trofi App" className="h-28 w-auto object-contain opacity-20 group-hover:opacity-30 transition-opacity duration-300 invert" />
                            <span className="absolute bottom-2 right-3 text-[10px] text-white/20 uppercase tracking-[0.15em]">Still cooking</span>
                        </div>
                        <div className="flex flex-col flex-grow p-5">
                            <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] mb-2">Fullstack</p>
                            <h2 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors duration-150">Trofi App</h2>
                            <p className="text-xs text-white/40 mt-1 mb-4">Local Tournament Administration</p>
                            <div className="flex gap-2 mt-auto">
                                <a href='https://www.trofi.club/' target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-1.5 text-xs text-center text-white no-underline bg-red-500/20 hover:bg-red-500/30 border border-red-500/20 hover:border-red-500/40 rounded transition-all duration-150">
                                    {t("buttons.viewlive")}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work
