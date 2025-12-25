import React from 'react';
import tinyLogo from '../../assets/footer/tinyLogo.svg';
import miniFlower from '../../assets/footer/miniFlower.svg';

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
              <h3 className='text-secondary mb-5 font-bold tracking-wider'>
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
              <h3 className='text-secondary mb-5 font-bold tracking-wider'>
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
