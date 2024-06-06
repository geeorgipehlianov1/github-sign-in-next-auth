'use client';
import { useEffect, useState } from 'react';

export default function ApiClient() {
  const [name, setName] = useState<string>();

  useEffect(() => {
    (async () => {
      fetch('/api/whoAmI')
        .then((res) => res.json())
        .then((data) => setName(data.name));
    })();
  });

  return (
    <>
      <div>
        API Route from <span className='font-bold underline'>Client</span>
        <div>Name: {name}</div>
      </div>
    </>
  );
}
