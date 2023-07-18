import React from 'react'
import Guest from '../Layouts/Guest'
import { useState } from 'react'
import Entry from './Entry';

export default function Today({ entries }) {
  var [date, setDate] = useState(new Date());

  const getEntry = () => {
    if (entries.find(entry => entry.date === date)) {
      return entries.find(entry => entry.date === date);
    }

    return null;
  };

  var [entry, setEntry] = useState(getEntry());

  const increase = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));

    setEntry(getEntry());
  };

  const decrease = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));

    setEntry(getEntry());
  };

  return (
    <Guest>
      <div className="mt-8 flex flex-col-3 justify-between">
        <div className="control__btn" onClick={decrease}>Back</div>
        <div className="font-bold">{ date.toDateString() }</div>
        <div className="control__btn" onClick={increase}>Forward</div>
      </div>
      <Entry entry={entry}/>
    </Guest>
   )
}
