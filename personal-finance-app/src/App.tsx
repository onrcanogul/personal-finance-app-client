import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import ActivitiesPage from "./pages/activities/activities";
import Report from "./pages/report/report";
import { useEffect } from "react";
import { isTokenExpired, refreshTokenLogin } from "./services/user-service";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (isTokenExpired()) refreshTokenLogin();
  }, [navigate]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivitiesPage />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </>
  );
}

export default App;
