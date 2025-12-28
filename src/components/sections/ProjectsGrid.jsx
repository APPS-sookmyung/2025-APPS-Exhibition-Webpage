import GridCard from '../cards/GridCard';
import {projectInfo as projects} from '../../data/projectInfo';
import ProjectViewerTitle from './ProjectViewerTitle';

export default function ProjectsGrid() {
  const responsiveClass =
    'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[95%] md:w-[87%] gap-4 place-items-center ';

  return (
    <div>
      {/* 팀 프로젝트 섹션 제목 */}
      <ProjectViewerTitle stackedView={false} titleText={'TEAM PROJECT'} />

      {/* 팀 프로젝트 */}
      <div className='flex h-auto min-h-0 justify-center py-3 md:py-10'>
        <div className={`${responsiveClass}`}>
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
      <div className='flex h-auto min-h-0 justify-center py-3 md:py-10'>
        <div className={`${responsiveClass}`}>
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
