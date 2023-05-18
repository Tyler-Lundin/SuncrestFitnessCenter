
export default function getEmailCredentials() {
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
