// EMORY Team Images
import YoonJeewonImg from '../assets/members/YoonJeewon.jpeg';
import YoonSoyoungImg from '../assets/members/YoonSoyoung.jpg';
import KimDoyeonImg from '../assets/members/KimDoyeon.jpg';
import EomDahyunImg from '../assets/members/EomDahyeon.jpg';
import ShinJungeunImg from '../assets/members/ShinJeongeun.jpg';
import KimYoungkyoImg from '../assets/members/KimYoungkyo.png';

// ============================================
// 2. Devsong Team Imports
import BangJiheeImg from '../assets/members/BangJihee.jpg';
import BaekSuminImg from '../assets/members/BaekSumin.jpeg';
import WooChaeaImg from '../assets/members/WooChaea.jpg';
import LeeEunchaeImg from '../assets/members/LeeEunchae.jpg';

// ============================================
// 3. ChatToner Team Imports
// 윤지원 님은 위에서 import 함
import HaJiminImg from '../assets/members/HaJimin.jpg';
import KimJiminImg from '../assets/members/KimJimin.jpg';
import KwonYujinImg from '../assets/members/KwonYujin.jpg';
import JeongJieunImg from '../assets/members/JeongJieun.png';

// Project data
export const projects = {
  EMORY: {
    projectType: 'TEAM',
    generation: [14],
    title: 'EMORY',
    subtitle: '인터랙티브 감정 피드백 서비스, EMORY',
    content:
      'EMORY : 감정을 쏟아낼 곳이 없어 답답하셨나요? 이제 언제든지 편하게 털어놓을 수 있는 AI 감정 동반자를 경험해보세요! 나의 일정을 EMORY가 불러와 감정 기록을 남기고 싶은 일정에 대해 에이전트와 대화합니다. 사용자의 말투와 감정 표현 습관을 학습하여 당신에게 꼭 맞는 공감 코멘트를 제공해요. 기록만 쌓이던 기존 감정일기와는 전혀 다른 경험! 지금 바로 EMORY와 함께 감정 관리의 새로운 여정을 시작해보세요!',
    feature: [
      '🔅 AI 감정 대화\n사용자가 음성 텍스트로 감정을 털어놓으면 AI가 공감하며 대화, 감정 진위와 톤 분석',
      '🔅 AI 일기 자동 생성\n대화 내용을 바탕으로 하루를 정리한 감정 일기 자동 생성',
      '🔅 감정 리포트 분석\nPMS, 스트레스 요인 등 감정 변화를 데이터 기반으로 분석 및 시각화',
      '🔅 감정 피드백 & 루틴 제안\n감정 별 루틴 및 조언을 제시해 정서 안정 및 자기 이해 유도',
      '🔅 이미지 생성\n하루 중 감정이 잘 드러나는 활동 및 감정 상태를 이미지로 시각적 감정 기록 제공',
      '🔅 타임캡슐 리마인드\n감정 일기를 다시 보여주며 성장과 변화 회고 유도',
    ],
    techStack: [
      'spring boot',
      'MongoDB',
      'GCP',
      'openai API',
      'Vite',
      'React',
      'TypeScript',
    ],
    links: [
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2025-EMORY-client',
      },
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2025-EMORY-Server',
      },
      {type: 'WEB', url: 'https://apps-emory.netlify.app/'},
    ],
    members: [
      {
        name: '윤지원',
        role: ['AI', '프론트엔드'],
        description: '(소개글)',
        profileImage: YoonJeewonImg,
      },
      {
        name: '김도연',
        role: ['PM', 'AI', '백엔드'],
        description: '(소개글)',
        profileImage: KimDoyeonImg,
      },
      {
        name: '엄다현',
        role: '백엔드',
        description: '(소개글)',
        profileImage: EomDahyunImg,
      },
      {
        name: '신정은',
        role: '백엔드',
        description: '(소개글)',
        profileImage: ShinJungeunImg,
      },
      {
        name: '윤소영',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: YoonSoyoungImg,
      },
      {
        name: '김영교',
        role: '프론트엔드',
        description: '(소개글)',
        profileImage: KimYoungkyoImg,
      },
    ],
  },

  Devsong: {
    projectType: 'TEAM',
    generation: [14],
    title: 'Devsong',
    subtitle: '숙명여대 개발자들을 위한 커뮤니티',
    content:
      "사이드 프로젝트를 시작하고 싶지만 에브리타임 같은 익명 커뮤니티에서 팀원을 구하기 망설여지셨나요? Devsong은 숙명여대 재학생 인증을 기반으로 개발자 송이들을 위한 안전하고 신뢰할 수 있는 커뮤니티 플랫폼입니다.✨\n\n단순히 사람을 모으는 것을 넘어, 서로의 개발 역량과 관심 분야를 확인하며 '진짜 잘 맞는 동료'를 찾을 수 있습니다. 프로젝트·대외활동 팀원 모집부터 전공 스터디, 그리고 교내 GitHub·백준 활동 랭킹 확인과 정보 공유까지! Devsong은 숙명의 개발자들이 서로 자극받으며 함께 성장할 수 있는 따뜻하고 건강한 개발자 커뮤니티를 꿈꿉니다.💙",
    feature: [
      '👩‍💻 프로젝트, 스터디를 함께할 팀원 모집\n프로젝트나 스터디를 함께할 팀원을 모집하거나, 마음에 드는 팀에 지원할 수 있어요.',
      '👩‍💻 공모전, 대외활동 정보 공유\n공모전·대외활동 등 다양한 정보를 올리고 학교 개발자들과 교류할 수 있어요.',
      '👩‍💻 GitHub·백준 활동량 비교\n숙명여대 개발자들의 GitHub 잔디와 백준 활동량을 확인하고, 순위로 비교해볼 수 있어요.',
      '👩‍💻 개발 프로필로 나만의 역량 어필\n실명 기반 프로필과 GitHub·백준 연동으로 나의 기술 스택과 개발 수준을 간단하고 신뢰 있게 보여줄 수 있어요.',
    ],
    techStack: ['React', 'Spring Boot', 'docker', 'MySQL'],
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
        name: '방지희',
        role: ['프론트엔드', '백엔드'],
        description: '(소개글)',
        profileImage: BangJiheeImg,
      },
      {
        name: '백수민',
        role: '프론트엔드장',
        description: '(소개글)',
        profileImage: BaekSuminImg,
      },
      {
        name: '우채아',
        role: ['PM', '백엔드'],
        description: '(소개글)',
        profileImage: WooChaeaImg,
      },
      {
        name: '이은채',
        role: '백엔드장',
        description: '(소개글)',
        profileImage: LeeEunchaeImg,
      },
    ],
  },

  ChatToner: {
    projectType: 'TEAM',
    generation: [14],
    title: 'ChatToner',
    subtitle:
      '기업의 비용과 시간을 아끼는, 최적의 신입사원 온보딩 툴 ChatToner',
    content:
      '조직의 커뮤니케이션 스타일을 통일하고 텍스트 품질을 완벽하게 다듬어주는 AI 커뮤니케이션 어시스턴트입니다. 상황에 딱 맞는 톤앤매너 변환부터 사내 규정 준수 여부 분석까지, Chat-Toner로 팀의 커뮤니케이션 효율을 극대화하세요!',
    feature: [
      '지능형 텍스트 스타일 변환 \n원하는 분위기(격식, 친근함, 직설적 등)에 맞춰 텍스트를 즉시 변환합니다. 사용자의 선호도를 지속적으로 학습하여, 쓸수록 나에게 꼭 맞는 맞춤형 문장을 제안해줍니다.',
      "4-Factor 정밀 품질 분석\n문법, 격식성, 가독성, 조직 프로토콜 준수 여부의 4가지 핵심 지표로 작성한 글을 꼼꼼하게 점검합니다. 단순한 교정을 넘어 RAG 기술을 통해 '왜' 고쳐야 하는지에 대한 명확한 근거와 구체적인 개선안을 제공합니다!",
      'RAG 기반 사내 지식 베이스 \n우리 회사의 가이드라인과 문서를 업로드하여 나만의 지식 베이스를 구축할 수 있습니다. 사내 문서를 기반으로 모든 구성원이 동일한 커뮤니케이션 규정을 따르도록 쉽게 설정 가능해요!',
      '맞춤형 프로필 및 온보딩 \n간단한 설문을 통해 개인과 조직의 커뮤니케이션 스타일을 빠르게 설정합니다.',
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
    ],
    members: [
      {
        name: '윤지원',
        role: ['백엔드', 'PM'],
        description: '(소개글)',
        profileImage: YoonJeewonImg,
      },
      {
        name: '하지민',
        role: ['디자인', '프론트엔드'],
        description: '(소개글)',
        profileImage: HaJiminImg,
      },
      {
        name: '김지민',
        role: '백엔드',
        description: '(소개글)',
        profileImage: KimJiminImg,
      },
      {
        name: '권유진',
        role: ['백엔드', '인프라'],
        description: '(소개글)',
        profileImage: KwonYujinImg,
      },
      {
        name: '정지은',
        role: '백엔드',
        description: '(소개글)',
        profileImage: JeongJieunImg,
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
