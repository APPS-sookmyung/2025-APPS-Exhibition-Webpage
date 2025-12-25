import {useState, useEffect} from 'react';
import InfiniteLoopRow from './InfiniteLoopRow';
import MemberCard from '../cards/MemberCard';
import CenterLogo from '../../assets/logo/logo.svg';

import BgFlower from '../../assets/background_diagram/Frame flower.svg';
import BgRock from '../../assets/background_diagram/Frame rock.svg';
import BgTopD from '../../assets/background_diagram/Frame topD.svg';
import BgBottomD from '../../assets/background_diagram/Frame bottomD.svg';

import {ROW_1_DATA, ROW_2_DATA, ROW_3_DATA} from '../../data/appsIntroData';

const MemberIntroSection = () => {
  // 어떤 멤버가 선택되었는지 관리 (null이면 선택 안됨)
  const [selectedMember, setSelectedMember] = useState(null);
  const [cardPosition, setCardPosition] = useState(null);

  useEffect(() => {
    if (selectedMember) {
      // 카드가 선택되면 스크롤을 막음
      document.body.style.overflow = 'hidden';
    } else {
      // 선택이 해제되면 스크롤을 다시 허용
      document.body.style.overflow = 'unset';
    }
    // 컴포넌트가 언마운트되거나 상태가 변할 때 뒷정리(cleanup)
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  useEffect(() => {
    const handleResize = () => {
      if (selectedMember) {
        handleClose();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [selectedMember]);

  // 카드 클릭 핸들러
  const handleCardClick = (member, rect) => {
    if (selectedMember && selectedMember.id === member.id) {
      handleClose();
    } else {
      setSelectedMember(member);
      setCardPosition(rect);
    }
  };

  // 배경 클릭 시 닫기 핸들러
  const handleClose = () => {
    setSelectedMember(null);
    setCardPosition(null);
  };
  return (
    <section className='bg-Gray_light relative flex min-h-screen w-full flex-col justify-center overflow-hidden py-50'>
      {/* 1. 좌측 상단 (Flower) */}
      <img
        src={BgFlower}
        alt='background deco'
        className='pointer-events-none absolute top-0 left-0 z-0 w-40 select-none md:w-150'
      />

      {/* 2. 우측 상단 (BottomD) */}
      <img
        src={BgBottomD}
        alt='background deco'
        className='pointer-events-none absolute top-0 right-0 z-0 w-40 select-none md:w-150'
      />

      {/* 3. 좌측 하단 (TopD) */}
      <img
        src={BgTopD}
        alt='background deco'
        className='pointer-events-none absolute bottom-0 left-0 z-0 w-40 select-none md:w-150'
      />

      {/* 4. 우측 하단 (Rock) */}
      <img
        src={BgRock}
        alt='background deco'
        className='pointer-events-none absolute right-0 bottom-0 z-0 w-40 select-none md:w-150'
      />

      <div className='relative z-10 w-full'>
        {/* 섹션 헤더 */}
        <div className='z-10 mb-12 px-4 text-center'>
          <h2 className='text-100 mb-4 text-4xl font-bold md:text-5xl'>
            부원들이 말하는 <span className='text-primary-light'>APPS?</span>
          </h2>
          <p className='text-80 text-lg font-semibold md:text-xl'>
            서로가 갖고 있는 다양한 경험과 지식의 공유를 통해 동반성장을
            지향합니다.
          </p>

          {/* 중앙 로고 */}
          <div className='my-8 flex justify-center'>
            <img
              src={CenterLogo}
              alt='Center Logo'
              className='h-25 w-25 object-contain'
            />
          </div>
        </div>

        {/* 무한 스크롤 영역 */}
        <div className='z-10 flex w-full flex-col gap-0'>
          {/* 첫 번째 줄: 왼쪽으로 흐름 */}
          <InfiniteLoopRow
            data={ROW_1_DATA}
            direction='left'
            selectedId={selectedMember?.id}
            onCardClick={handleCardClick}
          />

          {/* 두 번째 줄: 오른쪽으로 흐름 (역방향) */}
          <InfiniteLoopRow
            data={ROW_2_DATA}
            direction='right'
            selectedId={selectedMember?.id}
            onCardClick={handleCardClick}
          />

          {/* 세 번째 줄: 왼쪽으로 흐름 */}
          <InfiniteLoopRow
            data={ROW_3_DATA}
            direction='left'
            selectedId={selectedMember?.id}
            onCardClick={handleCardClick}
          />
        </div>
        <div className='z-10 px-4 py-5 text-center'>
          <p className='text-80 text-sm font-normal'>
            카드를 <span className='text-primary-light'>클릭</span>하여 부원들의
            이야기를 만나보세요.
          </p>
        </div>
      </div>
      {/* 오버레이 및 말풍선 */}
      {selectedMember && cardPosition && (
        <div className='fixed inset-0 z-40'>
          <div
            className='absolute inset-0 bg-black/40 transition-opacity duration-0'
            onClick={handleClose}></div>

          <div
            className='fixed z-50'
            style={{
              top: cardPosition.top,
              left: cardPosition.left,
              width: cardPosition.width,
              height: cardPosition.height,
              pointerEvents: 'none', // 카드는 클릭 안 되게 하거나 필요 시 auto
            }}>
            {/* isActive={true}로 선택된 상태 디자인 유지 */}
            <MemberCard data={selectedMember} isActive={true} />
          </div>

          {/* 말풍선: 카드 너비와 동일하게 고정 */}
          <div
            className='pointer-events-none fixed z-50'
            style={{
              width: cardPosition.width,

              left: cardPosition.left,

              top: cardPosition.top - 24,

              transform: 'translateY(-100%)',
            }}>
            <div className='animate-fade-in-up pointer-events-auto relative rounded-3xl bg-white p-5 text-center shadow-2xl'>
              <p className='text-100 text-lg leading-relaxed font-medium break-keep'>
                &quot;{selectedMember.message}&quot;
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MemberIntroSection;
