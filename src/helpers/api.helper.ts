import type { FetchMethod } from "../types/fetchMethod";

export const ApiHelper = {
  fetcher: async (
    apiUrl: string,
    path: string,
    method: FetchMethod,
    body: unknown,
  ) => {
    return fetch(`${apiUrl}${path}`, {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(body),
    });
  },

  errorSaver: async (
    errorApiUrl: string,
    projectName: string,
    context: string,
    errorMessage: string,
  ) => {
    await ApiHelper.fetcher(errorApiUrl, "/error", "POST", {
      projectName,
      context,
      errorMessage,
    });
  },
};
