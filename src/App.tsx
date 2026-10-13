import { useState } from "react";
import BookList from "./components/BookList";
import FilterBar from "./components/FilterBar";
import { books } from "./data/books";
import type { GenreFilter } from "./types";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const visibleBooks = books.filter(
    (b) =>
      (genre === "wszystkie" || b.genre === genre) &&
      (!onlyAvailable || b.available),
  );

  return (
    <>
      <h1>📚 Katalog książek</h1>
      <FilterBar
        genre={genre}
        onGenreChange={setGenre}
        onlyAvailable={onlyAvailable}
        onOnlyAvailableChange={setOnlyAvailable}
      />
      <p>Znaleziono: {visibleBooks.length}</p>
      <BookList books={visibleBooks} />
    </>
  );
}
