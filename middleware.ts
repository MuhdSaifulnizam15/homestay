import { updateSession } from "@/lib/supabase/middleware";
import { type NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip Next.js internals, static files, and images
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return await updateSession(request);
  }

  // --- Detect locale ---
  const localeMatch = pathname.match(/^\/(en|ms)(\/|$)/);
  const locale = localeMatch ? localeMatch[1] : "en";

  // --- Block or redirect availability ---
  if (/^\/(en|ms)\/availability(\/|$)?/.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/maintenance`;
    return NextResponse.redirect(url);
  }

  // Check if path includes a supported locale
  const hasLocale = /^\/(en|ms)(\/|$)/.test(pathname);

  if (!hasLocale) {
    const defaultLocale = "en";
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(url);
  }

  // Otherwise continue with Supabase session update
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
