import React from 'react'
import user1 from "../images/user-1.png";

function UserProfile() {
  return (
    <>
    {/* Mobile */}
    <div className='md:hidden lg:hidden flex flex-col justify-center shadow-2xl p-10 rounded-2xl'>
    <img src={user1} alt="user profile" className='p-10' />
    <div className='text-left pb-5'>
      <div><strong>Name:</strong> Angel</div>
      <div className='pt-3'><strong>Age:</strong> 27</div>
      <div className='pt-3'><strong>Occupation:</strong>{' '}Grad Student & Caretaker</div>
      <div className='pt-3'><strong>Background:</strong></div>
      <div>Angel Rodriguez is a full time grad student and caretaker for her elderly grandmother.</div>

    </div>
    </div>
{/* Desktop */}
<div className='hidden md:block lg:block md:mt-10 lg:mt-10 md:mb-10 lg:mb-10'>
  <div className='p-20 shadow-2xl mx-5 flex flex-col-2 rounded-3xl justify-around'>
    <div><img src={user1} alt='user-pic'/></div>
    <div className='flex flex-col justify-between'>
    <div className='ml-10'><strong>Name:</strong> Angel</div>
    <div className='ml-10'><strong>Age:</strong> 27</div>
    <div className='ml-10'><strong>Occupation:</strong> Angel</div>
    <div className='ml-10'><strong>Background:</strong><br></br> Angel</div>
</div>
    </div>

</div>

    
  </>
  );
}

export default UserProfile