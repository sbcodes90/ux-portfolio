import React from "react";
import hamburgerMenu from "../icons/hamburger-menu.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="bg-black text-white flex flex-row justify-end p-2 lg:p-5">
        {/* MOBILE VIEW */}
        <Menu>
          <MenuButton className="md:hidden lg:hidden">
            <img src={hamburgerMenu} alt="menu" className="w-10" />
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className=" bg-black text-white text-center w-full h-svh text-lg"
          >
            <MenuItem>
              <a
                className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold"
                href="/about"
              >
                ABOUT
              </a>
            </MenuItem>
            <MenuItem>
              <Link
                to="/"
                className="tracking-widest block data-[focus]:bg-teal-300 data-[focus]:text-black p-10 font-bold "
                href="/work"
              >
                WORK
              </Link>
            </MenuItem>
            <MenuItem>
              <a
                className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold"
                href="/resume"
              >
                RESUME
              </a>
            </MenuItem>
            <MenuItem>
              <a
                className="block data-[focus]:bg-teal-300 p-10 data-[focus]:text-black font-bold"
                href="/contact"
              >
                CONTACT
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        {/* DESKTOP VIEW */}
        <ul className="hidden lg:flex lg:flex-row lg:p-3">
          <div className="flex flex-row gap-10">
            <li className="tracking-widest">ABOUT</li>
            <Link to="/" className="tracking-widest" href="/work">
              WORK
            </Link>
            <li className="tracking-widest">RESUME</li>
            <li className="tracking-widest">CONTACT</li>
          </div>
        </ul>
      </div>
    </>
  );
}
