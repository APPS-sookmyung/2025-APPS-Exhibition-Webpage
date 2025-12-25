import ProjectViewerTitle from './ProjectViewerTitle';
import ViewerButton from '../buttons/ViewerButton';
import ProjectsStacked from './ProjectsStacked';
import ProjectsGrid from './ProjectsGrid';
import {useState} from 'react';

const ProjectsViewer = () => {
  const [isStackedView, setIsStackedView] = useState(true);

  return (
    <div className='bg-primary py-11.25'>
      <div className='relative'>
        {/* 제목 */}
        <div className='md:pb-5 lg:pb-15.5'>
          <ProjectViewerTitle isMainTitle={true} titleText={'PROJECTS'} />
          <p className='justify-start text-center text-sm leading-5 tracking-[-0.025em] text-[#C8D6F9] md:text-base md:leading-7 md:font-semibold lg:text-2xl'>
            APPS 부원들의 개성이 드러나는 다양한 프로젝트를 소개합니다.
          </p>
        </div>

        {/* 스와이프 버튼 */}
        <div className='flex scale-40 justify-self-center md:absolute md:top-[12%] md:right-10 md:scale-80 lg:right-20 lg:scale-100'>
          <ViewerButton
            stackedView={isStackedView}
            onChangeView={setIsStackedView}
          />
        </div>
      </div>

      {/* 프로젝트 */}
      <div>{isStackedView ? <ProjectsStacked /> : <ProjectsGrid />}</div>
    </div>
  );
};

export default ProjectsViewer;
