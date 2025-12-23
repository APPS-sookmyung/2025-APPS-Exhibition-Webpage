// src/components/AboutSection.jsx
import React from 'react';
import tempImage from '../assets/Temp.svg';

const AboutSection = () => {
  const commonWaveStyle = {
    backgroundImage: 'radial-gradient(circle, #D060F8 80px, transparent 0)',
    backgroundSize: '160px 160px',
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
    <section className='relative w-full overflow-hidden bg-[#3936E5] pt-60 pb-20'>
      <div className='absolute top-10 left-10 flex flex-col gap-2 opacity-30 md:left-20'>
        <div className='grid grid-cols-3 gap-7 opacity-30'>
          {Array.from({length: 6}).map((_, index) => (
            <div key={index} className='h-10 w-10 rounded-full bg-white'></div>
          ))}
        </div>
      </div>

      <div className='relative mx-auto w-[90%] bg-[#D060F8] md:w-full md:max-w-[94.6%]'>
        <div
          className='absolute -top-[80px] left-0 h-[80px] w-full'
          style={topWavePattern}></div>

        <div className='p-6 text-center text-white md:p-20'>
          <h3 className='mb-1 text-2xl font-semibold tracking-normal text-[#FFD2D2] md:text-[48px]'>
            ABOUT US
          </h3>
          <h2 className='pt-8 pb-5 text-5xl leading-none font-extrabold tracking-tight md:text-[120px]'>
            WHAT IS APPS?
          </h2>
          <div className='-mx-6 my-5 border-t-2 border-dotted border-white md:-mx-20'></div>
          <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:gap-10'>
            <div className='relative shrink-0'>
              <div className='mt-5 h-[180px] w-full max-w-[400px] overflow-hidden rounded-[90px] md:w-[400px]'>
                <img
                  src={tempImage}
                  alt='APPS Exhibition'
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='absolute -bottom-4 -left-2 z-10 rounded-full bg-[#DBE4FF] px-6 py-2 text-sm font-extrabold text-[#4B48F5] shadow-md md:text-[24px]'>
                2024 APPS EXH
              </div>
            </div>

            <div className='mx-5 hidden h-40 border-l-2 border-dotted border-white md:block'></div>
            <div className='max-w-lg text-left'>
              <p className='mb-4 text-sm font-bold opacity-90 md:text-base'>
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
          className='absolute -bottom-[80px] left-0 h-[80px] w-full'
          style={bottomWavePattern}></div>
      </div>

      <div className='mt-31 text-center'>
        <div className='inline-flex items-center gap-4 text-[20px] font-bold tracking-widest text-[#D9E3FC] md:text-[30px]'>
          SINCE 2023
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
