import { cookies } from "next/headers";

export async function verifyToken() {
  const storageCookies = await cookies();

  const token = storageCookies.get("token")?.value;

  return token;
}
