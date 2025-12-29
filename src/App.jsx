import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom';
import ProjectDetailPage from './pages/ProjectDetailPage';
import MainPage from './pages/MainPage';
import GAListener from './GAListener';
import ScrollToTop from './components/ScrollToTop';

function ProjectDetailWrapper() {
  const {slug} = useParams();
  return <ProjectDetailPage key={slug} />;
}

export function App() {
  return (
    <BrowserRouter>
      <GAListener />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects/:slug' element={<ProjectDetailWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}
