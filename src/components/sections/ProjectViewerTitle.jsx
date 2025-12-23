import PropTypes from 'prop-types';

export default function ProjectViewerTitle({isMainTitle, titleText}) {
  const titleClass = isMainTitle ? 'text-5xl' : 'text-4xl pt-7';

  return (
    <div>
      <p
        className={`justify-center pb-2 text-center leading-[1.4] font-semibold tracking-[-0.025em] text-white ${titleClass}`}>
        {titleText}
      </p>
    </div>
  );
}

ProjectViewerTitle.propTypes = {
  isMainTitle: PropTypes.bool.isRequired,
  titleText: PropTypes.string.isRequired,
};
