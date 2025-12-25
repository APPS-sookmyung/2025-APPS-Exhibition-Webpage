import PropTypes from 'prop-types';

const ROLE_STYLES = {
  프론트엔드: 'bg-Blue_medium text-white',
  백엔드: 'bg-purple text-white',
};

export default function MemberCard({member}) {
  return (
    <div
      className='group flex gap-4 rounded-[20px] bg-[#D3D9DF] p-6 shadow-none transition-all duration-300 hover:bg-[#D060F8] hover:shadow-[inset_0px_0px_6px_1px_rgba(0,0,0,0.25)] sm:gap-6 sm:rounded-[30px] sm:p-[35px]'>
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
      <div className='flex flex-1 flex-col gap-2 sm:gap-4'>
        <div className='flex flex-wrap items-center gap-2'>
          <h3 className='text-lg font-semibold text-100 transition-colors group-hover:text-white sm:text-xl'>
            {member.name}
          </h3>
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors sm:px-[19px] sm:py-[5px] sm:text-sm ${
              ROLE_STYLES[member.role] || ROLE_STYLES['프론트엔드']
            }`}>
            {member.role}
          </span>
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
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    profileImage: PropTypes.string,
  }).isRequired,
};
