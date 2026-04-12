"use server";

import { HTTPListTransactions, TransactionItem, type ListTransactionsQuery } from "@/http/list-transactions";

interface ListTransctionsActionInput {
  categoryId?: string;
  startDate?: string;
  endDate?: string;
};

interface ListTransctionsActionOutput {
  success: boolean;
  transactions: TransactionItem[];
  message: string | null;
};

export async function listTransctionsAction(
  input: ListTransctionsActionInput,
): Promise<ListTransctionsActionOutput> {
  const query: ListTransactionsQuery = {};

  if (input.categoryId) {
    query.categoryId = input.categoryId;
  }

  if (input.startDate && input.endDate) {
    query.start = input.startDate;
    query.end = input.endDate;
  }

  try {
    const response = await HTTPListTransactions(query);

    return {
      success: true,
      transactions: response.transactions,
      message: null,
    };
  } catch {
    return {
      success: false,
      transactions: [],
      message: "Unable to load filtered transactions.",
    };
  }
}
