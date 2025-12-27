import React from 'react';
import linkedInIcon from '../../assets/footer/LinkedIn.svg';
import instagramIcon from '../../assets/footer/Instagram.svg';
import electricBg from '../../assets/footer/electric.svg';

const CtaSection = () => {
  return (
    // 기존 코드의 상단 Wrapper 부분 (CTA Banner)
    <div className='flex w-full flex-col items-center bg-transparent px-[5%] pt-10 pb-10 lg:px-[25px] lg:py-[60px]'>
      <div
        style={{containerType: 'inline-size'}}
        className='bg-primary relative flex min-h-[clamp(360px,40cqw,700px)] w-full max-w-[1440px] flex-col items-center justify-start overflow-hidden rounded-[40px] p-10 pt-[clamp(80px,8cqw,120px)] pb-[clamp(40px,20cqw,280px)] text-center text-white shadow-2xl md:rounded-[60px] md:px-16'>
        <div className='text-primary-light pointer-events-none absolute bottom-10 left-10 z-0 mx-auto w-auto text-center text-[clamp(1.5rem,12cqw,13rem)] leading-none font-bold tracking-tighter whitespace-nowrap select-none md:w-auto'>
          CONNECT ON
        </div>

        <img
          src={electricBg}
          alt=''
          className='pointer-events-none absolute right-0 bottom-0 z-0 w-[clamp(100px,30cqw,600px)] object-contain'
        />

        <div className='relative z-10 flex flex-col items-center gap-[3cqw] md:gap-10'>
          <h2 className='text-xl font-bold md:text-2xl'>
            APPS 소식을 더 빨리 알고 싶다면?
          </h2>

          <div className='flex gap-6'>
            {/* 인스타그램 아이콘 */}
            <a
              href='#'
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
              href='#'
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
              @SOOKMYUNGAPPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
