// src/App.jsx
import {useRoutes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutSection from './components/sections/AboutSection';

export default function App() {
  return useRoutes([
    {path: '/', element: <MainPage />},
    {path: '/about', element: <AboutSection />},
  ]);
}
