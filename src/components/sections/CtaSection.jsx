import {useState} from 'react';
import LinkedInIcon from '../../assets/footer/LinkedIn.svg?react';
import LinkedInIconHover from '../../assets/footer/linkedinHover.svg?react';
import InstagramIcon from '../../assets/footer/Instagram.svg?react';
import InstagramIconHover from '../../assets/footer/instagramHover.svg?react';
import electricBg from '../../assets/footer/electric.svg';

const CtaSection = () => {
  const [isInstaHovered, setInstaHovered] = useState(false);
  const [isLinkedinHovered, setLinkedinHovered] = useState(false);

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

        {/* 내부 컨텐츠 래퍼 */}
        {/* gap-[5cqw]: 요소들 사이 간격도 파란 박스 너비의 5%로 줄어듦 */}
        <div className='relative z-10 flex flex-col items-center gap-[5cqw] md:gap-10'>
          {/* 1. 메인 타이틀
     - 모바일: 박스 너비의 5% 크기 (text-[5cqw])
     - 데스크탑: text-2xl (24px)로 고정
  */}
          <h2 className='text-[clamp(1rem,5cqw,1.5rem)] font-bold md:text-2xl'>
            APPS 소식을 더 빨리 알고 싶다면?
          </h2>

          {/* 2. 아이콘 영역 */}
          {/* gap-[4cqw]: 아이콘 사이 간격도 줄어듦 */}
          <div className='flex gap-[4cqw] md:gap-6'>
            {/* 인스타그램 */}
            <a
              href='https://www.instagram.com/sookmyung_apps/'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity'
              onMouseEnter={() => setInstaHovered(true)}
              onMouseLeave={() => setInstaHovered(false)}>
              {isInstaHovered ? (
                <InstagramIconHover className='h-auto w-[15cqw] drop-shadow-md md:w-20' />
              ) : (
                <InstagramIcon className='h-auto w-[15cqw] drop-shadow-md md:w-20' />
              )}
            </a>
            {/* 링크드인 */}
            <a
              href='https://kr.linkedin.com/company/sookmyung-apps'
              target='_blank'
              rel='noopener noreferrer'
              className='transition-opacity'
              onMouseEnter={() => setLinkedinHovered(true)}
              onMouseLeave={() => setLinkedinHovered(false)}>
              {isLinkedinHovered ? (
                <LinkedInIconHover className='h-auto w-[15cqw] drop-shadow-md md:w-20' />
              ) : (
                <LinkedInIcon className='h-auto w-[15cqw] drop-shadow-md md:w-20' />
              )}
            </a>
          </div>

          {/* 3. 핸들 정보 영역 */}
          {/* gap-[2cqw]: 뱃지와 아이디 사이 간격 조절 */}
          <div className='flex items-center gap-[2cqw] md:gap-3'>
            {/* LINKED FOR 뱃지 
       text-[2.5cqw]: 글자 크기 유동적
       px-[0.8em]: 글자 크기에 비례해서 패딩도 같이 줄어듦 (em 단위 사용 꿀팁!)
    */}
            <span className='bg-Blue_light text-primary-light rounded-full px-[0.8em] py-[0.3em] text-[clamp(0.5rem,2.5cqw,0.75rem)] font-extrabold tracking-wide md:px-3 md:py-1 md:text-xs'>
              LINKED FOR
            </span>

            {/* @SOOKMYUNGAPPS 텍스트
       text-[5cqw]: 타이틀과 비슷한 비율로 줄어듦
    */}
            <span className='text-[clamp(1rem,5cqw,1.5rem)] font-bold tracking-wider md:text-2xl'>
              @SOOKMYUNGAPPS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
