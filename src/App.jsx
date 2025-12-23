// src/App.jsx
import {useRoutes} from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutSection from './components/AboutSection'; // 1. 내 컴포넌트 import 살리기

export default function App() {
  // 2. 팀원의 라우팅 구조(useRoutes)를 사용하되, 내 컴포넌트도 경로에 추가
  return useRoutes([
    {path: '/', element: <MainPage />}, // 기본 주소는 메인페이지
    {path: '/about', element: <AboutSection />}, // '/about' 주소로 가면 내꺼 보여주기
  ]);
}
