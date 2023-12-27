import Link from "next/link";
import { Github } from "lucide-react";
import { Kalam, Playpen_Sans } from "next/font/google";
import HoverWindow from "./components/HoverWindow";
import CreateFormExample from "./components/CreateFormExample";

const kalam = Kalam({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const playpen = Playpen_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto text-text">
      {/* NAVBAR */}

      <nav className="flex justify-between items-center gap-2 p-2 py-4">
        <Link
          className="flex-1 md:flex-none font-bold text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]"
          href="/"
        >
          #ask
        </Link>

        <Link
          className="ml-8 mx-2 text-sm hidden md:block hover:border-b"
          href="/about-us"
        >
          About Us
        </Link>

        <Link
          className="mx-2 text-sm hidden md:block hover:border-b"
          href="/"
        >
          Community
        </Link>

        <div className="flex-1" />

        <Link
          className="p-px px-2 font-semibold border-2 border-text bg-text text-background rounded-full"
          href="/login"
        >
          Get Started
        </Link>

        <a
          className="p-1 md:p-px md:px-2 flex items-center gap-x-2 border-2 border-text rounded-full"
          href="https://github.com/nirajmohanrana/hashtag-ask"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github strokeWidth={2} size={18} />
          <p className="hidden md:block font-normal">Star us on GitHub</p>
        </a>
      </nav>

      {/* For Mobile */}
      <div className="md:hidden my-1 flex justify-center gap-x-4">
        <Link className="text-sm text-text/60" href="/about-us">
          About Us
        </Link>

        <Link className="text-sm text-text/60" href="/">
          Community
        </Link>
      </div>

      {/* HERO SECTION */}

      <div className="my-36">
        <h1 className="font-extrabold text-4xl md:text-7xl text-center overflow-clip z-50 mb-10">
          <p className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.text),theme(colors.primary),theme(colors.secondary),theme(colors.accent),theme(colors.purple.600),theme(colors.text))] bg-[length:200%_auto] animate-gradient hover:animate-gradient">
            Redefining
          </p>
          <p className="text-text">Ticket Requests</p>
        </h1>

        <div className="flex justify-center">
          <HoverWindow customClass="-rotate-12">#ask</HoverWindow>
          <HoverWindow customClass="rotate-3">#assign</HoverWindow>
          <HoverWindow customClass="rotate-12">#resolve</HoverWindow>
          <HoverWindow customClass="rotate-6">#close</HoverWindow>
        </div>
      </div>

      {/* CREATE FORM */}
      <div className="my-6 flex flex-col md:flex-row px-2 divide-x divide-text/20">
        <div className="md:w-1/2 px-2">
          <h3 className={`text-3xl font-bold ${kalam.className}`}>
            Create #ask Forms With Ease
          </h3>

          <hr className="opacity-20 my-2" />

          <p className={`text-justify tracking-wide px-2 ${playpen.className}`}>
            We provide simple, intuitive, nodes and section based form creation
            just drag the arrows and connect the sections
          </p>
        </div>
        <div className="md:w-1/2 p-2 h-72">
          <CreateFormExample />
        </div>
      </div>

      <div></div>
      <div></div>
    </main>
  );
}
