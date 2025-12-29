//팀 프로젝트 썸네일
import chattonerThumbnail from '../assets/thumbnail/chattoner-thumbnail.png';
import devsongThumbnail from '../assets/thumbnail/devsong-thumbnail.png';
import emoryThumbnail from '../assets/thumbnail/emory-thumbnail.png';
import dotdotdotThumbnail from '../assets/thumbnail/dotdotdot-thumbnail.png';

//팀 프로젝트 파비콘
import chattonerPavicon from '../assets/pavicon/chattoner-pavicon.png';
import devsongPavicon from '../assets/pavicon/devsong-pavicon.png';
import emoryPavicon from '../assets/pavicon/emory-pavicon.png';
import dotdotdotPavicon from '../assets/pavicon/dotdotdot-pavicon.jpg';

//개인 프로젝트 썸네일
import bdayThumbnail from '../assets/thumbnail/b-day.png';
import flistThumbnail from '../assets/thumbnail/f-list.png';
import hellogiraffeThumbnail from '../assets/thumbnail/hellogiraffe.png';
import podorushThumbnail from '../assets/thumbnail/podorush.png';
import starlistThumbnail from '../assets/thumbnail/starlist.png';
import strecoThumbnail from '../assets/thumbnail/streco.png';
import budgetpilotThumbnail from '../assets/thumbnail/budgetpilot.png';
import commutimeThumbnail from '../assets/thumbnail/commutime.png';
import pouchkeeperThumbnail from '../assets/thumbnail/pouchkeeper.png';
import timetablemakerThumbnail from '../assets/thumbnail/timetablemaker.png';
import ultsThumbnail from '../assets/thumbnail/ults.png';
import clipThumbnail from '../assets/thumbnail/clip.png';

//개인 프로젝트 파비콘
import bdayPavicon from '../assets/pavicon/b-day.png';
import flistPavicon from '../assets/pavicon/f-list.png';
import hellogiraffePavicon from '../assets/pavicon/hellogiraffe.png';
import podorushPavicon from '../assets/pavicon/podorush.png';
import starlistPavicon from '../assets/pavicon/starlist.png';
import strecoPavicon from '../assets/pavicon/streco.png';
import budgetpilotPavicon from '../assets/pavicon/budgetpilot.png';
import commutimePavicon from '../assets/pavicon/commutime.png';
import pouchkeeperPavicon from '../assets/pavicon/pouchkeeper.png';
import timetablemakerPavicon from '../assets/pavicon/timetablemaker.png';
import ultsPavicon from '../assets/pavicon/ults.png';
import clipPavicon from '../assets/pavicon/clip.png';

//아직 Emory 파비콘, 썸네일 없음
//아직 Devsong, Chattoner 배포 링크 없음

export const projectInfo = [
  // 팀 프로젝트
  {
    id: 'chattoner',
    slug: 'ChatToner',
    title: 'CHAT-TONER',
    type: 'team',
    thumbnail: chattonerThumbnail,
    pavicon: chattonerPavicon,
    description:
      '기업의 비용과 시간을 아끼는, 최적의 신입사원 온보딩 툴 ChatToner',
    members: [
      '11기 윤지원',
      '11기 하지민',
      '11기 권유진',
      '11기 김지민',
      '12기 정지은',
    ],
    link: 'https://example.com',
  },
  {
    id: 'devsong',
    slug: 'Devsong',
    title: 'DEVSONG',
    type: 'team',
    thumbnail: devsongThumbnail,
    pavicon: devsongPavicon,
    description: '숙명여대 개발자들을 위한 커뮤니티',
    members: ['12기 우채아', '11기 백수민', '11기 방지희', '12기 이은채'],
    link: 'https://example.com',
  },
  {
    id: 'emory',
    slug: 'EMORY',
    title: 'EMORY',
    type: 'team',
    thumbnail: emoryThumbnail,
    pavicon: emoryPavicon,
    description: '인터랙티브 감정 피드백 서비스, EMORY',
    members: [
      '11기 윤지원',
      '11기 신정은',
      '12기 김도연',
      '12기 김영교',
      '12기 엄다현',
      '12기 윤소영',
      '디자이너 주수연',
      '디자이너 소일전',
    ],
    link: 'https://apps-emory.netlify.app/',
  },
  {
    id: 'dotdotdot',
    slug: 'dotdotdot',
    title: 'dotdotdot',
    type: 'team',
    thumbnail: dotdotdotThumbnail,
    pavicon: dotdotdotPavicon,
    description:
      'APPS x 인천문화재단 협업 2025 문화예술특화거리 점점점 공동 프로젝트 웹사이트',
    members: [
      '11기 윤지원',
      '11기 백수민',
      '11기 하지민',
      '12기 김영교',
      '12기 임유진',
      '디자이너 김지윤',
      '디자이너 이다솔',
    ],
    link: 'https://www.2025dotdotdot.com/',
  },

  //   신입부원 프로젝트
  {
    id: 'bday',
    slug: 'bday',
    title: 'B-DAY',
    type: 'rookie',
    thumbnail: bdayThumbnail,
    pavicon: bdayPavicon,
    description: '나만의 야구 직관 일기, B-DAY',
    members: ['12기 우채아'],
    link: 'https://baseball-day.netlify.app/',
  },
  {
    id: 'budgetpilot',
    slug: 'budgetpilot',
    title: 'BudgetPilot',
    type: 'rookie',
    thumbnail: budgetpilotThumbnail,
    pavicon: budgetpilotPavicon,
    description:
      '여행 정보와, 취향, 예산 비율을 바탕으로 여행 스팟을 자동 추천해 한번에 확인할 수 있는 개인 맞춤 여행 리포트 budgetpilot',
    members: ['12기 김도연'],
    link: 'https://budgetpilot.netlify.app/',
  },
  {
    id: 'clip',
    slug: 'clip',
    title: 'Clip',
    type: 'rookie',
    thumbnail: clipThumbnail,
    pavicon: clipPavicon,
    description:
      '흩어진 웹 콘텐츠를 카테고리로 분류하고 스크랩하여 만드는 나만의 디지털 스크랩 룸 Clip',
    members: ['12기 정지은'],
    link: 'https://clip-8c9e0.web.app/',
  },
  {
    id: 'commutime',
    slug: 'commutime',
    title: 'CommuTime',
    type: 'rookie',
    thumbnail: commutimeThumbnail,
    pavicon: commutimePavicon,
    description: '통학•통근 자기계발 서비스 CommuTime',
    members: ['12기 김영교'],
    link: 'https://commutime.vercel.app/',
  },
  {
    id: 'flist',
    slug: 'flist',
    title: 'F-list',
    type: 'rookie',
    thumbnail: flistThumbnail,
    pavicon: flistPavicon,
    description:
      '나만의 옷 정보와 위시리스트를 아카이빙 할 수 있는 웹 서비스 F-list',
    members: ['12기 이유나'],
    link: 'https://2025-f-list-w4qb.vercel.app/',
  },
  {
    id: 'hellogiraffe',
    slug: 'hellogiraffe',
    title: 'HelloGiraffe',
    type: 'rookie',
    thumbnail: hellogiraffeThumbnail,
    pavicon: hellogiraffePavicon,
    description:
      '비폭력 대화(NVC)를 기반으로 건강한 관계 형성을 돕는 AI 마음 대화 가이드, HelloGiraffe',
    members: ['12기 문예선'],
    link: 'https://tjsl0607.github.io/2025-HelloGiraffe/',
  },
  {
    id: 'podorush',
    slug: 'podorush',
    title: 'PodoRush',
    type: 'rookie',
    thumbnail: podorushThumbnail,
    pavicon: podorushPavicon,
    description: '티켓팅 연습 게임 Podorush',
    members: ['12기 엄다현'],
    link: '2025-podo-rush.vercel.app',
  },
  {
    id: 'pouch',
    slug: 'pouch',
    title: 'Pouchkeeper',
    type: 'rookie',
    thumbnail: pouchkeeperThumbnail,
    pavicon: pouchkeeperPavicon,
    description:
      '내 모든 뷰티 아이템을 한 곳에 정리해주는 신개념 온라인 파우치',
    members: ['12기 배송이'],
    link: 'https://bucolic-daifuku-0a202b.netlify.app/',
  },
  {
    id: 'starlist',
    slug: 'starlist',
    title: 'Starlist',
    type: 'rookie',
    thumbnail: starlistThumbnail,
    pavicon: starlistPavicon,
    description:
      '매일의 작은 성취를 별로 쌓아 보상까지 이어주는 습관 형성 todolist',
    members: ['12기 한지민'],
    link: 'https://2025-starlist.vercel.app/',
  },
  {
    id: 'streco',
    slug: 'streco',
    title: 'Streco',
    type: 'rookie',
    thumbnail: strecoThumbnail,
    pavicon: strecoPavicon,
    description: '단 한 번뿐인 방송 속 최고의 순간을 Streco에 기록해 보세요!',
    members: ['12기 임유진'],
    link: 'https://2025-streco.vercel.app/',
  },
  {
    id: 'timetablemaker',
    slug: 'timetablemaker',
    title: '시간표 메이커',
    type: 'rookie',
    thumbnail: timetablemakerThumbnail,
    pavicon: timetablemakerPavicon,
    description:
      '사용자의 기호에 맞는 맞춤형 시간표를 자동으로 생성하는 대학생 맞춤 시간표 메이커 서비스',
    members: ['12기 이은채'],
    link: 'https://echae0111.github.io/timetable-maker/',
  },
  {
    id: 'ults',
    slug: 'ults',
    title: 'ULTS',
    type: 'rookie',
    thumbnail: ultsThumbnail,
    pavicon: ultsPavicon,
    description: '전하지 못한 마음을 밤하늘의 별로 띄워 보내는 공간, ULTS',
    members: ['12기 윤소영'],
    link: 'https://ults.netlify.app',
  },
];
