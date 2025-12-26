// src/components/AboutSection.jsx
import React from 'react';
import tempImage from '../../assets/Temp.svg';

const AboutSection = () => {
  const waveBaseClass = `
    absolute left-0 w-full bg-repeat-x
    h-[30px] bg-[length:60px_60px]
    md:h-[80px] md:bg-[length:160px_160px]
  `;
  const waveImageClass = `
    bg-[image:radial-gradient(circle,var(--color-secondary)_30px,transparent_0)]
    md:bg-[image:radial-gradient(circle,var(--color-secondary)_80px,transparent_0)]
  `;

  return (
    <section className='bg-primary relative w-full overflow-hidden pt-40 pb-20 md:pt-60'>
      <div className='absolute top-6 left-10 flex flex-col gap-2 opacity-30 md:top-10 md:left-20'>
        <div className='grid grid-cols-3 gap-5 opacity-30 md:gap-7'>
          {Array.from({length: 6}).map((_, index) => (
            <div
              key={index}
              className='h-8 w-8 rounded-full bg-white md:h-10 md:w-10'></div>
          ))}
        </div>
      </div>

      <div className='bg-secondary relative mx-auto w-[94.6%] md:w-full md:max-w-[94.6%]'>
        <div
          className={` ${waveBaseClass} ${waveImageClass} -top-[30px] bg-[position:center_top] md:-top-[80px]`}></div>

        <div className='p-6 text-center text-white md:p-20'>
          <h3 className='text-red_light mb-1 text-2xl font-semibold tracking-normal md:text-[48px]'>
            ABOUT US
          </h3>
          <h2 className='pt-4 pb-5 text-4xl leading-none font-extrabold tracking-tight md:pt-8 md:text-[120px]'>
            WHAT IS APPS?
          </h2>
          <div className='-mx-6 my-5 border-t-2 border-dotted border-white/50 md:-mx-20 md:border-white'></div>
          <div className='flex flex-col items-center justify-center gap-10 md:gap-10 lg:flex-row'>
            <div className='relative shrink-0'>
              <div className='mt-5 h-[180px] w-full max-w-[400px] overflow-hidden rounded-[90px] md:w-[400px]'>
                <img
                  src={tempImage}
                  alt='APPS Exhibition'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='bg-Blue_light text-primary-light absolute -bottom-4 -left-2 z-10 rounded-full px-6 py-2 text-sm font-extrabold shadow-md md:text-[24px]'>
                2024 APPS EXH
              </div>
            </div>

            <div className='mx-5 hidden h-40 border-l-2 border-dotted border-white lg:block'></div>
            <div className='max-w-lg text-left'>
              <p className='mb-4 text-sm font-bold md:text-base'>
                숙명여자대학교 소프트웨어학부 웹 앱 개발 학회
              </p>
              <p className='text-sm leading-relaxed font-normal break-keep whitespace-pre-line md:text-[18px]'>
                APPS는 숙명여자대학교 컴퓨터공학과의 모바일 앱&웹 프로그래밍
                동아리로, 기술과 아이디어를 통해 프로젝트를 진행하며 개발 능력을
                향상시키고 커뮤니티 내에서 성장합니다. 활발한 소통과 피드백을
                통해 개인과 공동체 발전을 촉진합니다.
              </p>
            </div>
          </div>
        </div>

        <div
          className={` ${waveBaseClass} ${waveImageClass} -bottom-[30px] bg-[position:center_bottom] md:-bottom-[80px]`}></div>
      </div>

      <div className='mt-31 text-center'>
        <div className='text-Blue_light inline-flex items-center gap-4 text-[20px] font-bold tracking-widest md:text-[30px]'>
          SINCE 2023
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
