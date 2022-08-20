import type { LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { getBooks } from "~/api/books";
import type { Book } from "~/domain/books";

// Search example
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const param = url.searchParams.get("search");

  if (param) return getBooks(param);
  return null;
};

export default function Index() {
  const search = useLoaderData();
  return (
    <main className="relative h-full min-h-screen bg-white">
      {/* Body */}
      <div className="flex h-[50%] flex-col items-center justify-center">
        <h1 className="text-xl font-bold">Books app</h1>
        <Form reloadDocument method="get" className="mt-4 w-full sm:w-1/2">
          <label className="flex flex-col py-2 font-bold">
            <input
              type="text"
              name="search"
              placeholder="Search by title or author"
              className="rounded border-2 py-2"
            />
          </label>
        </Form>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {search
          ? search.map((b: Book) => (
              <Link key={b.id} to={`/book/${b.id}`}>
                {b.volumeInfo.title}
                <img
                  src={b.volumeInfo.imageLinks?.smallThumbnail}
                  alt={`Cover of ${b.volumeInfo.title}`}
                />
              </Link>
            ))
          : null}
      </div>
    </main>
  );
}
