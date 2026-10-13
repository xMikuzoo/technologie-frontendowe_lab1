import type { Book } from "../types";
import { formatPrice, stars } from "../utils";
import Badge from "./Badge";
import styles from "./BookDetails.module.css";

type BookDetailsProps = {
  book: Book;
  onClose: () => void;
};

export default function BookDetails({ book, onClose }: BookDetailsProps) {
  const { title, author, year, genre, rating, price, available } = book;

  return (
    <article className={styles.details}>
      <button type="button" onClick={onClose}>
        ← Wróć do listy
      </button>
      <h2>{title}</h2>
      <p className={styles.badges}>
        <Badge>{genre}</Badge>
        {available ? (
          <Badge tone="success">Dostępna</Badge>
        ) : (
          <Badge tone="warning">Brak w magazynie</Badge>
        )}
      </p>
      <dl className={styles.meta}>
        <dt>Autor</dt>
        <dd>{author}</dd>
        <dt>Rok wydania</dt>
        <dd>{year}</dd>
        <dt>Ocena</dt>
        <dd>{stars(rating)}</dd>
        <dt>Cena</dt>
        <dd>{formatPrice(price)}</dd>
      </dl>
    </article>
  );
}
