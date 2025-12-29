import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Activities from '../components/sections/Activities.jsx';
import ProjectsViewer from '../components/sections/ProjectsViewer.jsx';
import AboutSection from '../components/sections/AboutSection';
import MemberIntroSection from '../components/sections/MemberIntroSection';
import CtaSection from '../components/sections/CtaSection.jsx';
import FooterSection from '../components/sections/FooterSection.jsx';
import LandingPage from '../components/sections/LandingPage.jsx';

export default function MainPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects') {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    }
  }, [location]);

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
