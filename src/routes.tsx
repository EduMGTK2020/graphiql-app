import MainPage from './pages/Main';
import WelcomePage from './pages/Welcome';
import SignPage from './pages/Sign';

const routes = [
  {
    path: '/',
    link: 'Welcome',
    name: 'Welcome page',
    element: <WelcomePage />,
  },
  {
    path: '/main',
    link: 'Main',
    name: 'Main page',
    element: <MainPage />,
  },
  {
    path: '/auth',
    link: 'SignIn/SignUp',
    name: 'Sign page',
    element: <SignPage />,
  },
];

export default routes;
