'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

export default function NavMenu() {
  const pathName = usePathname();

  const ACTIVE_ROUTE = 'py-1 px-2 text-gray-300 bg-gray-600';
  const INACTIVE_ROUTE =
    'py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700';

  return (
    <div>
      <AuthButton />
      <hr />
      <ul>
        <Link href='/'>
          <li className={pathName === '/' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Home
          </li>
        </Link>
        <Link href='/protected'>
          <li className={pathName === '/' ? ACTIVE_ROUTE : INACTIVE_ROUTE}>
            Protected Route
          </li>
        </Link>
        <Link href='/serverAction'>
          <li
            className={
              pathName === '/serverAction' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            Server action
          </li>
        </Link>
        <Link href='/apiClient'>
          <li
            className={
              pathName === '/apiClient' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Client
          </li>
        </Link>
        <Link href='/apiServer'>
          <li
            className={
              pathName === '/apiServer' ? ACTIVE_ROUTE : INACTIVE_ROUTE
            }
          >
            API From Server
          </li>
        </Link>
      </ul>
    </div>
  );
}
