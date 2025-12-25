/* eslint-disable react/prop-types */
import React from 'react';
import {motion} from 'framer-motion';

const ActivityCard = ({card}) => {
  const commonClassName =
    'relative mt-1 h-[380px] w-[260px] shrink-0 overflow-hidden rounded-3xl md:h-[420px] md:w-[290px]';

  return (
    <motion.div className={commonClassName}>
      {card.type === 'image' && (
        <div className='group h-full w-full'>
          <img
            src={card.image}
            alt=''
            className='z-0 h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100' />
        </div>
      )}

      {card.type === 'text' && (
        <div className='flex h-full w-full flex-col bg-[#E9ECEF] p-6 md:p-8'>
          <span className='font-pretendard mt-3 mb-3 inline-block w-fit rounded-full bg-[#4B48F5] px-7 py-1 text-xs font-bold text-[#D9E3FC]'>
            {card.tag}
          </span>
          <h3 className='font-pretendard mt-20 mb-2 text-lg font-bold md:mt-[120px] md:text-[23px]'>
            {card.title}
          </h3>
          <div className='my-2 border-t-2 border-dashed border-black' />
          <p className='font-pretendard my-3 text-sm leading-relaxed font-medium text-black'>
            {card.description}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ActivityCard;
