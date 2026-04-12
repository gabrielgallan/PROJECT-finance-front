"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DateRangePickerProps {
    value?: DateRange
    onChange: (range?: DateRange) => void
    placeholder?: string
    className?: string
    numberOfMonths?: number
    disabled?: boolean
}

export function DateRangePicker({
    value,
    onChange,
    placeholder = "Pick a date range",
    className,
    numberOfMonths = 2,
    disabled = false,
}: DateRangePickerProps) {
    let label = placeholder

    if (value?.from) {
        if (!value.to) {
            label = format(value.from, "LLL dd, y")
        } else {
            label = `${format(value.from, "LLL dd, y")} - ${format(value.to, "LLL dd, y")}`
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-[260px] justify-start bg-transparent px-2.5 text-left font-normal data-[empty=true]:text-muted-foreground dark:bg-transparent",
                        className,
                    )}
                    data-empty={!value?.from}
                    disabled={disabled}
                >
                    <CalendarIcon />
                    <span className="truncate">{label}</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="range"
                    defaultMonth={value?.from ?? new Date()}
                    selected={value}
                    onSelect={onChange}
                    numberOfMonths={numberOfMonths}
                />
            </PopoverContent>
        </Popover>
    )
}

export const DatePickerWithRange = DateRangePicker
