import { HTTPGetProfile } from "@/http/get-profile";
import { redirect } from "next/navigation";
import { verifyToken } from "./verify-token";

export async function currentUser() {
  const token = await verifyToken();

  if (!token) {
    redirect("/auth/sign-in");
  }

  try {
    const { user } = await HTTPGetProfile();

    return { user };
  } catch {
    redirect("/api/auth/sign-out");
  }
}
