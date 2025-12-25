import React from 'react';
import tinyLogo from '../../assets/footer/tinyLogo.svg';
import miniFlower from '../../assets/footer/miniFlower.svg';
import linkedInIcon from '../../assets/footer/LinkedIn.svg';
import instagramIcon from '../../assets/footer/Instagram.svg';
import electricBg from '../../assets/footer/electric.svg';

const FooterSection = () => {
  // 개발자/디자이너 데이터 배열로 관리
  const developers = [
    '백수민 (소프트웨어학부 23)',
    '하지민 (소프트웨어학부 23)',
    '윤지원 (소프트웨어학부 23)',
  ];
  const designer = '강선우 (홍보광고학과, 시각영상디자인과 22)';

  return (
    <section className='flex w-full flex-col items-center bg-transparent'>
      {/* CTA Banner */}
      <div className='relative z-10 w-full px-[20px] pt-16 pb-10'>
        <div className='bg-Blue relative flex min-h-[360px] flex-col items-center justify-start overflow-hidden rounded-[40px] p-10 pt-30 pb-70 text-center text-white shadow-2xl md:min-h-[420px] md:rounded-[60px] md:px-16'>
          <div className='text-Blue_medium pointer-events-none absolute right-80 bottom-10 left-0 z-0 text-center text-[7rem] leading-none font-bold tracking-tighter select-none md:text-[11rem]'>
            CONNECT ON
          </div>

          <img
            src={electricBg}
            alt=''
            className='pointer-events-none absolute right-0 bottom-0 z-0 h-[80%] object-contain md:h-auto'
          />

          <div className='relative z-10 flex flex-col items-center gap-8 md:gap-10'>
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
              <span className='bg-Blue_light text-Blue_medium rounded-full px-3 py-1 text-[10px] font-extrabold tracking-wide md:text-xs'>
                LINKED FOR
              </span>
              <span className='text-xl font-bold tracking-wider md:text-2xl'>
                @SOOKMYUNGAPPS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info (검은색 영역) */}
      <footer className='bg-80 w-full px-6 pt-24 pb-12 text-white md:px-8 md:pt-28'>
        <div className='mx-auto flex max-w-[1100px] flex-col justify-between gap-12 md:flex-row md:gap-8'>
          <div className='flex max-w-sm flex-col justify-between gap-8 md:gap-4'>
            <div className='flex items-center gap-2'>
              <img
                src={tinyLogo}
                alt='APPS Logo'
                className='h-10 object-contain md:h-12'
              />
              <span className='text-xl font-bold tracking-wider text-white md:text-2xl'>
                APPS
              </span>
            </div>

            <div className='space-y-1 text-[11px] leading-relaxed font-light md:mt-auto md:text-xs'>
              <div className='mb-4 w-full border-t border-white md:hidden'></div>
              <p>
                숙명여자대학교 | 04310 서울특별시 용산구 청파로47길 100
                (청파동2가)
              </p>
              <p className>Copyright APPS. All Rights Reserved.</p>
            </div>
          </div>

          {/* 오른쪽: 크레딧 리스트 (Grid 활용) */}
          <div className='grid grid-cols-1 gap-10 text-sm md:grid-cols-2 md:gap-16'>
            {/* Developer Column */}
            <div>
              <h3 className='text-Primary mb-5 font-bold tracking-wider'>
                DEVELOPER
              </h3>
              <ul className='space-y-2.5 font-light text-white'>
                {developers.map((dev, index) => (
                  <li key={index}>{dev}</li>
                ))}
              </ul>
            </div>

            {/* Designer Column */}
            <div className='relative'>
              <h3 className='text-Primary mb-5 font-bold tracking-wider'>
                DESIGNER
              </h3>
              <ul className='space-y-2.5 font-light text-white'>
                <li>{designer}</li>
              </ul>
              <div className='mt-10 flex justify-end md:absolute md:right-0 md:bottom-0'>
                <img
                  src={miniFlower}
                  alt='flower decoration'
                  className='animate-spin-slow h-10 w-10 object-contain'
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
