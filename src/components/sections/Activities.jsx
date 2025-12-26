import {motion} from 'framer-motion';
import {activitiesData} from '../data/activitiesData';
import UnionIcon from '../../assets/activities/Union.svg';
import SimpleIcon from '../../assets/activities/simple-icons_suno.svg';
import Framec from '../../assets/activities/Frame-c.svg';
import Frame0 from '../../assets/activities/Frame-0.svg';
import ActivityCard from './ActivityCard';

export default function Activities() {
  return (
    <div className='bg-primary relative w-full overflow-hidden py-20 md:py-32'>
      <div className='relative z-10 mb-16 text-center md:mb-20'>
        <p className='font-pretendard text-3xl font-semibold tracking-tight text-[#FFFFFF] md:text-5xl'>
          ACTIVITIES
        </p>
        <p className='font-pretendard mt-4 text-base font-semibold text-[#D9E3FC] md:mt-6 md:text-2xl'>
          APPS에서 정기적으로 진행하는 다양한 활동들이 있어요
        </p>
      </div>
      <div className='font-pretendard absolute top-24 text-[72px] font-bold text-[#4B48F5] select-none md:top-[120px] md:text-[150px]'>
        ACTIVITIES
      </div>

      <motion.div className='no-scrollbar relative z-20 flex items-stretch gap-6 overflow-x-auto px-4 md:gap-8 md:px-8 md:py-3'>
        {activitiesData.map((card) => (
          <ActivityCard key={card.id} card={card} />
        ))}
      </motion.div>

      <div className='absolute top-12 right-5 z-30 origin-top-right scale-70 sm:scale-90 md:top-15 md:right-40 md:scale-100'>
        <div className='relative'>
          <div className='font-pretendard bg-tertiary text-primary h-11 w-45 rounded-full text-center text-lg leading-[2] font-bold tracking-[0.025rem] md:h-13 md:w-60 md:text-2xl'>
            PROGRAMMING
          </div>
          <div className='font-pretendard bg-accent-blue text-primary absolute left-18 mt-3 h-11 w-45 rounded-full text-center text-lg leading-[2] font-bold tracking-[0.025rem] md:h-13 md:w-60 md:text-2xl'>
            DEVELOP
          </div>
        </div>
      </div>

      <div>
        <img
          src={UnionIcon}
          className='absolute z-20 mx-37 -mt-10 scale-60 sm:scale-90 md:mx-53 md:-mt-12 md:scale-80'
        />
      </div>

      <div>
        <img src={SimpleIcon} className='absolute z-10 -mt-30 ml-250' />
      </div>

      <div className='relative mt-15 h-auto w-full overflow-visible md:h-[270px]'>
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
