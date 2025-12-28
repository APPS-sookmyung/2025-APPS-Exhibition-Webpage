import PropTypes from 'prop-types';
import TechStackChips from './TechStackChips.jsx';

export default function ProjectDetailBody({content, features, techStack}) {
  return (
    <section className='mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-[120px]'>
      {/* 프로젝트 설명 */}
      <p className='max-w-[1200px] text-sm font-medium leading-7 text-black sm:text-base'>
        {content}
      </p>

      {/* 기능 설명 */}
      <div className='mt-10 max-w-[1200px]'>
        <h2 className='text-100 text-xl font-bold sm:text-2xl'>기능 설명</h2>
        <div className='my-5 w-full border-80 border-t-2 border-dashed' />
        <ul className='list-none list-inside text-100 text-base font-medium leading-7 sm:text-lg'>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* 기술 스택 */}
      <div className='mt-10 max-w-[1200px]'>
        <h2 className='text-100 text-xl font-bold sm:text-2xl'>기술 스택</h2>
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
