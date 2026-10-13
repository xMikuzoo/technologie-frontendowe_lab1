import type { GenreFilter } from "../types";

type FilterProps = {
  genre: GenreFilter;
  onlyAvailable: boolean;
  onGenreChange: (genre: GenreFilter) => void;
  onOnlyAvailableChange: (value: boolean) => void;
  query: string;
  onQueryChange: (value: string) => void;
};

export default function Filter({
  genre,
  onlyAvailable,
  onGenreChange,
  onOnlyAvailableChange,
  query,
  onQueryChange,
}: FilterProps) {
  const options: GenreFilter[] = [
    "wszystkie",
    "fantastyka",
    "kryminał",
    "reportaż",
    "informatyka",
  ];

  return (
    <div>
      <label htmlFor="searchQuery">Szukaj po tytule lub autorze</label>
      <input
        id="searchQuery"
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      <label htmlFor="genreFilter">Filtruj po gatunku</label>
      <select
        id="genreFilter"
        value={genre}
        onChange={(e) => onGenreChange(e.target.value as GenreFilter)}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <label>
        <input
          type="checkbox"
          checked={onlyAvailable}
          onChange={(e) => onOnlyAvailableChange(e.target.checked)}
        />
        Tylko dostępne
      </label>
    </div>
  );
}
