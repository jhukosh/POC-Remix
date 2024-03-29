import { Form, Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export const Header = () => {
  const user = useOptionalUser();
  
  return (
    <div className="flex flex-col justify-end sm:flex-row">
      {user ? (
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            to="/my-books"
            className="flex items-center justify-center rounded border border-transparent bg-white px-4 py-2 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50"
          >
            My Books
          </Link>
          <Link
            to="/reviews"
            className="flex items-center justify-center rounded border border-transparent bg-white px-4 py-2 text-base font-medium text-yellow-700 shadow-sm hover:bg-yellow-50"
          >
            My reviews
          </Link>
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="rounded bg-yellow-500 py-2 px-4 text-white hover:bg-yellow-600 "
            >
              Logout
            </button>
          </Form>
        </div>
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
  );
};
