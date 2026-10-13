import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: Book;
  onSelect: (book: Book) => void;
};

export default function BookCard({ book, onSelect }: BookCardProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <li
      className={styles.card}
      tabIndex={0}
      onClick={() => onSelect(book)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSelect(book);
      }}
    >
      <h3>{title}</h3>
      {available ? (
        <Badge tone="success">Dostępna</Badge>
      ) : (
        <Badge tone="warning">Brak w magazynie</Badge>
      )}
      <p>Autor: {author}</p>
      <p>Rok: {year}</p>
      <Badge>{genre}</Badge>
      <p>Ocena: {stars(rating)}</p>
      <p>Cena: {formatPrice(price)}</p>
    </li>
  );
}
