import React, { useState } from "react";
import MiniMenuBar from "./components/mini_menu_bar/MiniMenuBar";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import NotesDetailsPage from "./pages/NotesDetailsPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import LandingPageDetailsPage from "./pages/LandingPageDetailsPage";
function App() {
  //Darkmode Theme
  const [darkmode, setDarkmode] = useState(true);

  const handleToggleDarkmode = () => {
    setDarkmode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={darkmode ? "dark" : " "}>
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
          </Routes>
          <MiniMenuBar
            handleToggleDarkmode={handleToggleDarkmode}
            darkMode={darkmode}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
