import Header from './Header';
import Line from './icons/Line';
import ExhibitionIcon1 from './icons/ExhibitionIcon1';
import ExhibitionIcon2 from './icons/ExhibitionIcon2';
import BackIcon from './icons/BackIcon';
import WAIcon from './icons/WAIcon';

export default function LandingPage() {
  return (
    <div>
      <div className='relative min-h-[1300px] overflow-hidden bg-[#2A27E8] text-[#FFFFFF]'>
        <Header />
        <div className='relative mx-auto w-full px-20 py-18'>
          <p className='font-pretendard text-3xl font-normal tracking-[-0.025em] text-[#CCD7F2]'>
            SMWU Programming Club
          </p>
          <div className='font-pretendard relative z-10 mt-5 text-[170px] leading-[0.8] font-bold tracking-[-0.07rem] text-[#FFFFFF]'>
            <div className='relative flex w-full items-baseline justify-between pb-4'>
              <h1 className='shrink-0'>APPS</h1>
              <div className='ml-90 flex-1 overflow-hidden py-2'>
                <div className='animate-marquee inline-block whitespace-nowrap'>
                  <span>SOOKMYUNG</span>
                </div>
              </div>
            </div>
            <div className='relative right-1/2 left-1/2 mt-2 -mr-[50vw] -mb-2 -ml-[50vw] w-screen'>
              <Line />
            </div>
            <div className='flex flex-nowrap items-center justify-start'>
              <h1 className='shrink-0 leading-none'>EXHIBITI</h1>
              <h1 className='shrink-0 leading-none text-[#F75820]'>O</h1>
              <h1 className='shrink-0 leading-none'>N</h1>
              <div className='ml-6 flex shrink-0 translate-y-4 items-center gap-2'>
                <ExhibitionIcon1 />
                <ExhibitionIcon2 />
              </div>
            </div>
            <div className='relative right-1/2 left-1/2 mt-2 -mr-[50vw] -mb-2 -ml-[50vw] w-screen'>
              <Line />
            </div>
            <div className='flex justify-end pr-10'>
              <h1 className='pr-40 leading-none tracking-tighter'>2025</h1>
            </div>
          </div>

          <div className='absolute top-[77%] -left-13 z-0'>
            <BackIcon />
          </div>

          <div className='absolute right-45 bottom-60 z-20 flex items-center gap-5'>
            <WAIcon />
            <div className='font-pretendard flex h-13 w-63 items-center justify-center rounded-full bg-[#D9E3FC] text-center text-2xl leading-[2] font-bold tracking-[0.025rem] text-[#333333]'>
              WEB & APP
            </div>
          </div>

          <div className='mt-40 space-y-4'>
            <h2 className='font-pretendard text-4xl leading-tight font-semibold tracking-wide'>
              블라블라 앱스 카피
            </h2>
            <p className='font-pretendard tracking-wides text-4xl font-semibold text-white'>
              여기는 더미 텍스트가 들어갑니다.
            </p>
          </div>

          <div className='pointer-events-none absolute right-0 bottom-[-290px] z-0'>
            <div className='relative flex items-center justify-end'>
              <span className='font-pretendard absolute z-20 -translate-x-77 translate-y-15 transform text-[50px] leading-none font-black tracking-[1em] text-white'>
                APPS
              </span>
              <div className='relative z-10 pr-20 pb-20'>
                <svg
                  width='280'
                  height='320'
                  viewBox='0 0 294 315'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M267.661 0H26.3164C11.8197 0.0263455 0.0654609 11.718 0 26.1748V287.99C0.0666094 302.455 11.8289 314.152 26.3314 314.173H267.676C282.177 314.151 293.938 302.453 294 287.99V275.778C293.559 260.063 293.118 227.338 293.118 212.504C293.118 204.21 286.976 197.229 279.078 197.229C270.299 197.229 264.597 202.467 260.212 206.826C247.046 218.613 227.298 220.797 210.179 217.742C202.289 215.99 194.824 213.815 188.691 209.888C169.816 198.972 157.532 178.468 157.532 156.651C157.532 134.834 169.816 114.762 188.683 103.413C195.265 99.4862 202.73 97.3029 210.187 95.5595C226.865 92.5046 247.046 94.6798 260.212 106.468C265.039 110.834 270.74 116.064 279.078 116.064C286.976 116.064 293.118 109.083 293.118 100.79C293.118 86.3948 293.559 53.2304 294 37.5228V26.1748C294 11.7799 282.149 0 267.669 0H267.661Z'
                    fill='#2E61E0'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='pointer-events-none absolute bottom-[-310px] left-0 z-0 flex w-full justify-center py-18'>
            <span className='font-pretendard translate-y-[-50%] transform text-[200px] leading-none font-medium text-[#2E61E0]'>
              APPS
            </span>
          </div>

          <div className='absolute -bottom-45 left-10'>
            <div className='h-13 w-50 rounded-full bg-[#36B2ED]'></div>
            <div className='-mt-3 ml-10 h-13 w-50 rounded-full bg-[#FFB236]'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
