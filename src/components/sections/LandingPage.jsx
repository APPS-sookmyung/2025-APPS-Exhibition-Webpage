import Header from './Header';
import LinearIcon from '../../assets/background-page/linear.svg';
import UnionIcon from '../../assets/background-page/union.svg';
import VectorIcon from '../../assets/background-page/vector.svg';
import MaterialIcon from '../../assets/background-page/material.svg';
import MdiIcon from '../../assets/background-page/mdi.svg';

export default function LandingPage() {
  return (
    <div className='w-full'>
      <div className='bg-primary relative min-h-screen overflow-hidden text-white lg:min-h-[1400px]'>
        <Header />
        <div className='relative mx-auto w-full px-6 py-10 lg:px-20 lg:py-18'>
          <p className='font-pretendard text-lg font-normal tracking-[-0.025em] text-[#CCD7F2] md:text-2xl lg:text-3xl'>
            SMWU Programming Club
          </p>
          <div className='font-pretendard relative z-10 mt-5 text-[clamp(4rem,15vw,170px)] leading-[0.8] font-bold tracking-[-0.07rem] text-white'>
            <div className='relative flex w-full items-baseline justify-between pb-4'>
              <h1 className='shrink-0'>APPS</h1>
              <div className='ml-4 flex-1 overflow-hidden py-2 md:ml-10 lg:ml-90'>
                <div className='animate-marquee inline-block whitespace-nowrap'>
                  <span>SOOKMYUNG</span>
                </div>
              </div>
            </div>
            <div className='relative right-1/2 left-1/2 -mx-[50vw] mt-2 w-screen border-b border-dotted border-white' />
            <div className='-mt-2 flex flex-nowrap items-center justify-start'>
              <h1 className='shrink-0 leading-none'>EXHIBITI</h1>
              <h1 className='text-secondary shrink-0 leading-none'>O</h1>
              <h1 className='shrink-0 leading-none'>N</h1>
              <div className='ml-2 flex shrink-0 translate-y-2 items-center md:ml-6 md:translate-y-4 lg:-space-x-4'>
                <div className='w-auto origin-left scale-50 md:scale-75 lg:scale-100'>
                  <img src={MaterialIcon} />
                </div>
                <div className='origin-left scale-50 md:scale-75 lg:scale-100'>
                  <img src={MdiIcon} />
                </div>
              </div>
            </div>
            <div className='relative right-1/2 left-1/2 -mx-[50vw] mt-2 w-screen border-b border-dotted border-white' />
            <div className='flex justify-end pr-4 md:pr-10'>
              <h1 className='pr-10 leading-none tracking-tighter md:-mt-2 md:pr-40'>
                2025
              </h1>
            </div>
          </div>

          <img
            src={LinearIcon}
            className='absolute top-[70%] -left-10 z-0 h-90 w-130 scale-50 md:scale-100 lg:top-[25.8%] lg:-left-14'
          />

          <div className='absolute right-6 bottom-50 z-20 flex items-center gap-3 md:right-45 md:bottom-75 md:gap-5'>
            <img src={UnionIcon} className='scale-78 md:scale-100' />
            <div className='font-pretendard bg-Blue_light text-80 flex h-10 w-36 items-center justify-center rounded-full text-center text-sm leading-[2] font-bold tracking-[0.025rem] md:h-13 md:w-63 md:text-2xl'>
              WEB & APP
            </div>
          </div>

          <div className='mt-20 mb-20 space-y-4 md:mt-40'>
            <h2 className='font-pretendard text-2xl leading-tight font-semibold tracking-wide md:text-4xl'>
              블라블라 앱스 카피
            </h2>
            <p className='font-pretendard tracking-wides text-xl font-semibold text-white md:text-4xl'>
              여기는 더미 텍스트가 들어갑니다.
            </p>
          </div>

          <div className='md:bottom[-100px] pointer-events-none absolute right-0 bottom-[-100px] z-0 origin-bottom origin-right scale-[0.3] md:scale-[0.8] lg:bottom-[-240px] lg:scale-100'>
            <div className='relative flex items-center justify-end'>
              <span className='font-pretendard absolute z-20 -translate-x-[110px] translate-y-[100px] transform text-[50px] leading-none font-black tracking-[1em] text-white md:-translate-x-79 md:translate-y-15 md:text-[50px]'>
                APPS
              </span>
              <img
                src={VectorIcon}
                className='relative z-10 pr-10 pb-10 md:pr-20 md:pb-30'
              />
            </div>
          </div>

          <div className='pointer-events-none absolute bottom-[-5%] left-0 z-0 flex w-full justify-center py-18 md:bottom-[-10%] lg:bottom-[-140px]'>
            <span className='font-pretendard text-primary-light translate-y-[-1%] transform text-[20vw] leading-none font-medium md:text-[25vw] lg:text-[200px]'>
              APPS
            </span>
          </div>

          <div className='absolute -bottom-5 left-6 origin-left scale-75 md:bottom-30 md:left-10 md:scale-90 lg:-bottom-30 lg:left-10 lg:scale-100'>
            <div className='bg-accent-blue h-8 w-32 rounded-full md:h-10 md:w-40 lg:h-13 lg:w-50'></div>
            <div className='bg-tertiary -mt-2 ml-6 h-8 w-32 rounded-full md:-mt-3 md:ml-8 md:h-10 md:w-40 lg:ml-10 lg:h-13 lg:w-50'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
