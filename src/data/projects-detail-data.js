// Project data
export const projects = {
  EMORY: {
    projectType: 'TEAM',
    generation: [13, 14],
    title: 'COOKIEE-',
    subtitle: '어쩌구저쩌구!',
    content:
      'Cookiee-는 자신만의 국거리 모음을 기록하고 공유할 수 있는 소셜 플랫폼입니다. 좋아하는 레시피를 저장하고, 다른 사용자들과 요리 경험을 나눌 수 있습니다.',
    feature: [
      '레시피 등록 및 관리',
      '사용자 팔로우',
      '레시피 북마크',
      '댓글 및 좋아요',
      '검색 및 필터링',
    ],
    techStack: ['React', 'Spring', 'MySQL', 'AWS'],
    links: [
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2024-COOKIEE-frontend',
      },
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2024-COOKIEE-backend',
      },
    ],
    members: [
      {
        name: '김영교',
        role: ['PM', '프론트엔드'],
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '윤지원',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '윤소영',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '김도연',
        role: ['PM', '백엔드'],
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '엄다현',
        role: '백엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '신정은',
        role: '백엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '디자인1',
        role: '디자이너',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '디자인2',
        role: '디자이너',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  ChatToner: {
    projectType: 'TEAM',
    generation: [14],
    title: 'ChatToner',
    subtitle: 'ChatToner 한 줄 소개',
    content: 'ChatToner 상세 설명입니다.',
    feature: ['기능 1', '기능 2', '기능 3'],
    techStack: ['React', 'Node.js', 'MongoDB'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '하지민',
        role: ['디자이너', '프론트엔드'],
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '윤지원',
        role: ['백엔드', 'PM'],
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '김지민',
        role: '백엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '정지은',
        role: '백엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '하지민',
        role: '디자이너',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },
  Devsong: {
    projectType: 'TEAM',
    generation: [14],
    title: 'Devsong',
    subtitle: 'Devsong 한 줄 소개',
    content: 'Devsong 상세 설명입니다.',
    feature: ['기능 1', '기능 2', '기능 3', '기능 4'],
    techStack: ['Vue', 'Django', 'PostgreSQL'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '백수민',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '방지희',
        role: '백엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '신정은',
        role: '백엔드',
        description: '(소개글)',
        profileImage: '',
      },
      {
        name: '이은채',
        role: '디자이너',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },
};
// FALLBACK 프로젝트 (slug가 없거나 찾을 수 없을 때)
export const FALLBACK_PROJECT = {
  projectType: 'TEAM',
  generation: [],
  title: '프로젝트 제목',
  subtitle: '프로젝트 한 줄 소개',
  content: '프로젝트 상세 설명이 들어갈 영역입니다.',
  feature: '기능 설명이 들어갈 영역입니다.',
  techStack: ['React', 'Spring'],
  links: [{type: 'CLIENT', url: ''}],
  members: [
    {
      name: 'n1',
      role: '프론트엔드',
      description: '(소개글)',
      profileImage: '',
    },
    {
      name: 'n2',
      role: '백엔드',
      description: '(소개글)',
      profileImage: '',
    },
    {
      name: 'n3',
      role: '디자이너',
      description: '(소개글)',
      profileImage: '',
    },
  ],
};
