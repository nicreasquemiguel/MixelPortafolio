const cvData = {
  en: {
    labels: {
      summary: "Summary",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      skills: "Skills",
    },
    name: "Miguel Pineda",
    title: "Software Developer",
    location: "Guadalajara, Jalisco, México",
    email: "mixelthedev@gmail.com",
    linkedin: "linkedin.com/in/mixel",
    github: "github.com/nicreasquemiguel",
    summary:
      "Well-rounded software developer with expertise in Python/Django backend development, a strong grasp of front-end technologies, and a touch of design sensibility for creating intuitive digital experiences. Backed by extensive IT support experience and a proven ability to troubleshoot and optimize operations.",
    experience: [
      {
        company: "Centra Med",
        role: "Backend Development / Team Lead (Python / Django / FastAPI)",
        location: "Guadalajara, Jalisco, México",
        period: "Mar 2025 – Present",
        bullets: [
          "Architected and maintained Django microservices powering core business logic",
          "Designed and implemented a FastAPI gateway to unify service communication",
          "Led AWS infrastructure integration for scalable, secure deployments",
          "Directed integration of an AI-powered chatbot with call handling capabilities",
          "Managed and mentored the development team, overseeing sprint planning and code quality",
        ],
      },
      {
        company: "Terraza Pineda",
        role: "General Director",
        location: "Guadalajara, Jalisco, México",
        period: "2022 – Present",
        bullets: ["Business management", "Web development", "Event planning"],
      },
      {
        company: "Hospital Civil de Guadalajara",
        role: "Junior Software Engineer",
        location: "Guadalajara, Jalisco, México",
        period: "Jan 2021 – Oct 2021",
        bullets: ["Junior programmer", "Database administrator"],
      },
      {
        company: "Biblioteca Pública del Estado Juan José Arreola",
        role: "University Intern",
        location: "Zapopan, Jalisco, México",
        period: "2020",
        bullets: ["Database administrator", "Website administrator", "Marketing assistant"],
      },
    ],
    education: [
      {
        school: "Universidad del Valle de México",
        degree: "Computing Systems Engineering",
        period: "2018 – 2023",
      },
      {
        school: "Universidad de Guadalajara",
        degree: "Computing Technician",
        period: "2014 – 2018",
      },
    ],
    certifications: [
      "Harvard University — CS50x: Introduction to Computer Science",
      "Harvard University — CS50P: Introduction to Programming with Python",
      "Meta — Backend Developer Professional Certificate",
      "IBM — Full-Stack Software Developer Professional Certificate",
      "Google — IT Support Professional Certificate",
      "Amazon Web Services — Containerized Applications on AWS",
      "IBM — Introduction to Data Engineering",
    ],
    skills: [
      { group: "Backend", items: ["Python", "Django", "FastAPI", "REST APIs", "Microservices", "Databases", "Redis", "Celery", "Pytest", "OAuth", "FHIR / HL7 / HIPAA"] },
      { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
      { group: "DevOps & Cloud", items: ["Docker", "AWS", "Terraform", "CI/CD", "GitHub"] },
      { group: "IT & Support", items: ["PC Support", "Networking", "Security", "IT Support", "Team Leadership"] },
    ],
  },

  es: {
    labels: {
      summary: "Resumen",
      experience: "Experiencia",
      education: "Educación",
      certifications: "Certificaciones",
      skills: "Habilidades",
    },
    name: "Miguel Pineda",
    title: "Desarrollador de Software",
    location: "Guadalajara, Jalisco, México",
    email: "mixelthedev@gmail.com",
    linkedin: "linkedin.com/in/mixel",
    github: "github.com/nicreasquemiguel",
    summary:
      "Desarrollador de software integral con experiencia en desarrollo backend con Python/Django, sólido conocimiento de tecnologías frontend y un enfoque orientado al diseño para crear experiencias digitales intuitivas. Además, cuenta con amplia experiencia en soporte de TI y una capacidad comprobada para resolver problemas y optimizar operaciones.",
    experience: [
      {
        company: "Centra Med",
        role: "Desarrollo Backend / Líder de Equipo (Python / Django / FastAPI)",
        location: "Guadalajara, Jalisco, México",
        period: "Mar 2025 – Presente",
        bullets: [
          "Diseñó y mantuvo microservicios en Django para la lógica de negocio principal",
          "Diseñó e implementó un gateway en FastAPI para unificar la comunicación entre servicios",
          "Lideró la integración de infraestructura en AWS para despliegues escalables y seguros",
          "Dirigió la integración de un chatbot con IA con capacidad de atención de llamadas",
          "Gestionó y guio al equipo de desarrollo, supervisando la planeación de sprints y la calidad del código",
        ],
      },
      {
        company: "Terraza Pineda",
        role: "Director General",
        location: "Guadalajara, Jalisco, México",
        period: "2022 – Presente",
        bullets: ["Administración de negocio", "Desarrollo web", "Planeación de eventos"],
      },
      {
        company: "Hospital Civil de Guadalajara",
        role: "Ingeniero de Software Junior",
        location: "Guadalajara, Jalisco, México",
        period: "Ene 2021 – Oct 2021",
        bullets: ["Programador junior", "Administrador de bases de datos"],
      },
      {
        company: "Biblioteca Pública del Estado Juan José Arreola",
        role: "Interno Universitario",
        location: "Zapopan, Jalisco, México",
        period: "2020",
        bullets: ["Administrador de bases de datos", "Administrador del sitio web", "Asistente de marketing"],
      },
    ],
    education: [
      {
        school: "Universidad del Valle de México",
        degree: "Ingeniería en Sistemas Computacionales",
        period: "2018 – 2023",
      },
      {
        school: "Universidad de Guadalajara",
        degree: "Técnico en Informática",
        period: "2014 – 2018",
      },
    ],
    certifications: [
      "Universidad de Harvard — CS50x: Introducción a las Ciencias de la Computación",
      "Universidad de Harvard — CS50P: Introducción a la Programación con Python",
      "Meta — Certificado Profesional de Desarrollador Backend",
      "IBM — Certificado Profesional de Desarrollador Full-Stack",
      "Google — Certificado Profesional de Soporte de TI",
      "Amazon Web Services — Aplicaciones Contenerizadas en AWS",
      "IBM — Introducción a la Ingeniería de Datos",
    ],
    skills: [
      { group: "Backend", items: ["Python", "Django", "FastAPI", "REST APIs", "Microservicios", "Bases de datos", "Redis", "Celery", "Pytest", "OAuth", "FHIR / HL7 / HIPAA"] },
      { group: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
      { group: "DevOps y Cloud", items: ["Docker", "AWS", "Terraform", "CI/CD", "GitHub"] },
      { group: "TI y Soporte", items: ["Soporte a PC", "Redes", "Seguridad", "Soporte TI", "Liderazgo de equipo"] },
    ],
  },
}

export default cvData
