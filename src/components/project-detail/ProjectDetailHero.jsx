import Share from '../../assets/project-detail/share.svg?react';
import Exit from '../../assets/project-detail/exit.svg?react';
import Github from '../../assets/project-detail/github.svg?react';
import Link from '../../assets/project-detail/link.svg?react';
import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ProjectDetailHero({project, links = []}) {
  const navigate = useNavigate();

  const chips = useMemo(() => {
    const typeChip =
      project.projectType === 'TEAM' ? 'TEAM PROJECT' : 'INDIVIDUAL PROJECT';
    const gens = Array.isArray(project.generation)
      ? project.generation.map((n) => `${n}기`)
      : [];
    const tags = Array.isArray(project.tags) ? project.tags : [];

    return [typeChip, ...gens, ...tags];
  }, [project.projectType, project.generation, project.tags]);

  const handleShare = async () => {
    const shareData = {
      title: project.title,
      text: project.subtitle || project.content,
      url: window.location.href,
    };

    try {
      // Web Share API 지원 여부 확인
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Web Share API를 지원하지 않으면 클립보드에 복사
        await navigator.clipboard.writeText(window.location.href);
        alert('링크가 클립보드에 복사되었습니다!');
      }
    } catch (err) {
      // 사용자가 공유를 취소하거나 에러 발생 시
      if (err.name !== 'AbortError') {
        console.error('공유 실패:', err);
        // 클립보드 복사를 재시도
        try {
          await navigator.clipboard.writeText(window.location.href);
          alert('링크가 클립보드에 복사되었습니다!');
        } catch (clipboardErr) {
          console.error('클립보드 복사 실패:', clipboardErr);
          alert('공유에 실패했습니다.');
        }
      }
    }
  };

  return (
    <section className='bg-primary w-full overflow-hidden rounded-b-[60px]'>
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-[60px] px-6 py-[41px] sm:px-10 lg:px-[120px]'>
        <div className='flex justify-end gap-2.5'>
          <button
            type='button'
            aria-label='Share'
            onClick={handleShare}
            className='inline-flex h-10 w-10 cursor-pointer items-center justify-center'>
            <Share className='h-10 w-10' />
          </button>
          <button
            type='button'
            aria-label='Exit'
            onClick={() => navigate('/')}
            className='inline-flex h-10 w-10 cursor-pointer items-center justify-center'>
            <Exit className='h-10 w-10' />
          </button>
        </div>

        {/* 썸네일 */}
        <div className='w-full max-w-[1200px] overflow-hidden rounded-[28px] bg-white/20'>
          <div className='aspect-[16/9] w-full'>
            {project.gif ? (
              <img
                src={project.gif}
                alt={`${project.title} thumbnail`}
                className='h-full w-full object-cover'
              />
            ) : (
              <div className='flex h-full w-full items-center justify-center'>
                <span className='text-sm text-white/60'>프로젝트 썸네일</span>
              </div>
            )}
          </div>
        </div>

        {/* 텍스트 영역 */}
        <div className='flex flex-col gap-7'>
          <div className='flex flex-wrap gap-2.5'>
            {chips.map((text) => (
              <span
                key={text}
                className='bg-Blue_light text-primary-light inline-flex items-center rounded-full px-4 py-1 text-sm font-semibold'>
                {text}
              </span>
            ))}
          </div>
          <div className='flex items-center justify-between'>
            <p className='text-[36px] leading-[1.2] font-bold text-white sm:text-[48px] lg:text-[60px]'>
              {project.title}
            </p>
            <div className='flex flex-shrink-0 flex-wrap gap-2 sm:gap-4'>
              {links.map((item) => {
                const isGithub =
                  item.type === 'CLIENT' ||
                  item.type === 'SERVER' ||
                  item.type === 'SERVER & CLIENT';
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
                    <Icon className='square-[40px] sm:square-[50px]' />
                    <p className='text-[12px] font-medium text-white sm:text-[14px]'>
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
    gif: PropTypes.string,
    content: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['CLIENT', 'SERVER', 'SERVER & CLIENT', 'WEB']),
      url: PropTypes.string,
    })
  ),
};
