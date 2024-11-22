import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
// these the link we can use both on the server and client.
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
