import { useState } from "react";
import styles from "./App.module.css";
import BookDetails from "./components/BookDetails";
import BookList from "./components/BookList";
import FilterBar from "./components/FilterBar";
import { books } from "./data/books";
import { sortBooks } from "./sort";
import type { Book, GenreFilter, SortOption } from "./types";

export default function App() {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("domyślnie");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const normalizedQuery = query.trim().toLocaleLowerCase("pl");

  const visibleBooks = sortBooks(
    books.filter(
      (b) =>
        (genre === "wszystkie" || b.genre === genre) &&
        (!onlyAvailable || b.available) &&
        (b.title.toLocaleLowerCase("pl").includes(normalizedQuery) ||
          b.author.toLocaleLowerCase("pl").includes(normalizedQuery)),
    ),
    sortBy,
  );

  return (
    <div className={styles.shell}>
      <aside className={styles.sidebar}>
        <h1 className={styles.brand}>Katalog książek</h1>

        <p className={styles.stat}>
          <span className={styles.statLabel}>Znaleziono:</span>{" "}
          <span className={styles.statValue}>{visibleBooks.length}</span>
        </p>

        {!selectedBook && (
          <FilterBar
            genre={genre}
            onGenreChange={setGenre}
            onlyAvailable={onlyAvailable}
            onOnlyAvailableChange={setOnlyAvailable}
            query={query}
            onQueryChange={setQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
        )}
      </aside>

      <main className={styles.main}>
        {selectedBook ? (
          <BookDetails
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
          />
        ) : (
          <>
            <h2 className={styles.mainTitle}>Kolekcja</h2>
            <BookList books={visibleBooks} onSelectBook={setSelectedBook} />
          </>
        )}
      </main>
    </div>
  );
}
