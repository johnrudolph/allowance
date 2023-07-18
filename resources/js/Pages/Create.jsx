import React, { useState } from 'react'
import { useForm } from '@inertiajs/react'
import { usePage } from '@inertiajs/react'

export default function Create(props) {
    // if (props.entry === null) {
      const { data, setData, post, processing, errors } = useForm({
        entry_in_dollars: 0,
        date: props.date,
      })
    // } else {
    //   const { data, setData, post, processing, errors } = useForm({
    //     entry_in_cents: 0,
    //     date: props.entry.date,
    //     user: usePage().props.user,
    //     props: props.entry,
    //   })
    // }

      function createEntry(e) {
        e.preventDefault()
        post('/create')
      }
      
      return (
        <form onSubmit={createEntry}>
          <input 
            type="number" 
            value={data.entry_in_dollars} 
            onChange={e => setData('entry_in_dollars', e.target.value)} 
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
