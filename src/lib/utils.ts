import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function convertISODateStringForDateInput(
  date: Date | string | undefined,
) {
  if (!date) return undefined;
  if (typeof date !== "string") return date.toISOString().split("T")[0];
  return date.split("T")[0];
}
