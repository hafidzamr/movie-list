import { format } from 'date-fns'

export const formatDate = (date: Date, formatDate: string = 'dd-MM-yyyy') => {
  return format(new Date(date), formatDate)
}

export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('en-ID').format(number)
}
