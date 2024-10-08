import type { FetchMethodsType } from "../../types/fetchMethods";

export const fetcher = (
  apiUrl: string,
  path: string,
  method: FetchMethodsType,
  body: unknown,
): Promise<Response> => {
  return fetch(`${apiUrl}${path}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  });
};
