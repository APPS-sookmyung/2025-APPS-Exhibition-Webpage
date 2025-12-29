import {useState, useEffect, useMemo} from 'react';
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
  const baseProject = projects[slug] ?? FALLBACK_PROJECT;

  // lg breakpoint(1024px)를 기준으로 3개 또는 2개를 선택할지 결정
  const [numToSelect, setNumToSelect] = useState(
    window.innerWidth >= 1024 ? 3 : 2
  );

  useEffect(() => {
    const handleResize = () => {
      setNumToSelect(window.innerWidth >= 1024 ? 3 : 2);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const thumbnailMap = useMemo(() => {
    return projectInfo.reduce((acc, proj) => {
      acc[proj.slug] = proj.thumbnail;
      return acc;
    }, {});
  }, []);

  const project = useMemo(() => {
    const gif = baseProject?.gif || thumbnailMap[slug];
    return {
      ...baseProject,
      gif,
    };
  }, [baseProject, thumbnailMap, slug]);

  const features = useMemo(() => {
    return Array.isArray(project.feature)
      ? project.feature
      : project.feature
        ? [project.feature]
        : [];
  }, [project.feature]);

  const techStack = useMemo(() => {
    return Array.isArray(project.techStack)
      ? project.techStack.map((tech) => ({
          name: tech,
          icon: String(tech).toLowerCase(),
        }))
      : [];
  }, [project.techStack]);

  const links = useMemo(() => {
    return Array.isArray(project.links) ? project.links : [];
  }, [project.links]);

  const randomReferences = useMemo(() => {
    return Object.keys(projects)
      .filter((key) => key !== slug)
      .sort(() => Math.random() - 0.5)
      .slice(0, numToSelect)
      .map((key) => ({
        title: projects[key].title,
        slug: key,
        image: thumbnailMap[key],
      }));
  }, [slug, numToSelect, thumbnailMap]);

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
