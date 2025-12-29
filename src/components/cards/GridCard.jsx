import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function GridCard({project, index}) {
  // 뒷배경 숫자 인덱스 포맷팅
  index = index < 10 ? '0' + index : index;

  return (
    <div className='relative mx-1.25 my-1 flex h-70 w-full cursor-default justify-center md:my-3 md:h-85 lg:h-99'>
      {/* 뒷배경 숫자 인덱스 md:h-80 lg:h-99 */}
      <div className='absolute top-10 z-0 flex justify-center md:top-7 lg:top-4.5'>
        <p className='text-[120px] leading-8 font-semibold tracking-[-12px] text-indigo-600 md:text-[170px] md:leading-18 lg:text-[200px] lg:leading-21.25'>
          {index}
        </p>
      </div>

      {/* 카드 */}
      <div className='group bg-Gray_light absolute bottom-0 z-10 h-[75%] w-[90%] overflow-hidden rounded-[20px] px-3 pt-3 pb-3 md:w-[95%] md:rounded-[25px] md:px-4 md:pt-4 md:pb-6 lg:w-full lg:rounded-[30px] lg:px-5 lg:pt-5'>
        {/* 호버 영역 */}
        <div className='absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
          {/* 호버 시 나타나는 그림자 */}
          <div className='absolute inset-0 bg-linear-to-b from-black/70 to-black/45' />
          {/* 호버 시 나타나는 버튼 */}
          {project.slug ? (
            <Link
              to={`/projects/${project.slug}`}
              className='bg-secondary z-10 flex h-10 w-40 cursor-pointer items-center justify-center rounded-full text-lg font-bold text-white shadow-lg transition-transform duration-300'>
              자세히 보기
            </Link>
          ) : (
            <button className='bg-secondary z-10 h-10 w-40 cursor-pointer rounded-full text-lg font-bold text-white shadow-lg transition-transform duration-300'>
              자세히 보기
            </button>
          )}
        </div>

        {/* 제목 */}
        <div className='mb-1 flex items-center justify-between text-indigo-600 md:mb-2 lg:mb-4'>
          <p className='line-clamp-1 text-[10px] leading-5 font-semibold md:text-sm'>
            {project.title}
          </p>
        </div>

        {/* 콘텐츠*/}
        <div className='flex flex-col justify-center'>
          <img
            src={project.thumbnail}
            alt={project.title}
            loading='lazy'
            decoding='async'
            className='aspect-video w-full self-center rounded-[10px] object-cover outline-1 outline-blue-100'
          />
          <p className='line-clamp-3 pt-1 text-[10px] leading-4 font-medium text-zinc-800 md:pt-2 md:text-[14px] md:leading-5 md:font-semibold lg:pt-3 lg:text-sm'>
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
    slug: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
