import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ profile }) {
      const allowed = (process.env.ALLOWED_EMAIL || "")
        .split(",")
        .map((e) => e.trim().toLowerCase());
      return allowed.includes((profile?.email || "").toLowerCase());
    },
  },
  pages: {
    signIn: "/", // pakai halaman login custom kita sendiri
  },
});
