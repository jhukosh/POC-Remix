import { Link } from "@remix-run/react";

export default function ReviewIndexPage() {
  return (
    <p>
      No review selected.{" "}
      <Link to="new" className="text-yellow-500 underline">
        Create a new review.
      </Link>
    </p>
  );
}
