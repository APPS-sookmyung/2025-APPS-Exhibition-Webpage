import PropTypes from 'prop-types';
import {LuLayoutGrid} from 'react-icons/lu';
import {TbRectangleVertical} from 'react-icons/tb';

export default function ViewerButton({stackedView, onChangeView}) {
  const ACTIVE_COLOR = 'text-white';
  const INACTIVE_COLOR = 'text-[#ABABAB]';

  return (
    <div className='relative flex h-15.5 w-34 items-center justify-between rounded-full bg-white px-5'>
      {/* Grid 아이콘 버튼 */}
      <div
        className={`z-10 cursor-pointer text-[40px] ${
          !stackedView ? ACTIVE_COLOR : INACTIVE_COLOR
        }`}
        onClick={() => onChangeView(false)}>
        <LuLayoutGrid />
      </div>

      {/* Stacked 아이콘 버튼 */}
      <div
        className={`z-10 cursor-pointer text-[40px] ${
          stackedView ? ACTIVE_COLOR : INACTIVE_COLOR
        }`}
        onClick={() => onChangeView(true)}>
        <TbRectangleVertical />
      </div>

      {/* 배경 슬라이더 (애니메이션 요소) */}
      <div
        className={`bg-80 absolute z-0 h-13 w-16 rounded-full duration-200 ${
          stackedView ? 'translate-x-[70%]' : '-translate-x-3'
        }`}></div>
    </div>
  );
}

ViewerButton.propTypes = {
  stackedView: PropTypes.bool.isRequired,
  onChangeView: PropTypes.func.isRequired,
};
