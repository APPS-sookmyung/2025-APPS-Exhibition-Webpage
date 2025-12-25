import React from 'react';
import PropTypes from 'prop-types';
/**
 * MemberCard Component
 * * @param {Object} data - 개별 카드 데이터 (appsIntroData.js의 객체)
 * @param {Function} onClick - 클릭 시 실행될 함수 (부모에서 전달)
 * @param {Boolean} isActive - 현재 이 카드가 선택되었는지 여부 (선택 시 보라색 스타일 적용)
 */

const MemberCard = ({data, onClick, isActive}) => {
  const {type, name, subText, avatarImage, mainText, theme} = data;

  if (type === 'keyword' || type === 'action') {
    // 테마별 배경색 매핑
    const themeStyles = {
      yellow: 'bg-Yellow',
      green: 'bg-Green',
      blue: 'bg-Blue_medium',
      purple: 'bg-Primary',
    };

    const bgColor = themeStyles[theme] || 'bg-Yellow';

    return (
      <div
        className={`flex shrink-0 items-center justify-center rounded-xl px-6 py-6 text-lg font-normal text-white select-none ${bgColor} `}>
        {mainText}
      </div>
    );
  }

  // 일반 부원 카드
  // isActive가 true(클릭됨) -> 배경 보라색, 텍스트 흰색
  // isActive가 false(기본) -> 배경 흰색, 텍스트 검정/회색
  return (
    <button
      onClick={onClick}
      className={`relative flex shrink-0 items-center gap-4 rounded-xl py-3 pr-8 pl-3 text-left transition-all duration-300 ease-in-out ${
        isActive ? 'bg-Primary z-50 text-white' : 'text-100 z-0 bg-white'
      } `}>
      {/* 아바타 이미지 영역 */}
      <div className='h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white'>
        <img
          src={avatarImage}
          alt={`${name} profile`}
          className='h-full w-full object-cover'
        />
      </div>

      {/* 텍스트 정보 영역 */}
      <div className='flex flex-col justify-center'>
        <span
          className={`text-normal leading-tight font-semibold ${isActive ? 'text-white' : 'text-100'}`}>
          {name}
        </span>
        <span
          className={`mt-0.5 text-sm font-medium ${isActive ? 'text-white' : 'text-80/50'}`}>
          {subText}
        </span>
      </div>
    </button>
  );
};
MemberCard.propTypes = {
  onClick: PropTypes.func, // 클릭 핸들러는 함수
  isActive: PropTypes.bool, // 활성화 상태는 불리언
  data: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string,
    subText: PropTypes.string,
    avatarImage: PropTypes.string, // 이미지 경로 (import된 파일 혹은 URL)
    mainText: PropTypes.string,
    theme: PropTypes.string,
  }).isRequired, // data 객체 자체는 필수
};

// 선택 사항: props가 넘어오지 않았을 때의 기본값 설정
MemberCard.defaultProps = {
  onClick: () => {},
  isActive: false,
};
export default MemberCard;
