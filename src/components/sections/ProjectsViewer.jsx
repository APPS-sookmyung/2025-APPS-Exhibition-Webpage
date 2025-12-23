import ProjectViewerTitle from './ProjectViewerTitle';
import ViewerButton from '../buttons/ViewerButton';
import ProjectsStacked from './ProjectsStacked';
import ProjectsGrid from './ProjectsGrid';
import {useState} from 'react';

const ProjectsViewer = () => {
  const [isStackedView, setIsStackedView] = useState(true);

  return (
    <div className='bg-[#3936E5] py-11.25'>
      <div className='relative'>
        {/* 제목 */}
        <div className='pb-15.5'>
          <ProjectViewerTitle isMainTitle={true} titleText={'PROJECTS'} />
          <p className='justify-start text-center text-2xl leading-7 font-semibold tracking-[-0.025em] text-[#C8D6F9]'>
            APPS 부원들의 개성이 드러나는 다양한 프로젝트를 소개합니다.
          </p>
        </div>

        {/* 스와이프 버튼 */}
        <div className='absolute top-11 right-30'>
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
