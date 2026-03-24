import { api } from './api-client'

type HTTPGetWalletInfoResponse = {
    wallet: {
        balance: number
        createdAt: string,
        updatedAt: string
    }
}

export async function HTTPGetWalletInfo() {
    const result = await api
        .get('api/wallet')
        .json<HTTPGetWalletInfoResponse>()

    return result
}