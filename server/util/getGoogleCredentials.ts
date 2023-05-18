
export default function getGoogleCredentials() {
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
