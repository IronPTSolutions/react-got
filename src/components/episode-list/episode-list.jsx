import episodes from "../../data/episodes.json";
import Episode from "../episode/episode";

function EpisodeList({ season, search }) {
  return (
    <div className="d-flex flex-wrap">
      {episodes
        .filter((e) => e.season === season)
        .filter((e) => e.name.includes(search))
        .map((episode) => (
          <Episode
            key={episode.id}
            name={episode.name}
            description={episode.summary}
            season={episode.season}
            episode={episode.number}
            img={episode.image.medium}
            id={episode.id}
          />
        ))}
    </div>
  );
}

export default EpisodeList;
