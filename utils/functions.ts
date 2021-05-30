import { format } from 'date-fns';

export const formatDate = (date: Date, dateFormat: string = 'dd-MM-yyyy'): string => {
  return format(new Date(date), dateFormat);
};

export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat('en-ID').format(number);
};
