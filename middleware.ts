import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This middleware doesn't do anything to the broken page
export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL("/foo", request.url));
}

export const config = {
  matcher: "/foo/bar/baz",
};
