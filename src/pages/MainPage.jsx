import {useEffect} from 'react';
import Activities from '../components/sections/Activities.jsx';
import ProjectsViewer from '../components/sections/ProjectsViewer.jsx';
import AboutSection from '../components/sections/AboutSection';
import MemberIntroSection from '../components/sections/MemberIntroSection';
import CtaSection from '../components/sections/CtaSection.jsx';
import FooterSection from '../components/sections/FooterSection.jsx';
import LandingPage from '../components/sections/LandingPage.jsx';

export default function MainPage() {
  useEffect(() => {
    // URL 해시 제거
    if (window.location.hash) {
      window.history.replaceState(null, '', '/');
    }

    // Exit 버튼으로 돌아온 경우에만 스크롤
    const shouldScrollToProjects =
      sessionStorage.getItem('scrollToProjects') === 'true';

    if (shouldScrollToProjects) {
      sessionStorage.removeItem('scrollToProjects');
      setTimeout(() => {
        const element = document.getElementById('projects');
        if (element) {
          element.scrollIntoView({behavior: 'smooth'});
        }
      }, 100);
    } else {
      // 기본적으로 최상단으로
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main>
      <LandingPage />
      <ProjectsViewer />
      <Activities />
      <AboutSection />
      <MemberIntroSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
