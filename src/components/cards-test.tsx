import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function TestSectionCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">

            <Card
                className="flex flex-col bg-transparent"
            >
                <CardHeader>
                    <CardDescription>
                        Total Balance
                    </CardDescription>

                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        $4,230.75
                    </CardTitle>

                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp className="size-4 text-emerald-500" />
                            +8.4%
                        </Badge>
                    </CardAction>
                </CardHeader>

                <CardFooter className="flex-col items-start gap-1 text-sm mt-auto">
                    <div className="flex gap-2 font-medium">
                        Account growth this month
                    </div>
                    <div>
                        Compared to April balance
                    </div>
                </CardFooter>
            </Card>

            <Card
                className="flex flex-col dark:bg-transparent"
            >
                <CardHeader>
                    <CardDescription>
                        Savings Rate
                    </CardDescription>

                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        31%
                    </CardTitle>

                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp className="size-4 text-emerald-500" />
                            +6%
                        </Badge>
                    </CardAction>
                </CardHeader>

                <CardFooter className="flex-col items-start gap-1 text-sm mt-auto">
                    <div className="flex gap-2 font-medium">
                        Better savings performance
                    </div>
                    <div className="text-muted-foreground">
                        Based on monthly income
                    </div>
                </CardFooter>
            </Card>

            <Card className="flex flex-col dark:bg-transparent">
                <CardHeader>
                    <CardDescription>Monthly Income</CardDescription>

                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        $2,150.00
                    </CardTitle>

                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingUp className="size-4 text-emerald-500" />
                            +12.1%
                        </Badge>
                    </CardAction>
                </CardHeader>

                <CardFooter className="flex-col items-start gap-1 text-sm mt-auto">
                    <div className="flex gap-2 font-medium">
                        Increased revenue
                    </div>
                    <div className="text-muted-foreground">
                        Higher freelance income
                    </div>
                </CardFooter>
            </Card>

            <Card className="flex flex-col dark:bg-transparent">
                <CardHeader>
                    <CardDescription>Monthly Expenses</CardDescription>

                    <CardTitle className="text-3xl font-semibold tabular-nums">
                        $1,480.20
                    </CardTitle>

                    <CardAction>
                        <Badge variant="outline">
                            <IconTrendingDown className="size-4 text-red-500" />
                            -4.3%
                        </Badge>
                    </CardAction>
                </CardHeader>

                <CardFooter className="flex-col items-start gap-1 text-sm mt-auto">
                    <div className="flex gap-2 font-medium">
                        Expenses reduced
                    </div>
                    <div className="text-muted-foreground">
                        Lower subscription costs
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}