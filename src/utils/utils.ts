export const addErrorIntoField = (errors: any) =>
  errors ? { error: true } : { error: false };

export function formatDate(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}
