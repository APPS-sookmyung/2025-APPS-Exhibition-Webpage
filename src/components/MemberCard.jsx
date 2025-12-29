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

  // 이름과 역할 칩을 묶은 블록
  const NameRoleBlock = () => (
    <div className='flex flex-wrap items-center gap-2'>
      <h3 className='text-100 text-lg font-semibold transition-colors group-hover:text-white sm:text-xl'>
        {member.name}
      </h3>
      {(() => {
        const roles = Array.isArray(member.role) ? member.role : [member.role];
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
  );

  // 프로필 이미지 블록
  const ProfileImage = () => (
    <div className='flex h-[100px] w-[100px] flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EEE] sm:h-[140px] sm:w-[140px]'>
      {imageSrc && !hasImageError ? (
        <img
          src={imageSrc}
          alt={member.name}
          loading='lazy'
          decoding='async'
          className='h-full w-full object-cover'
          onError={() => setHasImageError(true)}
        />
      ) : (
        <div className='bg-80 flex h-full w-full items-center justify-center'>
          <span className='text-sm text-white'>{member.name[0]}</span>
        </div>
      )}
    </div>
  );

  return (
    <div className='group bg-gray_light hover:bg-secondary rounded-[20px] p-4 shadow-none transition-all duration-300 sm:rounded-[30px] sm:p-8'>
      {/* --- Mobile Layout (sm 미만) --- */}
      <div className='sm:hidden'>
        <div className='flex items-center gap-4'>
          <ProfileImage />
          <NameRoleBlock />
        </div>
        <p className='text-80 mt-4 text-sm leading-[140%] transition-colors group-hover:text-white'>
          {member.description}
        </p>
      </div>

      {/* --- Desktop Layout (sm 이상) --- */}
      <div className='hidden sm:flex sm:gap-10'>
        <ProfileImage />
        <div className='flex flex-1 flex-col justify-center gap-4'>
          <NameRoleBlock />
          <p className='text-80 text-sm leading-[140%] transition-colors group-hover:text-white sm:text-base'>
            {member.description}
          </p>
        </div>
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
