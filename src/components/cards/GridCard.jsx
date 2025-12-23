import PropTypes from 'prop-types';

export default function GridCard({project, index}) {
  // 뒷배경 숫자 인덱스 포맷팅
  index = index < 10 ? '0' + index : index;

  return (
    <div className='relative mx-1.25 my-5 flex h-99 w-75 cursor-default justify-center'>
      {/* 뒷배경 숫자 인덱스 */}
      <div className='absolute top-4.5 z-0 flex justify-center'>
        <p className='text-[200px] leading-21.25 font-semibold tracking-[-12px] text-indigo-600'>
          {index}
        </p>
      </div>

      {/* 카드 */}
      <div className='group absolute bottom-0 z-10 h-75 w-75 overflow-hidden rounded-[30px] bg-[#E9ECEF] px-5 pt-5 pb-6'>
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
        <div className='mb-4 flex items-center justify-between'>
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
            className='h-36 w-64 rounded-[10px] object-cover outline-1 outline-blue-100'
          />
          <p className='line-clamp-3 pt-3 text-sm leading-5 font-semibold text-zinc-800'>
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
