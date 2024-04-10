export function sortData<T>(
  data: T[] | undefined,
  label: keyof T,
  direction: string
) {
  return data?.sort((a, b) => {
    if (direction === "asc") {
      return a[label] > b[label] ? 1 : -1;
    } else {
      return b[label] > a[label] ? 1 : -1;
    }
  });
}
