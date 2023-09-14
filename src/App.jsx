import "./App.css";
import { useState, useEffect } from "react";
import FetchM from "./helper/FetchMovies";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetails";
import { Home } from "./pages/Home";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const topMovies = await FetchM();
      setMovies(topMovies);
      setLoading(false);
    }

    fetchData();
  }, []);

  if (loading) {
    return <span className="loader">...</span>;
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
