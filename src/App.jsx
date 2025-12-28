import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectDetailPage from './pages/ProjectDetailPage';
import MainPage from './pages/MainPage';
import GAListener from './GAListener';
import ScrollToTop from './components/ScrollToTop';

export function App() {
  return (
    <BrowserRouter>
      <GAListener />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects/:slug' element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
