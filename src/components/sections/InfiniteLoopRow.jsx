import PropTypes from 'prop-types';
import MemberCard from '../cards/MemberCard';

const InfiniteLoopRow = ({
  data,
  direction = 'left',
  onCardClick,
  selectedId,
}) => {
  const loopData = [...data, ...data];

  // 선택된 카드가 있는지 확인
  const isAnySelected = selectedId !== null && selectedId !== undefined;

  return (
    <div className='w-full overflow-hidden py-4 select-none'>
      <div
        className={`flex w-max gap-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'} focus-within:[animation-play-state:paused] active:[animation-play-state:paused]`}
        style={{
          animationPlayState: isAnySelected ? 'paused' : undefined,
        }}>
        {loopData.map((item, index) => {
          const isSelected = selectedId === item.id;

          return (
            <div key={`${item.id}-${index}`} className='relative'>
              <MemberCard
                data={item}
                isActive={isSelected}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  onCardClick(item, rect);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

InfiniteLoopRow.propTypes = {
  data: PropTypes.array.isRequired, // 데이터 배열 필수
  direction: PropTypes.string, // 방향 문자열 (선택)
  onCardClick: PropTypes.func, // 클릭 핸들러 함수 (선택)
  selectedId: PropTypes.oneOfType([
    // ID는 숫자일 수도, 문자일 수도 있음
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default InfiniteLoopRow;
