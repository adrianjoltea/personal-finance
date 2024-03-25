async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
}

export async function fetchData(
  url: string,
  method: string,
  body?: any
): Promise<any> {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: body && JSON.stringify(body),
  });
  return handleResponse(res);
}
