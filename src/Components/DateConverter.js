export const DateConverter = (date) => {
  const timestamp = 1606311631;
  date = new Date(timestamp * 1000);

  const options = { month: "short", day: "2-digit", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
};
