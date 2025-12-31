import Header from './Header';
import LinearIcon from '../../assets/background-page/linear.svg';
import UnionIcon from '../../assets/background-page/union.svg';
import VectorIcon from '../../assets/background-page/vector.svg';
import MaterialIcon from '../../assets/background-page/material.svg';
import MdiIcon from '../../assets/background-page/mdi.svg';

export default function LandingPage() {
  return (
    <div className='w-full'>
      <div className='bg-primary relative min-h-[700px] overflow-hidden text-white md:min-h-[1200px] lg:min-h-[1400px]'>
        <Header />
        <div className='relative mx-auto w-full px-6 py-10 lg:px-20 lg:py-18'>
          <p className='font-pretendard text-lg font-normal tracking-[-0.025em] text-[#CCD7F2] md:text-2xl lg:text-3xl'>
            SMWU Programming Club
          </p>
          <div className='font-pretendard relative z-10 mt-5 text-[clamp(4rem,15vw,170px)] leading-[0.8] font-bold tracking-[-0.07rem] text-white'>
            <div className='relative flex w-full items-baseline justify-between pb-4'>
              <p className='shrink-0'>APPS</p>
              <div className='ml-4 flex-1 overflow-hidden py-2 md:ml-10 lg:ml-90'>
                <div className='animate-marquee inline-block whitespace-nowrap'>
                  <p>SOOKMYUNG</p>
                </div>
              </div>
            </div>
            <div className='relative right-1/2 left-1/2 -mx-[50vw] -mt-2 w-screen border-b border-dotted border-white md:-mt-2 md:mb-2' />
            <div className='-mt-10 flex flex-nowrap items-center justify-start md:-mt-2'>
              <div className='flex items-center'>
                <p className='shrink-0 leading-none'>EXHIBITI</p>
                <p className='text-secondary shrink-0 leading-none'>O</p>
                <p className='shrink-0 leading-none'>N</p>
              </div>
              <div className='ml-2 flex shrink-0 items-center md:ml-6 lg:-space-x-4'>
                <div className='hidden w-auto origin-left md:block md:scale-75 lg:scale-100'>
                  <img src={MaterialIcon} />
                </div>
                <div className='origin-leff md:scale-75 lg:scale-100'>
                  <img src={MdiIcon} />
                </div>
              </div>
            </div>
            <div className='relative right-1/2 left-1/2 -mx-[50vw] -mt-9 w-screen border-b border-dotted border-white md:mt-0.5 md:mb-2.5' />
            <div className='flex justify-end pr-4 md:pr-1'>
              <p className='pr-10 leading-none tracking-tighter md:-mt-2 md:pr-40'>
                2025
              </p>
            </div>
          </div>

          <img
            src={LinearIcon}
            className='absolute top-[9%] -left-35 z-0 h-90 w-130 scale-50 md:scale-100 lg:top-[24.8%] lg:-left-14'
          />

          <div className='absolute right-6 bottom-50 z-20 flex items-center gap-3 md:right-75 md:bottom-80 md:mt-30 md:gap-5'>
            <img src={UnionIcon} className='scale-78 md:scale-100' />
            <div className='font-pretendard bg-Blue_light text-80 flex h-10 w-36 items-center justify-center rounded-full text-center text-sm leading-[2] font-bold tracking-[0.025rem] md:-mr-40 md:h-13 md:w-63 md:text-2xl'>
              WEB & APP
            </div>
          </div>

          <div className='mt-20 mb-20 space-y-4 md:mt-40'>
            <p className='font-pretendard text-1xl leading-tight font-semibold tracking-wide md:text-3xl lg:text-4xl'>
              2025 APPS 전시회에 오신 것을 환영합니다!
            </p>
            <p className='font-pretendard tracking-wides text-1xl font-semibold text-white md:text-3xl lg:text-4xl'>
              부원들의 열정과 노력이 담긴 다양한 프로젝트들을 만나보세요.
            </p>
          </div>

          <div className='md:bottom[-100px] pointer-events-none absolute -right-4 bottom-[-120px] z-0 origin-bottom origin-right scale-[0.3] min-[1025px]:right-[90px] min-[1025px]:bottom-[-75px] md:-mr-25 md:-mb-40 md:scale-[0.7] lg:scale-100'>
            <div className='relative flex items-center justify-end'>
              <p className='font-pretendard absolute z-20 -translate-x-[110px] translate-y-[100px] transform text-[50px] leading-none font-semibold tracking-[1em] text-white md:-translate-x-79 md:translate-y-15 md:text-[50px]'>
                APPS
              </p>
              <img
                src={VectorIcon}
                className='relative z-10 pr-10 pb-10 md:pr-20 md:pb-30'
              />
            </div>
          </div>

          <div className='pointer-events-none absolute bottom-[-9%] left-0 z-0 flex w-full justify-center py-18 md:bottom-[-18%] lg:bottom-[-140px]'>
            <p className='font-pretendard translate-y-[-1%] transform text-[20vw] leading-none font-medium text-white/10 md:text-[25vw] lg:text-[200px]'>
              APPS
            </p>
          </div>

          <div className='absolute -bottom-6 left-2.5 h-[100px] origin-left scale-75 md:-bottom-40 md:left-10 md:scale-90 lg:-bottom-30 lg:left-10 lg:scale-100'>
            <div className='bg-accent-blue h-8 w-32 rounded-full md:h-10 md:w-40 lg:h-13 lg:w-50'></div>
            <div className='bg-tertiary -mt-2 ml-6 h-8 w-32 rounded-full md:-mt-3 md:ml-8 md:h-10 md:w-40 lg:ml-10 lg:h-13 lg:w-50'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
