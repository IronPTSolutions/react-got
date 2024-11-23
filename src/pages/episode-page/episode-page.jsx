import { Link, useParams } from "react-router-dom";
import Episode from "../../components/episode/episode";

import episodes from "../../data/episodes.json";

function EpisodePage() {
  const params = useParams();

  const episode = episodes.find((e) => e.id.toString() === params.id);

  return (
    <div>
      <h1>Episode #{episode.id}</h1>
      <Link to="/">Home</Link>

      <Episode
        name={episode.name}
        description={episode.summary}
        season={episode.season}
        episode={episode.number}
        img={episode.image.medium}
      />
    </div>
  );
}

export default EpisodePage;
