import { env } from '@/lib/config/env';
import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: env.GITHUB_ID || '',
      clientSecret: env.GITHUB_SECRET || '',
    }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
