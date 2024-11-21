import { useState } from "react";
import Header from "./components/header/header";
import SeasonFilter from "./components/season-filter/season-filter";
import EpisodeList from "./components/episode-list/episode-list";
import SearchBar from "./components/search-bar/search-bar";

function App() {
  const [season, setSeason] = useState(2);
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  return (
    <div>
      <Header />

      <main className="container">
        <button
          className="btn btn-primary btn-sm mb-2"
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          toggle search
        </button>

        {showSearch && <SearchBar search={search} onSearch={setSearch} />}

        <SeasonFilter
          season={season}
          onFilter={(season) => {
            setSeason(season);
          }}
        />

        <EpisodeList season={season} search={search} />
      </main>
    </div>
  );
}

export default App;
