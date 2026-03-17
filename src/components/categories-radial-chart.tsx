"use client"

import { PolarGrid, RadialBar, RadialBarChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A radial chart"

interface CategoriesRadialChartProps {
    data: {
        category: string
        balance: number
        fill: string
    }[]
    month: string
}

const generateChartConfig = (data: CategoriesRadialChartProps['data']): ChartConfig => {
    return data.reduce((acc, item) => {
        acc[item.category] = {
            label: item.category[0].toUpperCase() + item.category.slice(1),
            color: item.fill
        }
        return acc
    }, {} as ChartConfig)
}

export function CategoriesRadialChart({ data, month }: CategoriesRadialChartProps) {
    const chartConfig = generateChartConfig(data)

    return (
        <Card className="flex flex-col bg-transparent h-full">

            <CardHeader className="items-center pb-0">
                <CardTitle>Savings by categories</CardTitle>
                <CardDescription>{month}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1 min-h-0 flex items-center justify-center pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="h-full w-full !aspect-auto"
                >
                    <RadialBarChart data={data} innerRadius={30} outerRadius={110}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel nameKey="category" />}
                        />

                        <PolarGrid gridType="circle" />

                        <RadialBar dataKey="balance" background />

                    </RadialBarChart>
                </ChartContainer>
            </CardContent>

            {/* <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>

                <div className="leading-none text-muted-foreground">
                    Showing total savings by categories for the last month
                </div>
            </CardFooter> */}

        </Card>
    )
}
