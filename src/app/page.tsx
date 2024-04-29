/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/client">
        <div>
          client (turbopack + output: export + 'use client' = erorr)
        </div>
      </Link>

      <Link href="/server">
        <div>
          server
        </div>
      </Link>
    </div>
  );
}
