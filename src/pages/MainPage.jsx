import ProjectsViewer from '../components/sections/ProjectsViewer.jsx';
import CtaSection from '../components/sections/CtaSection.jsx';
import FooterSection from '../components/sections/FooterSection.jsx';

export default function MainPage() {
  return (
    <main>
      <ProjectsViewer />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
