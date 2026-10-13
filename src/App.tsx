import { useState } from "react";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import FilterBar from "./components/FilterBar";
import { books } from "./data/books";
import type { Book, GenreFilter } from "./types";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const normalizedQuery = query.trim().toLocaleLowerCase("pl");

  const visibleBooks = books.filter(
    (b) =>
      (genre === "wszystkie" || b.genre === genre) &&
      (!onlyAvailable || b.available) &&
      (b.title.toLocaleLowerCase("pl").includes(normalizedQuery) ||
        b.author.toLocaleLowerCase("pl").includes(normalizedQuery)),
  );

  if (selectedBook) {
    return (
      <>
        <h1>📚 Katalog książek</h1>
        <BookDetails
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      </>
    );
  }

  return (
    <>
      <h1>📚 Katalog książek</h1>
      <FilterBar
        genre={genre}
        onGenreChange={setGenre}
        onlyAvailable={onlyAvailable}
        onOnlyAvailableChange={setOnlyAvailable}
        query={query}
        onQueryChange={setQuery}
      />
      <p>Znaleziono: {visibleBooks.length}</p>
      <BookList books={visibleBooks} onSelectBook={setSelectedBook} />
    </>
  );
}
