import { Outlet } from "@remix-run/react";

export default function BookIndexPage() {
  return (
    <div>
      <p>Book details</p>
      <Outlet />
    </div>
  );
}
