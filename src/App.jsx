import {useRoutes} from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function App() {
  return useRoutes([{path: '/', element: <MainPage />}]);
}
