import Activities from '../components/sections/Activities.jsx';
import ProjectsViewer from '../components/sections/ProjectsViewer.jsx';
import AboutSection from '../components/sections/AboutSection';
import MemberIntroSection from '../components/sections/MemberIntroSection';
import CtaSection from '../components/sections/CtaSection.jsx';
import FooterSection from '../components/sections/FooterSection.jsx';
import LandingPage from '../components/sections/LandingPage.jsx';

export default function MainPage() {
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
