import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";

const SCOPE = [
  "streaming",
  "user-read-private",
  "user-library-modify",
  "playlist-read-private",
  "user-top-read",
  "user-library-read",
].join(" ");

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      authorization:
        "https://accounts.spotify.com/authorize?show_dialog=true&scope=" +
        encodeURI(SCOPE),
    }),
  ],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account && account.access_token) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    redirect: async ({ url, baseUrl }) => {
      return baseUrl;
    },
    session: async ({ session, token, user }) => {
      return { ...session, accessToken: token.accessToken };
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
