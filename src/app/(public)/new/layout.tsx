import { getWallet } from "@/strategies/get-wallet"
import { redirect } from "next/navigation"

export default async function NewAccountLayout({
    children,
    sheet,
}: Readonly<{
    children: React.ReactNode
    sheet: React.ReactNode
}>) {
    const wallet = await getWallet()

    if (wallet) {
        redirect('/dashboard')
    }

    return (
        <>
            {children}
            {sheet}
        </>
    )
}