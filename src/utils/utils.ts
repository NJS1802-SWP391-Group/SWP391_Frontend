export const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };
