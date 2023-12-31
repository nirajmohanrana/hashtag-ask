"use client";

import { LuGithub } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React, { useContext } from "react";
import HoverWindow from "../components/HoverWindow";
import { AuthContext } from "@/context/AuthContext";

const GetStarted = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleSignIn = async () => {
    console.log("sign in click");
    googleSignIn();
  };

  return (
    <div>
      <nav className="flex justify-between items-center gap-2 px-4 py-6">
        <Link
          className="flex-1 md:flex-none font-bold text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]"
          href="/"
        >
          #ask
        </Link>

        <Link
          className="ml-8 mx-2 text-sm hidden md:block hover:text-accent hover:underline"
          href="/about-us"
        >
          About Us
        </Link>

        <Link
          className="mx-2 text-sm hidden md:block hover:text-accent hover:underline"
          href="/"
        >
          Community
        </Link>

        <div className="flex-1" />

        <a
          className="p-1 md:p-px md:px-2 flex items-center gap-x-2 border-2 border-text rounded-full"
          href="https://github.com/nirajmohanrana/hashtag-ask"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuGithub className="text-xl" />
          <p className="hidden md:block font-normal">Star us on GitHub</p>
        </a>
      </nav>

      {/* HERO SECTION */}
      <div className="my-36">
        <p
          className={
            "select-none font-extrabold text-4xl md:text-7xl text-center mb-10"
          }
        >
          <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.text),theme(colors.primary),theme(colors.secondary),theme(colors.accent),theme(colors.purple.600),theme(colors.text))] bg-[length:200%_auto] animate-gradient hover:animate-gradient">
            Login To
          </span>

          <span className="text-text">Get Started</span>
        </p>

        <div className="flex justify-center">
          <HoverWindow customClass="-rotate-6">
            <button
              className="flex items-center justify-center gap-1"
              onClick={handleSignIn}
            >
              <FcGoogle /> Sign In
            </button>
          </HoverWindow>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
