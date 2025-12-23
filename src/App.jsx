import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetailPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projects/:slug' element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
