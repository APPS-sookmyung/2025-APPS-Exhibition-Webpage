import PropTypes from 'prop-types';
import {GoArrowUpRight} from 'react-icons/go';
import {Link} from 'react-router-dom';

export default function StackedCard({project}) {
  return (
    <div className='grid h-115 w-full grid-rows-[auto_1fr_auto] bg-white px-5 py-8 md:h-138.25 md:w-99 md:px-6.5 md:py-9.5'>
      {/* 이미지 */}
      <img
        src={project.thumbnail}
        alt={project.title}
        draggable={false}
        className='aspect-video w-full rounded object-cover outline-2 outline-neutral-200'
      />

      {/* 텍스트 - 제목, 설명, 멤버*/}
      <div className='mt-1 flex cursor-default flex-col'>
        <p className='border-b border-[#D7D7D7] py-1.5 text-xl leading-7 font-semibold text-[#2E61E0] md:py-2.5 md:text-2xl md:font-bold'>
          {project.title}
        </p>
        <p className='mb-2 line-clamp-3 pt-2.5 pb-0.5 text-sm leading-4 font-medium md:line-clamp-4 lg:line-clamp-5'>
          {project.description}
        </p>
        <p className='flex flex-wrap gap-x-2 text-xs leading-4 font-medium text-[#8C8C8C] md:font-semibold'>
          {project.members.map((member) => (
            <span key={member}>{member}</span>
          ))}
        </p>
      </div>

      {/* 이동 버튼 */}
      {project.slug ? (
        <Link
          to={`/projects/${project.slug}`}
          className='cursor-pointer self-end justify-self-start'>
          <div className='bg-Blue_light flex items-center justify-center rounded-full px-4 py-1 md:px-5.5 md:py-1.5'>
            <p className='text-sm leading-5 font-semibold text-blue-600 md:text-base'>
              자세히 보기
            </p>
            <div className='mt-0.5 align-middle text-xl text-[#2E61E0]'>
              <GoArrowUpRight />
            </div>
          </div>
        </Link>
      ) : (
        <div className='cursor-pointer self-end justify-self-start'>
          <div className='bg-Blue_light flex items-center justify-center rounded-full px-4 py-1 md:px-5.5 md:py-1.5'>
            <p className='text-sm leading-5 font-semibold text-blue-600 md:text-base'>
              자세히 보기
            </p>
            <div className='mt-0.5 align-middle text-xl text-[#2E61E0]'>
              <GoArrowUpRight />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

StackedCard.propTypes = {
  project: PropTypes.shape({
    thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
    description: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
    slug: PropTypes.string,
  }).isRequired,
};
