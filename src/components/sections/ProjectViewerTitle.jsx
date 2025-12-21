import PropTypes from 'prop-types';

export default function ProjectViewerTitle({stackedView, titleText}) {
  if (stackedView) {
    return (
      <div>
        <p className='justify-center pb-2 text-center text-5xl leading-[1.4] font-semibold tracking-[-0.025em] text-white'>
          PROJECTS
        </p>
        <p className='justify-start text-center text-2xl leading-7 font-semibold tracking-[-0.025em] text-[#C8D6F9]'>
          APPS 부원들의 개성이 드러나는 다양한 프로젝트를 소개합니다.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p className='justify-center pt-7 pb-2 text-center text-4xl leading-[1.4] font-semibold tracking-[-0.025em] text-white'>
          {titleText}
        </p>
      </div>
    );
  }
}

ProjectViewerTitle.propTypes = {
  stackedView: PropTypes.bool.isRequired,
  titleText: PropTypes.string,
};
