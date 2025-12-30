import {useState, useEffect, useRef} from 'react';
import FaviconCard from '../cards/FaviconCard';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';
import StackedCardDeck from './StackedCardDeck';
import {projectInfo as projects} from '../../data/projectInfo';

const ProjectsStacked = () => {
  const scrollRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const saved = sessionStorage.getItem('projectStackIndex');
    return saved ? parseInt(saved, 10) : 0;
  });

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  // selectedIndex 변경 시 sessionStorage에 저장
  useEffect(() => {
    sessionStorage.setItem('projectStackIndex', selectedIndex);
  }, [selectedIndex]);

  // 선택된 카드에 맞춰 파비콘 스크롤
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const faviconElements = container.querySelectorAll('[data-favicon]');
    const selectedFavicon = faviconElements[selectedIndex];

    if (selectedFavicon) {
      selectedFavicon.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedIndex]);

  // 키 입력으로 카드 넘기기
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  // 가로 스크롤 추가
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY, // 가로 위치 + 세로 이동량
        behavior: 'auto',
      });
    };
    el.addEventListener('wheel', onWheel, {passive: false});

    return () => {
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  return (
    <div>
      {/* 카드 섹션 */}
      <div className='relative overflow-hidden md:h-auto lg:mb-20'>
        {/* 배경 텍스트 #4B48F5 */}
        <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center'>
          <p className='pb-4 text-[60px] leading-none font-bold whitespace-nowrap text-white/10 select-none md:text-[80px] lg:text-[150px]'>
            PROJECTS ARCHIVE
          </p>
        </div>

        {/* 콘텐츠 */}
        <div className='relative z-10 mx-5 flex h-75 items-center justify-between md:mx-18 md:h-auto lg:mx-28'>
          <button
            className='z-50 cursor-pointer text-white'
            onClick={handlePrev}>
            <SlArrowLeft className='text-3xl md:text-6xl' />
          </button>
          <StackedCardDeck projects={projects} index={selectedIndex} />
          <button
            className='z-50 cursor-pointer text-white'
            onClick={handleNext}>
            <SlArrowRight className='text-3xl md:text-6xl' />
          </button>
        </div>
      </div>

      {/* 파비콘 섹션 */}
      <div className='flex w-full justify-center overflow-hidden'>
        <div
          ref={scrollRef}
          className='horizontal-scroll flex w-[80%] items-center overflow-x-auto md:h-25 md:w-[70%] lg:w-[60%]'>
          <div className='flex flex-nowrap items-center'>
            {projects.map((project, index) => (
              <FaviconCard
                key={project.id}
                projectInfo={project}
                isSelected={selectedIndex === index}
                onSelect={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsStacked;
