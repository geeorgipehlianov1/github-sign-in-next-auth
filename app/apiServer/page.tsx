import { env } from '@/lib/config/env';
import { headers } from 'next/headers';

export default async function ApiServer() {
  const response = await fetch(`${env.NEXTAUTH_URL}/api/whoAmI`, {
    method: 'GET',
    headers: headers(),
  }).then((res) => res.json());

  return (
    <>
      <div>
        API Route From <span className='font-bold underline'>Server</span>
        <div>Name: {response.name}</div>
      </div>
    </>
  );
}
