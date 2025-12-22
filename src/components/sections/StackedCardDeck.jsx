import PropTypes from 'prop-types';
import StackedCard from '../cards/StackedCard';

export default function StackedCardDeck({projects, index}) {
  // step: -4 - +4 (0이 현재 카드)
  const steps = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

  // 깊이별 x축 이동, z축 이동, z축 회전 각도
  const depthPreset = {
    0: {x: 0, z: 0, rot: 0},
    1: {x: 5, z: -100, rot: 3},
    2: {x: 10, z: -200, rot: 5},
    3: {x: 15, z: -300, rot: 7},
    4: {x: 15, z: -300, rot: 7},
  };

  const isValidIndex = (i) => i >= 0 && i < projects.length;

  // 회전 및 이동 스타일 지정
  const getTransformStyle = (step) => {
    // 현재 카드보다 왼쪽에 있다면 왼쪽으로 회전
    const absDepth = Math.abs(step); // 0~4
    const sign = step === 0 ? 0 : step < 0 ? -1 : 1;

    // 부호 처리
    const preset = depthPreset[absDepth];
    const x = sign * preset.x;
    const z = preset.z;
    const rot = sign * preset.rot;

    return {
      transform: `translate3d(${x}%, 0px, ${z}px) rotateZ(${rot}deg) scale(1)`,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div
      className='relative flex h-138.25 w-full justify-center'
      style={{perspective: '1000px', transformStyle: 'preserve-3d'}}>
      <div className='relative w-full' style={{transformStyle: 'preserve-3d'}}>
        {/* 카드 렌더링 */}
        {steps.map((step) => {
          const targetIndex = index + step;
          if (!isValidIndex(targetIndex)) return null;

          const absDepth = Math.abs(step);
          const zIndex = 10 - absDepth;

          // 뒤쪽 카드들 스타일 지정
          const overlayColor =
            Math.abs(step) === 1 ? 'bg-[#C8C8C8]' : 'bg-[#ADADAD]';
          const overlayRadius = step === 0 ? 'rounded-[10px]' : 'rounded-2xl';

          return (
            <div
              key={targetIndex}
              className='absolute inset-0 flex items-center justify-center transition-all'
              style={{
                ...getTransformStyle(step),
                zIndex,
              }}>
              <div
                className={`pointer-events-auto relative ${overlayRadius} overflow-hidden`}>
                <StackedCard project={projects[targetIndex]} />

                <div
                  className={`absolute inset-0 z-20 ${overlayColor} transition-all duration-500`}
                  style={{
                    opacity: step === 0 ? 0 : 1,
                    pointerEvents: step === 0 ? 'none' : 'auto',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

StackedCardDeck.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      title: PropTypes.string,
      description: PropTypes.string,
      members: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  index: PropTypes.number.isRequired,
};
