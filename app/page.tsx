import { getServerSession } from 'next-auth';

export default async function Home() {
  const session = await getServerSession();
  return (
    <>
      getServerSession Result{' '}
      {session?.user?.name ? `(${session.user.name})` : 'Not logged in'}
    </>
  );
}
