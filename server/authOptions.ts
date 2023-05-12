
import { NextAuthOptions } from 'next-auth';
import { prisma } from '@/server/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID as string;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;


  if (!clientId || clientId.length === 0) {
    throw new Error('GOOGLE_CLIENT_ID is not defined');
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('GOOGLE_CLIENT_SECRET is not defined');
  }

  return { clientId, clientSecret };
}

function getEmailCredentials() {
  if (!process.env.EMAIL_SERVER_HOST) throw new Error('EMAIL_SERVER_HOST is not defined');
  if (!process.env.EMAIL_SERVER_PORT) throw new Error('EMAIL_SERVER_PORT is not defined');
  if (!process.env.EMAIL_SERVER_USER) throw new Error('EMAIL_SERVER_USER is not defined');
  if (!process.env.EMAIL_SERVER_PASSWORD) throw new Error('EMAIL_SERVER_PASSWORD is not defined');
  if (!process.env.EMAIL_FROM) throw new Error('EMAIL_FROM is not defined');

  return {
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    from: process.env.EMAIL_FROM,
  }
}

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
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
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
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findUnique({
        where: {
          email: token.email || '',
        }
      });

      if (!dbUser) {
        token.id = user!.id;
        return token;
      }

      if (dbUser.role === 'ADMIN' || dbUser.role === 'DEVELOPER') {
        return {
          id: dbUser.id,
          name: dbUser.name,
          email: dbUser.email,
        }
      }
      token.id = user!.id;
      return token;


    },
    redirect() {
      return '/dashboard';
    }
  },
}
