import React from 'react'

function UserProfile({ user, name, age, occupation, background }) {
  return (
    <>
    {/* Mobile */}
    <div className='md:hidden lg:hidden flex flex-col justify-center shadow-2xl p-10 rounded-2xl'>
    <img src={user} alt="user profile" className='p-10' />
    <div className='text-left pb-5'>
      <div><strong>Name:</strong> {name}</div>
      <div className='pt-3'><strong>Age:</strong>{' '}{age}</div>
      <div className='pt-3'><strong>Occupation:</strong>{' '}{occupation}</div>
      <div className='pt-3'><strong>Background:</strong></div>
      <div>{background}</div>

    </div>
    </div>
{/* Desktop */}
<div className='hidden md:block lg:block md:mt-10 lg:mt-10 md:mb-10 lg:mb-10'>
  <div className='p-20 shadow-2xl mx-5 flex flex-col-2 rounded-3xl'>
    <div className=''><img src={user} alt='user-pic' className=''/></div>
    <div className='flex flex-col justify-center'>
    <div className='ml-10 p-2'><strong>Name:</strong>{name}</div>
    <div className='ml-10  p-2'><strong>Age:</strong>{' '}{age}</div>
    <div className='ml-10  p-2'><strong>Occupation:</strong>{' '}{occupation}</div>
    <div className='ml-10  p-2'><strong>Background:</strong>{' '}{background}</div>
</div>
    </div>

</div>

  </>
  );
}

export default UserProfile