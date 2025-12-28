import React from 'react';
import linkedInIcon from '../../assets/footer/LinkedIn.svg';
import instagramIcon from '../../assets/footer/Instagram.svg';
import electricBg from '../../assets/footer/electric.svg';

const CtaSection = () => {
  return (
    // 기존 코드의 상단 Wrapper 부분 (CTA Banner)
    <div className='flex w-full flex-col items-center bg-transparent px-[20px] pt-16 pb-10'>
      <div className='bg-primary relative flex min-h-[360px] w-full max-w-[1100px] flex-col items-center justify-start overflow-hidden rounded-[40px] p-10 pt-30 pb-70 text-center text-white shadow-2xl md:min-h-[420px] md:rounded-[60px] md:px-16'>
        <div className='text-primary-light pointer-events-none absolute right-80 bottom-10 left-0 z-0 mx-auto w-1/2 text-center text-[3rem] leading-none font-bold tracking-tighter select-none md:w-auto md:text-[5rem] lg:w-auto lg:text-[7rem]'>
          CONNECT ON
        </div>

        <img
          src={electricBg}
          alt=''
          className='pointer-events-none absolute right-0 bottom-0 z-0 h-[30%] object-contain md:h-auto'
        />

        <div className='relative z-10 flex flex-col items-center gap-8 md:gap-10'>
          <h2 className='text-xl font-bold md:text-2xl'>
            APPS 소식을 더 빨리 알고 싶다면?
          </h2>

          <div className='flex gap-6'>
            {/* 인스타그램 아이콘 */}
            <a
              href='https://www.instagram.com/sookmyung_apps/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity hover:opacity-80'>
              <img
                src={instagramIcon}
                alt='Instagram'
                className='h-16 w-16 drop-shadow-md md:h-20 md:w-20'
              />
            </a>
            {/* 링크드인 아이콘 */}
            <a
              href='https://kr.linkedin.com/company/sookmyung-apps'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity hover:opacity-80'>
              <img
                src={linkedInIcon}
                alt='LinkedIn'
                className='h-16 w-16 drop-shadow-md md:h-20 md:w-20'
              />
            </a>
          </div>

          {/* 핸들 정보 */}
          <div className='flex items-center gap-3'>
            <span className='bg-Blue_light text-primary-light rounded-full px-3 py-1 text-[10px] font-extrabold tracking-wide md:text-xs'>
              LINKED FOR
            </span>
            <span className='text-xl font-bold tracking-wider md:text-2xl'>
              @SOOKMYUNG_APPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
