import React from "react";
import Nav from "./Nav";
import header from "../images/header.png";
import mobilePics from "../images/hhg.png";
import chart from "../images/chart.png";
import UserProfile from "./UserProfile";
import logo from "../images/hhg-logo.png";
import sitemap from "../images/sitemap.png";
import wireframes from "../images/Wireframes.png";


export default function GoogleProjectPage() {
  return (
    <>
    <div className="bg-rose-900 pb-10">
      <img src={header} alt="header" className="w-full" />
      <Nav />
      <div id="container" className="flex flex-col items-center bg-white">
      <div className="font-bold text-4xl p-10 text-black mt-20">
            HeartHealthGlobal
          </div>
          <div className="font-light text-3xl mx-72 text-center">A mobile app designed to educate and provide solutions for users
            to decrease their risk for heart disease. 
          </div>
          <img src={mobilePics} alt="hhg" />
          </div>
          <section className="items-start lg:mx-60 px-12 py-14 bg-white shadow-2xl rounded-3xl mt-16 mb-10">
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
    <section className="mb-20 mx-72">
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
    <div className="font-light text-xl pt-3">User Interviews</div>
    <img src={sitemap} alt="sitemap" className="my-10" />
    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">User Journey</div>
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
    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">Sketches</div>
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
    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">Wireframes</div>
    <div className="font-light text-xl pt-3">First Iteration</div>
  <img src={wireframes} alt="wireframes" />
  <div className="font-light text-xl pt-3">Second Iteration</div>
  <img src={wireframes} alt="wireframes" />

    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">User Testing / Ideation Phase</div>
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
    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">Logo Design</div>
    <img src={logo} alt="hhg-logo" />
    </section>
    <section>
      <div className="font-semibold text-2xl pt-10">Prototypes</div>
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
    </section>
      </section>
      
    </>
  );
}
