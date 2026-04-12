import { IconCash } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"

export function EmptyOutline() {
    return (
        <Empty className="border border-dashed">
            <EmptyHeader>
                <EmptyMedia variant="icon">
                    <IconCash />
                </EmptyMedia>
                <EmptyTitle>No transactions yet</EmptyTitle>
                <EmptyDescription>
                    Start registering your cash flow.
                </EmptyDescription>
            </EmptyHeader>
            {/* <EmptyContent>
                <Button variant="outline" size="sm">
                    Upload Files
                </Button>
            </EmptyContent> */}
        </Empty>
    )
}
