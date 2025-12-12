import React from 'react'


const Sidebar = () => {
    return (
        <div className='md:mt-5 md:pl-7 md:pr-10 pl-1 pr-2 flex gap-4'>
            <ul className='md:mt-10 md:pr-5 mt-4 pr-1 text-md'>
                <div className='flex flex-col md:gap-5 md:mb-7 gap-2 mb-4'>
                    <a href='https://home.google.com/welcome/' target='blank' className='flex md:gap-2 gap-1'><img className='w-5 md:w-8' src="src\assets\Home.svg" alt="" />Home</a>
                    <a href='https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1238207496%3A1757917778522415' target='blank' className='flex md:gap-2 gap-1'><img className='w-5 md:w-8' src="src\assets\Account.svg" alt="" />Account</a>
                    <a href='https://support.google.com/accounts/answer/3118621?hl=en' target='blank' className='flex md:gap-2 gap-1'><img className='w-5 md:w-8' src="src\assets\Settings.svg" alt="" />Settings</a>
                </div>

                <div className='border-2 text-indigo-500 ml-1 md:ml-0'></div>
                <p className='mt-4'>Recent :</p>
                <div className='flex flex-col gap-2 mt-2 md:mt-3 '>
                    <li className='border-2 border-indigo-400 rounded-lg p-2 hover:border-indigo-800  hover:bg-indigo-400 cursor-pointer'>New Chat</li>
                    <li className='border-2 border-indigo-400 rounded-lg p-2 hover:border-indigo-800  hover:bg-indigo-400 cursor-pointer'>Prev Chat1...</li>
                    <li className='border-2 border-indigo-400 rounded-lg p-2 hover:border-indigo-800  hover:bg-indigo-400 cursor-pointer'>Chat2...</li>
                    <li className='border-2 border-indigo-400 rounded-lg p-2 hover:border-indigo-800  hover:bg-indigo-400 cursor-pointer'>Chat3...</li>
                    <li className='border-2 border-indigo-400 rounded-lg p-2 hover:border-indigo-800  hover:bg-indigo-400 cursor-pointer'>Chat4...</li>
                    <li className='border-2 border-indigo-400 rounded-lg p-2 hover:border-indigo-800  hover:bg-indigo-400 cursor-pointer'>Chat5...</li>
                </div>
            </ul>

            <div className='border-2 text-indigo-500 h-full'></div>

        </div>
    )
}

export default Sidebar
