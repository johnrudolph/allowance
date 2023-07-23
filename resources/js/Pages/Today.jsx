import React from 'react'
import Guest from '../Layouts/Guest'
import { useState } from 'react'
import { useForm } from '@inertiajs/react'

export default function Today( props ) {
  var [date, setDate] = useState(new Date());

  const getEntry = () => {
    if (props.entries.find(entry => new Date(entry.date).toDateString() === date.toDateString())) {
      return props.entries.find(entry => new Date(entry.date).toDateString() === date.toDateString());
    }

    return null;
  };

  var [entry, setEntry] = useState(getEntry());

  const increase = () => {
    setDate(new Date(date.setDate(date.getDate() + 1)));

    setData('date_formatted', date.toLocaleDateString())
    setEntry(getEntry());

    entry !== null 
      ? setData('entry_in_dollars', entry.entry_in_cents / 100) 
      : setData('entry_in_dollars', '') 
  };

  const decrease = () => {
    setDate(new Date(date.setDate(date.getDate() - 1)));

    setData('date_formatted', date.toLocaleDateString())
    setEntry(getEntry());

    entry !== null 
      ? setData('entry_in_dollars', entry.entry_in_cents / 100) 
      : setData('entry_in_dollars', '') 
  };

  const { data, setData, post, processing, errors } = useForm({
    entry_in_dollars: entry !== null ? entry.entry_in_cents / 100 : '',
    date_formatted: date.toLocaleDateString(),
    user_id: 1,
  })

  function createEntry(e) {
    setData('date_formatted', date.toLocaleDateString());
    e.preventDefault()
    post('/create')
  }

  const RunningBalance = () => {
    const entries_to_sum = props.entries
      .filter((entry_object) => new Date(entry_object.date) <= date);

    const budget = entries_to_sum.length * props.user.allowance_in_cents / 100;

    const spent = entries_to_sum.reduce((acc, entry_object) => acc + entry_object.entry_in_cents, 0) / 100;

    const rolling_balance = (budget - spent).toFixed(2);

    return rolling_balance >= 0 
      ? (<p className="text-green-500">Rolling Balance: ${rolling_balance}</p>)
      : (<p className="text-red-500">Rolling Balance: -${-rolling_balance}</p>)
  }

  return (
    <Guest>
      <p></p>
      <div className="mt-8 flex flex-col-3 justify-between">
        <button className="control__btn" onClick={decrease}>⬅️</button>
        <div className="font-bold">{ date.toLocaleDateString() }</div>
        <button className="control__btn" onClick={increase}>➡️</button>
      </div>

      <p>data date: {data.date_formatted}</p>
      <p>data entry: {data.entry_in_dollars}</p>
      <p>props date: {date.toLocaleDateString()}</p>
      <p>props entry: {entry != null ? entry.entry_in_cents / 100 : 0}</p>

      <form className="text-black" onSubmit={createEntry}>
          <div className="my-4">
            <div className="border-b border-white/10 pb-12">

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                    Spent 
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
                      <input
                        type="number" 
                        value={data.entry_in_dollars} 
                        onChange={e => setData('entry_in_dollars', e.target.value)}
                        className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder={(props.user.allowance_in_cents / 100).toFixed(2)}
                      />
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-400">On: {props.user.allowance_description}</p>
                </div>
              </div>
            </div>
          </div>
          <RunningBalance />
          
          <div className="mt-6 flex items-center justify-end">
          <button
            type="submit"
            className="rounded-md mb-8 bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Submit
          </button>
        </div>
        </form>
    </Guest>
   )
}
