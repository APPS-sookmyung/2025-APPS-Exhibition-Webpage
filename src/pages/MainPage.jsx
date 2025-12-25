import ProjectsViewer from '../components/sections/ProjectsViewer.jsx';
import MemberIntroSection from '../components/sections/MemberIntroSection';
import CtaSection from '../components/sections/CtaSection.jsx';
import FooterSection from '../components/sections/FooterSection.jsx';

export default function MainPage() {
  return (
    <main>
      <ProjectsViewer />
      <MemberIntroSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
