import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions, getServerSession } from 'next-auth';

const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? ''
    })
  ],
  pages: {
    signIn: '/login'
  }
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
