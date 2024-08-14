import React from 'react'
import projectsHeader from "../src/images/projects.png"
import hhg from "../src/images/hhg.png"
import hhg2 from "../src/images/hhg2.png"

export default function UxPage() {
  return (
    <div className="lg:p-20">
    <div>
      <header className="lg:text-right text-5xl tracking-widest	lg:pb-10 text-center bg-white mt-10">UX DESIGN</header>
      <img src={projectsHeader} alt="header-for-projects" className='w-40 pt-10 lg:w-52 lg:pb-7 ml-10'/>
      <section className="flex flex-col-reverse  lg:flex-row justify-around items-start  border-black border-4 lg:p-20 border-solid rounded-3xl m-10">

        <div className="p-10 lg:w-full"><div className='text-xl font-bold pb-2'>MentorMeCollective</div> MentorMeCollective is a non-profit organization focused on providing opportunites for first generation techies. 
         They recently partnered with Google to provide scholarships for their members to participate in Google's Grow With Me Program.
            The goal was for students to create a solution for the United Nations program. 
         I served as the UX Designer for the
          HeartHealthGlobalProject and designed a mobile application
          to educate and provide solutions for users from all demographics,
          races, and backgrounds on how they can reduce their risk for heart
          disease and decrease the heart mortality rates in the United States.
          <div className='text-center bg-black px-10 py-5 text-white font-bold rounded-full mt-10'>
            <button>View Project</button>
            </div>
          </div>
        <div className="p-10 lg:w-full flex">
        <img src={hhg} alt="hhg-mobile-app" className="w-1/2" />
        <img src={hhg2} alt="hhg-mobile-app2" className="w-1/2" />

        </div>
      </section>
     


    </div>
  </div>
  )
}
