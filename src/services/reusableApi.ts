async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Network response was not ok");
  }
  return res.json();
}

export async function fetchData<T, B>(
  url: string,
  method: string,
  body?: B
): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: body && JSON.stringify(body),
  });
  return handleResponse<T>(res);
}
