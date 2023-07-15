import React from 'react'
import Guest from '../Layouts/Guest'
import { useState } from 'react'
import Entry from './Entry';

export default function Today({ entries }) {
  var [date, setDate] = useState(new Date());

  var [entry, setEntry] = useState(entries[0]);

  const increase = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));
  };

  const decrease = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));
  };

  // const getEntry = (date) => {
  //   return entries.find(entry => entry.day === date);
  // };

  return (
    <Guest>
      <div className="mt-8 flex flex-col-3 justify-between">
        <div className="control__btn" onClick={decrease}>Back</div>
        <div className="font-bold">{ date.toDateString() }</div>
        <div className="control__btn" onClick={increase}>Forward</div>
      </div>
      <Entry entry={ entry }/>
    </Guest>
   )
}
