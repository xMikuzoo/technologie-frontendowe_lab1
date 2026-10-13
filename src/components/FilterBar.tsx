import type { GenreFilter, SortOption } from "../types";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "domyślnie", label: "Domyślnie" },
  { value: "tytuł", label: "Tytuł (A–Z)" },
  { value: "cena-rosnąco", label: "Cena: od najniższej" },
  { value: "cena-malejąco", label: "Cena: od najwyższej" },
  { value: "ocena", label: "Ocena: od najwyższej" },
  { value: "rok", label: "Rok: od najnowszych" },
];

type FilterBarProps = {
  genre: GenreFilter;
  onlyAvailable: boolean;
  onGenreChange: (genre: GenreFilter) => void;
  onOnlyAvailableChange: (value: boolean) => void;
  query: string;
  onQueryChange: (value: string) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
};

export default function FilterBar({
  genre,
  onlyAvailable,
  onGenreChange,
  onOnlyAvailableChange,
  query,
  onQueryChange,
  sortBy,
  onSortChange,
}: FilterBarProps) {
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
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="sortBy">Sortuj</label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
      >
        {sortOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
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
