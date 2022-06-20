import type { LoaderFunction } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { getBooks } from "~/api/books";
import type { Book } from "~/domain/books";

import { useOptionalUser } from "~/utils";

// Search example
export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const param = url.searchParams.get("search");

  if (param) return getBooks(param);
  return null;
};

export default function Index() {
  const user = useOptionalUser();
  const search = useLoaderData();
  console.log("search", search);
  return (
    <main className="relative min-h-screen bg-white p-2">
      <div className="flex flex-col justify-between sm:flex-row">
        <h1 className="flex justify-center text-gray-500">Books app</h1>
        {user ? (
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
              Logout
            </button>
          </Form>
        ) : (
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/join"
              className="flex items-center justify-center rounded border border-transparent bg-white px-4 py-2 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="flex items-center justify-center rounded bg-yellow-500 px-4 py-2 font-medium text-white hover:bg-yellow-600"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
      <div>
        <Form reloadDocument method="get">
          <label className="flex flex-col py-2 font-bold">
            Search
            <input
              type="text"
              name="search"
              placeholder="Type a title"
              className="rounded border-2 py-2"
            />
          </label>
        </Form>
        {user ? (
          <Link
            to="/notes"
            className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50 sm:px-8"
          >
            View Notes for {user.email}
          </Link>
        ) : null}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {search
          ? search.map((b: Book) => (
              <div key={b.id}>
                {b.volumeInfo.title}
                <img
                  src={b.volumeInfo.imageLinks.smallThumbnail}
                  alt={`Cover of ${b.volumeInfo.title}`}
                />
              </div>
            ))
          : null}
      </div>
    </main>
  );
}
