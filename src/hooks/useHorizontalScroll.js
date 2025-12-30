// 가로 스크롤 커스텀 훅

import {useEffect} from 'react';

export function useHorizontalScroll(scrollRef) {
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY, // 가로 위치 + 세로 이동량
        behavior: 'auto',
      });
    };
    el.addEventListener('wheel', onWheel, {passive: false});

    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, []);
}
