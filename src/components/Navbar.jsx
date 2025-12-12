import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-indigo-500 md:p-3 p-1 flex justify-between text-center'>
        <span className='font-bold text-xl md:text-2xl p-1 flex gap-1 md:gap-2 md:p-1.5 '><img className='w-5 md:w-8' src="src/assets/Logo.svg" alt="" />J.A.R.V.I.S</span>
      <ul className='flex gap-1 md:gap-8'>
        <a href='https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65' target='blank' className='text-sm md:text-xl gap-1 md:gap-2 flex border-1 border-indigo-950 font-medium rounded-md p-1 md:p-1.5 hover:border-indigo-950  hover:bg-indigo-600 cursor-pointer'>
        <img className='w-5 md:w-8' src="src\assets\Upgrade.svg" alt="" />Upgrade</a>
        <a href='https://gemini.google/overview/' target='blank' className='font-medium text-sm md:text-xl p-1.5'>About</a>
        <a href='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1238207496%3A1757917778522415' target='blank' className='font-medium text-sm md:text-xl gap-2 p-1.5'>Login</a>
      </ul>
    </div>
  )
}

export default Navbar
