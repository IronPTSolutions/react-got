import { useState } from "react";
import Header from "./components/header/header";
import SeasonFilter from "./components/season-filter/season-filter";
import EpisodeList from "./components/episode-list/episode-list";

function App() {
  const [season, setSeason] = useState(2);

  return (
    <div>
      <Header />

      <main className="container">
        <SeasonFilter
          season={season}
          onFilter={(season) => {
            setSeason(season);
          }}
        />

        <EpisodeList season={season} />
      </main>
    </div>
  );
}

export default App;
