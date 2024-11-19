function SeasonFilter({ season, onFilter }) {
  const seasons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      {seasons.map((s) => (
        <button
          key={s}
          type="button"
          onClick={() => {
            onFilter(s);
          }}
          className={`${season === s ? "active " : ""}btn btn-outline-primary`}
        >
          S{s}
        </button>
      ))}
    </div>
  );
}

export default SeasonFilter;
