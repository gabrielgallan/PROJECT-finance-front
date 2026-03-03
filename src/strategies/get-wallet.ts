import { redirect } from "next/navigation"
import { HTTPGetWalletInfo } from "@/http/get-wallet-info"

export async function getWallet() {
    try {
        const response = await HTTPGetWalletInfo()

        return response
    } catch {
        redirect('/new')
    }
}