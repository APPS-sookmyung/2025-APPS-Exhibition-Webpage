import Header from './Header';
import Line from './icons/Line';
import ExhibitionIcon1 from './icons/ExhibitionIcon1';
import ExhibitionIcon2 from './icons/ExhibitionIcon2';
import BackIcon from './icons/BackIcon';
import WAIcon from './icons/WAIcon';

export default function LandingPage() {
  return (
    <div>
      <Header />
      <div className='overflow-hidden bg-[#3936E5] text-[#FFFFFF]'>
        <div className='relative mx-auto max-w-[1440px] px-20 py-24'>
          <p className='font-pretendard text-3xl leading-[40px] font-normal tracking-[-0.025em] text-[#CCD7F2]'>
            SMWU Programming Club
          </p>
          <div className='font-pretendard relative mt-5 grid grid-cols-2 text-9xl leading-none font-bold tracking-[-0.06rem] text-[#FFFFFF]'>
            <div>
              <h1>APPS</h1>
              <Line />
              <div className='mt-2 flex items-center gap-4'>
                <h1>EXHIBITION</h1>
                <div className='flex items-center gap-2 pt-4'>
                  <ExhibitionIcon1 />
                  <ExhibitionIcon2 />
                </div>
              </div>
            </div>

            <div className='relative overflow-hidden text-right'>
              <div className='absoulte animate-marquee top-0 right-0 w-full whitespace-nowrap'>
                SOOKMYUNG&nbsp;SOOKMYUNG&nbsp;SOOKMYUNG&nbsp;SOOKMYUNG
              </div>
              <h1 className='relative z-10 mt-40 mr-30'>2025</h1>
            </div>
          </div>

          <div className='relative'>
            <BackIcon className='z-0' />
          </div>

          <div className='absolute right-20 bottom-20 flex items-center gap-5'>
            <WAIcon />
            <div className='font-pretendard h-13 w-63 rounded-full bg-[#D9E3FC] text-center text-2xl leading-[2] font-bold tracking-[0.025rem] text-[#333333]'>
              WEB & APP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
