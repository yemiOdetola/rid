import { DateTime } from "luxon";

export const formatDate = (date: Date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL);
};
