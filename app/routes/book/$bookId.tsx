import { Form, useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/server-runtime";
import invariant from "tiny-invariant";
import { getBookById } from "~/api/books";
import { BookDetails } from "~/components/BookDetails";
import type { Book } from "~/domain/books";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.bookId, "Book id is required");
  const book = getBookById(params.bookId);
  return book;
};

export default function BookDetailsPage() {
  // TODO fallback in no book fetched
  const book = useLoaderData<Book>();
  return (
    <div>
      <h3 className="text-2xl font-bold">{book.volumeInfo.title}</h3>
      <BookDetails book={book} />
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-yellow-500  py-2 px-4 text-white hover:bg-yellow-600"
        >
          Add to my books (todo)
        </button>
      </Form>
    </div>
  );
}
