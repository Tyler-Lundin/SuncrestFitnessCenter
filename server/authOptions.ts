
import { NextAuthOptions } from 'next-auth';
import { prisma } from '@/server/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import EmailProvider from 'next-auth/providers/email';
import getEmailCredentials from './util/getEmailCredentials';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    EmailProvider({
      server: {
        host: getEmailCredentials().host,
        port: getEmailCredentials().port,
        auth: {
          user: getEmailCredentials().auth.user,
          pass: getEmailCredentials().auth.pass,
        },
        from: getEmailCredentials().from,
      },
      from: process.env.EMAIL_FROM as string,

    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      console.log('signIn', user, account, profile, email, credentials);
      return true;
    },
    async jwt({ token }) {

      const user = await prisma.user.findUnique({
        where: {
          email: token.email as string,
        }
      })
      if (!user) throw new Error('User not found');

      if (user.role === 'ADMIN' || user.role === 'DEVELOPER') {
        token.role = user?.role;
        return token;
      }
      throw new Error('User not found');
    },
    redirect() {
      return '/dashboard';
    }
  },
}
