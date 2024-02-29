import { DateTime } from "luxon";

export default function formatDate(date: string) {
  return DateTime.fromISO(date)
    .setLocale("pt-BR")
    .toFormat("d MMM")
    .replace(".", "")
    .split(" ")
    .map((string, index) => {
      if (index == 0) {
        return string;
      }

      return string.charAt(0).toUpperCase().concat(string.substring(1));
    })
    .join(" ");
}
