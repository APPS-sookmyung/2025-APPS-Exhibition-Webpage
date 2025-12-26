import {useState} from 'react';
import PropTypes from 'prop-types';

const ROLE_CHIP_LABELS = {
  백엔드: 'BACK-END',
  프론트엔드: 'FRONT-END',
  디자이너: 'DESIGNER',
  PM: 'PM',
};

const ROLE_CHIP_BASE_CLASS =
  'inline-flex items-center justify-center gap-2 rounded-[100px] bg-[#2E61E0] px-[19px] py-[5px] text-[11px] font-semibold tracking-[0.08em] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#2E61E0]';

export default function MemberCard({member}) {
  const [hasImageError, setHasImageError] = useState(false);
  const imageSrc =
    typeof member.profileImage === 'string' ? member.profileImage.trim() : '';

  return (
    <div className='group bg-gray_light hover:bg-secondary flex gap-4 rounded-[20px] px-6 py-4 shadow-none transition-all duration-300 hover:shadow-[inset_0px_0px_6px_1px_rgba(0,0,0,0.25)] sm:gap-10 sm:rounded-[30px] sm:px-[35px] sm:py-[31px]'>
      {/* 프로필 이미지 */}
      <div className='flex h-[140px] w-[140px] flex-shrink-0 items-center justify-center overflow-hidden rounded-[100px] bg-[#EEE]'>
        {imageSrc && !hasImageError ? (
          <img
            src={imageSrc}
            alt={member.name}
            className='h-full w-full object-cover'
            onError={() => setHasImageError(true)}
          />
        ) : (
          <div className='bg-80 flex h-full w-full items-center justify-center'>
            <span className='text-sm text-white'>{member.name[0]}</span>
          </div>
        )}
      </div>

      {/* 내용 영역 */}
      <div className='flex flex-1 flex-col gap-4'>
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className='text-100 text-lg font-semibold transition-colors group-hover:text-white sm:text-xl'>
            {member.name}
          </h3>
          {(() => {
            const roles = Array.isArray(member.role)
              ? member.role
              : [member.role];
            return roles.map((role, index) => {
              const label = ROLE_CHIP_LABELS[role] || role;
              return (
                <span key={`${role}-${index}`} className={ROLE_CHIP_BASE_CLASS}>
                  {label}
                </span>
              );
            });
          })()}
        </div>
        <p className='text-80 text-sm leading-[140%] transition-colors group-hover:text-white sm:text-base'>
          {member.description}
        </p>
      </div>
    </div>
  );
}

MemberCard.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    description: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }).isRequired,
};
