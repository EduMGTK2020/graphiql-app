import { Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import NotFoundPage from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={uuid()} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
