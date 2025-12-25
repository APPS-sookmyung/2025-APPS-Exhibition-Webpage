import Share from '../assets/Share.svg?react';
import Exit from '../assets/Exit.svg?react';
import Github from '../assets/Github.svg?react';
import Link from '../assets/Link.svg?react';
import {useMemo} from 'react';
import PropTypes from 'prop-types';

export default function ProjectDetailHero({project, links = []}) {
  const chips = useMemo(() => {
    const typeChip =
      project.projectType === 'TEAM' ? 'TEAM PROJECT' : 'INDIVIDUAL PROJECT';
    const gens = Array.isArray(project.generation)
      ? project.generation.map((n) => `${n}기`)
      : [];

    return [typeChip, ...gens];
  }, [project.projectType, project.generation]);
  return (
    <section className='bg-Blue_medium w-full overflow-hidden rounded-b-[60px]'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-6 py-[41px] sm:px-10 lg:px-[120px]'>
        <div className='flex justify-end gap-2.5'>
          <button
            type='button'
            aria-label='Share'
            className='inline-flex h-10 w-10 items-center justify-center'>
            <Share className='h-10 w-10' />
          </button>
          <button
            type='button'
            aria-label='Exit'
            className='inline-flex h-10 w-10 items-center justify-center'>
            <Exit className='h-10 w-10' />
          </button>
        </div>

        {/* 썸네일 placeholder */}
        <div className='flex w-full max-w-[1200px] items-center justify-center rounded-[28px] bg-white/20'>
          <div className='aspect-[16/9] w-full'>
            <div className='flex h-full w-full items-center justify-center'>
              <span className='text-sm text-white/60'>프로젝트 썸네일</span>
            </div>
          </div>
        </div>

        {/* 텍스트 영역 */}
        <div className='flex flex-col gap-7'>
          <div className='flex flex-wrap gap-2.5'>
            {chips.map((text) => (
              <span
                key={text}
                className='bg-Blue_light text-Blue_medium inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold'>
                {text}
              </span>
            ))}
          </div>
          <div className='flex justify-between'>
            <p className='text-[48px] leading-[1.1] font-bold text-white sm:text-[60px]'>
              {project.title}
            </p>
            <div className='flex flex-wrap gap-4'>
              {links.map((item) => {
                const isGithub =
                  item.type === 'CLIENT' || item.type === 'SERVER';
                const Icon = isGithub ? Github : Link;
                const isEnabled = Boolean(item.url);

                return (
                  <a
                    key={item.type}
                    href={item.url || '#'}
                    target={isEnabled ? '_blank' : undefined}
                    rel={isEnabled ? 'noreferrer' : undefined}
                    aria-disabled={!isEnabled}
                    onClick={(e) => {
                      if (!isEnabled) e.preventDefault();
                    }}
                    className={`flex flex-col items-center gap-1 ${
                      isEnabled ? '' : 'cursor-not-allowed'
                    }`}
                    title={isEnabled ? item.url : '링크가 아직 없습니다'}>
                    <Icon className='square-[50px]' />
                    <p className='text-[14px] font-medium text-white'>
                      {item.type}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>

          <p className='text-base font-semibold text-white sm:text-lg'>
            {project.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

ProjectDetailHero.propTypes = {
  project: PropTypes.shape({
    projectType: PropTypes.oneOf(['TEAM', 'INDIVIDUAL']),
    generation: PropTypes.arrayOf(PropTypes.number),
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['CLIENT', 'SERVER', 'LINK']),
      url: PropTypes.string,
    })
  ),
};
