import React from "react";
import Logo from "../logo/Logo";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="px-8 md:px-14 lg:px-16 py-10 flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0 font-medium bg-white">
      <div className="w-full md:w-1/4">
        <Logo />
        <ul className="flex flex-col space-y-4 mt-4">
          <li>
            Want to learn cook but confused to start from what? let&rsquo;s
            cooking
          </li>
          <li>
            <a
              className="flex items-center space-x-2"
              href="https://api.whatsapp.com/send?phone=201069992895"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineWhatsApp className="mr-2" />
              01069992895
            </a>
          </li>
          <li>
            <a href="mailto:s.arafat.selmi@gmail.com"></a>
            <a
              className="flex items-center space-x-2"
              href="mailto:s.arafat.selmi@gmail.com"
            >
              <CiMail className="mr-2 text-black" />
              s.arafat.selmi@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <FooterList title="information" items={["about", "faq"]} />
      <FooterList title="Navigation" items={["blog", "feedback"]} />
      <FooterList social title="social media" items={["facebook", "twitter"]} />
    </footer>
  );
};

export default Footer;
