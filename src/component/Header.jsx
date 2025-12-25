import AppsIcon from './icons/AppsIcon';
import TreeIcon from './icons/TreeIcon';

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between bg-[#3D6EEE] px-21 py-3'>
      <div className='itmes-center flex gap-3'>
        <AppsIcon />
        <span className='font-pretendard text-[20px] font-semibold tracking-[-0.025rem] text-[#FFFFFF]'>
          APPS
        </span>
      </div>
      <div className='absolute left-1/2 -translate-x-[70%] text-[20px] font-semibold tracking-[-0.025rem] text-[#99B5FD]'>
        <span>2025 ONLINE EXHIBITION</span>
      </div>
      <div className='font-pretendard flex items-center gap-3.5 font-semibold text-[#FFFFFF]'>
        <button className='rounded-full border border-[#FFFFFF] px-5 py-1.5'>
          링크 공유하기
        </button>
        <button className='rounded-full border border-[#FFFFFF] px-5 py-1.5'>
          0기 알림 신청하기
        </button>
        <button className='flex items-center gap-2 rounded-full border border-[#FFFFFF] px-5 py-1.5'>
          <span>Linktree</span>
          <TreeIcon />
        </button>
      </div>
    </header>
  );
}
