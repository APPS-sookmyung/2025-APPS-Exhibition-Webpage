/* eslint-disable react/prop-types */
import React from 'react';
import {motion} from 'framer-motion';

const ActivityCard = ({card}) => {
  const commonClassName =
    'relative mt-1 h-[300px] w-[220px] shrink-0 overflow-hidden rounded-[30px] md:h-[420px] md:w-[290px]';

  return (
    <motion.div className={commonClassName}>
      {card.type === 'image' && (
        <div className='group h-full w-full'>
          <img
            src={card.image}
            alt=''
            className='z-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100 active:opacity-100' />
        </div>
      )}

      {card.type === 'text' && (
        <div className='flex h-full w-full flex-col bg-[#E9ECEF] px-5 pt-5 pb-7 md:p-8'>
          <span className='mt-1 inline-block w-fit rounded-full bg-[#4B48F5] px-7 py-1 text-[10px] font-bold text-[#D9E3FC] md:text-xs'>
            {card.tag}
          </span>
          <p className='mt-auto text-lg font-bold md:text-[23px]'>
            {card.title}
          </p>
          <div className='my-2 w-full border-t-2 border-dashed border-[#ADB5BD] md:mt-2 md:mb-0 md:border-black' />
          <p className='my-1 text-xs leading-normal text-black md:my-3 md:text-sm md:leading-relaxed md:font-medium'>
            {card.description}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ActivityCard;
