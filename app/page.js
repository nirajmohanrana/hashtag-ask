import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import HoverWindow from "./components/HoverWindow";
import CreateFormExample from "./components/CreateFormExample";
import FormExample from "./components/FormExample";
import BoardExample from "./components/BoardExample";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto text-text">
      {/* NAVBAR */}
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

        <Link
          className="p-px px-2 font-semibold border-2 border-text bg-text text-background rounded-full"
          href="/get-started"
        >
          Get Started
        </Link>

        <a
          className="p-1 md:p-px md:px-2 flex items-center gap-x-2 border-2 border-text rounded-full"
          href="https://github.com/nirajmohanrana/hashtag-ask"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LuGithub strokeWidth={2} size={18} />
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
        <p
          className={
            "select-none font-extrabold text-4xl md:text-7xl text-center mb-10"
          }
        >
          <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.text),theme(colors.primary),theme(colors.secondary),theme(colors.accent),theme(colors.purple.600),theme(colors.text))] bg-[length:200%_auto] animate-gradient hover:animate-gradient">
            Redefining
          </span>
          <br />
          <span className="text-text">Ticket Requests</span>
        </p>

        <div className="flex justify-center">
          <HoverWindow customClass="-rotate-12">#ask</HoverWindow>
          <HoverWindow customClass="rotate-3">#assign</HoverWindow>
          <HoverWindow customClass="rotate-12">#resolve</HoverWindow>
          <HoverWindow customClass="rotate-6">#close</HoverWindow>
        </div>
      </div>

      {/* CREATE FORM */}
      <div className="my-20 flex flex-col md:flex-row md:items-center px-2">
        <div className="md:w-1/2 m-2 px-10 text-justify">
          <h3 className="text-3xl font-bold">Create #ask Forms With Ease</h3>

          <hr className="opacity-10 my-2" />

          <section>
            <p className="my-1">Simply Drag & Drop and create #ask Forms</p>

            <ul>
              <li className="text-primary text-lg mt-1 font-semibold">
                Questions
              </li>
              <li className="mb-1">
                are the fields or prompts that end-users will respond to. They
                could be text, multiple-choice options and more
              </li>

              <li className="text-primary text-lg mt-1 font-semibold">
                Sections
              </li>
              <li className="mb-1">
                are like containers that organize and group related questions
                together. Sections help in structuring forms, making it easier
                for users to navigate.
              </li>
            </ul>
          </section>
        </div>

        <div className="md:w-1/2 h-72 p-2 border border-text/60 rounded-lg">
          <CreateFormExample />
        </div>
      </div>

      <hr className="opacity-10 my-2 mx-2" />

      {/* USER FORM */}
      <div className="my-20 flex flex-col-reverse md:flex-row md:items-center px-2">
        <div className="md:w-1/2 p-4 border border-text/60 rounded-lg">
          <FormExample />
        </div>

        <div className="md:w-1/2 m-2 px-10 text-justify">
          <h3 className="text-3xl font-bold">Fill #ask form with ease</h3>

          <hr className="opacity-10 my-2" />
          <section>
            <p className="my-1">
              The form aims to provide users with an effortless experience by
              breaking it into straightforward sections. Each section is
              designed for easy navigation and interaction, ensuring a
              user-friendly process.
            </p>
            <p>
              This approach minimizes complexity, enabling users to engage with
              the form comfortably and complete it efficiently.
            </p>
          </section>
        </div>
      </div>

      <hr className="opacity-10 my-2 mx-2" />

      {/* USER BOARD */}
      <div className="my-20 flex flex-col-reverse md:flex-row md:items-center px-2">
        <div className="md:w-1/2 m-2 px-10 text-justify">
          <h3 className="text-3xl font-bold">Easy To Manage Boards</h3>
          <hr className="opacity-10 my-2" />

          <section>
            <p className="my-1">
              A Kanban-style interface specifically crafted for streamlined #ask
              management. This Kanban board provides intuitive controls for
              users to categorize, prioritize, and track these tickets through
              different stages or columns, ensuring a simplified and efficient
              management process.
            </p>
          </section>
        </div>

        <div className="md:w-1/2 p-4 overflow-x-scroll border border-text/60 rounded-lg">
          <BoardExample />
        </div>
      </div>

      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0">
            <Link
              className="flex-1 mb-4 md:flex-none font-bold text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]"
              href="/"
            >
              #ask
            </Link>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <nav className="flex items-center justify-center md:justify-end space-x-4">
            <Link
              href="/"
              className="text-sm hover:text-accent hover:underline transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              href="/"
              className="text-sm hover:text-accent hover:underline transition-colors duration-300"
            >
              Community
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
