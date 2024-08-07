import type { FetchMethodsType } from "../types/fetchMethods";

export const ApiHelper = {
  // TODO Confirmer les types
  fetcher: async (
    apiUrl: string,
    path: string,
    method: FetchMethodsType,
    body: unknown,
  ): Promise<unknown> => {
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
