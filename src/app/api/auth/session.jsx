import { authUserSession } from "@/libs/auth-libs";

export async function GET() {
  const session = await authUserSession();
  return Response.json(session);
}
