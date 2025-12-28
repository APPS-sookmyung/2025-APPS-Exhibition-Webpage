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

// ============================================
// 4. 신입부원 프로젝트 Imports
import LeeYunaImg from '../assets/members/LeeYuna.jpg';
import HanJiminImg from '../assets/members/HanJimin.jpg';
import MunYeseonImg from '../assets/members/MunYeseon.jpeg';
import BaeSongyiImg from '../assets/members/BaeSongyi.jpeg';
import LimYujinImg from '../assets/members/LimYujin.jpeg';

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
        description:
          '처음으로 React 프론트를 맡아 개발을 해봤는데요! 이전에는 프론트엔드를 기능 구현 중심으로만 생각했는데 실제로 작업해 보니 디자인과 화면 구성 자체가 서비스의 인상을 크게 좌우한다는 점을 느꼈습니다..! 특히 창업 관점에서 볼 때 작은 UI 요소나 사용 흐름에 따라 사용자의 편의성이 달라졌고, 이를 팀원들과  함께 고민하며 설계하는 과정이 너무 흥미로웠습니다!! 결국 2025 SW창업경진대회 대상을 받아 더욱 뿌듯한 경험이었어요🥰',
        profileImage: YoonJeewonImg,
      },
      {
        name: '김도연',
        role: ['PM', 'AI', '백엔드'],
        description:
          'EMORY는 제가 처음으로 서비스 기획과 백엔드 개발을 함께 맡은 프로젝트였습니다. 그만큼 과정에서 예상치 못한 변수도 있었지만, 그 덕분에 핵심 가치를 더 선명하게 정리하고 사용자 흐름을 기준으로 기능 우선순위를 조정하는 법을 배웠습니다. 백엔드를 담당하며 보이지 않는 곳에서 데이터와 흐름을 매끄럽게 연결해 서비스의 신뢰도를 만드는 일이 얼마나 중요한지도 체감했습니다. 특히 창업 경진대회를 통해 사용자 입장에서 왜 필요하고 어떤 경험을 기대하는지를 더 깊게 고민하며 서비스를 다듬을 수 있었고, 앞으로 더 탄탄한 서비스로 발전시키고 싶다는 동기를 얻었습니다.',
        profileImage: KimDoyeonImg,
      },
      {
        name: '엄다현',
        role: '백엔드',
        description:
          '이번 팀프로젝트를 통해 팀원들과 함께 하나의 결과물을 완성해 나가는 경험을 할 수 있어서 좋았습니다. 특히 계속되는 빌드 오류로 인해 프로젝트 진행에 어려움이 있었지만, 서로 도와가며 문제를 해결하는 과정에서 많은 것을 배울 수 있었습니다. 이를 통해 협업의 중요성을 느낄 수 있었고, 의미 있고 값진 경험을 할 수 있어서 좋았습니다.',
        profileImage: EomDahyunImg,
      },
      {
        name: '신정은',
        role: '백엔드',
        description:
          '팀 프로젝트를 진행하며 협업 과정에서 소통의 중요성을 느꼈습니다. 처음으로 백엔드 개발을 맡아 프로젝트를 진행하면서 어려움이 많았고, 특히 배포 과정에서 여러 시행착오를 겪었습니다. 그러나 팀원들과 문제 상황을 공유하며 해결책을 찾아나갔고, 그 과정에서 협업의 가치를 배울 수 있었습니다. 이번 프로젝트를 통해 함께 문제를 해결해 나가는 의미 있는 경험을 할 수 있었습니다.',
        profileImage: ShinJungeunImg,
      },
      {
        name: '윤소영',
        role: '프론트엔드',
        description:
          '이번 프로젝트는 개발자로서의 첫발을 내딛는 동시에, 기술적 역량만큼이나 협업에서의 소통과 책임감이 프로젝트의 성패를 결정짓는다는 것을 배운 소중한 경험이었습니다. 특히 프론트엔드 개발자로서 사용자 중심의 인터페이스를 고민하며 화면을 구현하는 과정에서 깊은 흥미를 느꼈습니다. 단순히 코드를 치는 것을 넘어 사용자의 편의를 먼저 생각하는 개발자로 성장하는 계기가 되었습니다. 감사합니다☺️ ',
        profileImage: YoonSoyoungImg,
      },
      {
        name: '김영교',
        role: '프론트엔드',
        description:
          '저는 APPS의 첫 프로젝트인 EMORY에서 PM과 프론트엔드 개발을 맡았습니다. 세미나에서 배운 기능을 사용해보고 새로운 기능들을 배워가며 단순히 웹 서비스 개발에 그치지 않고 학습의 경험이 되는 소중한 시간이었습니다. 사용자 경험이 중요한 서비스인만큼 초기에는 잦은 디자인 변경으로 난항을 겪기도 했지만 끈기 있게 문제를 해결해 나갔습니다. 그 결과, 팀워크를 다지는 것은 물론 2025 소중대 창업대회 금상 수상이라는 쾌거를 이루며 유의미한 첫 발자국을 남길 수 있었습니다. 첫 프로젝트의 PM 이었기에 부족한 점도 많았지만 옆에서 도와주는 팀원분들 덕에 진행할 수 있었던 것 같습니다. 도움 주신 모든 팀원분들에게 감사하다고 전하고 싶습니다. 😊',
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
        description:
          '이번 데브송 프로젝트는 저에게 있어 정말 큰 성장의 기회였어요. 처음 경험해보는 팀 프로젝트라 미숙한 점이 많았고 끝도 안 보이는 것 같았는데, 훌륭한 팀원들 덕분에 무사히 완주할 수 있었습니다. 처음에는 풀스택 개발을 하면 너무 어렵고 힘들지 않을까 걱정했었는데요. 하지만 직접 프론트엔드와 백엔드를 오가며 개발하다 보니, 단순히 기능을 구현하는 것을 넘어 데이터의 흐름과 API 연동 구조를 입체적으로 이해하게 되었습니다. 결과적으로 풀스택 도전은 제 개발 역량을 한 단계 끌어올려 준 최고의 선택이었다고 생각합니다! 기획 단계부터 개발 마무리까지 팀원들과 끊임없이 소통하며 합을 맞춰가는 과정이 정말 즐거웠습니다. 혼자 고민했다면 막막했을 문제들도, APPS에서 만난 소중한 언니들, 친구와 함께였기에 해결할 수 있었습니다. 첫 팀 프로젝트인 만큼 이번 경험은 오래도록 잊지 못할 것 같습니다. 무엇이든 척척 해내는 멋있는 수민언니, 채아언니, 은채를 보며 많이 배웠고 같은 팀이어서 행복했습니다. 제 첫 팀 프로젝트가 데브송이라서 더할 나위 없는 행운이었다고 생각해요. 데브송 팀원들 다들 정말 고생 많으셨습니다! 감사해요! ❤️✨',
        profileImage: BangJiheeImg,
      },
      {
        name: '백수민',
        role: '프론트엔드',
        description:
          '팀 결성 이후 주제가 갑작스럽게 변경되면서 기획 과정이 예상보다 길어지기도 했지만, 그만큼 네 명이 함께 머리를 맞대며 구상한 서비스라 더 큰 애정을 가지고 개발에 임할 수 있었어요. 팀원들 모두 개발 경험이 많지 않아 기술적인 시행착오도 적지 않았을 텐데.. 그럼에도 책임감을 가지고 끝까지 열심히 해 줘서 저 역시 많은 자극을 받으며 더 열심히 할 수 있었습니다. 정말 팀원들 덕을 많이 봤어요 고마워요 🥰 팀의 분위기 메이커이자 PM으로서 팀을 주도적으로 이끌어 준 채아, 유일한 풀스택으로 백엔드와 프론트 팀 모두를 든든하게 뒷받쳐 준 지희, 그리고 첫 프로젝트임에도 묵묵히 자신의 몫을 해내며 잘 따라와 준 은채까지 이 자리를 빌려 모두에게 진심으로 고맙다는 말을 전하고 싶어요 💙 방학 중에도, 학기 중에도 시간을 맞춰 대면으로 만나 회의했던 날들이 이제는 소중한 추억으로 남게 되었어요 🥹 마지막으로 Devsong을 예쁘게 디자인해 주신 도연님께도 감사의 말을 전하고 싶어요! 모두 정말 고생 많았고 마지막의 마지막까지 힘내서 데브송 잘 마무리합시다 🩵',
        profileImage: BaekSuminImg,
      },
      {
        name: '우채아',
        role: ['PM', '백엔드'],
        description:
          '처음 프로젝트 주제를 고민하고, 기능 명세서를 한 줄 한 줄 채워 나가던 때가 엊그제 같은데 벌써 배포까지 무사히 마치고 이렇게 전시회에 올리게 되었다는 게 믿기지 않아요. 데브송 덕분에 백엔드 개발 실력뿐 아니라 디자이너와의 소통과 깃허브를 통한 협업 등 의미 있는 경험들을 쌓을 수 있었어요 ㅎㅎ APPS에서의 첫 팀 프로젝트를 우리 Devsong 팀원들과 함께하게 된 게 정말 행운이라고 생각합니다🍀 그리고 몇달 간 함께 고생해준 수민언니, 은채, 지희 모두에게 정말 수고했다는 말을 전하고 싶습니다! 특히 이번이 첫 팀 프로젝트인데도 프론트엔드와 백엔드 모두 맡아 개발해준 지희 정말 고생했어요... 뜻깊은 경험 하게 해준 우리 팀원들 모두 고맙습니다💙',
        profileImage: WooChaeaImg,
      },
      {
        name: '이은채',
        role: '백엔드',
        description:
          '이번 프로젝트를 통해 필요한 기능과 사이트 디자인 등 여러 요소를 직접 고민하며 개발을 진행할 수 있어 재밌었습니다! 평소에는 단순히 사용자의 입장에서 지나쳤던 부분들도 이번에는 개발자의 시선으로 구조와 흐름을 함께 고려하며 설계하는 과정에서 개발자로써 성장할 수 있는 기회가 된 것 같습니다. 팀원들과 함께 어떤 방향이 더 나은 프로젝트를 만들 수 있을까 고민하던 경험도 모두 정말 뜻깊은 경험이었습니다 힘든적도 많았지만 팀원들 덕분에 프로젝트를 무사히 마무리하게 되서 너무 기뻐요 고맙습니다!!❤️',
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
        type: 'SERVER & CLIENT',
        url: 'https://github.com/APPS-sookmyung/CHAT-TONER.git',
      },
    ],
    members: [
      {
        name: '윤지원',
        role: ['백엔드', 'PM'],
        description:
          '팀 전체를 이끄는 PM으로서의 무게감을  경험한 프로젝트였습니다! 특히 기업별 문서와 정보를 다루는 RAG구조를 설계하는 과정은 기술적인 난이도만큼이나 기획적인 고민의 연속이었기에..혹시나 했지만 역시나! PM으로서 많은 어려움이 있었던 프로젝트였습니다ㅎㅎ. 기술적으로 구현하고 싶은 기능은 많았지만, 제한된 시간 내에 오픈소스로서 완성도를 높이기 위해  마지막의 마지막까지 기능을 검증해본 것이 이번 프로젝트의 가장 큰 도전이었던 것 같습니다 ! 총괄로서 부족한 점도 있었지만, 팀원들과 치열하게 몰입한 덕분에 ChatToner 가 오픈소스 개발자대회 우수작, 자기주도진로설계프로젝트 최우수상이라는 좋은 성과를 얻은 것 같습니다. 다들 고생많았어요!',
        profileImage: YoonJeewonImg,
      },
      {
        name: '하지민',
        role: ['디자인', '프론트엔드'],
        description:
          '프론트를 혼자 담당하며 느낀 부담도 컸지만, 오히려 해보고 싶었던 기술들을 눈치 보지 않고 시도해볼 수 있어 너무 좋았습니다!  수많은 시행착오 속에서 스스로 고민하며 개발자로서 한 단계 성장할 수 있었습니다. 특히 디자인까지 함께 맡으며 서비스의 첫인상에 대해 깊이 고민하게 되었고, 그 덕분에 결과물에 대한 애착도 더 커진 것 같습니다. 기술, 기획, 디자인을 모두 경험하며 팀원들과 치열하게 몰입한 덕분에 우수작과 최우수상이라는 좋은 성과를 얻을 수 있었습니다. 각자의 자리에서 열심히 해준 팀원들 모두 정말 감사합니다!',
        profileImage: HaJiminImg,
      },
      {
        name: '김지민',
        role: '백엔드',
        description:
          'ChatToner를 통해 처음으로 팀 단위 개발을 경험하며 많은 배움을 얻을 수 있었습니다. AI를 활용한 시스템을 함께 고민하고 구조를 정리하며, 리팩토링을 통해 완성도를 높여가는 과정 자체가 의미 있게 느껴졌습니다. 이 과정에서 개발자로서 문제를 바라보는 시각과 접근 방식이 한층 넓어졌다고 생각합니다. 무엇보다 끝까지 함께 고민하고 작업해준 팀원들 덕분에 많은 것을 배울 수 있었고, 진심으로 감사의 마음을 전하고 싶습니다.',
        profileImage: KimJiminImg,
      },
      {
        name: '권유진',
        role: ['백엔드', '인프라'],
        description:
          'Chat Toner라는 큰 프로젝트의 시작부터 마무리까지 직접 경험하며 개발자로서 많은 성장을 이룰 수 있었습니다. 기획 단계에서의 방향 설정부터 구현, 배포를 위한 Docker와 AWS를 학습하며 인프라 환경에 대한 이해도 크게 넓어졌습니다. 과정 중 예상치 못한 오류와 시행착오로 어려움도 많았고 더 효율적으로 진행하지 못한 아쉬움은 남지만, 이 경험을 바탕으로 앞으로의 프로젝트에서는 설계와 준비 단계부터 개선해 나가고자 합니다.',
        profileImage: KwonYujinImg,
      },
      {
        name: '정지은',
        role: '백엔드',
        description:
          '첫 팀 프로젝트로, 큰 규모의 프로젝트에서 새로 배워야 할 기술도 많았고 그만큼 오랜 시간 프로젝트에 공을 들였습니다. 피드백과 학습 시스템을 구축하고 모델 학습을 시키며, 비동기 로직을 적용하고 적응형 학습 모델 기능을 추가하는 등 여러 기술적 시도를 해볼 수 있었습니다. 전국 단위 대회와 교내 대회에 프로젝트를 출품하며 발표를 맡아왔는데, 팀원들이 함께 노력해온 ChatToner의 완성도와 성장 가능성을 모두에게 알릴 수 있어서 뜻 깊은 시간이었습니다. 각 대회에서 좋은 성과를 거둬 팀원들 모두에게 감사한 마음입니다.',
        profileImage: JeongJieunImg,
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
      {type: 'CLIENT', url: 'https://github.com/APPS-sookmyung/2025-B-DAY'},
      {type: 'LINK', url: 'https://baseball-day.netlify.app/'},
    ],
    members: [
      {
        name: '우채아',
        role: '프론트엔드',
        description:
          'B-DAY는 저의 첫 프론트엔드 프로젝트입니다. 지금까지 백엔드 개발만 경험해왔었는데, 프론트엔드 개발자의 고충과 어려움을 이해할 수 있었던 소중한 경험이었어요🤣 프로젝트 주제를 선정하는 것부터 개발 계획을 짜는 것까지 오롯이 혼자서 진행하다 보니 속도도 잘 나지 않고 늘어져 개인적으로는 뿌듯함보다는 아쉬움이 더 남는 프로젝트인 것 같아요. 하지만 이 프로젝트 덕분에 제가 평소 좋아하는 것을 서비스로 만들어보는 즐거운 경험도 해 보고, 이렇게 전시회에 올릴 수 있어 뿌듯합니다😊',
        profileImage: WooChaeaImg,
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
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2025-BudgetPilot',
      },
      {type: 'LINK', url: 'https://budgetpilot.netlify.app/'},
    ],
    members: [
      {
        name: '김도연',
        role: ['프론트엔드', '백엔드'],
        description: '',
        profileImage: KimDoyeonImg,
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
      {type: 'CLIENT', url: 'https://github.com/APPS-sookmyung/2025-Clip.git'},
      {type: 'LINK', url: 'https://clip-8c9e0.web.app/'},
    ],
    members: [
      {
        name: '정지은',
        role: ['PM', '프론트엔드', '백엔드'],
        description: '',
        profileImage: JeongJieunImg,
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
      {type: 'CLIENT', url: 'https://github.com/APPS-sookmyung/2025-CommuTime'},
      {type: 'LINK', url: 'https://commutime.vercel.app/'},
    ],
    members: [
      {
        name: '김영교',
        role: '프론트엔드',
        description: '',
        profileImage: KimYoungkyoImg,
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
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2025-f-list.git',
      },
      {type: 'LINK', url: 'https://2025-f-list-w4qb.vercel.app/'},
    ],
    members: [
      {
        name: '이유나',
        role: '프론트엔드',
        description:
          '이번 신입 부원 프로젝트를 통해 처음 개발에 도전하고, 많은 것을 공부할 수 있는 시간이었습니다. 개발에 ㄱ자도 모르던 사람이었지만 학회 활동을 통한 스터디와 직접 개발하면서 부딪혔던 오류들을 해결하면서 이렇게 프로젝트의 마무리까지 올 수 있었던 것 같습니다. 직접 이용하고 싶던 서비스를 구상부터 개발까지 스스로 완성할 수 있어 너무 뿌듯합니다. ',
        profileImage: LeeYunaImg,
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
      {
        type: 'CLIENT',
        url: 'https://github.com/APPS-sookmyung/2025-HelloGiraffe.git',
      },
      {type: 'LINK', url: 'https://tjsl0607.github.io/2025-HelloGiraffe/'},
    ],
    members: [
      {
        name: '문예선',
        role: ['PM', '프론트엔드', '백엔드'],
        description: `이번 프로젝트를 하면서 가장 많이 배운 것은 포기하지 않는 법이었습니다. 처음 웹 프로그래밍 지식을 배울 때는 정말 이해되는 게 하나도 없어 재능이 없는 게 아닐지 두려웠습니다. 그러나 이 개인 프로젝트를 만들면서 하나씩 배워갈 수 있었습니다. 단순히 기술적 성장을 넘어서 끊임없이 배우기 위해 다양한 방법을 시도하면 언젠가는 그 지식을 나의 것으로 만들어낼 수 있겠다는 확신을 가질 수 있었습니다. 끝내는 프로젝트 중간 발표회에서 늘 시간이 없어서, 능력이 부족해서 못할 것 같다면서도 슬쩍 넣어봤던 LLM 도입도 해내었습니다. 이 과정은 정말 혼자였다면 못했을 것 같습니다. 함께 해준 앱스 부원들과 운영진분들 덕분에 함께 성장하는 가치도 배울 수 있었습니다. 앞으로는 이 경험을 바탕으로 더욱 더 성장할 수 있을 것 같습니다!`,
        profileImage: MunYeseonImg,
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
      {type: 'CLIENT', url: 'https://github.com/dahyun1060/2025-PodoRush'},
      {type: 'LINK', url: '2025-podo-rush.vercel.app'},
    ],
    members: [
      {
        name: '엄다현',
        role: '프론트엔드',
        description:
          '콘서트 가는 것을 좋아해 티켓팅을 게임처럼 구현해 보고자 포도러쉬 프로젝트를 진행했습니다. 이 프로젝트를 통해 리액트를 처음 접했고, 2학기 리액트 스터디와 병행하며 배운 내용을 직접 적용해 볼 수 있었습니다. 구현 과정에서 다양한 에러를 겪었지만 해결하며 리액트의 동작 원리를 이해하게 되었고, 처음으로 배포까지 경험하며 프로젝트의 전체 흐름을 배울 수 있었던 의미 있는 시간이었습니다.',
        profileImage: EomDahyunImg,
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
      {type: 'CLIENT', url: 'https://github.com/APPS-sookmyung/2025-Pouch'},
      {type: 'LINK', url: 'https://bucolic-daifuku-0a202b.netlify.app/'},
    ],
    members: [
      {
        name: '배송이',
        role: '프론트엔드',
        description: '',
        profileImage: BaeSongyiImg,
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
      {type: 'CLIENT', url: 'https://github.com/jimin-25/2025-starlist'},
      {type: 'LINK', url: 'https://2025-starlist.vercel.app/'},
    ],
    members: [
      {
        name: '한지민',
        role: '프론트엔드',
        description: `Starlist 프로젝트를 통해 개발에 대한 많은 지식과 경험을 쌓을 수 있어 좋았습니다. '어떤 것을 개발하면 좋을까?'부터 시작해서 계획을 세우고 직접 개발까지 해보면서 많은 것을 배울 수 있었습니다. 저의 첫 프로젝트인 Starlist를 개발한 경험은 잊지 못할 것 같습니다 !`,
        profileImage: HanJiminImg,
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
      {type: 'CLIENT', url: 'https://github.com/APPS-sookmyung/2025-Streco'},
      {type: 'LINK', url: 'https://2025-streco.vercel.app/'},
    ],
    members: [
      {
        name: '임유진',
        role: '프론트엔드',
        description:
          '최근 게임 경기에 관심을 가지게 되어 여러 방송들을 보다가 하이라이트를 개인적으로 기록할 수 있으면 좋을 것 같다는 생각에 Streco를 개발하게 되었습니다. 혼자 기획부터 개발까지 모든 걸 해야해서 처음에는 막막했지만, 부원들의 소중한 피드백 덕분에 수월하게 프로젝트를 진행할 수 있었어요. 디자인 수정이나 기능 구현 과정에서 시행착오도 많았지만, 그만큼 빠르게 성장하고 있다는 걸 느낄 수 있었고 세상에 하나 뿐인 웹사이트를 제작하게 되어 정말 뿌듯했습니다!',
        profileImage: LimYujinImg,
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
      {type: 'CLIENT', url: 'https://github.com/APPS-sookmyung/2025-ULTS'},
      {type: 'LINK', url: 'https://ults.netlify.app'},
    ],
    members: [
      {
        name: '윤소영',
        role: '프론트엔드',
        description: `안녕하세요. 12기 윤소영입니다. 이번에 'EMORY'에서 프론트엔드를 담당하였고, 개인 프로젝트로 편지 작성 서비스 'ULTS'를 개발하였습니다.`,
        profileImage: YoonSoyoungImg,
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
