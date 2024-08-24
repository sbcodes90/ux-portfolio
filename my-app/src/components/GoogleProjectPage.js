import React from "react";
import Nav from "./Nav";
import header from "../images/header.png";
import mobilePics from "../images/hhg.png";
import chart from "../images/chart.png";
import UserProfile from "./UserProfile";
import logo from "../images/hhg-logo.png";
import sitemap from "../images/sitemap.png";
import wireframes from "../images/Wireframes.png";
import prototype from "../images/hhg-prototype.png";
import { Link } from "react-router-dom";
import userJourney from "../images/hhg-user-journey.png";
export default function GoogleProjectPage() {
  return (
    <>
    <div className="bg-rose-900 pb-10">
      <img src={header} alt="header" className="w-full" />
      <Nav />
      <div id="container" className="flex flex-col items-center bg-white">
      <div className="font-bold text-xl lg:text-4xl p-10 text-black mt-20">
             HeartHealthGlobal
          </div>
          <div className="font-light lg:text-2xl mx-10 lg:mx-72 text-center">A mobile app designed to decrease the mortality rates for people in the United States by educating and providing solutions for users
            to decrease their risk for heart disease. 
          </div>
          <img src={mobilePics} alt="hhg" />
          </div>
          <section className="items-start mx-10 lg:mx-60 px-12 py-14 bg-white shadow-2xl rounded-3xl mt-16 mb-10">
          <div className="font-bold text-lg">Client:</div>
          <div className="pb-5 font-light">United Nations Sustanabilty Initiative: Goal 3 Ensure healthy lives and promote well-being for all at all ages through Grow With Google X Mentor Me Collective</div>
          <div className="font-bold text-lg">Timeline</div>
          <div className="pb-5 font-light">April 2024 - July 2024</div>
          <div className="font-bold text-lg">Role</div>
          <div className="pb-5 font-light">UX Designer and Researcher</div>
          <div className="font-bold text-lg">Tools</div>
          <div className="font-light">Figma, Adobe Photoshop</div>
          </section>
          <section>
          {/* <img src={chart} alt="ca-chart" /> */}
        </section>
    </div>
    <section className="mb-20 mx-12 lg:mx-72">
    <div className="font-semibold text-2xl pt-20">Problem Statement</div>
          <div className="pb-5 font-light">Design a mobile app that will educate and provide solutions for users to decrease their risk for heart disease in the US.</div>
          <div className="font-semibold text-2xl pt-8">My Design Process</div>
          <div className="pb-5 font-light">
            Some common questions to begin a UX competitive analysis are: Who is
            currently trying to solve this problem? How are they trying to solve
            the problem? What their main differentiator or unique value-add is
            for their business and products Did anyone try to solve it in the
            past and fail? Why did they fail? Heart Disease in America is out of
            control. There are many initiatives, and organizations that offer
            websites and apps to educate users, but who is offering solutions?
            How can our app stand out?
          </div>
          <div className="font-semibold text-2xl pt-8">Research</div>
          <div className="font-light text-xl pt-3">Competitive Analysis</div>
          <div className="pb-5 font-light">
            Some common questions to begin a UX competitive analysis are: Who is
            currently trying to solve this problem? How are they trying to solve
            the problem? What their main differentiator or unique value-add is
            for their business and products Did anyone try to solve it in the
            past and fail? Why did they fail? Heart Disease in America is out of
            control. There are many initiatives, and organizations that offer
            websites and apps to educate users, but who is offering solutions?
            How can our app stand out?
          </div>
          <section>
      <div className="font-semibold text-2xl pt-10">Logo Design</div>
    <img src={logo} alt="hhg-logo" />
    </section>
    <div className="font-semibold text-2xl pt-10">Empathize: Learning about our users</div>
    <div className="font-light text-xl pt-3">User Interviews</div>
    <div className="pb-5 font-light pt-2">
      Some common questions to begin a UX competitive analysis are: Who is
      currently trying to solve this problem? How are they trying to solve
      the problem? What their main differentiator or unique value-add is
      for their business and products Did anyone try to solve it in the
      past and fail? Why did they fail? Heart Disease in America is out of
      control. There are many initiatives, and organizations that offer
      websites and apps to educate users, but who is offering solutions?
      How can our app stand out?
    </div>

    <UserProfile />
      <UserProfile />
      <UserProfile />
      <section>
      <div className="font-semibold text-2xl pt-10">SiteMap / Architecture</div>
    <img src={sitemap} alt="sitemap" className="my-10" />
    </section>
    
    <section>
      <div className="font-semibold text-2xl pt-5">Wireframes</div>
      <div className="pb-5 font-light pt-2">
      Some common questions to begin a UX competitive analysis are: Who is
      currently trying to solve this problem? How are they trying to solve
      the problem? What their main differentiator or unique value-add is
      for their business and products Did anyone try to solve it in the
      past and fail? Why did they fail? Heart Disease in America is out of
      control. There are many initiatives, and organizations that offer
      websites and apps to educate users, but who is offering solutions?
      How can our app stand out?
    </div>
    
    <div className="font-light text-xl pt-3 pb-5">First Iteration</div>
  <img src={wireframes} alt="wireframes" />
  <section>
      <div className="font-light text-xl pt-3">User Testing / Ideation Phase</div>
{/*     <div className="font-light text-xl pt-3">User Interviews</div>
 */}    <div className="pb-5 font-light pt-2">
      Some common questions to begin a UX competitive analysis are: Who is
      currently trying to solve this problem? How are they trying to solve
      the problem? What their main differentiator or unique value-add is
      for their business and products Did anyone try to solve it in the
      past and fail? Why did they fail? Heart Disease in America is out of
      control. There are many initiatives, and organizations that offer
      websites and apps to educate users, but who is offering solutions?
      How can our app stand out?
    </div>
    </section>
  <section>
      <div className="font-light text-xl pt-10">User Journey</div>
      <div className="font-light pt-3">To ensure a seamless user experience, it was crucial to empathetically observe the user journey, capture their emotions and feelings while using the app, and implement the user feedback to effectively help them achieve their goals.</div>
      <img src={userJourney} alt="user-journey" className="rounded-3xl my-6" />
    </section>
  <div className="font-light text-xl pt-3 pb-5">Second Iteration</div>
  <img src={wireframes} alt="wireframes" />

    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">Prototypes</div>
    <div className="font-light text-xl pt-3">Clickable Mobile Prototype: Go Ahead click around!</div>
    <iframe title="hhg" className="w-full h-screen" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F36Yy6UuTzh1H36rXo7Ua8w%2FHeartHealthGlobal-Design-Files%3Fnode-id%3D11-6%26t%3DDo5qr26Ihe5jK4iM-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D7%253A5%26starting-point-node-id%3D11%253A6" allowfullscreen />    
      <div className="font-light text-xl pt-20 pb-5">Figma Screens:
   
        </div>
   
    <img src={prototype} className="bg-gray-50 lg:p-20 rounded-3xl"  alt="mobile-prototype" />
    <div className="flex justify-center items-center p-20">
    <button className="bg-black text-white px-10 py-3 rounded-3xl ml-5">
      <Link target="_blank" className="text-lg" to="https://www.figma.com/design/36Yy6UuTzh1H36rXo7Ua8w/HeartHealthGlobal-Design-Files?node-id=7-5&t=n2xehB5eQlQ1hU28-1" >Go to Figma</Link>
        </button>
        </div>
     </section>
      </section>
    </>
  );
}
