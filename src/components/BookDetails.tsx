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

      <header className={styles.hero}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}>{author}</p>
      </header>

      <div className={styles.layout}>
        <dl className={styles.meta}>
          <div>
            <dt>Rok wydania</dt>
            <dd>{year}</dd>
          </div>
          <div>
            <dt>Gatunek</dt>
            <dd>{genre}</dd>
          </div>
          <div className={styles.wide}>
            <dt>Ocena</dt>
            <dd>
              <span className={styles.stars}>
                {stars(rating)} <small>{rating}/5</small>
              </span>
              <span className={styles.track} aria-hidden="true">
                <span
                  className={styles.fill}
                  style={{ width: `${(rating / 5) * 100}%` }}
                />
              </span>
            </dd>
          </div>
        </dl>

        <aside className={styles.buy}>
          <span className={styles.buyLabel}>Cena</span>
          <span className={styles.price}>{formatPrice(price)}</span>
          {available ? (
            <Badge tone="success">Dostępna</Badge>
          ) : (
            <Badge tone="warning">Brak w magazynie</Badge>
          )}
        </aside>
      </div>
    </article>
  );
}
