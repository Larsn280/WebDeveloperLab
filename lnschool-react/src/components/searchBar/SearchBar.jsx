import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const onSearchChangeHandler = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const onSubmit = (search) => {};

  return (
    <form onSubmit={onSubmit()}>
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearchChangeHandler}
      />
    </form>
  );
}

export default SearchBar;
