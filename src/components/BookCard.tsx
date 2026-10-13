import { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookCard.module.css";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <li className={`${styles.card}`}>
      <h3>{book.title}</h3>
      {book.available ? (
        <Badge tone="success">Dostępna</Badge>
      ) : (
        <Badge tone="warning">Niedostępna</Badge>
      )}
      <p>Autor: {book.author}</p>
      <p>Rok: {book.year}</p>
      <Badge>{book.genre}</Badge>
      <p>Ocena: {stars(book.rating)}</p>
      <p>Cena: {formatPrice(book.price)}</p>
    </li>
  );
}
