import PropTypes from 'prop-types';

export default function PaviconCard({projectInfo, isSelected, onSelect}) {
  const sizeClass = isSelected ? 'w-22.5 h-22.5' : 'w-20 h-20';
  const borderClass = isSelected ? 'border-2 border-white' : 'border-0';
  const opacityClass = isSelected ? 'opacity-100' : 'opacity-60';

  return (
    <div className='mx-2.5 shrink-0'>
      <img
        src={projectInfo.pavicon}
        alt={projectInfo.title}
        draggable={false}
        onClick={onSelect}
        className={`cursor-pointer rounded-[20px] object-cover ${sizeClass} ${borderClass} ${opacityClass}`}
      />
    </div>
  );
}

PaviconCard.propTypes = {
  projectInfo: PropTypes.shape({
    pavicon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    title: PropTypes.string,
  }).isRequired,
  isSelected: PropTypes.bool,
  onSelect: PropTypes.func,
};
