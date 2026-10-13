import { useState } from "react";
import { Book, Genre } from "../types";
import BookCard from "./BookCard";
import styles from "./BookList.module.css";
import FilterBar from "./FilterBar";

type BookListProps = {
  books: Book[];
};
export type GenreFilter = Genre | "wszystkie";

export default function BookList({ books }: BookListProps) {
  const [genre, setGenre] = useState<GenreFilter>("wszystkie");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const visibleBooks = books.filter(
    (b) =>
      (genre === "wszystkie" || b.genre === genre) &&
      (!onlyAvailable || b.available),
  );

  return (
    <>
      <FilterBar
        genre={genre}
        onGenreChange={setGenre}
        onlyAvailable={onlyAvailable}
        onOnlyAvailableChange={setOnlyAvailable}
      />
      {books.length <= 0 ? (
        <p>Brak książek spełniających kryteria</p>
      ) : (
        <ul className={`${styles.grid}`}>
          {visibleBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      )}
    </>
  );
}
