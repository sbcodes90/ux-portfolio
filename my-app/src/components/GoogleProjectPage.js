import React from "react";
import Nav from "./Nav";
import header from "../images/header.png";
import mobilePics from "../images/hhg.png";
import compAnalysis from "../images/ca.png";
import UserProfile from "./UserProfile";
import logo from "../images/hhg-logo.png";
import sitemap from "../images/sitemap.png";
import wireframes from "../images/Wireframes.png";
import prototype from "../images/hhg-prototype.png";
import { Link } from "react-router-dom";
import userJourney from "../images/hhg-user-journey.png";
import designProcess from "../images/uxdesignprocess.png";

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
          <div className="font-light lg:text-2xl mx-10 lg:mx-72 text-center">
            A mobile app designed to provide a smooth and effective user experience, aiming to decrease heart disease mortality rates for people of all ages in the United States by educating and providing solutions.
          </div>
          <img src={mobilePics} alt="hhg" />
        </div>
        <section className="items-start mx-10 lg:mx-60 px-12 py-14 bg-white shadow-2xl rounded-3xl mt-16 mb-10">
          <div className="font-bold text-lg">Client:</div>
          <div className="pb-5 font-light">United Nations Sustainabilty Initiative: Goal 3 Ensure healthy lives and promote well-being for all at all ages through Grow With Google X Mentor Me Collective</div>
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
        <div className="pb-5 font-light pt-3">Design a mobile app that will educate and provide solutions for users to decrease their risk for heart disease in the US.</div>
        <img src={designProcess} alt="design-process" />
        <div className="font-semibold text-2xl pt-8">My Design Process</div>

        <div className="pb-5 font-light pt-3">
        The design thinking process is a helpful model that allows me to gain insights into user needs, question existing assumptions, reframe problems, and develop creative solutions through the use of prototypes and testing. By engaging in iterative cycles, I am able to continuously refine the application and enhance the user experience to be as seamless and impactful as it can be.
        </div>
        <div className="font-semibold text-2xl pt-8">Stage 1: Empathize</div>
        <div className="pb-5 font-light pt-2">
          Understanding and relating to other people is the first step in the design thinking process. During this stage, I do research to really understand what our users need. I try to put aside any preconceived ideas I might have and instead focus on learning from the users themselves. This helps me understand their experiences, what drives them, and what challenges they face.            </div>
        <div className="font-semibold text-2xl pt-8">User Research</div>
        <div className="font-light text-xl pt-3">Learning about our users through user interviews</div>
        <div className="pb-5 font-light pt-2">
        It's so important to truly understand our users, so I took the time to conduct 5 user interviews with friends and random people to hear their opinions and ideas about the app. I really wanted to learn about what they would like to see, learn, and how the app would impact their lives. Some of the questions I asked were:          <ul className="list-disc">
            <li className="p-2 mt-4 italic">
              Do you use mobile apps?
            </li>
            <li className="p-2 italic">
              Are you concerned with your heart health?
            </li>
            <li className="p-2 italic">
              What would be the easiest most convienient way for you to learn about ways to reduce your risks?        </li>
          </ul>
        </div>

        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <div className="font-semibold text-2xl pt-8">Competitive Analysis</div>
        <div className="pt-2 pb-5 font-light">
        Understanding the importance of competitive analysis in the research process is crucial because it allows us to evaluate our brand/company compared to our competitors. It helps us identify opportunities for improving our user experience (UX) and recognize areas for improvement. For instance, comparing the overall ease of using our interface or the time it takes to complete tasks in comparison to other similar apps. How can we make our design and user experience stand out from competitors?
        <div className="font-light text-xl pt-3">Results:</div>

<img src={compAnalysis} alt="competitive-analysis" className="rounded-3xl bg-slate-50 p-5 mt-3" />
        </div>
        <section>
          <div className="font-semibold text-2xl pt-10">Logo Design</div>
          <img src={logo} alt="hhg-logo" />
        </section>

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
              After the first ideation of wireframes were completed it was time to test them out on our potential users. I created a protoype of the low fidelity wireframes and observed as users navigated through the app and recorded their painpoints, and emotions with no interference.
            </div>
          </section>
          <section>
            <div className="font-light text-xl pt-10">User Journey</div>
            <div className="font-light pt-3">The user journey is a recorded process to effectively capture the user's painpoints, and emotions while navigating the mobile application. The results of this will be applied to the next design iteration of the mobile wireframe.</div>
            <img src={userJourney} alt="user-journey" className="rounded-3xl my-6" />
          </section>
          <div className="font-light text-xl pt-3 pb-2">Second Iteration</div>
          <div className="pb-5 font-light pt-2">
            The painpoints identified in the user journey allowed me to go back in and fix the issues and produce a second iteration of the wireframe
          </div>
          <img src={wireframes} alt="wireframes" />

        </section>
        <section>
          <div className="font-semibold text-2xl pt-10">Prototypes</div>
          <div className="font-light text-xl pt-3">Clickable Mobile Prototype: Go Ahead click around!</div>
          <div className="pb-5 font-light pt-2">After another round of user testing the wireframe, if there are no more issues it's now time to design the mobile prototype. Here is the actual completed prototype followed by a link to the actual Figma screens</div>
          <iframe title="hhg" className="w-full h-screen" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F36Yy6UuTzh1H36rXo7Ua8w%2FHeartHealthGlobal-Design-Files%3Fnode-id%3D11-6%26t%3DDo5qr26Ihe5jK4iM-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D7%253A5%26starting-point-node-id%3D11%253A6" allowfullscreen />
          <div className="font-light text-xl pt-20 pb-5">Figma Screens:

          </div>

          <img src={prototype} className="bg-gray-50 lg:p-20 rounded-3xl" alt="mobile-prototype" />
          <div className="flex justify-center items-center p-20">
            <button className="bg-black text-white px-10 py-3 rounded-3xl ml-5">
              <Link target="_blank" className="text-lg" to="https://www.figma.com/design/36Yy6UuTzh1H36rXo7Ua8w/HeartHealthGlobal-Design-Files?node-id=7-5&t=n2xehB5eQlQ1hU28-1" >Go to Figma</Link>
            </button>
          </div>
        </section>
        <section>
          <div className="font-semibold text-2xl pt-10">Reflection</div>
          <div className="pb-5 font-light pt-2">
            This case study reiterated the importance of user testing and design iterations. There are so many things you may have forgotten about while designing. When the user interacts with the products and you can see their emotions and hear their painpoints it helps highlights things you may have missed. After all the user experience is all about the user.
          </div>

        </section>
      </section>
    </>
  );
}
