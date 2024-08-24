import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Auth from "./auth/Auth";
import Planner from "./Page/Planner";
import DiscoverPage from "./Page/DiscoverPage";
import MenuPage from "./Page/MenuPage";
import Footer from "./components/Footer";
import ValidateUserRequ from "./Page/ValidateUserRequ";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Planner />} />
        <Route path="/val" element={<ValidateUserRequ />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
