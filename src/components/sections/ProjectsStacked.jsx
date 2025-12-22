import {useState} from 'react';
import PaviconCard from '../cards/PaviconCard';
import {SlArrowLeft, SlArrowRight} from 'react-icons/sl';
import StackedCardDeck from './StackedCardDeck';
import {projectInfo as projects} from '../../data/projectInfo';

const ProjectsStacked = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div>
      {/* 카드 섹션 */}
      <div className='relative mb-20 overflow-hidden'>
        {/* 배경 텍스트 #4B48F5 */}
        <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center'>
          <p className='pb-4 text-[150px] leading-none font-bold whitespace-nowrap text-white opacity-10 select-none'>
            PROJECTS ARCHIVE
          </p>
        </div>

        {/* 콘텐츠 */}
        <div className='relative z-10 mx-28 flex items-center justify-between'>
          <button
            className='z-50 cursor-pointer text-6xl text-white'
            onClick={handlePrev}>
            <SlArrowLeft />
          </button>
          <StackedCardDeck projects={projects} index={selectedIndex} />
          <button
            className='z-50 cursor-pointer text-6xl text-white'
            onClick={handleNext}>
            <SlArrowRight />
          </button>
        </div>
      </div>

      {/* 파비콘 섹션 */}
      <div className='flex w-full justify-center overflow-hidden'>
        <div className='horizontal-scroll flex h-25 w-[60%] items-center overflow-x-auto'>
          <div className='flex flex-nowrap items-center'>
            {projects.map((project, index) => (
              <PaviconCard
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
