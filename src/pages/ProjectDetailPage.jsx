import PropTypes from 'prop-types';
import ProjectDetailHero from '../components/ProjectDetailHero';
import ProjectDetailBody from '../components/ProjectDetailBody';

// JSON이 아직 없어서 화면이 깨지지 않도록 기본값으로 설정해둠.
const FALLBACK_PROJECT = {
  projectType: 'TEAM', // 'TEAM' | 'INDIVIDUAL'
  generation: [], // ex) [13, 14]
  title: '프로젝트 제목',
  subtitle: '프로젝트 한 줄 소개',
  content: '프로젝트 상세 설명이 들어갈 영역입니다.',
  feature: '기능 설명이 들어갈 영역입니다.', // string | string[]
  techStack: ['React', 'Spring'], // string[]
  links: [{type: 'CLIENT', url: ''}], // ex) [{ type: 'CLIENT', url: 'https://github.com/...' }]
};

export default function ProjectDetail({project: projectProp}) {
  const project = projectProp ?? FALLBACK_PROJECT;

  const features = Array.isArray(project.feature)
    ? project.feature
    : project.feature
      ? [project.feature]
      : [];
  const techStack = Array.isArray(project.techStack)
    ? project.techStack.map((tech) => ({
        name: tech,
        icon: tech.toLowerCase(),
      }))
    : [];
  const links = Array.isArray(project.links) ? project.links : [];

  return (
    <div className='w-full'>
      {/* HERO */}
      <ProjectDetailHero project={project} links={links} />
      {/* BODY */}
      <ProjectDetailBody
        content={project.content}
        features={features}
        techStack={techStack}
      />
      {/* 지원이가 붙여넣을 컴포넌트 영역 */}
    </div>
  );
}

ProjectDetail.propTypes = {
  project: PropTypes.object,
};
