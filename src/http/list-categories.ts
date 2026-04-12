import { api } from './api-client'

export type CategoryItem = {
    id: string,
    name: string,
    slug: string,
    description: string | null
}

export type HTTPListCategoriesResponse = {
    categories: CategoryItem[]
}

export async function HTTPListCategories() {
    const result = await api
        .get('api/wallet/categories')
        .json<HTTPListCategoriesResponse>()

    return result
}