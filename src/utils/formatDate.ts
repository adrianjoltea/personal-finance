export function formatDate(date: Date) {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  const formatedDate = new Date(date);

  return formatedDate.toLocaleDateString(undefined, options);
}
