"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
} from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";

const categoriesChartConfig = {
    expense: {
        label: "Expense",
        color: "var(--cyan-400)",
    },
} satisfies ChartConfig;

interface CategoryExpenseData {
    category: string;
    expense: number;
}

interface CategoriesLinearChartProps {
    month: string;
    // data: CategoryExpenseData[];
}

const mockData = [
    { category: "Ifood", expense: 500 },
    { category: "Rent", expense: 1200 },
    { category: "Transport", expense: 220 },
    { category: "Gym", expense: 90 },
    { category: "Uber", expense: 200 },
    { category: "Salary", expense: 670 },
];

export function CategoriesLinearChart({
    month,
    // data,
}: CategoriesLinearChartProps) {
    const sortedData = [...mockData].sort((a, b) => b.expense - a.expense);

    return (
        <Card className="flex h-full min-h-0 flex-col overflow-hidden bg-transparent py-4">
            <CardHeader className="flex gap-1 px-4 pb-0">
                <div>
                    <CardTitle>Expenses by Category</CardTitle>
                    <CardDescription>{month}</CardDescription>
                </div>
            </CardHeader>

            <CardContent className="flex min-h-0 flex-1 px-4 pb-4">
                <ChartContainer
                    config={categoriesChartConfig}
                    className="h-full w-full !aspect-auto"
                >
                    <BarChart
                        accessibilityLayer
                        data={sortedData}
                        layout="vertical"
                        margin={{ left: 12, right: 12 }}
                    >
                        <CartesianGrid horizontal={false} />

                        <YAxis
                            dataKey="category"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            width={90}
                        />

                        <XAxis
                            dataKey="expense"
                            type="number"
                            tickLine={false}
                            axisLine={false}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    formatter={(value) =>
                                        new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(Number(value))
                                    }
                                />
                            }
                        />

                        <Bar
                            dataKey="expense"
                            radius={8}
                            fill="var(--theme-100)"
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}