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
      <div className='relative overflow-hidden md:mb-8 lg:mb-20'>
        {/* 배경 텍스트 #4B48F5 */}
        <div className='pointer-events-none absolute inset-0 z-0 flex items-center justify-center'>
          <p className='pb-4 leading-none font-bold whitespace-nowrap text-white opacity-10 select-none sm:text-[65px] md:text-[80px] lg:text-[150px]'>
            PROJECTS ARCHIVE
          </p>
        </div>

        {/* 콘텐츠 */}
        <div className='relative z-10 mx-5 flex items-center justify-between md:mx-18 lg:mx-28'>
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
        <div className='horizontal-scroll flex w-[80%] items-center overflow-x-auto md:h-25 md:w-[70%] lg:w-[60%]'>
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
