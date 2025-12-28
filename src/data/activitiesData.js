import seminar from '../assets/activities/seminar.svg';
import basicStudy from '../assets/activities/basic-study.svg';
import generalStudy from '../assets/activities/general-study.svg';
import devtalk from '../assets/activities/devtalk.svg';
import networking from '../assets/activities/networking.svg';
import project from '../assets/activities/project.svg';

export const activitiesData = [
  {
    id: 1,
    type: 'text',
    tag: 'SEMINAR',
    title: '정기 세미나',
    description:
      '매주 목요일 저녁 6시에 모여 약 1시간 동안 정기 세미나를 진행합니다. 이 시간에는 각 팀별 스터디와 프로젝트의 진행 상황을 발표하고, 10-15부 정도 DevTalk을 진행합니다.',
  },
  {
    id: 2,
    type: 'image',
    image: seminar,
  },
  {
    id: 3,
    type: 'text',
    tag: 'BASIC WEB STUDY',
    title: '기초 스터디',
    description:
      '신입부원의 경우, 8주간의 기초 스터디를 진행합니다. 협업의 기반이 되는 Github 사용 방법부터 웹 개발의 기초 지식인 HTML, CSS, JavaScript를 학습합니다. 매주 주어지는 과제를 수행하면 멘토가 피드백을 제공하며, 이를 통해 개발 기초를 체계적으로 쌓을 수 있도록 돕습니다.',
  },
  {
    id: 4,
    type: 'image',
    image: basicStudy,
  },
  {
    id: 5,
    type: 'text',
    tag: 'TEAM STUDY',
    title: '일반 스터디',
    description:
      '스터디를 자유롭게 개설하여, 매주 일정 분량의 강의나 책 등 자료를 통해 학습합니다. 이후 각자 배운 내용을 활용하는 과제를 수행하며 팀별 모임을 갖고, 매주 정기 세미나에서 스터디 내용을 발표합니다. 2025년에는 React, Spring, AI, Unity, Flutter 등의 스터디가 운영되었습니다.',
  },
  {
    id: 6,
    type: 'image',
    image: generalStudy,
  },
  {
    id: 7,
    type: 'text',
    tag: 'DEVTALK',
    title: 'DevTalk',
    description:
      '매주 세미나 시간에 개발과 관련된 다양한 주제의 DevTalk 발표를 진행합니다. 개발 관련 지식과 경험, 대외활동, 수상 경험 등을 공유하며 함께 성장할 수 있는 기회를 만듭니다.',
  },
  {
    id: 8,
    type: 'image',
    image: devtalk,
  },
  {
    id: 9,
    type: 'text',
    tag: 'NETWORKING',
    title: '친목 활동',
    description:
      'MT, 신입부원 환영회, 소풍, 연말 회고회 등 부원들 간 친목을 쌓을 수 있는 다양한 기회를 제공합니다. 서로 다른 기수간 같은 꿈을 향해 도전하는 부원과 서로 돕고 응원하는 APPS를 만들어갑니다.',
  },
  {
    id: 10,
    type: 'image',
    image: networking,
  },
  {
    id: 11,
    type: 'text',
    tag: 'TEAM PROJECT',
    title: '팀 프로젝트',
    description:
      '연말 전시회를 목표로 팀 프로젝트를 진행합니다. 3월에 프로젝트 아이디어 공모가 이루어지며, 이후 팀원 모집 기간을 갖습니다. 모집이 완료되면 아이디어 개발, 와이어프레임 제작, 그리고 개발 과정을 거쳐 최종 결과물을 연말 전시회에 출품합니다.',
  },
  {
    id: 12,
    type: 'image',
    image: project,
  },
];
