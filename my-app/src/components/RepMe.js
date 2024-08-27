import React from "react";
import Nav from "./Nav";
import header from "../images/header.png";
import compAnalysis from "../images/ca.png";
import UserProfile from "./UserProfile";
//import logo from "../images/hhg-logo.png";
import wireframes from "../images/repme-mobile-wireframe.png";
import secondWireframe from "../images/repme-mobile-wireframe02.png";
import prototype from "../images/repme-mobile-proto-screens.png";
import { Link } from "react-router-dom";
import eduardoJourney from "../images/eduardo-user-journey.png";
import designProcess from "../images/uxdesignprocess.png";
import staziJourney from "../images/stazi-user-journey.png";
import eduardo from "../images/Eduardo.png";
import stazi from "../images/Stazi.png";
import logo from "../images/repmelogo2.png";
import newLogo from "../images/rep-me-header.png";
import screens from "../images/rep-me-screens.png";
import sitemap from "../images/site-map.png";
import desktopPrototypes from "../images/repme-desktop-screens.png";
import user1 from "../images/Angel.png";
import user2 from "../images/Julian.png";

export default function GoogleProjectPage() {
  return (
    <>
      <Nav />
      <div className="bg-[#002142] pb-10">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center mt-20">
            <img src={newLogo} alt="logo" />
          </div>
          <div className="text-white font-light lg:text-xl mx-10 lg:mx-72 my-10 text-center">
            A mobile and desktop application designed to provide a easy and
            smoothe user experience, to educate users on political candidates,
            upcoming elections, and keep track of their favorite candidates.{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <img src={screens} alt="test" />
        </div>
        <section className="items-start mx-10 lg:mx-60 px-12 py-14 bg-white shadow-2xl rounded-3xl mb-10">
          <div className="font-bold text-lg">Client:</div>
          <div className="pb-5 font-light">
            Grow With Google X Mentor Me Collective
          </div>
          <div className="font-bold text-lg">Timeline</div>
          <div className="pb-5 font-light">April 2024 - July 2024</div>
          <div className="font-bold text-lg">Role</div>
          <div className="pb-5 font-light">UX Designer and Researcher</div>
          <div className="font-bold text-lg">Tools</div>
          <div className="font-light">Figma, Adobe Photoshop</div>
        </section>
        <section>{/* <img src={chart} alt="ca-chart" /> */}</section>
      </div>
      <section className="mb-20 mx-12 lg:mx-72">
        <div className="font-semibold text-2xl pt-20">Problem Statement</div>
        <div className="pb-5 font-light pt-3">
        The "RepresentME" app is designed to assist individuals in identifying and learning about politicians who align with their values in upcoming state and federal elections. It is common for individuals between the ages of 18-40 to face challenges in identifying candidates who resonate with their values. It is important to be informed about which candidate genuinely cares about your needs and shares your goals and values.         </div>
        <img src={designProcess} alt="design-process" />
        <div className="font-semibold text-2xl pt-8">My Design Process</div>

        <div className="pb-5 font-light pt-3">
          The design thinking process is a helpful model that allows me to gain
          insights into user needs, question existing assumptions, reframe
          problems, and develop creative solutions through the use of prototypes
          and testing. By engaging in iterative cycles, I am able to
          continuously refine the application and enhance the user experience to
          be as seamless and impactful as it can be.
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
        <div className="font-light text-xl pt-3">
          Learning about our users through user interviews
        </div>
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
        <UserProfile
          user={user1}
          name="Angel"
          age="32"
          occupation="Senior Highschool Teacher"
          background="Angel, a high school teacher in Baltimore, Maryland, is teaching her students about the importance of voting in the upcoming elections. She believes that using the RepresentMe app would help connect with her students and educate them to make their voices heard."
        />
        <UserProfile
          user={user2}
          name="Julian"
          age="31"
          occupation="Med Student"
          background="Julian is dealing with a growing amount of student debt, which is making it hard for him to secure a home loan for his expanding family. Despite not being involved in politics, he realizes that finding a politician who supports his needs could have a positive impact on his family's future."
        />

        <div className="font-semibold text-2xl pt-8">Competitive Analysis</div>
        <div className="pt-2 pb-5 font-light">
          Understanding the importance of competitive analysis in the research
          process is crucial because it allows us to evaluate our brand/company
          compared to our competitors. It helps us identify opportunities for
          improving our user experience (UX) and recognize areas for
          improvement. For instance, comparing the overall ease of using our
          interface or the time it takes to complete tasks in comparison to
          other similar apps. How can we make our design and user experience
          stand out from competitors?
          <div className="font-light text-xl pt-3">Results:</div>
          <img
            src={compAnalysis}
            alt="competitive-analysis"
            className="rounded-3xl bg-slate-50 p-5 mt-3"
          />
        </div>
        <section>
          <div className="font-semibold text-2xl pt-10">Logo Design</div>
          <div className="p-10"><img src={logo} alt="hhg-logo" /></div>
          <div className="font-normal text-xl pb-5">Variant:</div>
          <div className="p-10"><img src={newLogo} alt="hhg-logo-variant" /></div>
        </section>
        <section>
          <div className="font-semibold text-2xl pt-10">
            SiteMap / Architecture
          </div>
          <img src={sitemap} alt="sitemap" className="my-10" />
        </section>
        <div className="font-semibold text-2xl pt-5">Wireframes</div>
        <div className="font-light text-xl pt-3 pb-5">First Iteration</div>
        <img src={wireframes} alt="wireframes" />
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
          <img
            src={eduardoJourney}
            alt="user-journey"
            className="rounded-3xl my-6"
          />
          <img
            src={staziJourney}
            alt="user-journey"
            className="rounded-3xl my-6"
          />
        </section>
        <section>
          <div className="font-light text-xl pt-3 pb-2">Second Iteration</div>
          <div className="pb-5 font-light pt-2">
          After identifying the challenges that users face when using our platform, I prioritized addressing these issues to improve the overall user experience. For the authentication process, I empathized with the users and added success and failure pages for both login and sign-up to provide support throughout the process. I also developed a separate search result details page to offer more comprehensive information about the selected candidate. Lastly, I introduced a success page for users setting up a reminder, aiming to make them feel empowered and ready for election time when it's time to vote.          </div>
          <img src={secondWireframe} alt="wireframes" />
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
            title="hhg"
            className="w-full h-screen"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F36Yy6UuTzh1H36rXo7Ua8w%2FHeartHealthGlobal-Design-Files%3Fnode-id%3D11-6%26t%3DDo5qr26Ihe5jK4iM-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D7%253A5%26starting-point-node-id%3D11%253A6"
            allowfullscreen
          />
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
            src={desktopPrototypes}
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
            This case study reiterated the importance of user testing and design
            iterations. There are so many things you may have forgotten about
            while designing. When the user interacts with the products and you
            can see their emotions and hear their painpoints it helps highlights
            things you may have missed. After all the user experience is all
            about the user.
          </div>
        </section>
      </section>
    </>
  );
}
