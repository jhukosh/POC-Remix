import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getBooks } from "~/api/books";
import type { Book } from "~/domain/books";

type LoaderData = {
  booksList: Book[];
};

export const loader: LoaderFunction = async () => {
  const booksList = await getBooks("kundera");
  console.log("bookList", booksList);
  return json<LoaderData>({ booksList });
};

export default function BookPage() {
  // const data = useLoaderData() as LoaderData;
  return (
    <div className="flex h-full min-h-screen flex-col">
      TO DO - My saved books + link to book reviews
    </div>
  );
}
