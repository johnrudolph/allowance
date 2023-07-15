import { Link } from '@inertiajs/react'
import React from 'react'

export default function Guest({ children }) {
  return (
    <main className="center max-w-sm mx-auto">
        <header className="flex justify-between">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/today">Today</Link>
        </header>
        <article>{children}</article>
    </main>
  )
}
