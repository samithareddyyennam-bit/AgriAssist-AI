import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allow relative callback URLs such as /crop, /weather, /recommend
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`;
      }

      // Allow URLs belonging to this deployed application
      if (url.startsWith(baseUrl)) {
        return url;
      }

      // Safety fallback
      return `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };