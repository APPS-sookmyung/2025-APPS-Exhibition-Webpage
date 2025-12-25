import PropTypes from 'prop-types';

export default function ProjectViewerTitle({isMainTitle, titleText}) {
  const titleClass = isMainTitle
    ? 'lg:text-5xl md:text-4xl text-2xl'
    : 'lg:text-4xl md:text-3xl pt-7 mb-4 md:mb-0';

  return (
    <div>
      <p
        className={`justify-center text-center leading-[1.4] font-semibold tracking-[-0.025em] text-white md:pb-2 ${titleClass}`}>
        {titleText}
      </p>
    </div>
  );
}

ProjectViewerTitle.propTypes = {
  isMainTitle: PropTypes.bool.isRequired,
  titleText: PropTypes.string.isRequired,
};
