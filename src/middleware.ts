// middleware.ts
import { withAuth } from "next-auth/middleware";

export default withAuth(function middleware() {}, {
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/login",
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
