import React, { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import HeaderPage from "./pages/Header/HeaderPage";
import BadgesEarned from "./pages/BadgesEarned/BadgesEarned";
import Projects from "./pages/Projects/Projects";
import YearlyOverview from "./pages/YearlyOverview/YearlyOverview";
import PerformanceInsights from "./pages/PerformanceInsights/PerformanceInsights";

function App() {
  return (
    <>
      <HeaderPage />
      <BadgesEarned />
      <Projects />
      <YearlyOverview />
      <PerformanceInsights />
    </>
  );
}

export default App;
