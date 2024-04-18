import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/sign-up", "/sign-in"],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/api/settings"],
  afterAuth(auth, req, evt) {
    if (!auth.userId && !auth.isPublicRoute) {
      const homeURL = new URL("/", req.url);
      return NextResponse.redirect(homeURL);
    }

    if (auth.userId && !auth.isPublicRoute) {
      if (req.nextUrl.pathname === "/admin") {
        const dashboardUrl = new URL("/admin/dashboard", req.url);
        return NextResponse.redirect(dashboardUrl);
      }

      return NextResponse.next();
    }

    if (auth.userId && auth.isPublicRoute) {
      return NextResponse.redirect(new URL("/admin", req.url));
    }
  },
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
function intlMiddleware(
  req: import("next/server").NextRequest & {
    experimental_clerkUrl: import("next/dist/server/web/next-url").NextURL;
  }
) {
  throw new Error("Function not implemented.");
}
