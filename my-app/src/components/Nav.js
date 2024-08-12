import React from 'react'

export default function Nav() {
  return (
    <div className='bg-black text-white p-5'>

            <ul className='flex flex-row'>
                <li className='flex-1'>Logo</li>
               <div className=' flex flex-row gap-10'>
               <li>About</li>
                 <li>Work</li>
                <li>Resume</li>
                <li>Contact</li>
                </div>
            </ul>

    </div>
  )
}
