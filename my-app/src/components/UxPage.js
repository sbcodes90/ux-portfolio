import React from 'react'
import hhg from "../images/hhg.png";
import hhg2 from "../images/hhg2.png";
import  Nav  from "../components/Nav";
import { Link } from 'react-router-dom';
import whiteLogo from "../images/white-repme-logo.png";
import screens from "../images/rep-me-screens.png";
import siemensScreens from "../images/siemens-screens.png";

export default function UxPage() {
  return (
    <>
    <Nav />

    <header className="bg-black w-full text-white lg:text-5xl text-3xl tracking-tight text-center mr-5 font-light p-10 lg:p-20">UX DESIGN PROJECTS</header>
    <div className='bg-slate-50 lg:p-20'>
      <section className='bg-gradient-to-r from-rose-700 to-red-900 py-5 lg:rounded-3xl lg:mb-10 shadow-lg'>
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img className="w-full" src={hhg} alt="mobile-app" />
        <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-extrabold text-white px-5">HeartHealthGlobal</h2>
                <p className="mb-6 font-medium text-white md:text-lg px-5">MentorMeCollective X Grow With Google Spring/Summer 2024 Cohort Project aimed to educated users in the United States on heart disease prevention and to decrease the mortality rates in America.</p>
                <Link to="mmc-google-project" className="inline-flex items-center text-white bg-black focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5 mb-5">
                View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </section>
          <section>
        <div className="bg-gradient-to-r from-indigo-900 to-blue-800 pb-10 items-center md:grid md:grid-cols-2 sm:py-16 lg:rounded-3xl mb-10">
              <div className=" hidden lg:block ml-28 md:pt-20 ">
                <h2 className="px-10 mb-4  text-2xl lg:text-3xl tracking-tight font-extrabold text-white">RepresentMe </h2>
                <p className=" px-10 mb-6 font-medium text-white md:text-lg">A mobile app that helps users identify political candidates whose policies align with their own values, and provides info on upcoming elections. </p>
                <Link to="represent-me-app" className=" ml-10 inline-flex items-center text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
              </div>
              <div>
              {/* <img className="" src={repMeHeader} alt="mobile-app" /> */}
              <img src={whiteLogo} alt="logo" className='p-10' />
              <div className="flex flex-col justify-center items-center text-white">
          <img src={screens} alt="test" />
          <div className="lg:hidden pt-3">
                <p className=" px-12 mb-6 font-medium lg:font-light text-white md:text-lg">A mobile app that helps users identify political candidates whose policies align with their own values, and provides info on upcoming elections. </p>
                <Link to="represent-me-app" className=" ml-10 inline-flex items-center text-white bg-red-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
              </div>
        </div>
              </div>
            </div>
          </section>
          <section className='bg-gradient-to-r from-teal-400 to-teal-600 rounded-3xl py-20'>
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src={siemensScreens} alt="siemens-screens" />
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-white">Siemens Healthineers</h2>
                <p className="mb-6 font-medium text-white">
                Case study: No More Endless Scrolling! <br></br>
                Problem:
                Solution:
                </p>
                <Link to="siemens-case-study" className="inline-flex items-center text-white bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               </Link>
              </div>
            </div>
          </section>
          </div>
          </>
        )
}
