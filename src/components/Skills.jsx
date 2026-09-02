import { IoLogoPython, IoLogoGithub, IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from 'react-icons/io'
import { SiDjango, SiTailwindcss, SiFastapi, SiDocker, SiReact, SiChatbot, SiElevenlabs, SiTerraform, SiRedis, SiCelery, SiPytest } from "react-icons/si";
import { HiComputerDesktop } from "react-icons/hi2";
import { MdNetworkWifi3Bar, MdOutlineSecurity, MdGroups, MdLockPerson, MdHealthAndSafety } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaAws, FaDatabase } from "react-icons/fa";
import { TbApi, TbHierarchy, TbInfinity } from "react-icons/tb";
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { useTranslation } from 'react-i18next';

const groups = [
  {
    label: "Backend",
    skills: [
      { id: "python",    icon: IoLogoPython,  label: "Python",       strong: true, desc: "Primary language for backend services and automation" },
      { id: "django",    icon: SiDjango,      label: "Django",       strong: true, desc: "Core framework for building microservices and business logic" },
      { id: "fastapi",   icon: SiFastapi,     label: "FastAPI",      strong: true, desc: "Used to build a gateway unifying service communication" },
      { id: "apis",      icon: TbApi,         label: "REST APIs",    strong: true, desc: "Designing and consuming RESTful APIs across services" },
      { id: "microsvcs", icon: TbHierarchy,   label: "Microservices",strong: true, desc: "Architecting decoupled, independently deployable services" },
      { id: "databases", icon: FaDatabase,    label: "Databases",    strong: true, desc: "Relational data modeling and query optimization" },
      { id: "ai",        icon: SiChatbot,     label: "AI Integration", strong: true, desc: "Directed an AI-powered chatbot with call handling capabilities" },
      { id: "elevenlabs",icon: SiElevenlabs,  label: "ElevenLabs",   strong: true, desc: "Voice AI used to power conversational call handling" },
      { id: "redis",     icon: SiRedis,       label: "Redis",        strong: true, desc: "Caching and message brokering for background tasks" },
      { id: "celery",    icon: SiCelery,      label: "Celery",       strong: true, desc: "Asynchronous task queues for background processing" },
      { id: "pytest",    icon: SiPytest,      label: "Pytest",       strong: true, desc: "Automated testing for backend services and APIs" },
      { id: "oauth",     icon: MdLockPerson,  label: "OAuth",        strong: true, desc: "Secure authentication and authorization flows" },
      { id: "standards", icon: MdHealthAndSafety, label: "FHIR / HL7 / HIPAA", strong: true, desc: "Healthcare data interoperability and compliance standards" },
    ]
  },
  {
    label: "Frontend",
    skills: [
      { id: "html",       icon: IoLogoHtml5,     label: "HTML",        desc: "Semantic markup for accessible web pages" },
      { id: "css",        icon: IoLogoCss3,      label: "CSS",         desc: "Styling and responsive layouts" },
      { id: "javascript", icon: IoLogoJavascript,label: "JavaScript",  desc: "Client-side scripting and interactivity" },
      { id: "react",      icon: SiReact,         label: "React",       desc: "Building component-based user interfaces" },
      { id: "tailwind",   icon: SiTailwindcss,   label: "Tailwind CSS",desc: "Utility-first styling for fast, consistent UI" },
    ]
  },
  {
    label: "DevOps & Cloud",
    skills: [
      { id: "docker",    icon: SiDocker,     label: "Docker",     desc: "Containerizing services for consistent deployments" },
      { id: "aws",       icon: FaAws,        label: "AWS",        desc: "Led AWS infrastructure integration for scalable deployments" },
      { id: "terraform", icon: SiTerraform,  label: "Terraform",  desc: "Infrastructure as code for reproducible cloud environments" },
      { id: "cicd",      icon: TbInfinity,   label: "CI/CD",      desc: "Automated build, test, and deployment pipelines" },
      { id: "github",    icon: IoLogoGithub, label: "GitHub",     desc: "Version control, code review, and collaboration" },
    ]
  },
  {
    label: "IT & Support",
    skills: [
      { id: "pc",       icon: HiComputerDesktop, label: "PC Support", desc: "Hardware and software troubleshooting" },
      { id: "network",  icon: MdNetworkWifi3Bar, label: "Networking", desc: "Configuring and maintaining network infrastructure" },
      { id: "security", icon: MdOutlineSecurity, label: "Security",   desc: "Applying security best practices across systems" },
      { id: "support",  icon: BiSupport,         label: "IT Support", desc: "Operational support and issue resolution" },
      { id: "leadership", icon: MdGroups,        label: "Team Leadership", desc: "Managing and mentoring a development team" },
    ]
  },
]

const SkillChip = ({ id, icon: Icon, label, strong, desc }) => (
  <div
    data-tooltip-id={id}
    data-tooltip-content={desc || label}
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
    <Tooltip id={id} className="!max-w-[220px] !text-center" />
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
            <div className="grid grid-cols-4 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
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
