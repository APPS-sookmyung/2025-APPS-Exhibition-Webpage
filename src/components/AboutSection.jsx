// src/components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  const commonWaveStyle = {
    backgroundImage: 'radial-gradient(circle, #D060F8 50px, transparent 0)',
    backgroundSize: '100px 100px',
    backgroundRepeat: 'repeat-x',
  };

  const topWavePattern = {
    ...commonWaveStyle,
    backgroundPosition: 'center top',
  };

  const bottomWavePattern = {
    ...commonWaveStyle,
    backgroundPosition: 'center bottom',
  };

  return (
    <section className='w-full bg-[#3936E5] py-20'>
      <div className='absolute top-10 left-10 flex flex-col gap-2 opacity-30 md:left-20'>
        <div className='flex gap-2'>
          <div className='h-4 w-4 rounded-full bg-white'></div>
          <div className='h-4 w-4 rounded-full bg-white'></div>
          <div className='h-4 w-4 rounded-full bg-white'></div>
        </div>
        <div className='flex gap-2'>
          <div className='h-4 w-4 rounded-full bg-white'></div>
          <div className='h-4 w-4 rounded-full bg-white'></div>
          <div className='h-4 w-4 rounded-full bg-white'></div>
        </div>
      </div>

      <div className='relative mx-auto w-[90%] bg-[#D060F8] md:w-full md:max-w-6xl'>
        <div
          className='absolute -top-[50px] left-0 h-[50px] w-full'
          style={topWavePattern}></div>

        <div className='p-6 text-center text-white md:p-20'>
          <h3 className='mb-1 text-lg font-bold tracking-widest text-[#FFD1D1] md:text-xl'>
            ABOUT US
          </h3>
          <h2 className='text-5xl font-extrabold tracking-tight md:text-7xl'>
            WHAT IS APPS?
          </h2>
          <div className='my-5 w-full border-t-2 border-dotted border-white/50'></div>
          <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:gap-16'>
            <div className='relative shrink-0'>
              <div className='h-[180px] w-full max-w-[320px] overflow-hidden rounded-[40px] border-4 border-white/10 bg-white/20 shadow-lg'>
                <img
                  src='/api/placeholder/400/320'
                  alt='APPS Exhibition'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='absolute -bottom-4 -left-2 z-10 rounded-full bg-[#DBE4FF] px-6 py-2 text-sm font-extrabold text-[#3936E5] shadow-md md:text-base'>
                2024 APPS EXH
              </div>
            </div>

            <div className='hidden h-[160px] w-[1px] bg-white/40 md:block'></div>
            <div className='max-w-lg text-left'>
              <p className='mb-4 text-sm font-bold opacity-90 md:text-base'>
                숙명여자대학교 소프트웨어학부 웹 앱 개발 학회
              </p>
              <p className='text-sm leading-relaxed font-light whitespace-pre-line opacity-95 md:text-[15px]'>
                APPS는 숙명여자대학교 컴퓨터공학과의 모바일 앱&웹 프로그래밍
                동아리로, 기술과 아이디어를 통해 프로젝트를 진행하며 개발 능력을
                향상시키고 커뮤니티 내에서 성장합니다. 활발한 소통과 피드백을
                통해 개인과 공동체 발전을 촉진합니다.
              </p>
            </div>
          </div>
        </div>

        <div
          className='absolute -bottom-[50px] left-0 h-[50px] w-full'
          style={bottomWavePattern}></div>
      </div>

      <div className='mt-20 text-center'>
        <div className='inline-flex items-center gap-4 text-sm font-bold tracking-widest text-[#D9E3FC]'>
          SINCE 2023
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
