import { Link } from "react-router-dom";

function Episode({ id, img, name, description, season, episode }) {
  return (
    <div className="w-25 p-3">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={`/episodes/${id}`}>{name}</Link>
          </h5>
          <small className="card-text">
            S{season} E{episode}
          </small>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Episode;
