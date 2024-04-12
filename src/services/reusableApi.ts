async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Network response was not ok");
  }

  const responseData: T = await res.json();
  return responseData;
}

export async function fetchData<T, B>(
  url: string,
  method: string,
  body?: B
): Promise<T> {
  console.log(body);
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: body && JSON.stringify(body),
  });
  console.log(res);
  return handleResponse<T>(res);
}
