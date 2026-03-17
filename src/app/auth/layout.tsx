// import { isAuthenticated } from '@/strategies/authentication/auth'
import { verifyAuthentication } from '@/strategies/verify-authentication'
import { redirect } from 'next/navigation'

export default async function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const isAuthenticated = await verifyAuthentication()

    if (isAuthenticated) {
        redirect('/')
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
            <div className="w-full max-w-xs">{children}</div>
        </div>
    )
}