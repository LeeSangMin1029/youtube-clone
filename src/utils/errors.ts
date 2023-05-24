export const reportError = ({ message }: { message: string }) => {
  return message;
};

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};
