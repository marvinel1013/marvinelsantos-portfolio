import React, { useEffect, useState } from "react";
import MiniMenuBar from "./components/mini_menu_bar/MiniMenuBar";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import NotesDetailsPage from "./pages/NotesDetailsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import LandingPageDetailsPage from "./pages/LandingPageDetailsPage";
import SplashScreen from "./components/splash_screen/SplashScreen";
import PorfolioDetailsPage from "./pages/PorfolioDetailsPage";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //Darkmode Theme
  const [darkmode, setDarkmode] = useState(true);
  const [onSplash, setOnSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOnSplash(false);
    }, 1780);
  }, []);

  const handleToggleDarkmode = () => {
    setDarkmode((prevMode) => !prevMode);
  };

  AOS.init({
    duration: 1200,
    offset: 0,
  });

  return (
    <Router>
      <div className={darkmode ? "dark" : " "}>
        {onSplash ? (
          <SplashScreen />
        ) : (
          <div className="dark:bg-dark bg-light">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/todoDetails" element={<TodoDetailsPage />} />
              <Route path="/recipeDetails" element={<RecipeDetailsPage />} />
              <Route path="/notesDetails" element={<NotesDetailsPage />} />
              <Route path="/movieDetails" element={<MovieDetailsPage />} />
              <Route
                path="/landingPageDetails"
                element={<LandingPageDetailsPage />}
              />
              <Route
                path="/portfolioDetails"
                element={<PorfolioDetailsPage />}
              />
            </Routes>
            <MiniMenuBar
              handleToggleDarkmode={handleToggleDarkmode}
              darkMode={darkmode}
            />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
