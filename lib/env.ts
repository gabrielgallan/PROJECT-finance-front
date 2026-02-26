import { z } from "zod"

const envSchema = z.object({
    GITHUB_CLIENT_ID: z.string(),
    GITHUB_REDIRECT_URI: z.url(),
    NEXT_PUBLIC_API_URL: z.url(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
    const issues = _env.error.issues
        .map((issue) => `- ${issue.path.join('.')} (${issue.message})`)
        .join('\n')

    throw new Error(`Invalid server environment variables:\n${issues}`)
}

export const env = _env.data
