import PropTypes from 'prop-types';
import {GoArrowUpRight} from 'react-icons/go';

export default function StackedCard({project}) {
  return (
    <div className='grid h-138.25 w-99 grid-rows-[auto_1fr_auto] bg-white px-6.5 py-9.5'>
      {/* 이미지 */}
      <img
        src={project.thumbnail}
        alt={project.title}
        draggable={false}
        className='h-61 w-full rounded outline-2 outline-neutral-200'
      />

      {/* 텍스트 - 제목, 설명, 멤버*/}
      <div className='mt-1 flex cursor-default flex-col'>
        <p className='border-b border-[#D7D7D7] py-2.5 text-2xl leading-7 font-bold text-[#2E61E0]'>
          {project.title}
        </p>
        <p className='mb-2 line-clamp-3 py-2.5 text-sm leading-4 font-normal'>
          {project.description}
        </p>
        <p className='flex flex-wrap gap-x-2 text-xs leading-4 font-semibold text-[#8C8C8C]'>
          {project.members.map((member) => (
            <span key={member}>{member}</span>
          ))}
        </p>
      </div>

      {/* 이동 버튼 */}
      <div className='cursor-pointer self-end justify-self-start'>
        <div className='flex items-center justify-center rounded-full bg-[#D9E3FC] px-5.5 py-1.5'>
          <p className='text-base leading-5 font-semibold text-blue-600'>
            자세히 보기
          </p>
          <div className='mt-0.5 align-middle text-xl text-[#2E61E0]'>
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

StackedCard.propTypes = {
  project: PropTypes.shape({
    thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
    description: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
