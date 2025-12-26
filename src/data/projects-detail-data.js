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
    title: 'F-list',
    subtitle:
      '나만의 옷 정보와 위시리스트를 아카이빙 할 수 있는 웹 서비스 F-list',
    content:
      'F-list: 당신의 옷 정보와 위시리스트를 온라인에 아카이빙하고 언제든 꺼내보세요! 내가 가진 옷들의 스타일을 피드 형태로 한눈에 살펴보고, 여러 쇼핑몰 장바구니에 흩어져 있던 위시템들도 한 곳에 모아 정리 할 수 있어요. 당신의 취향을 기록하고, 아이템들을 하나씩 채워가나는 즐거움을 F-list에서 경험해 보세요!',
    feature: [
      '🛍️Zips - 나의 옷을 기록하는 탭\n내가 가진 옷의 사진이나 착용샷을 업로드하여 나만의 스타일을 피드형으로 정리할 수 있는 공간입니다.',
      '🛍️Wishlist - 흩어진 위시템들을 한곳에 모아두는 탭\n여러 쇼핑몰의 장바구니에 담겨진 위시 아이템들을 F-list 내에서 한 번에 아카이빙할 수 있습니다.',
      '🛍️프로필 커스터마이징\n사용자는 자신을 표현할 닉네임, 옷장 소개글을 자유롭게 설정할 수 있습니다. ',
    ],
    techStack: ['React'],
    links: [
      {type: 'CLIENT', url: ''},
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2025-f-list.git',
      },
      {type: 'LINK', url: 'https://2025-f-list-w4qb.vercel.app/'},
    ],
    members: [
      {
        name: '이유나',
        role: '',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  hellogiraffe: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'HelloGiraffe',
    subtitle:
      '비폭력 대화(NVC)를 기반으로 건강한 관계 형성을 돕는 AI 마음 대화 가이드, HelloGiraffe',
    content: `4단계 대화법(관찰-느낌-욕구-부탁)을 통해 나의 마음을 들여다보고 솔직하게 표현하는 연습을 해보세요! 관계가 어려울 때, '기린' 코치가 당신의 마음을 공감해주고 더 나은 대화 방향을 제안합니다. 상황별 시나리오 가이드와 AI 코칭으로 건강한 소통 습관을 만들어보세요`,
    feature: [
      '🦒 상황별 맞춤 대화 시나리오\n약속에 늦은 친구, 가족과의 갈등 등 다양한 상황에 맞는 시나리오를 선택하여, 막막했던 대화의 물꼬를 쉽게 틀 수 있습니다.',
      `🦒 비폭력 대화(NVC) 4단계 가이드\n'관찰-느낌-욕구-부탁'의 4단계 프로세스를 따라가며, 내 감정과 욕구를 차분히 정리하고 상처 주지 않게 말하는 법을 연습합니다.`,
      '🦒 AI 기린 코치의 실시간 성찰 피드백\n작성한 내용을 바탕으로 AI 코치가 공감과 성찰 질문을 던져줍니다. 나의 대화 패턴을 객관적으로 돌아보고 더 따뜻한 표현을 배울 수 있습니다.',
      '🦒 나만의 마음 대화 기록 보관함 \n소중한 관계를 위해 고민했던 흔적들을 저장하고 관리하세요. 언제든 지난 대화를 꺼내보며 내 마음의 변화를 확인할 수 있습니다.',
    ],
    techStack: [
      'React',
      'Vite',
      'Firebase(Auth, Firestore)',
      'Vercel(Serverless Function)',
      'FriendliAI(LLM)',
      'GitHub Pages',
    ],
    links: [
      {type: 'CLIENT', url: ''},
      {
        type: 'SERVER',
        url: 'https://github.com/APPS-sookmyung/2025-HelloGiraffe.git',
      },
      {type: 'LINK', url: 'https://tjsl0607.github.io/2025-HelloGiraffe/'},
    ],
    members: [
      {
        name: '문예선',
        role: ['PM', '프론트엔드', '백엔드', '디자인'],
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  podorush: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'Podorush',
    subtitle: '티켓팅 연습 게임 Podorush',
    content:
      '콘서트 티켓팅에 매번 실패하셨나요? 포도러시는 실제 티켓팅 과정을 구현한 시뮬레이션 환경을 제공하여 긴장감을 가지고 티켓팅 연습을 할 수 있도록 돕습니다. 최종 기록을 랭킹에 등록하여 자신의 실력을 확인하세요!',
    feature: [
      '⚡포도알 게임\n랜덤 포도알을 찾아 클릭하는 반응 속도 훈련 게임입니다.',
      '🎫 실전 티켓팅\n실제 티켓팅 과정을 구현한 게임입니다.',
      '📅 일정 등록\n콘서트/티켓팅 일정을 캘린더에 등록할 수 있습니다.',
    ],
    techStack: ['React', 'Tailwind CSS', 'JavaScript'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/dahyun1060/2025-PodoRush'},
      {type: 'LINK', url: '2025-podo-rush.vercel.app'},
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
    title: 'PouchKeeper',
    subtitle: '내 모든 뷰티 아이템을 한 곳에 정리해주는 신개념 온라인 파우치',
    content:
      'PouchKeeper: 흩어져 있는 화장품 정보를 한 번에 정리하고, 메이크업·스킨케어 기록까지 자동으로 쌓아보세요! 어떤 화장품이 있는 지도 몰라 또 사고, 나만의 꿀조합을 까먹었던 적이 있으셨나요? PouchKeeper는 파우치 인벤토리, 메이크업 로그, 스킨케어 성분·루틴 기록을 한 곳에 모아, 어떤 조합이 잘 맞는지·어떤 성분이 트러블을 유발했는지 쉽게 확인할 수 있게 도와줍니다. 매일의 뷰티 데이터를 쌓아 두면, 앞으로는 “그때 좋았던 조합”과 “피해야 할 성분”을 몇 번의 클릭으로 다시 찾아볼 수 있어요. 지금 바로 나만의 뷰티 기록장을 PouchKeeper에서 시작해보세요!',
    feature: [
      '💄 파우치에 담긴 화장품 한눈에 정리하기\n내가 가지고 있는 메이크업·스킨케어 제품들을 한 곳에 모아\n브랜드/종류/색감별로 깔끔하게 관리할 수 있습니다.',
      '기능 2',
      '💄 하루 사용한 조합을 기록하고 비교하기\n오늘 사용한 베이스·립·아이 조합을 기록해 두면\n어떤 조합이 잘 맞았는지, 피부 반응은 어땠는지 쉽게 되돌아볼 수 있습니다.',
      '💄 성분 기반 스킨케어 반응 추적하기\n사용한 제품의 주요 성분을 기록하면\n나에게 맞는 성분과 피해야 할 성분을 스스로 발견할 수 있습니다.',
      '💄 카테고리별로 나만의 뷰티 패턴 찾기\n베이스/립/스킨케어 등 카테고리별로\n나의 메이크업 루틴과 피부 변화를 한눈에 볼 수 있습니다.',
    ],
    techStack: ['HTML', 'CSS', 'React', 'JS'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/APPS-sookmyung/2025-Pouch'},
      {type: 'LINK', url: 'https://bucolic-daifuku-0a202b.netlify.app/'},
    ],
    members: [
      {
        name: '배송이',
        role: '',
        description: '(소개글)',
        profileImage: '',
      },
    ],
  },

  starlist: {
    projectType: 'INDIVIDUAL',
    generation: [12],
    title: 'Starlist',
    subtitle:
      '매일의 작은 성취를 별로 쌓아 보상까지 이어주는 습관 형성 todolist',
    content:
      'Starlist는 하루의 할 일을 완료할 때마다 별을 적립하고  30개가 모이면 스스로 설정한 보상을 받을 수 있는 서비스입니다. 바쁜 하루 속에서도 Starlist와 함께 별을 채워가며 목표를 재밌게 달성해보세요 !',
    feature: [
      '⭐ 할 일을 완료하고 별 모으기\n매일 해야 할 일을 설정하고 완료할 때마다 별을 획득해 작은 성취를 쌓아갑니다.',
      '⭐ 목표 보상 설정하기\n스스로 정한 보상을 등록해두고 별 30개가 모이면 보상을 달성할 수 있어 동기부여가 쉬워집니다.',
      '⭐ 나의 진행도 한 눈에 확인하기\n하루하루 쌓인 별과 완료한 일을 확인하며 나의 진행 상황을 시각적으로 파악할 수 있습니다.',
    ],
    techStack: ['React', 'Tailwind'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/jimin-25/2025-starlist'},
      {type: 'LINK', url: 'https://2025-starlist.vercel.app/'},
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
    title: 'Streco',
    subtitle: '단 한 번뿐인 방송 속 최고의 순간을 Streco에 기록해 보세요!',
    content:
      '방송 속 소중한 순간을 또 찾아보고 싶은데, 놓친 적 있으신가요? Streco가 그 고민을 해결해 드리겠습니다. 지나간 장면은 돌아오지 않아요! 스트리밍 속 중요한 순간을 실시간으로 기록하고 언제든지 다시 확인해보세요. 이미 방송이 시작된 것 같은데요? Streco를 사용할 때가 왔습니다!',
    feature: [
      '🔴 스트리머 관리하기\n응원하는 프로 게이머와 방송인을 빠르게 등록하고 삭제하며 효율적으로 관리할 수 있습니다.',
      '🔴 방송 일정 등록하기\n등록한 방송은 캘린더에 하이라이트로 표시되어, 스케줄을 한눈에 확인할 수 있습니다.',
      '🔴 하이라이트 기록하기\n중요한 순간을 실시간으로 기록하세요. Streco가 초 단위로 저장해, 빠른 다시보기를 지원합니다.',
    ],
    techStack: ['React', 'Tailwind'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/APPS-sookmyung/2025-Streco'},
      {type: 'LINK', url: 'https://2025-streco.vercel.app/'},
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
    title: 'ULTS - Unsent Letters, To the Star',
    subtitle: '전하지 못한 마음을 밤하늘의 별로 띄워 보내는 공간, ULTS',
    content:
      'ULTS(Unsent Letters, To the Star)는 전하지 못한 말을 기록하고, 그리움 속에서 마음을 조용히 치유하는 감성 편지 서비스입니다. 전하지 못한 말과 마음은 밤하늘의 별이 되어 떠올라, 당신의 감정이 흩어지지 않도록 안전하게 담아줍니다. 지금 바로, 잊지 못한 그 마음을 아름답게 남겨보세요.',
    feature: [
      '✉️ 마음을 전하는 편지 작성\n전하지 못한 말과 마음을 편지 형식으로 기록할 수 있어요.',
      '✨ 밤하늘에 별이 떠오르는 아카이브\n작성한 편지는 밤하늘에 별의 형태로 저장돼요.',
      '🎨 감정 기반 별 색상 변화\n감정에 따라 별의 색상이 자동으로 변해요.',
      '💫 기록한 감정과 시간 떠올리기\n별을 클릭하면 과거의 편지를 다시 읽을 수 있어요.',
    ],
    techStack: ['CSS', 'React', 'TypeScript'],
    links: [
      {type: 'CLIENT', url: ''},
      {type: 'SERVER', url: 'https://github.com/APPS-sookmyung/2025-ULTS'},
      {type: 'LINK', url: 'https://ults.netlify.app'},
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
