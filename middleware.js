import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  console.log(res);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  await supabase.auth.getSession();

  console.log(user);

  if (user && req.nextUrl.pathname === "/")
    return NextResponse.redirect(new URL("/workspace", req.url));

  if (!user && req.nextUrl.pathname !== "/")
    return NextResponse.redirect(new URL("/", req.url));

  return res;
}

export const config = {
  matcher: ["/", "/workspace"],
};
