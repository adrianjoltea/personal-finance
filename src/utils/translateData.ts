export function translateData<T extends Record<string, string>>(
  data: string[],
  translatedData: T
) {
  return data.map(data => {
    const formattedData = data.replace(" ", "").toLowerCase();
    console.log(translatedData[formattedData]);

    return translatedData[formattedData] || data;
  });
}
