import PropTypes from 'prop-types';
import BackendIcon from '../assets/backend.svg?react';
import FrontendIcon from '../assets/frontend.svg?react';
import DesignerIcon from '../assets/designer.svg?react';
import PMIcon from '../assets/pm.svg?react';

const ROLE_ICONS = {
  백엔드: BackendIcon,
  프론트엔드: FrontendIcon,
  디자이너: DesignerIcon,
  PM: PMIcon,
};

export default function MemberCard({member}) {
  return (
    <div
      className='group flex gap-4 rounded-[20px] bg-gray_light px-6 py-4 shadow-none transition-all duration-300 hover:bg-Primary hover:shadow-[inset_0px_0px_6px_1px_rgba(0,0,0,0.25)] sm:gap-10 sm:rounded-[30px] sm:px-[35px] sm:py-[31px]'>
      {/* 프로필 이미지 */}
      <div className='h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-white sm:h-[140px] sm:w-[140px]'>
        {member.profileImage ? (
          <img
            src={member.profileImage}
            alt={member.name}
            className='h-full w-full object-cover'
          />
        ) : (
          <div className='flex h-full w-full items-center justify-center bg-80'>
            <span className='text-sm text-white'>{member.name[0]}</span>
          </div>
        )}
      </div>

      {/* 내용 영역 */}
      <div className='flex flex-1 flex-col gap-2'>
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className='text-lg font-semibold text-100 transition-colors group-hover:text-white sm:text-xl'>
            {member.name}
          </h3>
          {(() => {
            const roles = Array.isArray(member.role)
              ? member.role
              : [member.role];
            return roles.map(
              (role, index) =>
                ROLE_ICONS[role] && (
                  <div key={index} className='role-icon-wrapper'>
                    {(() => {
                      const Icon = ROLE_ICONS[role];
                      return <Icon className='h-6 w-auto' />;
                    })()}
                  </div>
                )
            );
          })()}
        </div>
        <p className='text-sm leading-[140%] text-80 transition-colors group-hover:text-white sm:text-base'>
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
