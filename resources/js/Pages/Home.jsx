import React from 'react'
import Guest from '../Layouts/Guest'
import { useForm } from '@inertiajs/react'

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export default function Home({user}) {

  const { data, setData, post, processing, errors } = useForm({
    allowance_in_dollars: user.allowance_in_cents !== null ? (user.allowance_in_cents / 100).toFixed(2) : 0,
    description: user.allowance_description !== null ? user.allowance_description : '',
    user_id: user.id,
  })

  function updateUserInfo(e) {
    e.preventDefault()
    post('/edit_user')
  }
  
  return (
    <>
    <Guest>
      <form className="text-black" onSubmit={updateUserInfo}>
        <div className="my-4">
          <div className="border-b border-white/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-white">Settings</h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                  Daily Allowance
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">$</span>
                    <input
                      type="number" 
                      value={data.allowance_in_dollars} 
                      onChange={e => setData('allowance_in_dollars', e.target.value)}
                      className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="50.00"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                  What is the Allowance for? (optional)
                </label>
                <div className="mt-2">
                  <textarea
                    type="text" 
                    value={data.description} 
                    onChange={e => setData('description', e.target.value)}
                    rows={3}
                    className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder={'Ubers, food, and subscriptions'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
      </form>
    </Guest>
    </>
  )
}


