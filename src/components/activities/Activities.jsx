import {motion, useScroll, useTransform} from 'framer-motion';
import {activitiesData} from '../data/activitiesData';
import Flower from '../../Icons/Flower';

export default function Activities() {
  const {scrollYProgress} = useScroll();

  const x = useTransform(scrollYProgress, [0.2, 0.6], ['0%', '-40%']);

  return (
    <div className='relative w-full overflow-hidden bg-[#3936E5] py-32'>
      <div className='relative z-10 mb-20 text-center'>
        <h2 className='font-pretendard text-5xl font-semibold tracking-tight text-[#FFFFFF]'>
          ACTIVITIES
        </h2>
        <p className='font-pretendard mt-5 text-2xl font-semibold text-[#D9E3FC]'>
          APPS에서 정기적으로 진행하는 다양한 활동들이 있어요
        </p>
      </div>
      <div className='font-pretendard absolute top-28 text-[150px] font-bold text-[#4B48F5] select-none'>
        ACTIVITIES
      </div>

      <motion.div style={{x}} className='flex items-stretch gap-8 px-20'>
        {activitiesData.map((card) => {
          if (card.type === 'text') {
            return (
              <motion.div
                key={card.id}
                className='mt-1 h-[420px] w-[320px] shrink-0 rounded-3xl bg-[#E9ECEF] p-8'
                whileHover={{y: -8}}
                transition={{type: 'spring', stiffness: 200}}>
                <span className='font-pretendard mb-3 inline-block w-fit rounded-full bg-[#4B48F5] px-7 py-1 text-xs font-bold text-[#D9E3FC]'>
                  {card.tag}
                </span>
                <h3 className='font-pretendard mt-30 mb-2 text-[23px] font-bold'>
                  {card.title}
                </h3>
                <div className='my-2 border-t-2 border-dashed border-black' />
                <p className='font-pretendard my-3 text-sm leading-relaxed font-medium text-black'>
                  {card.description}
                </p>
              </motion.div>
            );
          }

          if (card.type === 'image') {
            return (
              <motion.div
                key={card.id}
                className='mt-1 h-[420px] w-[320px] shrink-0 overflow-hidden rounded-3xl'
                whileHover={{scale: 1.03}}
                transition={{type: 'spring', stiffness: 200}}>
                <img
                  src={card.image}
                  alt=''
                  className='h-full w-full object-cover'
                />
              </motion.div>
            );
          }

          return null;
        })}
      </motion.div>

      <Flower />
    </div>
  );
}
