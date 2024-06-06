'use client';

import whoAmIAction from '@/lib/actionts/whoAmI';
import { useState } from 'react';

export default function ServerAction() {
  const [name, setName] = useState('');

  const onClickHandler = async () => {
    const result = await whoAmIAction();

    setName(result);
  };

  return (
    <div>
      <button onClick={onClickHandler}>Wo Am I?</button>
      {name && <p>You are {name}</p>}
    </div>
  );
}
