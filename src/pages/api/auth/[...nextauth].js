/* eslint-disable no-param-reassign */
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";

const options = {
  providers: [
    Providers.Spotify({
      scope:
        "user-read-email playlist-modify-public playlist-modify-private user-read-private user-read-playback-state user-modify-playback-state playlist-modify-public playlist-modify-private",
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user, account) => {
      if (user) {
        token.accessToken = account.accessToken;
        token.refreshToken = account.refreshToken;
      }
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      const profile = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      });

      session.user.profile = profile.data;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      return Promise.resolve(session);
    },
    redirect: async (url) => {
      if (url === "/api/auth/signin") {
        return Promise.resolve("/profile");
      }
      return Promise.resolve("/");
    },
  },
};
export default (req, res) => NextAuth(req, res, options);
