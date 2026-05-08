# Mixel Portfolio

Personal developer portfolio for Miguel Pineda (Mixel) — built with a canvas aesthetic featuring a dot-grid background, frame-style cards, and a dark red accent theme.

## Tech Stack

- **React** — UI framework
- **Tailwind CSS** — styling
- **i18next** — EN / ES language switching
- **react-type-animation** — typing effect in hero
- **react-github-calendar** — live GitHub contribution graph
- **react-tooltip** — skill tooltips
- **react-icons** — icon library

## Features

- Figma-style dark canvas with dot-grid background
- Responsive layout — mobile drawer nav, adaptive grids
- Bilingual (English / Spanish)
- Live GitHub activity calendar (full year on desktop, 6 months on mobile)
- Sections: Hero · About · Studies · Courses · Skills · GitHub Activity · Experience · Projects · Contact

## Getting Started

```bash
npm install
npm start
```

Runs on [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── assets/          # Images and logos
├── components/
│   ├── about/       # Studies, Courses, ListCard
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── GitHubActivity.jsx
│   ├── Experience.jsx
│   ├── Work.jsx
│   └── ContactMe.jsx
└── translations/
    ├── en/global.json
    └── es/global.json
```

## Contact

- GitHub: [nicreasquemiguel](https://github.com/nicreasquemiguel)
- LinkedIn: [mixel](https://www.linkedin.com/in/mixel/)
- Email: mixelthedev@gmail.com
