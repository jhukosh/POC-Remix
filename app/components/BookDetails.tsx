import type { Book } from "~/domain/books";

type BookDetailsProps = {
  book: Book;
};

export const BookDetails = ({ book }: BookDetailsProps) => {
  return <div>{book.synopsis}</div>;
};
