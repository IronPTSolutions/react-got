function Episode({ img, name, description, season, episode }) {
  return (
    <div className="card m-2">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <small className="card-text">
          S{season} E{episode}
        </small>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Episode;
