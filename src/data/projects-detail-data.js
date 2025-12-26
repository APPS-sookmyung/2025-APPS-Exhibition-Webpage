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

  // 신입부원 프로젝트
  bday: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'B-DAY',
    subtitle: '나만의 야구 직관 일기, B-DAY',
    content:
      '그날의 함성과 날씨, 짜릿했던 승리의 순간을 생생하게 기록할 수 있습니다. 기록이 쌓일수록 나의 직관 승률을 알아볼 수 있는 재미까지! 지금 바로 당신의 추억을 기록해보세요.',
    feature: [
      '⚾️ 직관 일기 기록하기\n상대팀, 날짜, 경기 결과, 사진 등과 함께 직관 일기를 기록할 수 있습니다',
      '⚾️ 나는 승요일까, 패요일까?\n일기 기록을 바탕으로 나의 직관 승률을 알아볼 수 있습니다.',
      '⚾️ 홈구장의 날씨 확인하기\n응원하는 팀을 선택하고 홈 구장의 날씨를 확인할 수 있습니다.',
    ],
    techStack: ['React', 'JavaScript', 'TailwindCSS', 'Firebase', 'Netlify'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://baseball-day.netlify.app/'},
      {type: 'LINK', url: 'https://baseball-day.netlify.app/'},
    ],
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
    subtitle:
      '여행 정보와, 취향, 예산 비율을 바탕으로 여행 스팟을 자동 추천해 한번에 확인할 수 있는 개인 맞춤 여행 리포트 budgetpilot',
    content:
      'Budgetpilot: 여행 정보와 취향, 그리고 예산 비율까지만 입력하면, 예산에 딱 맞는 숙소, 식당, 관광 스팟을 자동으로 추천해 한 번에 리포트로 정리해드립니다. 엑셀로 계산하고, 후기까지 일일이 찾느라 지치지 않으셨나요? 이제 BudgetPilot에서 나에게 맞는 현실적인 여행 플랜을 한 번에 받아보세요!',
    feature: [
      '✈️ 예산 비율로 간편 설정하기\n숙소, 식지, 관광, 기타 항목 별 예산 비율만 정하면, 1인 기준 예산을 바탕으로 전체 인원, 숙박일수까지 반영해 항목 별 금액을 자동으로 계산합니다.',
      '✈️ 사용자 정보 기반 숙소 추천\n사용자가 떠나는 도시를 기준으로 사용자 정보와 예산에 맞는 숙소 후보들을 자동으로 추천합니다.',
      '✈️ 취향 기반 식당 추천\n여행 스타일과 예산을 반영해 식당을 추천합니다.',
      '✈️ 관광, 액티비티 스팟 추천\n여행 기간과 예산에 맞춰 꼭 가볼 만한 관광지와 액티비티를 추려 과도한 일정이 되지 않도록 추천합니다.',
      '✈️ 예산, 스팟을 한눈에 보는 여행 리포트\n선택된 숙소, 식당, 관광 스팟과 함께 항목 별 예산 배분, 예상 지출, 1인당/전체 비용을 한 화면에서 확인할 수 있는 여행 리포트를 제공합니다.',
    ],
    techStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'FastAPI',
      'Netlify',
      '외부 AI모델(OPENAI API)',
    ],
    links: [
      {type: 'CLIENT', url: ''},
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2025-BudgetPilot',
      },
      {type: 'LINK', url: 'https://budgetpilot.netlify.app/'},
    ],
    members: [
      {
        name: '김도연',
        role: ['프론트엔드', '백엔드'],
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  clip: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'Clip',
    subtitle:
      '흩어진 웹 콘텐츠를 카테고리로 분류하고 스크랩하여 만드는 나만의 디지털 스크랩 룸 Clip',
    content:
      'CClip: 흩어져 있는 웹 정보를 큐레이션하고 정리하는 나만의 맞춤형 스크랩북! 흥미로운 자료나 웹 아티클을 찾고는 잊어버리지 않으셨나요? Clip은 사용자가 직접 정의한 카테고리와 스크랩 타입 별로 콘텐츠를 분류하고 시각화합니다. 지금 바로 나만의 디지털 스크랩 룸을 만들어보세요!',
    feature: [
      '📚 맞춤형 스크랩 룸 구성\n추천 카테고리와 사용자 정의 카테고리를 설정하여 스크랩을 추가하고 정리할 수 있습니다.',
      '🔗 타입별 스크랩 모아보기\n링크, 이미지, 텍스트 등 유형별로 콘텐츠를 자동으로 묶어 시각적으로 분류하고 제공하여, 원하는 정보를 빠르게 찾을 수 있습니다.',
      '📋 카테고리 관리 기능\n추가/삭제할 카테고리를 쉽게 관리하여, 기존 카테고리를 삭제할 경우 해당 스크랩을 다른 카테고리로 안전하게 이동시킬 수 있습니다.',
    ],
    techStack: ['React', 'JavaScript', 'CSS', 'Firebase'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/APPS-sookmyung/2025-Clip.git'},
      {type: 'LINK', url: 'https://clip-8c9e0.web.app/'},
    ],
    members: [
      {
        name: '정지은',
        role: ['PM', '프론트엔드', '백엔드'],
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  commutime: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'CommuTime',
    subtitle: '통학•통근 자기계발 서비스 CommuTime',
    content:
      'CommTime: 매일 반복되는 통학•통근 시간, 그냥 흘러보내고 있진 않으신가요? CommuTime은 출발지와 목적지를 입력하면 이동시간 동안에 자기계발을 도와줍니다. 토익 공부, 뉴스레터 리스닝, 영단어 오디오 학습 등 원하는 목표를 설정하면, 언제 어떤 공부를 해야 할지 알려줘요. CommuTime과 함께 이동 시간을 성장 시간으로 바꿔보세요!',
    feature: [
      '🧠 목표 기반 루틴 카테고리 등록하기\n산타토익, 리스닝, 독서 등 목표별로 모아진 루틴들을 카테고리별로 등록하고 달성률을 확인할 수 있습니다.',
      '🎒 오늘의 통학 루틴, 한눈에 보기\n출발지와 목적지를 입력하고, 루틴 카테고리를 추가하여 학습 목표를 세웁니다.',
      '🚇 학습 시작\n일정을 등록하고 학습을 시작하면 시각적으로 지금 해야할 일을 안내해줍니다.',
      '📅 성과 분석\n지난 일주일 동안 어떤 공부를 했는지, 몇 분을 투자했는지 기록되어 한 눈에 확인 할 수 있습니다.',
    ],
    techStack: ['React', 'TypeScript'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/APPS-sookmyung/2025-CommuTime'},
      {type: 'LINK', url: 'https://commutime.vercel.app/'},
    ],
    members: [
      {
        name: '김영교',
        role: '',
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: ''},
      {type: 'LINK', url: ''},
    ],
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
