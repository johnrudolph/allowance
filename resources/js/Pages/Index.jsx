import React from 'react'
import Guest from '../Layouts/Guest'
import { useForm } from '@inertiajs/react'

export default function Index(props) {
  const { data, setData, post, processing, errors } = useForm({
    allowance_in_cents: props.user.allowance_in_cents / 100,
    allowance_description: props.user.allowance_description,
    user_id: props.user.id,
  })

  const flavor = [
    "Let's retain that bread.",
  ]

  const randomFlavor = flavor[Math.floor(Math.random() * flavor.length)];

  function submit(e) {
    e.preventDefault()
    post('/update')
  }

  return (
    <Guest>
      <div className="mt-8">
        Welcome back <span className="font-bold">{props.user.name}</span>. {randomFlavor}
      </div>
      <div className="mt-4">
        Daily Allowance: <span className="font-bold">${props.user.allowance_in_cents / 100}</span>
      </div>
      <form onSubmit={submit}>
        <input 
          type="text" 
          value={data.allowance_in_cents} 
          onChange={e => setData('allowance_in_cents', e.target.value)} 
        />
        <input 
          type="text" 
          value={data.allowance_description} 
          onChange={e => setData('allowance_description', e.target.value)} 
        />
        <button 
          type="submit" 
          disabled={processing}
        >
          Submit
        </button>
      </form>
    </Guest>
  )
}
