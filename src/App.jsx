import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectDetailPage from './pages/ProjectDetailPage';
import MainPage from './pages/MainPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects/:slug' element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
