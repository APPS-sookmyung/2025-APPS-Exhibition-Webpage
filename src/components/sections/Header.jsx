import AppsIcon from '../../assets/header/appsIcon.svg';
import TreeIcon from '../../assets/header/tree.svg';

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between bg-[#3D6EEE]/20 px-6 py-3 md:px-10 lg:px-21'>
      <div className='itmes-center flex gap-2 md:gap-3'>
        <img src={AppsIcon} className='scale-75 md:scale-100' />
        <span className='font-pretendard text-lg font-medium tracking-[-0.025rem] text-white md:text-[20px] md:font-semibold'>
          APPS
        </span>
      </div>
      <div className='absolute left-1/2 hidden -translate-x-[70%] text-[20px] font-semibold tracking-[-0.025rem] text-[#99B5FD] lg:block'>
        <span>2025 ONLINE EXHIBITION</span>
      </div>
      <div className='font-pretendard flex items-center gap-2 font-medium text-[#FFFFFF] md:gap-3.5 md:font-semibold'>
        <button className='hidden rounded-full border border-white px-3 py-1 text-xs md:block md:px-5 md:py-1.5 md:text-sm'>
          링크 공유하기
        </button>
        <button className='rounded-full border border-white px-3 py-1 text-xs md:px-5 md:py-1.5 md:text-sm'>
          0기 알림 신청하기
        </button>
        <button className='flex items-center gap-1 rounded-full border border-white px-3 py-1 text-xs md:gap-2 md:px-5 md:py-1.5 md:text-sm'>
          <span>Linktree</span>
          <img src={TreeIcon} className='scale-75 md:scale-100' />
        </button>
      </div>
    </header>
  );
}
