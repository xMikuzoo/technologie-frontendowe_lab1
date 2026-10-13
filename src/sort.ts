import type { Book, SortOption } from "./types";

/** Zwraca posortowaną kopię tablicy - oryginał pozostaje bez zmian. */
export const sortBooks = (books: Book[], sortBy: SortOption): Book[] => {
  const sorted = [...books];

  switch (sortBy) {
    case "tytuł":
      return sorted.sort((a, b) => a.title.localeCompare(b.title, "pl"));
    case "cena-rosnąco":
      return sorted.sort((a, b) => a.price - b.price);
    case "cena-malejąco":
      return sorted.sort((a, b) => b.price - a.price);
    case "ocena":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "rok":
      return sorted.sort((a, b) => b.year - a.year);
    default:
      return sorted;
  }
};
