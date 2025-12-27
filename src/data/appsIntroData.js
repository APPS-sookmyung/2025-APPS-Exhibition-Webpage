// Member Images Import

// ROW 1 Members
import KwonYujinImg from '../assets/members/KwonYujin.jpg';
import KimJiminImg from '../assets/members/KimJimin.jpg';
import BangJiheeImg from '../assets/members/BangJihee.jpg';
import HaJiminImg from '../assets/members/HaJimin.jpg';
import YoonJeewonImg from '../assets/members/YoonJeewon.jpeg'; // .jpeg requested
import JeongJieunImg from '../assets/members/JeongJieun.png'; // .png from list

// ROW 2 Members
import BaekSuminImg from '../assets/members/BaekSumin.jpeg'; // .jpeg from list
import KimDoyeonImg from '../assets/members/KimDoyeon.jpg';
import KimYoungkyoImg from '../assets/members/KimYoungkyo.png'; // .png from list
import ShinJeongeunImg from '../assets/members/ShinJeongeun.jpg';
import MunYeseonImg from '../assets/members/MunYeseon.jpeg';
import LimYujinImg from '../assets/members/LimYujin.jpeg';

// ROW 3 Members
import BaeSongyiImg from '../assets/members/BaeSongyi.jpeg';
import EomDahyeonImg from '../assets/members/EomDahyeon.jpg';
import WooChaeaImg from '../assets/members/WooChaea.jpg';
import YoonSoyoungImg from '../assets/members/YoonSoyoung.jpg';
import LeeYunaImg from '../assets/members/LeeYuna.jpg';
import HanJiminImg from '../assets/members/HanJimin.jpg';

// 첫 번째 줄 데이터
export const ROW_1_DATA = [
  {
    id: 'r1-1',
    type: 'member',
    name: '권유진',
    subText: '11기 · Computer Science 23',
    avatarImage: KwonYujinImg,
    message:
      '이전에는 막연하게 프로젝트 해야지~ 생각하기만 했는데 직접 참여하면서 피부에 닿는 경험으로 배워갈 수 있었습니다. 앞으로의 개발에 새로운 방향성을 얻게된 기분입니다! 올 한 해 정말 뜻깊고 잊을 수 없는 해인 것 같습니다.',
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
    avatarImage: KimJiminImg,
    message:
      'APPS에서 정말 많이 배웠습니다. 작년 APPS 이전의 저는 파이썬의 ㅍ도 몰랐던 시절이였기에, 말로 표현하기 어려울 만큼 성장했다고 할 수 있을 것 같습니다. APPS 부원들과 여러 프로젝트들을 진행하고, 수상까지 이어지는 그 모든 과정이 제게는 정말 소중하고 값진 경험이었습니다. 사랑합니다 APPS❤',
  },
  {
    id: 'r1-4',
    type: 'member',
    name: '방지희',
    subText: '11기 · Computer Science 24',
    avatarImage: BangJiheeImg,
    message:
      '1학년 1학기에 APPS에 들어오고 벌써 2년이 되어가는데, 제 대학생활의 대부분이 APPS와 함께였다고 해도 과언이 아닐 만큼 많은 성장을 했어요! 인생 첫 프로젝트를 APPS에서 진행하며 기술적으로도 성장했고, 데브톡 시간에 선배님들의 진솔한 이야기를 들으며 제 진로와 미래에 대해 깊이 고민할 수 있는 시간도 많았어요! 지금은 제가 어떤 길을 가고 싶은지 탐색하고, 새로운 것에 도전하는 데 두려움이 훨씬 줄어든 사람이 되었어요. APPS에게 너무 감사합니다.🙇‍♀️',
  },
  {
    id: 'r1-5',
    type: 'member',
    name: '하지민',
    subText: '11기 · Computer Science 23',
    avatarImage: HaJiminImg,
    message:
      'APPS에서 처음 개발을 시작해 같이 개발하고 얘기할 친구들도 얻어서 정말 기술적인 성장과 소중한 인연을 얻은 것 같아요!',
  },
  {
    id: 'r1-6',
    type: 'member',
    name: '윤지원',
    subText: '11기 · Computer Science 23',
    avatarImage: YoonJeewonImg,
    message:
      '운영진으로서 책임감을 갖고 다양한 프로젝트에 풀스택으로 참여하면서 개발에 대한 시야가 넓어진 것 같아요!',
  },
  {
    id: 'r1-7',
    type: 'member',
    name: '정지은',
    subText: '12기 · Computer Science 23',
    avatarImage: JeongJieunImg,
    message:
      '신입부원 프로젝트를 통해 기획부터 개발, 디자인까지 혼자 힘으로 해보며 큰 경험이 되었습니다. 그리고 팀원들과 오픈소스 개발자 대회에 참여하여 처음으로 규모가 큰 개발을 해보며 부족한 점도 많이 깨닫고 더 공부하고 많이 해봐야겠다고 느꼈습니다.',
  },
];

// 두 번째 줄 데이터
export const ROW_2_DATA = [
  {
    id: 'r2-1',
    type: 'member',
    name: '백수민',
    subText: '11기 · Computer Science 23',
    avatarImage: BaekSuminImg,
    message:
      'APPS에 들어오기 전의 저는 솔직히 말해 남들 앞에 나서는 것도, 새로운 도전에 뛰어드는 것도 두려워하던 사람이었습니다. 하지만 APPS에서 서로의 성장을 진심으로 응원하는 환경 속에서 지내다 보니 용기를 내어 도전하게 되었습니다. 1년간 APPS 활동을 통해 기술적으로도 한 사람으로서도 한 단계 더 성장할 수 있었습니다. APPS에서의 경험를 바탕으로 내년에도 새로운 환경과 과제들 속에서 계속 배우고, 작은 도전들을 차근차근 이어가며 저만의 속도로 성장해 나가려고 합니다! 고마워요 APPS 😊',
  },
  {
    id: 'r2-2',
    type: 'member',
    name: '김도연',
    subText: '12기 · Computer Science 24',
    avatarImage: KimDoyeonImg,
    message:
      'APPS 전에 저는 발표하는 것 자체를 부담스러워했는데, APPS에서 대면 발표도 하고 스터디 발표도 자주 하면서 이제는 사람들 앞에서 이야기하는 일이 훨씬 자연스럽고 익숙해졌습니다. 또 새로운 걸 시작할 때 예전처럼 두려워하기보다, 한 번 해보자는 생각으로 더 편하게 도전할 수 있게 된 것 같아요.',
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
    avatarImage: KimYoungkyoImg,
    message:
      '정말 열정적인 분들이 많다는 걸 느꼈어요. 학번이나 나이에 상관없이 모두가 마치 몸이 두 개라도 되는 것처럼 적극적이었고, 그 점에서 부원분들께 많이 배웠습니다. 혼자였다면 절대 해보지 못했을 경험들도 함께해보고, 대회에도 나가면서 조금이나마 성장할 수 있었던 것 같아요.',
  },
  {
    id: 'r2-5',
    type: 'member',
    name: '신정은',
    subText: '11기 · Computer Science 24',
    avatarImage: ShinJeongeunImg,
    message:
      'APPS에서 만나게 된 동기, 선배들을 보며 많은 동기부여를 받았습니다. 꼭 개발이 아니더라도, 항상 도전하는 모습을 보며 저도 더욱 열정적으로 학기를 보냈던 것 같아요!',
  },
  {
    id: 'r2-6',
    type: 'member',
    name: '문예선',
    subText: '12기 · Computer Science 25',
    avatarImage: MunYeseonImg,
    message:
      'APPS 활동 전에는 개발과 배포가 막연하고 어렵게만 느껴졌습니다. 하지만 신입 부원 스터디와 프로젝트 발표, 그리고 피드백 과정을 거치며 개발을 대하는 태도가 완전히 바뀌었습니다. 이 과정에서 기술적인 지식도 늘었지만 어떤 문제든 부딪히면 해결할 수 있다는 확신을 얻게 되었습니다. 새로운 기술 앞에서의 막연한 두려움을 설렘과 도전 의식으로 바꿀 수 있는 단단한 개발자에 한 걸음 다가간 것 같습니다!',
  },
  {
    id: 'r2-7',
    type: 'member',
    name: '임유진',
    subText: '12기 · Computer Science 25',
    avatarImage: LimYujinImg,
    message:
      '도전하는 용기와 열정을 배웠어요. 새로운 걸 시도하면 실패할까 두려웠고, 열심히 해서 결과가 나오지 않는 게 무서워 열정과도 거리가 먼 사람이었어요. 하지만 누구보다 하루하루를 불태우는 APPS 부원들을 보며 의미 없이 지나가는 시간들이 점점 아깝다는 생각이 들기 시작했어요. 그래서 가만히 있지 말고 기회가 찾아오면 시도해보기로 마음 먹었어요. 덕분에 1년간 React, Spring, Unity, Next.js 스터디와 여러 프로젝트도 진행할 수 있었어요!',
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
    avatarImage: BaeSongyiImg,
    message:
      '개발에 있어 어떤 스택이 필요한지도 거의 모르는 상태에서 APPS에 들어왔는데, 1년동안 개발 지식 뿐만 아니라 방향성까지도 많이 배운 것 같습니다. 기술적인 부족함보다도 뭘 해야 배울 수 있을 지 잘 몰라 막막했는데, 여러 활동을 통해 열심히 사는 부원들을 보고 관련 인사이트를 얻은 것 같아요! 1년동안 정말 많은 것을 배운 앱스! 진로가 막막한 분들에게도, 열정적으로 사는 걸 좋아하는 분들에게도 추천합니다.',
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
    avatarImage: EomDahyeonImg,
    message:
      'Emory 팀 프로젝트에 참여하면서 끈기를 배운 것 같습니다. 오랫동안 해결이 안되는 오류들을 마주칠 때마다 포기하고 싶었지만 계속 시도해서 해결했을 때 뿌듯하고 기뻤습니다.',
  },
  {
    id: 'r3-4',
    type: 'member',
    name: '우채아',
    subText: '12기 · Computer Science 23',
    avatarImage: WooChaeaImg,
    message:
      'APPS에 들어오기 전의 저는 프로젝트를 해봐야 한다는 조급한 마음은 있었지만 정작 어디서부터, 누구와 해야 할지 몰라 막막했습니다. APPS에서의 1년은 단순히 개발 실력 향상뿐 아니라, 다양한 경험을 통해 내가 좋아하고 잘하는 일이 무엇인지를 찾아가는 소중한 과정이었습니다.',
  },
  {
    id: 'r3-5',
    type: 'member',
    name: '윤소영',
    subText: '12기 · Computer Science 23',
    avatarImage: YoonSoyoungImg,
    message:
      '소프트웨어학부를 다니면서 개발은 해봐야 하지 않겠어?라는 생각을 가지고 APPS에 들어왔습니다. 들어와 보니 부원들은 정말 갓생을 살고 있더군요... 3학년이지만 경험이 없던 저에게 이 경험은 열정을 불어넣어 줬습니다. 1년 활동이 마무리된 지금, 저는 APPS에 들어오기 전과 정반대의 스펙을 가지게 되었습니다. 1년 동안 한 일 중 가장 잘한 일을 고르라면 당연히 APPS에 들어온 일을 고를 거예요!',
  },
  {
    id: 'r3-6',
    type: 'member',
    name: '이유나',
    subText: '12기 · Computer Science 23',
    avatarImage: LeeYunaImg,
    message:
      '새내기인 저로서 APPS 활동은 정말 ‘하길 너무 잘했다!’ 싶은 활동이었어요. APPS를 하지 않았다면 제 대학 첫 1년이 얼마나 무의미하게 흘러갔을까 싶어요. 아무것도 모르는 감자였던 저지만, 열심히 공부하고 활동하시는 선배님들 아래에서 저도 자연스럽게 더 배우고 흥미를 붙일 수 있었던 것 같아요. 덕분에 첫 1년을 정말 밀도 있게 보냈다는 게 너무 뿌듯하고, 좋은 사람들을 많이 만날 수 있어서 정말 행복한 활동이었습니다!',
  },
  {
    id: 'r3-7',
    type: 'member',
    name: '한지민',
    subText: '12기 · Computer Science 23',
    avatarImage: HanJiminImg,
    message:
      '처음에는 아무것도 몰랐지만 다양한 스터디를 통해 개발의 기초 지식을 쌓고 기술 스택을 함께 공부하며 부족한 부분을 서로 공유할 수 있었습니다. 평소 도전을 두려워하던 저도 열정적이고 뛰어난 사람들을 보며 좋은 자극을 받아 많이 부족하더라도 시도해보려는 도전 자세를 갖게 되었습니다. APPS는 저에게 기술적인 성장뿐만 아니라 개인적인 성장까지 이루게 해준 소중한 경험입니다 !',
  },
];
