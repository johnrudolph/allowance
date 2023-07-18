import React from 'react'
import Guest from '../Layouts/Guest'
import Create from './Create'

export default function Entry(props) {
  const CurrentEntry = () => {
    if (props.entry === null) {
      return <div> no entry found for { props.date } </div>
    } else {
      return <div> {props.entry.entry_in_cents}</div>
    }
  }

  // <Create entry={ props.entry } day={props.day}/>

  return (
    <CurrentEntry />

  )
}


