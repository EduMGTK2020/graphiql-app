import { Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";

import NotFoundPage from "./pages/NotFound";
import HeaderApp from "./components/Header";
import FooterApp from "./components/Footer";
import routes from "./routes";

import "./App.css";

export default function App() {
  return (
    <>
      <div className="page_layout">
        <HeaderApp />
        <Routes>
          {routes.map((route) => (
            <Route {...route} key={uuid()} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FooterApp />
      </div>
    </>
  );
}
