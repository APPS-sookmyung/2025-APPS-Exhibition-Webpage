import GridCard from '../cards/GridCard';
import {projectInfo as projects} from '../../data/projectInfo';
import ProjectViewerTitle from './ProjectViewerTitle';

export default function ProjectsGrid() {
  return (
    <div>
      {/* 팀 프로젝트 섹션 제목 */}
      <ProjectViewerTitle stackedView={false} titleText={'TEAM PROJECT'} />

      {/* 팀 프로젝트 */}
      <div className='flex justify-center'>
        <div className='flex w-[87%]'>
          {projects
            .filter((project) => project.type === 'team')
            .map((project, index) => (
              <GridCard key={project.id} project={project} index={index + 1} />
            ))}
        </div>
      </div>

      {/* 개인 프로젝트 섹션 제목 */}
      <ProjectViewerTitle stackedView={false} titleText={'ROOKIE PROJECT'} />

      {/* 개인 프로젝트 */}
      <div className='flex justify-center'>
        <div className='grid w-[87%] grid-cols-4'>
          {projects
            .filter((project) => project.type === 'rookie')
            .map((project, index) => (
              <GridCard key={project.id} project={project} index={index + 1} />
            ))}
        </div>
      </div>
    </div>
  );
}
