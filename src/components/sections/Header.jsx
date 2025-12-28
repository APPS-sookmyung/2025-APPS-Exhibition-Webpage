import {useState} from 'react';
import AppsIcon from '../../assets/header/appsIcon.svg';
import TreeIcon from '../../assets/header/tree.svg';

export default function Header() {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'APPS 2025 온라인 전시회',
          text: '숙명여대 프로그래밍 동아리 APPS의 2025 전시회에 초대합니다!',
          url: url,
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('공유 실패:', err);
        }
      }
    } else {
      // Web Share API 미지원시 메뉴 표시
      setShowShareMenu(!showShareMenu);
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
        setShowShareMenu(false);
      }, 2000);
    } catch (err) {
      console.error('링크 복사 실패:', err);
    }
  };

  const LINKTREE_URL = 'https://linktr.ee/sookmyung_apps';

  return (
    <header className='flex w-full items-center justify-between bg-[#3D6EEE]/20 px-6 py-3 md:px-10 lg:px-21'>
      <div className='flex items-center gap-2 md:gap-3'>
        <img src={AppsIcon} className='scale-75 md:scale-100' />
        <span className='font-pretendard text-lg font-medium tracking-[-0.025rem] text-white md:text-[20px] md:font-semibold'>
          APPS
        </span>
      </div>
      <div className='absolute left-1/2 hidden -translate-x-[70%] text-[20px] font-semibold tracking-[-0.025rem] text-[#99B5FD] lg:block'>
        <span>2025 ONLINE EXHIBITION</span>
      </div>
      <div className='font-pretendard flex items-center gap-2 font-medium text-[#FFFFFF] md:gap-3.5 md:font-semibold'>
        <div className='relative'>
          <button
            onClick={handleShare}
            className='rounded-full border border-white px-3 py-1 text-xs transition-colors hover:bg-white/10 md:px-5 md:py-1.5 md:text-sm'>
            {copySuccess ? '링크 복사됨!' : '링크 공유하기'}
          </button>
          {showShareMenu && (
            <div className='absolute top-full right-0 z-50 mt-2 w-40 overflow-hidden rounded-lg bg-white shadow-lg'>
              <button
                onClick={handleCopyLink}
                className='w-full px-4 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-100'>
                링크 복사
              </button>
            </div>
          )}
        </div>
        <a
          href='https://forms.gle/3TsoVPNNABC3Zc5UA'
          target='_blank'
          rel='noopener noreferrer'
          className='rounded-full border border-white px-3 py-1 text-xs transition-colors hover:bg-white/10 md:px-5 md:py-1.5 md:text-sm'>
          13기 알림 신청하기
        </a>
        <a
          href={LINKTREE_URL}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-1 rounded-full border border-white px-3 py-1 text-xs transition-colors hover:bg-white/10 md:gap-2 md:px-5 md:py-1.5 md:text-sm'>
          <span>Linktree</span>
          <img src={TreeIcon} className='scale-75 md:scale-100' />
        </a>
      </div>
    </header>
  );
}
