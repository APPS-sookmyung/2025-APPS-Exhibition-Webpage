import {useRef, useEffect} from 'react';
import {motion} from 'framer-motion';
import {activitiesData} from '../../data/activitiesData.js';
import UnionIcon from '../../assets/activities/Union.svg';
import SimpleIcon from '../../assets/activities/simple-icons_suno.svg';
import Framec from '../../assets/activities/Frame-c.svg';
import Frame0 from '../../assets/activities/Frame-0.svg';
import ActivityCard from '../cards/ActivityCard.jsx';

export default function Activities() {
  const scrollRef = useRef(null);

  //가로 스크롤 추가
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

  return (
    <div className='bg-primary relative w-full overflow-hidden py-20 md:py-32'>
      <div className='relative z-10 mb-16 text-center md:mb-20'>
        <p className='text-3xl font-semibold tracking-tight text-white md:text-5xl'>
          ACTIVITIES
        </p>
        <p className='text-Blue_light mt-4 text-base font-semibold md:mt-6 md:text-2xl'>
          APPS에서 정기적으로 진행하는 다양한 활동들이 있어요
        </p>
      </div>
      <div className='absolute top-24 text-[72px] font-bold text-white/10 select-none md:top-[120px] md:text-[150px]'>
        ACTIVITIES
      </div>

      <motion.div
        ref={scrollRef}
        className='horizontal-scroll relative z-20 flex items-stretch gap-6 overflow-x-auto px-4 md:gap-8 md:px-8 md:py-3'>
        {activitiesData.map((card) => (
          <ActivityCard key={card.id} card={card} />
        ))}
      </motion.div>

      <div className='absolute z-30 hidden origin-top-right lg:top-15 lg:right-40 lg:block lg:scale-100'>
        <div className='relative'>
          <div className='bg-tertiary text-primary h-11 w-45 rounded-full text-center text-lg leading-[2] font-bold tracking-[0.025rem] md:h-13 md:w-60 md:text-2xl'>
            PROGRAMMING
          </div>
          <div className='bg-accent-blue text-primary absolute left-18 mt-3 h-11 w-45 rounded-full text-center text-lg leading-[2] font-bold tracking-[0.025rem] md:h-13 md:w-60 md:text-2xl'>
            DEVELOP
          </div>
        </div>
      </div>

      <div className='relative h-[20vw]'>
        <img
          src={UnionIcon}
          className='absolute z-20 mx-37 -mt-10 scale-60 sm:scale-90 md:mx-53 md:-mt-12 md:scale-80'
        />
      </div>

      <div>
        <img src={SimpleIcon} className='absolute z-10 -mt-90 ml-250' />
      </div>

      <div className='relative mt-15 h-[100px] w-full overflow-visible sm:h-[150px] md:h-82.5'>
        <img
          src={Framec}
          className='absolute top-5 left-0 z-20 w-full md:top-45'
        />
        <img
          src={Frame0}
          className='absolute top-0 left-0 z-10 w-full md:top-24'
        />
      </div>
    </div>
  );
}
