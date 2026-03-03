import { api } from './api-client'

type HTTPOpenWalletRequest = {
    initialBalance: number
}

type HTTPOpenWalletResponse = null

export async function HTTPOpenWallet({
    initialBalance
}: HTTPOpenWalletRequest) {
    const result = await api
        .post('api/wallets', {
            json: { initialBalance }
        })
        .json<HTTPOpenWalletResponse>()

    return result
}