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
      <div className={styles.top}>
        <span>{genre}</span>
        <span>{year}</span>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.author}>{author}</p>

      <p className={styles.rating}>
        <span className={styles.stars}>{stars(rating)}</span>
        <span className={styles.ratingValue}>{rating}/5</span>
      </p>

      <div className={styles.footer}>
        <span className={styles.price}>{formatPrice(price)}</span>
        {available ? (
          <Badge tone="success">Dostępna</Badge>
        ) : (
          <Badge tone="warning">Brak w magazynie</Badge>
        )}
      </div>
    </li>
  );
}
