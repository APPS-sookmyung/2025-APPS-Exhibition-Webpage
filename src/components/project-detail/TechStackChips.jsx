import PropTypes from 'prop-types';
import {
  SiCss3,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNetlify,
  SiOpenai,
  SiPython,
  SiReact,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';

const TECH_ICON_MAP = {
  react: SiReact,
  spring: SiSpring,
  springboot: SiSpringboot,
  mongodb: SiMongodb,
  gcp: SiGooglecloud,
  openai: SiOpenai,
  openaiapi: SiOpenai,
  aiopenaiapi: SiOpenai,
  vite: SiVite,
  typescript: SiTypescript,
  javascript: SiJavascript,
  js: SiJavascript,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  css: SiCss3,
  html: SiHtml5,
  firebase: SiFirebase,
  firebaseauthfirestore: SiFirebase,
  vercel: SiVercel,
  vercelserverlessfunction: SiVercel,
  friendliaillm: SiOpenai,
  github: SiGithub,
  githubpages: SiGithub,
  docker: SiDocker,
  mysql: SiMysql,
  python: SiPython,
  fastapi: SiFastapi,
  langchain: SiLangchain,
  nestjs: SiNestjs,
  netlify: SiNetlify,
};

const TECH_ICON_COLOR_MAP = {
  react: '#61DAFB',
  spring: '#6DB33F',
  springboot: '#6DB33F',
  mongodb: '#47A248',
  gcp: '#4285F4',
  openai: '#111111',
  openaiapi: '#111111',
  aiopenaiapi: '#111111',
  vite: '#646CFF',
  typescript: '#3178C6',
  javascript: '#F7DF1E',
  js: '#F7DF1E',
  tailwind: '#06B6D4',
  tailwindcss: '#06B6D4',
  css: '#1572B6',
  html: '#E34F26',
  firebase: '#FFCA28',
  firebaseauthfirestore: '#FFCA28',
  vercel: '#111111',
  vercelserverlessfunction: '#111111',
  friendliaillm: '#111111',
  github: '#181717',
  githubpages: '#181717',
  docker: '#2496ED',
  mysql: '#4479A1',
  python: '#3776AB',
  fastapi: '#009688',
  langchain: '#1C3C3C',
  nestjs: '#E0234E',
  netlify: '#00C7B7',
};

const normalizeTechKey = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]/g, '');

export default function TechStackChips({techStack}) {
  return (
    <div className='mt-4 flex flex-wrap gap-3'>
      {techStack.map((tech) => {
        const key = normalizeTechKey(tech.icon);
        const Icon = TECH_ICON_MAP[key];
        const iconColor = TECH_ICON_COLOR_MAP[key];

        return (
          <div
            key={tech.name}
            className='bg-80 flex items-center gap-[10px] rounded-full px-[18px] py-[6px]'>
            <div className='square-5 flex items-center justify-center rounded-full bg-transparent'>
              {Icon ? (
                <Icon className='h-4 w-4' style={{color: iconColor}} />
              ) : (
                <span className='text-xs font-semibold text-black'>
                  {tech.name.slice(0, 1)}
                </span>
              )}
            </div>
            <span className='text-md font-semibold text-white'>
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}

TechStackChips.propTypes = {
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};
