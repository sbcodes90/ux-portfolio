import React from "react";
import Nav from "./Nav";
import compAnalysis from "../images/repme-compa.png";
import { Link } from "react-router-dom";
import uj1 from "../images/repme-uj.png";
import designProcess from "../images/uxdesignprocess.png";
import screens from "../images/rep-me-screens.png";
import prototype from "../images/siemens-prototype.png";
import logo from "../images/Siemens-logo.png";
import desktopLogo from "../images/siemens-desktop.png";

export default function GoogleProjectPage() {
  return (
    <>
      <Nav />
      <div className="bg-white pb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center mt-20">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-black font-light lg:text-xl mx-10 lg:mx-72 my-10 text-center">
            Siemen's Healthineers is a global company with offices located
            around the world. For their Contact page, on their global website,
            they wanted a quicker more efficient way for the user to find
            contact information for a specific site.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <img src={screens} alt="test" />
        </div>
        <section className="items-start mx-10 lg:mx-60 px-12 py-14 bg-white shadow-2xl rounded-3xl mb-10">
          <div className="font-bold text-lg">Client:</div>
          <div className="pb-5 font-light">Siemens Healthineers</div>
          <div className="font-bold text-lg">Timeline</div>
          <div className="pb-5 font-light">April 2024 - July 2024</div>
          <div className="font-bold text-lg">Role</div>
          <div className="pb-5 font-light">UX Designer and Developer</div>
          <div className="font-bold text-lg">Tools</div>
          <div className="font-light">Figma, Adobe Photoshop</div>
        </section>
        <section>{/* <img src={chart} alt="ca-chart" /> */}</section>
      </div>
      <section className="mb-20 mx-12 lg:mx-72">
        <div className="font-semibold text-2xl">Problem Statement</div>
        <div className="pb-5 font-light pt-3">
          The original global contact page led you to a map of the world where
          you would select the country on the map and it would produce a long
          list of countries in a drop down box, which required lots of scrolling
          to get to your selected country.
        </div>
        
        <div className="font-semibold text-2xl pt-8">Stage 1: Empathize</div>
        <div className="pb-5 font-light pt-2">
          Understanding and relating to other people is the first step in the
          design thinking process. During this stage, I do research to really
          understand what our users need. I try to put aside any preconceived
          ideas I might have and instead focus on learning from the users
          themselves. This helps me understand their experiences, what drives
          them, and what challenges they face.{" "}
        </div>
        <div className="font-semibold text-2xl pt-8">User Research</div>
        <div className="font-light text-xl pt-3">Surveys </div>
        <div className="pb-5 font-light pt-2">
          It's so important to truly understand our users, so I took the time to
          conduct some user interviews with friends and random people to hear
          their opinions and ideas about the app. I really wanted to learn about
          what they would like to see, learn, and how the app would impact their
          lives. Some of the questions I asked were:{" "}
          <ul className="list-disc">
            <li className="p-2 mt-4 italic">Do you use mobile apps?</li>
            <li className="p-2 italic">
              Do you participate in federal and state elections?
            </li>
            <li className="p-2 italic">
              Do you know who is running for office in your area?
            </li>
            <li className="p-2 italic">
              What political values/stances/policies are most important to you?
            </li>
            <li className="p-2 italic">
              What changes if any would you like to see made in our governement?
            </li>
            <li className="p-2 italic">
              Are you happy with the current state of our government?{" "}
            </li>
          </ul>
        </div>

        <div className="font-semibold text-2xl pt-8">Competitive Analysis</div>
        <div className="pt-2 pb-5 font-light">
        Browse Siemen's competitors websites and compare their contact pages. How can we upgrade the look while keeping it simple and remaining on brand?
          <div className="font-light text-xl pt-3">Results:</div>
          <img
            src={compAnalysis}
            alt="competitive-analysis"
            className="rounded-3xl bg-slate-50 p-5 mt-3"
          />
        </div>

        <section>
          <div className="font-light text-xl pt-3">
            User Testing / Ideation Phase
          </div>
          {/*     <div className="font-light text-xl pt-3">User Interviews</div>
           */}{" "}
          <div className="pb-5 font-light pt-2">
            After the first ideation of wireframes were completed it was time to
            test them out on our potential users. I created a protoype of the
            low fidelity wireframes and observed as users navigated through the
            app and recorded their painpoints, and emotions with no
            interference.
          </div>
        </section>
        <section>
          <div className="font-light text-xl pt-10">User Journey</div>
          <div className="font-light pt-3">
            The user journey is a recorded process to effectively capture the
            user's painpoints, and emotions while navigating the mobile
            application. The results of this will be applied to the next design
            iteration of the mobile wireframe.
          </div>
          <img src={uj1} alt="user-journey" className="rounded-3xl my-6" />
          {/*  <img
            src={staziJourney}
            alt="user-journey"
            className="rounded-3xl my-6"
          /> */}
        </section>
        <section>
          <div className="font-semibold text-2xl pt-10">Prototypes</div>
          <div className="font-light text-xl pt-3">
            Clickable Mobile Prototype: Go Ahead click around!
          </div>
          <div className="pb-5 font-light pt-2">
            After another round of user testing the wireframe, if there are no
            more issues it's now time to design the mobile prototype. Here is
            the actual completed prototype followed by a link to the actual
            Figma screens
          </div>
          <iframe
            title="represent-me"
            className="w-full h-screen"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVetxZoESMctDc8QfnFCRr6%2FRepresentMe-App%3Fnode-id%3D32-476%26t%3DAvxyjRlTAXfYMV6f-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D32%253A475"
            allowfullscreen
          ></iframe>
          <div className="font-light text-xl pt-20 pb-5">
            Mobile Figma Screens:
          </div>
          <img
            src={prototype}
            className="bg-gray-50 rounded-3xl"
            alt="mobile-prototype"
          />
          <div className="flex justify-center items-center p-20">
            <button className="bg-black text-white px-10 py-3 rounded-3xl ml-5">
              <Link
                target="_blank"
                className="text-lg"
                to="https://www.figma.com/design/36Yy6UuTzh1H36rXo7Ua8w/HeartHealthGlobal-Design-Files?node-id=7-5&t=n2xehB5eQlQ1hU28-1"
              >
                Go to Figma
              </Link>
            </button>
          </div>
          <div className="font-light text-xl pt-20 pb-5">
            Desktop Figma Screens:
          </div>
          <img
            src={desktopLogo}
            className="bg-gray-50 rounded-3xl"
            alt="mobile-prototype"
          />
          <div className="flex justify-center items-center p-20">
            <button className="bg-black text-white px-10 py-3 rounded-3xl ml-5">
              <Link
                target="_blank"
                className="text-lg"
                to="https://www.figma.com/design/36Yy6UuTzh1H36rXo7Ua8w/HeartHealthGlobal-Design-Files?node-id=7-5&t=n2xehB5eQlQ1hU28-1"
              >
                Go to Figma
              </Link>
            </button>
          </div>
        </section>
        <section>
          <div className="font-semibold text-2xl pt-10">Reflection</div>
          <div className="pb-5 font-light pt-2">
            This case study involved designing for mobile and desktop screens,
            including a login and sign-up process. Throughout each design
            iteration, and based on the user journey results, I identified the
            pain points and opportunities. This guided me in determining the
            necessary screens to enhance the user flow and make it more
            intuitive. Ultimately, the design process revolves around
            empathizing with the user and addressing their needs.
          </div>
        </section>
      </section>
    </>
  );
}
