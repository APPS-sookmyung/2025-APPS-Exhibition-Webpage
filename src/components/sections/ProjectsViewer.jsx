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
          <ProjectViewerTitle
            stackedView={isStackedView}
            titleText={'TEAM PROJECT'}
          />
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
