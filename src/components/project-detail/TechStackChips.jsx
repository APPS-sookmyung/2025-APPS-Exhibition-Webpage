import PropTypes from 'prop-types';
import ReactIcon from '../assets/react.svg?react';
import SpringIcon from '../assets/spring.svg?react';

const TECH_ICON_MAP = {
  react: ReactIcon,
  spring: SpringIcon,
};

export default function TechStackChips({techStack}) {
  return (
    <div className='mt-4 flex flex-wrap gap-3'>
      {techStack.map((tech) => {
        const Icon = TECH_ICON_MAP[tech.icon];

        return (
          <div
            key={tech.name}
            className='bg-80 flex items-center gap-[10px] rounded-full px-[18px] py-[6px]'>
            <div className='square-5 flex items-center justify-center rounded-full bg-white'>
              {Icon && <Icon className='h-4 w-4' />}
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
