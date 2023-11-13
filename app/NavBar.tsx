"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  console.log({ status, session });

  return (
    <div className="flex bg-slate-200 p-3 space-x-3">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && (
        <span className="loading loading-spinner loading-lg"></span>
      )}
      {status === "authenticated" && (
        <div>
          {session.user!.name}{" "}
          <Link href="/api/auth/signout" className="ml-3">
            Sign Out
          </Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;
