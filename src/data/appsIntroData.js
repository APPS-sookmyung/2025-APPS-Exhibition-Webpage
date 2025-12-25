/**
 * type: 카드의 타입 ('member' | 'keyword' | 'action')
 * - member: 일반 부원 프로필
 * - keyword: TEAMWORK, BE, FE 등 텍스트 강조 카드
 * - action: JOIN US 등 버튼형 카드
 *
 * * [Member 전용 필드]
 * name: 이름
 * subText: 기수 및 전공
 * avatarImage: 이미지 경로
 * message: 카드 클릭 시 말풍선에 띄울 상세 후기 텍스트
 * * [Keyword/Action 전용 필드]
 * mainText: 카드 중앙에 표시될 큰 텍스트 (예: TEAMWORK)
 * theme: 색상 테마 ('yellow' | 'green' | 'blue' | 'purple')
 */

import MOCK_AVATAR from '../assets/members/tempImage.svg';

// 첫 번째 줄 데이터
export const ROW_1_DATA = [
  {
    id: 'r1-1',
    type: 'member',
    name: '권유진',
    subText: '11기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message:
      'APPS에서는 서로의 지식을 공유하며 함께 성장하는 문화를 배울 수 있었습니다.',
  },
  {
    id: 'r1-2',
    type: 'keyword',
    mainText: 'TEAMWORK',
    theme: 'yellow',
  },
  {
    id: 'r1-3',
    type: 'member',
    name: '김지민',
    subText: '11기 · Data Science 23',
    avatarImage: MOCK_AVATAR,
    message: '다양한 스택을 가진 부원들과 협업하며 시야를 넓힐 수 있었어요.',
  },
  {
    id: 'r1-4',
    type: 'member',
    name: '방지희',
    subText: '11기 · Computer Science 24',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },

  {
    id: 'r1-5',
    type: 'member',
    name: '하지민',
    subText: '11기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },
  {
    id: 'r1-6',
    type: 'member',
    name: '윤지원',
    subText: '11기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },
  {
    id: 'r1-7',
    type: 'member',
    name: '정지은',
    subText: '12기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },
];

// 두 번째 줄 데이터
export const ROW_2_DATA = [
  {
    id: 'r2-1',
    type: 'member',
    name: '백수민',
    subText: '11기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: '현업에서 사용하는 협업 툴 사용법을 미리 익힐 수 있어 좋았습니다.',
  },
  {
    id: 'r2-2',
    type: 'member',
    name: '김도연',
    subText: '12기 · Computer Science 24',
    avatarImage: MOCK_AVATAR,
    message:
      '프로젝트 진행 방식과 유용한 백엔드 툴, AWS 서비스들을 배우고, DevTalk 세미나를 통해 다양한 개발 경험과 팁을 얻을 수 있었어요.',
  },
  {
    id: 'r2-3',
    type: 'keyword',
    mainText: 'BE',
    theme: 'green',
  },
  {
    id: 'r2-4',
    type: 'member',
    name: '김영교',
    subText: '12기 · Information Security 24',
    avatarImage: MOCK_AVATAR,
    message:
      '선배들의 멘토링 덕분에 백엔드 아키텍처를 깊이 있게 이해하게 되었습니다.',
  },
  {
    id: 'r2-5',
    type: 'member',
    name: '신정은',
    subText: '11기 · Computer Science 24',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },
  {
    id: 'r2-6',
    type: 'member',
    name: '문예선',
    subText: '12기 · Computer Science 25',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },
  {
    id: 'r2-7',
    type: 'member',
    name: '임유진',
    subText: '12기 · Computer Science 25',
    avatarImage: MOCK_AVATAR,
    message: '개발뿐만 아니라 기획, 디자인 팀원들과 소통하는 법을 익혔습니다.',
  },
];

// 세 번째 줄 데이터
export const ROW_3_DATA = [
  {
    id: 'r3-action',
    type: 'action',
    mainText: 'JOIN US',
    theme: 'purple',
  },
  {
    id: 'r3-1',
    type: 'member',
    name: '배송이',
    subText: '12기 · Visual Design 24',
    avatarImage: MOCK_AVATAR,
    message:
      '개발자와 소통하며 디자인을 코드로 구현하는 과정을 이해하게 되었습니다.',
  },
  {
    id: 'r3-2',
    type: 'keyword',
    mainText: 'FE',
    theme: 'blue',
  },
  {
    id: 'r3-3',
    type: 'member',
    name: '엄다현',
    subText: '12기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: 'React와 Next.js를 활용해 성능 최적화를 경험해볼 수 있었습니다.',
  },
  {
    id: 'r3-4',
    type: 'member',
    name: '우채아',
    subText: '12기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: 'React와 Next.js를 활용해 성능 최적화를 경험해볼 수 있었습니다.',
  },
  {
    id: 'r3-5',
    type: 'member',
    name: '윤소영',
    subText: '12기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: 'React와 Next.js를 활용해 성능 최적화를 경험해볼 수 있었습니다.',
  },
  {
    id: 'r3-6',
    type: 'member',
    name: '이유나',
    subText: '12기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: 'React와 Next.js를 활용해 성능 최적화를 경험해볼 수 있었습니다.',
  },
  {
    id: 'r3-7',
    type: 'member',
    name: '한지민',
    subText: '12기 · Computer Science 23',
    avatarImage: MOCK_AVATAR,
    message: 'React와 Next.js를 활용해 성능 최적화를 경험해볼 수 있었습니다.',
  },
];
