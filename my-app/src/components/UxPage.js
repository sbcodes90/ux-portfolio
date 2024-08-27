import React from 'react'
import hhg from "../images/hhg.png";
import hhg2 from "../images/hhg2.png";
import  Nav  from "../components/Nav";
import { Link } from 'react-router-dom';
import header from "../images/header.png";
import repMeHeader from "../images/repme.png";

export default function UxPage() {
  return (
    <>
    <Nav />
    <div className='bg-white'>
    <header className="lg:text-right text-5xl tracking-widest text-center mt-10 mr-5">UX DESIGN PROJECTS</header>
      <section>
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src={hhg2} alt="mobile-app" />
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">MentorMeCollective X Grow With Google Spring/Summer 2024 Cohort</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                <Link to="mmc-google-project" className="inline-flex items-center text-white bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
              </div>
            </div>
          </section>
          <section>
        <div className="bg-slate-400 items-center md:grid md:grid-cols-2 sm:py-16">
              <div className="mt-4 md:mt-0">
                <h2 className="px-10 mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">RepresentMe </h2>
                <p className=" px-10 mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                <Link to="represent-me-app" className=" ml-10 inline-flex items-center text-white bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
              </div>
              <div className='bg-slate-950'>
              <img className="" src={repMeHeader} alt="mobile-app" />
              </div>
            </div>
          </section>
          <section>
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <img className="w-full" src={hhg} alt="mobile-app" />
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Siemens Healthineers</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
                <a href="/" className="inline-flex items-center text-white bg-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                  View Project
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </section>
          </div>
          </>
        )
}
