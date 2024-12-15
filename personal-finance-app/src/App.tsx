import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import ActivitiesPage from "./pages/activities/activities";
import Report from "./pages/report/report";
import Auth from "./pages/auth/auth";
import { useEffect } from "react";
import { isTokenExpired, refreshTokenLogin } from "./services/user-service";
import Budget from "./pages/budget/budget";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import Portfolio from "./pages/portfolio/portfolio";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("accessToken"))
      if (isTokenExpired()) refreshTokenLogin();
  }, [navigate]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<ActivitiesPage />} />
        <Route path="/report" element={<Report />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
