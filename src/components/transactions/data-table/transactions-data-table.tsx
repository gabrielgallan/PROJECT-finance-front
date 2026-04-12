"use client";

import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { type DateRange } from "react-day-picker";

import { transactionsDataTableColumns } from "@/components/transactions/data-table/transactions-data-table-columns";
import { TransactionsDataTableToolbar } from "@/components/transactions/data-table/transactions-data-table-toolbar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CategoryItem } from "@/http/list-categories";
import { TransactionItem } from "@/http/list-transactions";
import { type TransactionsFilters } from "@/app/(private)/(sidebar)/transactions/types";
import { SkeletonTable } from "./transactions-data-table-skeleton";
import { EmptyOutline } from "./empty";

type TransactionsDataTableData = {
  transactions: TransactionItem[];
  categories: CategoryItem[]
};

type TransactionsDataTableProps = {
  data: TransactionsDataTableData;
  onFiltersChange: (filter: TransactionsFilters) => void;
  isLoading?: boolean;
};

export function TransactionsDataTable({
  data,
  onFiltersChange,
  isLoading = false,
}: TransactionsDataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [category, setCategory] = React.useState<'all' | string>('all');
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>();

  const { transactions, categories } = data;

  function handleCategoryChange(data: string) {
    setCategory(data);

    onFiltersChange({
      category: data,
      dateRange,
    });
  }

  function handleSetDateRange(data: DateRange | undefined) {
    setDateRange(data);

    onFiltersChange({
      category,
      dateRange: data,
    });
  }

  function handleResetFilters() {
    setCategory('all');
    setDateRange(undefined);

    onFiltersChange({
      category: 'all',
      dateRange: undefined,
    });
  }

  const table = useReactTable({
    data: transactions,
    columns: transactionsDataTableColumns,
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  React.useEffect(() => {
    table.setPageIndex(0);
  }, [category, dateRange, table]);

  const hasFilters = category !== 'all' || dateRange !== undefined
  const hasRows = table.getRowModel().rows.length

  return (
    <div className="flex flex-col gap-3">
      <TransactionsDataTableToolbar
        table={table}
        categorySelected={category}
        categories={categories}
        dateRange={dateRange}
        isLoading={isLoading}
        onCategoryChange={handleCategoryChange}
        onDateRangeChange={handleSetDateRange}
        onResetFilters={handleResetFilters}
      />

      {isLoading ? <SkeletonTable /> :
        (!hasRows && !hasFilters) ? <EmptyOutline /> :
          (<div className="overflow-hidden rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {(
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                      className={
                        row.original.operation === "income"
                          ? "bg-gradient-to-r from-cyan-500/10 via-cyan-500/4 to-transparent hover:from-cyan-500/12 hover:via-cyan-500/6"
                          : undefined
                      }
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>)

      }
      {/* <TransactionsDataTablePagination table={table} /> */}
    </div>
  );
}
