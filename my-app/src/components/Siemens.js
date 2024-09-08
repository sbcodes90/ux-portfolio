import React from "react";
import Nav from "./Nav";
import compAnalysis from "../images/repme-compa.png";
import { Link } from "react-router-dom";
import uj1 from "../images/repme-uj.png";
import prototype from "../images/siemens-prototype.png";
import logo from "../images/Siemens-logo.png";
import desktopLogo from "../images/siemens-desktop.png";
import siemensScreens from "../images/siemens-screens.png";

export default function GoogleProjectPage() {

  return (
    <>
      <Nav />
      <div className="bg-white pb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center mt-20">
            <img src={logo} alt="logo" />
          </div>
          <div className="text-black font-light lg:text-xl mx-10 lg:mx-80 my-10 text-center">
          Siemen's Healthineers is a global company with offices located around the world. For their Contact page, on their global website, they wanted a quicker more efficient way for the user to find contact information for a specific site.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <img src={siemensScreens} alt="test" />
        </div>
        <section className="items-start mx-10 lg:mx-60 px-12 py-10 bg-orange-500 shadow-2xl rounded-3xl lg:mb-10 mt-10">
          <div className="font-bold text-lg">Client:</div>
          <div className="pb-5 font-light">Siemens Healthineers</div>
          <div className="font-bold text-lg">Timeline</div>
          <div className="pb-5 font-light">December 2019 - March 2021</div>
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
        The original global contact page showcased a interactive world map that exhibited the company's global office locations. Users had the option to select a continent, which would then reveal a list of countries within that continent. Subsequently, they could scroll to locate the specific country they intended to contact. Regrettably, this process proved to be cumbersome for users, leading to dissatisfaction among our customers and clients. Consequently, my manager sought my input for potential enhancements to address these concerns.   </div>     
        <div className="font-semibold text-2xl pt-8">Research Analysis</div>
        <div className="pb-5 font-light pt-2">
        Infinite scrolling can be a hassle for users. Imagine having to scroll through a long list of countries to find one starting with the letter "Z"! To improve this, it's best to avoid using drop-down menus with more than 10 or fewer than 5 options, based on UX design principles. This way, we can make the experience more user-friendly. </div>

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
