import BookList from "./components/BookList";
import { books } from "./data/books";

// TODO (Zadanie 4): dodaj filtrowanie po gatunku i dostępności (komponent <FilterBar />).

export default function App() {
  return (
    <>
      <h1>📚 Katalog książek</h1>
      <BookList books={books} />
    </>
  );
}
