import { NextRequest } from "next/server";
export { auth } from "@/lib/auth";

export const proxy = (request: NextRequest) => {
  console.log("proxy");
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
