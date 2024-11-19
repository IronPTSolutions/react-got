import episodes from "../../data/episodes.json";
import Episode from "../episode/episode";

function EpisodeList({ season }) {
  return (
    <div className="d-flex flex-wrap">
      {episodes
        .filter((e) => e.season === season)
        .map((episode) => (
          <Episode
            key={episode.id}
            name={episode.name}
            description={episode.summary}
            season={episode.season}
            episode={episode.number}
            img={episode.image.medium}
          />
        ))}
    </div>
  );
}

export default EpisodeList;
