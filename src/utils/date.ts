import moment from "moment";
moment().format()

const DATE_FORMAT: string = "YYYY-MM-DD";

export const isValidDateFormat = (date: string): boolean => {
  if (!date) return false

  return moment(date, DATE_FORMAT, true).isValid()
}