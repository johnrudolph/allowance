import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function Create({ entry }) {
    const { user } = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        entry_in_cents: 0,
        day: entry.day,
        user: usePage().props.user,
        props: entry,
      })
      
      function createEntry(e) {
        e.preventDefault()
        post('/create')
      }
      
      return (
        <form onSubmit={createEntry}>
          <input 
            type="number" 
            value={data.entry_in_cents} 
            onChange={e => setData('entry_in_cents', e.target.value)} 
          />
          {errors.email && <div>{errors.email}</div>}
          <button 
            type="submit" 
            disabled={processing}
          >
            Submit
          </button>
        </form>
      )
}
