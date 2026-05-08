import { IoLogoPython, IoLogoGithub, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiDjango, SiTailwindcss, SiFastapi, SiDocker, SiReact } from "react-icons/si";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdNetworkWifi3Bar, MdOutlineSecurity } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaAws, FaDatabase } from "react-icons/fa";
import { TbApi, TbHierarchy } from "react-icons/tb";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { useTranslation } from 'react-i18next';

const groups = [
  {
    label: "Backend",
    skills: [
      { id: "python",    icon: IoLogoPython,  label: "Python",       strong: true },
      { id: "django",    icon: SiDjango,      label: "Django",       strong: true },
      { id: "fastapi",   icon: SiFastapi,     label: "FastAPI",      strong: true },
      { id: "apis",      icon: TbApi,         label: "REST APIs",    strong: true },
      { id: "microsvcs", icon: TbHierarchy,   label: "Microservices",strong: true },
      { id: "databases", icon: FaDatabase,    label: "Databases",    strong: true },
    ]
  },
  {
    label: "Frontend",
    skills: [
      { id: "html",       icon: IoLogoHtml5,     label: "HTML" },
      { id: "css",        icon: IoLogoCss3,      label: "CSS" },
      { id: "javascript", icon: IoLogoJavascript,label: "JavaScript" },
      { id: "react",      icon: SiReact,         label: "React" },
      { id: "tailwind",   icon: SiTailwindcss,   label: "Tailwind CSS" },
    ]
  },
  {
    label: "DevOps & Cloud",
    skills: [
      { id: "docker",  icon: SiDocker,     label: "Docker" },
      { id: "aws",     icon: FaAws,        label: "AWS" },
      { id: "github",  icon: IoLogoGithub, label: "GitHub" },
    ]
  },
  {
    label: "IT & Support",
    skills: [
      { id: "pc",       icon: HiComputerDesktop, label: "PC Support" },
      { id: "network",  icon: MdNetworkWifi3Bar, label: "Networking" },
      { id: "security", icon: MdOutlineSecurity, label: "Security" },
      { id: "support",  icon: BiSupport,         label: "IT Support" },
    ]
  },
]

const SkillChip = ({ id, icon: Icon, label, strong }) => (
  <div
    data-tooltip-id={id}
    data-tooltip-content={label}
    className={`relative flex flex-col items-center justify-center gap-2 p-4 cursor-default group rounded-lg border transition-colors duration-150
      ${strong
        ? 'bg-red-500/[0.06] border-red-500/20 hover:border-red-500/40'
        : 'bg-[#252525] border-white/[0.08] hover:border-red-500/30'
      }`}
  >
    {strong && (
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-red-400 bg-[#1e1e1e] border border-red-500/30 rounded-full whitespace-nowrap">
        strongest
      </span>
    )}
    <Icon className={`text-3xl transition-colors duration-150 ${strong ? 'text-red-400/70 group-hover:text-red-400' : 'text-white/60 group-hover:text-red-400'}`} />
    <span className="text-[10px] text-white/30 group-hover:text-white/60 transition-colors duration-150 text-center leading-tight">
      {label}
    </span>
    <Tooltip id={id} />
  </div>
)

const Skills = () => {
  const { t } = useTranslation("global")
  return (
    <div id="skills" className="px-6 py-16 mx-auto max-w-7xl">

      <p className='mb-2 text-[10px] font-medium text-white/30 uppercase tracking-[0.2em]'>skills — frame</p>
      <div className="figma-frame p-6 md:p-8 space-y-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.15em]">
            {t("skills.my")} {t("skills.skills")}
          </span>
          <div className="flex-1 h-px bg-white/[0.06]"></div>
        </div>

        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-[10px] font-medium text-white/25 uppercase tracking-[0.2em] mb-4">
              {group.label}
            </p>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {group.skills.map((skill) => (
                <SkillChip key={skill.id} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
