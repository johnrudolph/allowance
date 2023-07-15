import React from 'react'
import Guest from '../Layouts/Guest'
import Create from './Create'

export default function Entry(props) {
  return (
      <div>{ props.entry.entry_in_cents / 100 }</div>
  )
}
