import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProjectDetail from './pages/ProjectDetail';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/projects/:slug' element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
