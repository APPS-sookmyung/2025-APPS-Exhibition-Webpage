import {useParams} from 'react-router-dom';
import ProjectDetailHero from '../components/project-detail/ProjectDetailHero';
import ProjectDetailBody from '../components/project-detail/ProjectDetailBody';
import MemberCard from '../components/MemberCard';
import ReferenceSection from '../components/ReferenceSection';
import FlowerIcon from '../assets/flower.svg?react';
import {projects, FALLBACK_PROJECT} from '../data/projects-detail-data';
import {projectInfo} from '../data/projectInfo';

export default function ProjectDetail() {
  const {slug} = useParams();
  const project = projects[slug] || FALLBACK_PROJECT;

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

  // 현재 프로젝트를 제외한 다른 프로젝트들 중에서 랜덤으로 3개 선택
  const randomReferences = Object.keys(projects)
    .filter((key) => key !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((key) => {
      const projectData = projectInfo.find((p) => p.slug === key);
      return {
        title: projects[key].title,
        slug: key,
        image: projectData?.thumbnail || '',
      };
    });

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

      {/* 팀원 카드 */}
      {project.members && project.members.length > 0 && (
        <section className='mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-[120px]'>
          <div className='member-section relative mt-[100px] max-w-[1200px]'>
            <div className='flex flex-col gap-4'>
              {project.members.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
            <div className='flower-decoration absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2'>
              <FlowerIcon className='h-20 w-20' />
            </div>
          </div>
        </section>
      )}

      {/* 다른 프로젝트 구경하기 */}
      <section className='mx-auto w-full max-w-[1440px] px-6 py-10 sm:px-10 lg:px-[120px]'>
        <div className='mt-[100px]'>
          <ReferenceSection references={randomReferences} />
        </div>
      </section>
    </div>
  );
}
