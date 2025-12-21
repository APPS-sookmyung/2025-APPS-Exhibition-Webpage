import PropTypes from 'prop-types';
import {LuLayoutGrid} from 'react-icons/lu';
import {TbRectangleVertical} from 'react-icons/tb';

export default function ViewerButton({stackedView, onChangeView}) {
  const gridColor = !stackedView ? 'text-white' : 'text-[#ABABAB]';
  const stackedColor = stackedView ? 'text-white' : 'text-[#ABABAB]';
  const positionClass = stackedView
    ? 'translate-x-[70%] duration-200'
    : '-translate-x-3 duration-200';

  return (
    <div className='relatvie flex h-15.5 w-34 items-center justify-between rounded-full bg-white px-5'>
      <div
        className={`z-10 cursor-pointer text-[40px] ${gridColor}`}
        onClick={() => onChangeView(false)}>
        <LuLayoutGrid />
      </div>
      <div
        className={`z-10 cursor-pointer text-[40px] ${stackedColor}`}
        onClick={() => onChangeView(true)}>
        <TbRectangleVertical />
      </div>
      <div
        className={`absolute z-0 h-13 w-16 rounded-full bg-[#333333] ${positionClass}`}></div>
    </div>
  );
}

ViewerButton.propTypes = {
  stackedView: PropTypes.bool.isRequired,
  onChangeView: PropTypes.func.isRequired,
};
