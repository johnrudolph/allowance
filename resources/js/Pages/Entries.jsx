import React from 'react'
import Guest from '../Layouts/Guest'
import { Link } from '@inertiajs/react'

export default function Entries({entries}) {
  return (
    <Guest>
      <div>Entries</div>
      <ul>
        {entries.map(entry => (
          <li key={entry.id}>
            <Link href={`/entries/${entry.id}`}>
              {entry.entry_in_cents}
            </Link>
          </li>
        ))}
      </ul>
    </Guest>
  )
}
