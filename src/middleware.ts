import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

// export { auth as middleware } from "@/auth";

const protectedRoutes = ["/wrapped"];
const publicRoutes = ["/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const session = await auth();

  if (isProtectedRoute && !session?.accessToken) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  if (
    isPublicRoute &&
    session?.accessToken &&
    !req.nextUrl.pathname.startsWith("/wrapped")
  ) {
    return NextResponse.redirect(new URL("/wrapped", req.nextUrl));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
