// Project data
export const projects = {
  EMORY: {
    projectType: 'TEAM',
    generation: [13, 14],
    title: 'EMORY',
    subtitle: '인터랙티브 감정 피드백 서비스',
    content:
      '감정을 쏟아낼 곳이 없어 답답하셨나요? 이제 언제든지 편하게 털어놓을 수 있는 AI 감정 동반자를 경험해보세요! EMORY는 일정을 불러와 기록하고 싶은 순간에 대해 에이전트와 대화하며, 사용자의 말투와 습관을 학습해 맞춤형 공감 코멘트를 제공합니다. 기록만 쌓이던 기존 감정일기와는 전혀 다른 경험! 지금 바로 EMORY와 함께 감정 관리의 새로운 여정을 시작해보세요!',
    feature: [
      'AI 감정 대화 (진위/톤 분석)',
      'AI 일기 자동 생성',
      '감정 리포트 분석 및 시각화',
      '감정 피드백 & 루틴 제안',
      '감정 시각화 이미지 생성',
      '타임캡슐 리마인드',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Vite',
      'Spring Boot',
      'MongoDB',
      'GCP',
      'OpenAI API',
    ],
    links: [
      {
        type: 'WEB',
        url: 'https://apps-emory.netlify.app/',
      },
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2025-EMORY-client',
      },
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2025-EMORY-Server',
      },
    ],
    members: [
      {
        name: '김도연',
        role: ['PM', 'AI', '백엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '윤지원',
        role: ['AI', '프론트엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '김영교',
        role: ['프론트엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '윤소영',
        role: ['프론트엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '엄다현',
        role: ['백엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '신정은',
        role: ['백엔드'],
        description: '',
        profileImage: '',
      },
    ],
  },

  ChatToner: {
    projectType: 'TEAM',
    generation: [14],
    title: 'ChatToner',
    subtitle: '기업의 비용과 시간을 아끼는, 최적의 신입사원 온보딩 툴',
    content:
      '조직의 커뮤니케이션 스타일을 통일하고 텍스트 품질을 완벽하게 다듬어주는 AI 커뮤니케이션 어시스턴트입니다. 상황에 딱 맞는 톤앤매너 변환부터 사내 규정 준수 여부 분석까지, Chat-Toner로 팀의 커뮤니케이션 효율을 극대화하세요!',
    feature: [
      '지능형 텍스트 스타일 변환',
      '4-Factor 정밀 품질 분석 (RAG 기반)',
      '사내 지식 베이스 구축',
      '맞춤형 프로필 및 온보딩',
    ],
    techStack: [
      'React',
      'TypeScript',
      'NestJS',
      'Python',
      'FastAPI',
      'LangChain',
      'OpenAI',
    ],
    links: [
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/CHAT-TONER.git',
      },
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/CHAT-TONER.git',
      },
    ],
    members: [
      {
        name: '윤지원',
        role: ['PM', '백엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '하지민',
        role: ['디자이너', '프론트엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '김지민',
        role: ['백엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '권유진',
        role: ['백엔드', '인프라'],
        description: '',
        profileImage: '',
      },
      {
        name: '정지은',
        role: ['백엔드'],
        description: '',
        profileImage: '',
      },
    ],
  },
  Devsong: {
    projectType: 'TEAM',
    generation: [13, 14],
    title: 'Devsong',
    subtitle: '숙명여대 개발자들을 위한 커뮤니티',
    content:
      "사이드 프로젝트를 시작하고 싶지만 에브리타임 같은 익명 커뮤니티에서 팀원을 구하기 망설여지셨나요? Devsong은 숙명여대 재학생 인증을 기반으로 한 안전하고 신뢰할 수 있는 개발자 커뮤니티 플랫폼입니다. 서로의 개발 역량과 관심 분야를 확인하며 '진짜 잘 맞는 동료'를 찾고, 교내 GitHub·백준 활동 랭킹 확인과 정보 공유를 통해 함께 성장하는 문화를 만들어갑니다.",
    feature: [
      '프로젝트 및 스터디 팀원 모집',
      '공모전·대외활동 정보 공유',
      'GitHub·백준 활동량 비교 및 랭킹',
      '개발 프로필 및 역량 인증',
    ],
    techStack: ['React', 'Spring Boot', 'Docker', 'MySQL'],
    links: [
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2025-DEVSONG-client',
      },
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2025-DEVSONG-Server',
      },
    ],
    members: [
      {
        name: '우채아',
        role: ['PM', '백엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '백수민',
        role: ['프론트엔드'],
        description: '', // 프론트엔드장
        profileImage: '',
      },
      {
        name: '방지희',
        role: ['프론트엔드', '백엔드'],
        description: '',
        profileImage: '',
      },
      {
        name: '이은채',
        role: ['백엔드'],
        description: '', // 백엔드장
        profileImage: '',
      },
    ],
  },

  // 신입부원 프로젝트
  bday: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'B-DAY',
    subtitle: 'B-DAY 한 줄 소개',
    content: 'B-DAY 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '우채아',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  budgetpilot: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'BudgetPilot',
    subtitle: 'BudgetPilot 한 줄 소개',
    content: 'BudgetPilot 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '김도연',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  clip: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'Clip',
    subtitle: 'Clip 한 줄 소개',
    content: 'Clip 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '정지은',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  commutime: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'CommuTime',
    subtitle: 'CommuTime 한 줄 소개',
    content: 'CommuTime 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '김영교',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  flist: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'f-list',
    subtitle: 'f-list 한 줄 소개',
    content: 'f-list 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '이유나',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  hellogiraffe: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'HelloGiraffe',
    subtitle: 'HelloGiraffe 한 줄 소개',
    content: 'HelloGiraffe 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '문예선',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  podorush: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'PodoRush',
    subtitle: 'PodoRush 한 줄 소개',
    content: 'PodoRush 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '엄다현',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  pouch: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'Pouch',
    subtitle: 'Pouch 한 줄 소개',
    content: 'Pouch 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '배송이',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  starlist: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'starlist',
    subtitle: 'starlist 한 줄 소개',
    content: 'starlist 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '한지민',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  streco: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'STRECO',
    subtitle: 'STRECO 한 줄 소개',
    content: 'STRECO 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '임유진',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  ults: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'ULTS',
    subtitle: 'ULTS 한 줄 소개',
    content: 'ULTS 상세 설명입니다.',
    feature: ['기능 1', '기능 2'],
    techStack: ['React'],
    links: [{type: 'CLIENT', url: ''}],
    members: [
      {
        name: '윤소영',
        role: '프론트엔드',
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
