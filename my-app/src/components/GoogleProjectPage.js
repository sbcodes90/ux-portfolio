import React from "react";
import Nav from "./Nav";
import header from "../images/header.png";
import mobilePics from "../images/hhg.png";
import chart from "../images/chart.png";
export default function GoogleProjectPage() {
  return (
    <div className="bg-slate-50 pb-20">
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
          <section className="items-start lg:mx-60 px-12 py-10 bg-white shadow-2xl rounded-3xl mt-10 mb-10">
          <div className="font-bold text-lg">Timeline</div>
          <div className="pb-5 font-light">April 2024 - July 2024</div>
          <div className="font-bold text-lg">Role</div>
          <div className="pb-5 font-light">UX Designer and Researcher</div>
          <div className="font-bold text-lg">Tools</div>
          <div className="pb-5 font-light">Figma</div>
          <div className="font-bold text-lg">Problem Statement</div>
          <div className="pb-5 font-light">Design a mobile app that will educate and provide solutions for users to decrease their risk for heart disease in the US.</div>
          <hr /> 
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
          <img src={chart} alt="ca-chart" />
          <div className="font-semibold text-2xl pt-8">Empathize: Learning about our users</div>
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
         
        </section>
        
    </div>
  );
}
