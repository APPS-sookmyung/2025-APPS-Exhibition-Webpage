import {useRef} from 'react';
import {motion} from 'framer-motion';
import {activitiesData} from '../../data/activitiesData.js';
import UnionIcon from '../../assets/activities/Union.svg';
import SimpleIcon from '../../assets/activities/simple-icons_suno.svg';
import Framec from '../../assets/activities/Frame-c.svg';
import Frame0 from '../../assets/activities/Frame-0.svg';
import ActivityCard from '../cards/ActivityCard.jsx';
import {useHorizontalScroll} from '../../hooks/useHorizontalScroll.js';

export default function Activities() {
  const scrollRef = useRef(null);

  //가로 스크롤 추가
  useHorizontalScroll(scrollRef);

  return (
    <div className='bg-primary relative w-full overflow-hidden py-20 md:py-32'>
      <div className='relative z-10 mb-16 text-center md:mb-20'>
        <p className='text-3xl font-semibold tracking-tight text-white md:text-5xl'>
          ACTIVITIES
        </p>
        <p className='text-Blue_light mt-2 text-base md:mt-4 md:text-2xl md:font-medium lg:mt-5 lg:font-semibold'>
          APPS에서 정기적으로 진행하는 다양한 활동들이 있어요
        </p>
      </div>
      <div className='absolute top-24 text-[72px] font-bold text-white/10 select-none md:top-[120px] md:text-[150px]'>
        ACTIVITIES
      </div>

      <motion.div
        ref={scrollRef}
        className='horizontal-scroll relative z-20 -mt-5 flex items-stretch gap-2 overflow-x-auto px-4 md:mt-0 md:gap-5 md:px-8 md:py-3'>
        {activitiesData.map((card) => (
          <ActivityCard key={card.id} card={card} />
        ))}
      </motion.div>

      <div className='absolute z-30 hidden origin-top-right lg:top-15 lg:right-40 lg:block lg:scale-100'>
        <div className='relative'>
          <div className='bg-tertiary text-primary flex h-11 w-45 items-center justify-center rounded-full text-lg leading-[2] font-semibold tracking-[0.025rem] md:h-13 md:w-60 md:text-2xl'>
            PROGRAMMING
          </div>
          <div className='bg-accent-blue absolute left-18 mt-3 h-11 w-45 rounded-full md:h-13 md:w-60'></div>
        </div>
      </div>

      <div className='relative h-[20vw]'>
        <img
          src={UnionIcon}
          className='absolute left-5 z-20 -mt-13 scale-60 sm:scale-90 md:mx-50 md:-mt-17 md:scale-80'
        />
      </div>

      <div>
        <img src={SimpleIcon} className='absolute z-10 -mt-90 ml-250' />
      </div>

      <div className='relative -mt-4 h-[50px] w-full overflow-visible md:-mt-25 md:h-[100px] lg:h-82.5'>
        <img
          src={Framec}
          className='absolute top-5 left-0 z-20 w-full md:top-10 lg:top-45'
        />
        <img
          src={Frame0}
          className='absolute top-0 left-0 z-10 w-full lg:top-24'
        />
      </div>
    </div>
  );
}
