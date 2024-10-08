import { fetcher } from "./fetcher.helper";

type Args = {
  errorApiUrl: string;
  projectName: string;
  context: string;
  errorMessage: string;
};

export const errorSaver = async ({
  errorApiUrl,
  projectName,
  context,
  errorMessage,
}: Args): Promise<void> => {
  await fetcher({
    apiUrl: errorApiUrl,
    path: "/error",
    method: "POST",
    body: {
      projectName,
      context,
      errorMessage,
    },
  });
};
