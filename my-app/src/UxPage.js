import React from 'react'
import projectsHeader from "../src/images/projects.png"

export default function UxPage() {
  return (
    <div className="lg:p-20">
    <div>
      <header className="lg:text-right text-5xl tracking-widest	lg:pb-10 text-center pt-10 bg-white	">UX DESIGN</header>
      <img src={projectsHeader} alt="header-for-projects" className='w-60 pb-7 ml-7'/>
      <section className="flex flex-col gap-5 lg:flex-row justify-around items-start lg:gap-5 pb-10">

        <div className=" px-10 lg:w-6/12"><div className='text-xl font-bold pb-2'>MentorMeCollective</div> MentorMeCollective is a non-profit organization focused on providing opportunites for first generation techies. 
         They recently partnered with Google to provide scholarships for their members to participate in Google's Grow With Me Program.
            The goal was for students to create a solution for the United Nations program. 
         I served as the UX Designer for the
          HeartHealthGlobalProject and designed a mobile application
          to educate and provide solutions for users from all demographics,
          races, and backgrounds on how they can reduce their risk for heart
          disease and decrease the heart mortality rates in the United States.
          <div className='text-center bg-black px-10 py-5 text-white font-bold rounded-full mt-5'>
            <button>View Project</button>
            </div>
          </div>
        <div className="p-10 lg:w-6/12"><strong>Image</strong></div>
      </section>
     


    </div>
  </div>
  )
}
