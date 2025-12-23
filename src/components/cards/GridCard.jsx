import PropTypes from 'prop-types';

export default function GridCard({project, index}) {
  // 뒷배경 숫자 인덱스 포맷팅
  index = index < 10 ? '0' + index : index;

  return (
    <div className='relative mx-1.25 my-5 flex h-72 w-60 cursor-default justify-center md:h-80 lg:h-99 lg:w-75'>
      {/* 뒷배경 숫자 인덱스 */}
      <div className='absolute top-2 z-0 flex justify-center lg:top-4.5'>
        <p className='text-[150px] leading-10 font-semibold tracking-[-12px] text-indigo-600 md:text-[170px] md:leading-18 lg:text-[200px] lg:leading-21.25'>
          {index}
        </p>
      </div>

      {/* 카드 */}
      <div className='group absolute bottom-0 z-10 h-60 w-58 overflow-hidden rounded-[25px] bg-[#E9ECEF] px-4 pt-4 pb-6 lg:h-75 lg:w-75 lg:rounded-[30px] lg:px-5 lg:pt-5'>
        {/* 호버 영역 */}
        <div className='absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {/* 호버 시 나타나는 그림자 */}
          <div className='absolute inset-0 bg-linear-to-b from-black/70 to-black/45' />
          {/* 호버 시 나타나는 버튼 */}
          <button className='z-10 h-10 w-40 cursor-pointer rounded-full bg-fuchsia-500 text-lg font-bold text-white shadow-lg transition-transform duration-300'>
            자세히 보기
          </button>
        </div>

        {/* 제목 */}
        <div className='mb-2 flex items-center justify-between lg:mb-4'>
          <p className='line-clamp-1 text-sm leading-5 font-semibold text-indigo-600'>
            {project.title}
          </p>
          <p className='text-indigo-60 rounded-full bg-blue-100 px-5 py-1.25 text-xs leading-4 font-bold'>
            {project.platform}
          </p>
        </div>

        {/* 콘텐츠 */}
        <div className='flex flex-col justify-center'>
          <img
            src={project.thumbnail}
            alt={project.title}
            className='h-27 w-48 self-center rounded-[10px] object-cover outline-1 outline-blue-100 lg:h-36 lg:w-64'
          />
          <p className='ld:text-sm font-base line-clamp-3 pt-2 text-[14px] leading-5 text-zinc-800 md:font-semibold lg:pt-3'>
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

GridCard.propTypes = {
  project: PropTypes.shape({
    thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
    description: PropTypes.string,
    platform: PropTypes.string,
    members: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};
