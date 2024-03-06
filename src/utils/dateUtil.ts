import { format } from 'date-fns';

const DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm';
const DATE_FORMAT = 'yyyy-MM-dd ';

const DATE_MONTH_FORMAT = 'yyyy-MM';

export function formatToDateTime(date: Date | number, formatStr = DATE_TIME_FORMAT): string {
  return format(date, formatStr);
}

export function formatToDate(date: Date | number, formatStr = DATE_FORMAT): string {
  return format(date, formatStr);
}

export function formatToDateMonth(date: Date, formatStr = DATE_MONTH_FORMAT): string {
  return format(date, formatStr);
}
