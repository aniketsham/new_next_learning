"use client";

import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Page = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!session ? (
        <div>
          <h2>Not signed in</h2>
          <button onClick={() => signIn('google')}>Sign in with google</button>
        </div>
      ) : (
        <div>
          <h2>Signed in as {session.user?.name}</h2>
          <img src={session.user?.image || ''} alt="User avatar" width={50} height={50} />
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Page;
