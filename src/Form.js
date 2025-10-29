
import React, { useState, useEffect } from "react";

function Form({ records, setNewRecords }) {
  const [filters, setFilters] = useState({
    genre: "",
    artist: "",
    keyword: "",
  });

  const [genres, setGenres] = useState([]);
  const [artists, setArtists] = useState([]);

  
  useEffect(() => {
    if (records.length > 0) {
      const uniqueGenres = [
        ...new Set(records.map((r) => r.genre).filter(Boolean)),
      ];
      const uniqueArtists = [
        ...new Set(records.map((r) => r.artist).filter(Boolean)),
      ];
      setGenres(uniqueGenres);
      setArtists(uniqueArtists);
    }
  }, [records]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let filtered = [...records];

    if (filters.genre) {
      filtered = filtered.filter(
        (r) => r.genre.toLowerCase() === filters.genre.toLowerCase()
      );
    }

    if (filters.artist) {
      filtered = filtered.filter(
        (r) => r.artist.toLowerCase() === filters.artist.toLowerCase()
      );
    }

    if (filters.keyword.trim() !== "") {
      filtered = filtered.filter(
        (r) =>
          r.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
          r.description.toLowerCase().includes(filters.keyword.toLowerCase())
      );
    }

    setNewRecords(filtered);
  }

  function handleReset() {
    setFilters({ genre: "", artist: "", keyword: "" });
    setNewRecords(records);
  }

  return (
    <div id="filter-form-container">
      <form id="record-filter-form" onSubmit={handleSubmit}>
        <select
          name="genre"
          value={filters.genre}
          onChange={handleChange}
          className="filter-select"
        >
          <option value="">All Genres</option>
          {genres.map((g, idx) => (
            <option key={idx} value={g}>
              {g.charAt(0).toUpperCase() + g.slice(1)}
            </option>
          ))}
        </select>

        <select
          name="artist"
          value={filters.artist}
          onChange={handleChange}
          className="filter-select"
        >
          <option value="">All Artists</option>
          {artists.map((a, idx) => (
            <option key={idx} value={a}>
              {a}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="keyword"
          placeholder="Search by title or description..."
          value={filters.keyword}
          onChange={handleChange}
          className="filter-input"
        />

        <button type="submit" className="filter-btn">Filter</button>
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </form>
    </div>
  );
}

export default Form;
