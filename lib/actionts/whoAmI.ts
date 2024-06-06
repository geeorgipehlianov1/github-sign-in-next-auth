'use server';

import { getServerSession } from 'next-auth';

export default async function whoAmIAction() {
  const session = await getServerSession();
  return session?.user?.name || 'Not logged in';
}
