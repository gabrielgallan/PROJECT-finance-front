import { type DateRange } from "react-day-picker";

export type TransactionsFilters = {
  category: 'all' | string;
  dateRange?: DateRange;
};