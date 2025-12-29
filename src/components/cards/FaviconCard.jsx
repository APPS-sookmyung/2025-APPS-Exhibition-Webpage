import PropTypes from 'prop-types';

export default function FaviconCard({projectInfo, isSelected, onSelect}) {
  const sizeClass = isSelected
    ? 'w-12 h-12 md:w-22.5 md:h-22.5 '
    : 'w-10 h-10 md:w-20 md:h-20';
  const borderClass = isSelected ? 'border-2 border-white' : 'border-0';
  const opacityClass = isSelected ? 'opacity-100' : 'opacity-60';

  return (
    <div className='mx-1 shrink-0 md:scale-85 lg:mx-2.5 lg:scale-100'>
      <img
        src={projectInfo.favicon}
        alt={projectInfo.title}
        draggable={false}
        onClick={onSelect}
        className={`cursor-pointer rounded-xl object-cover md:rounded-[20px] ${sizeClass} ${borderClass} ${opacityClass}`}
      />
    </div>
  );
}

FaviconCard.propTypes = {
  projectInfo: PropTypes.shape({
    favicon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};
