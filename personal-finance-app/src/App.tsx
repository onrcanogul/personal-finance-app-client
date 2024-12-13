import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Activities from "./pages/activities/activities";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
