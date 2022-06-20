import type { User } from "@prisma/client";
import type { Review } from "~/domain/review";
import { prisma } from "~/db.server";

export function createReview({
  body,
  title,
  userId,
}: Pick<Review, "body" | "title" | "isPublic" | "rating"> & {
  userId: User["id"];
}) {
  return prisma.review.create({
    data: {
      title,
      body,
      isPublic,
      rating,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
