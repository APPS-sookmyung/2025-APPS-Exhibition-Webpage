import PropTypes from 'prop-types';
import TechStackChips from './TechStackChips.jsx';

export default function ProjectDetailBody({content, features, techStack}) {
  return (
    <section className='mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-[120px]'>
      {/* 프로젝트 설명 */}
      <p className='max-w-[1200px] text-base leading-7 font-medium text-black'>
        {content}
      </p>

      {/* 기능 설명 */}
      <div className='mt-10 max-w-[1200px]'>
        <h2 className='text-100 text-2xl font-bold'>기능 설명</h2>
        <div className='my-5 w-full border-80 border-t-2 border-dashed' />
        <div className='flex flex-wrap gap-3'>
          {features.map((feature, index) => (
            <span
              key={index}
              className='bg-Blue_light text-primary-light inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold'>
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* 기술 스택 */}
      <div className='mt-10 max-w-[1200px]'>
        <h2 className='text-100 text-2xl font-bold'>기술 스택</h2>
        <div className='my-5 w-full border-80 border-t-2 border-dashed' />
        <TechStackChips techStack={techStack} />
      </div>
    </section>
  );
}

ProjectDetailBody.propTypes = {
  content: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  techStack: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};
