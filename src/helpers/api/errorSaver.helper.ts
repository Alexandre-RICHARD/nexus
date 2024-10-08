import { fetcher } from "./fetcher.helper";

export const errorSaver = async (
  errorApiUrl: string,
  projectName: string,
  context: string,
  errorMessage: string,
): Promise<void> => {
  await fetcher(errorApiUrl, "/error", "POST", {
    projectName,
    context,
    errorMessage,
  });
};
