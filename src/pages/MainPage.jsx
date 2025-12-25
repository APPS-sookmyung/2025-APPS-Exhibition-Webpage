import ProjectsViewer from '../components/sections/ProjectsViewer.jsx';
import AboutSection from '../components/sections/AboutSection';
import MemberIntroSection from '../components/sections/MemberIntroSection';
import CtaSection from '../components/sections/CtaSection.jsx';
import FooterSection from '../components/sections/FooterSection.jsx';

export default function MainPage() {
  return (
    <main>
      <ProjectsViewer />
      <AboutSection />
      <MemberIntroSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
