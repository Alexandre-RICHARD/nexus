import type { FetchMethodsType } from "../../types/fetchMethods";

type Args = {
  apiUrl: string;
  path: string;
  method: FetchMethodsType;
  body: unknown;
};

export const fetcher = ({
  apiUrl,
  path,
  method,
  body,
}: Args): Promise<Response> => {
  return fetch(`${apiUrl}${path}`, {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  });
};
