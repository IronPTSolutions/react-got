import { useEffect } from "react";

function SearchBar({ search, onSearch }) {
  console.log("render");

  useEffect(() => {
    console.log("mount");

    document.getElementById("search").focus();

    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <input
      value={search}
      onChange={(event) => {
        onSearch(event.target.value);
      }}
      id="search"
      type="text"
      placeholder="Search"
      className="form-control mb-3"
    />
  );
}

export default SearchBar;
