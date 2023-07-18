import React from 'react'
import Guest from '../Layouts/Guest'

export default function About() {
  return (
    <Guest>
      <div className="mt-4 font-bold">
        What is Allowance?
      </div>
      <div>
        A crazy simple way to track you daily Allowance. It will train you to save. And it actually works.
      </div>
      <div className="mt-4 font-bold">
        How does it work?
      </div>
      <div>
      Give yourself a daily allowance of money to spend. Jot down how much of your allowance you used every day. That’s it! If you spend under your allowance, watch it grow. If you’ve got a big expense, chip away at your deficit.
      </div>
      <div className="mt-4 font-bold">
        But why do it this way? Don’t I need a real budgeting app?
      </div>
      <div>
      You should do real budgeting too! Allowance is not a budgeting app. It’s the easiest way to build great habits, and know whether you are over-spending or saving. There are a few reasons this method is powerful: 
      </div>
      <div className="ml-8 mt-4">
        <ul className="list-disc">
          <li>
            <span className="font-bold">Building Daily Habits</span>: Writing down when you spend money is the most transformative part of budgeting. Allowance will get you in the habit of recording your daily spending, and this will change your life.
          </li>
          <li>
            <span className="font-bold">Simplicity</span>: Budgeting is tedious! But thinking in terms of a flat Allowance is so simple and easy to maintain, that you’ll actually do it.
          </li>
          <li>
            <span className="font-bold">Awareness</span>: Doing things this way will give you a constant awareness of how much would be reasonable for you to spend today. This will make you think twice about buying dessert, and will make you feel incredible when you pull of a $0 day.
          </li>
        </ul>
      </div>
      <div className="mt-4 font-bold">
        What should my Allowance be?
      </div>
      <div>
        Your Allowance is the amount of money you can afford to spend on things that you have daily control over. The easiest way to think of your allowance is to think about what it doesn’t include. Consider a person who earns $6,000 / month after taxes and has the following expenses: 
      </div>
      <div className="ml-8 my-4">
        <ul className="list-disc">
          <li>
            Rent & Utilities: $1,500
          </li>
          <li>
            Student Debt Payments: $500
          </li>
          <li>
            Savings: $1000
          </li>
          <li>
            Other predictable things that can’t really change much day to day (laundry quarters, gym membership, insurance, phone bill, therapy etc): $1200
          </li>
        </ul>
      </div>
      <div>
        This leaves them with $1800 ($60 / day) to spend on food, clothes, Netflix, Ubers, etc. Voila, we have a daily Allowance of $60. It is not an exact science. But we can be pretty confident that if they stay within their allowance, on average, they will be on solid financial ground.
      </div>
    </Guest>
  )
}
