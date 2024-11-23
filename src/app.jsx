import Header from "./components/header/header";
import HomePage from "./pages/home/home-page";
import FavsPage from "./pages/favs/favs-page";
import { Route, Routes } from "react-router-dom";
import EpisodePage from "./pages/episode-page/episode-page";

function App() {
  return (
    <div>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/episodes/:id" element={<EpisodePage />} />
          <Route path="/favs" element={<FavsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
