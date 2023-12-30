import Link from "next/link";
import { Github } from "lucide-react";
import { Playpen_Sans } from "next/font/google";
import HoverWindow from "./components/HoverWindow";
import CreateFormExample from "./components/CreateFormExample";
import FormExample from "./components/FormExample";
import BoardExample from "./components/BoardExample";

const playpen = Playpen_Sans({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

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
        <h1
          className={`font-extrabold text-4xl md:text-7xl text-center overflow-clip z-50 mb-10 ${playpen.className}`}
        >
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
      <div className="my-6 flex flex-col md:flex-row px-2 divide-y md:divide-x md:divide-y-0 divide-text/20">
        <div className="md:w-1/2 p-2">
          <h3 className={`text-3xl font-bold ${playpen.className}`}>
            Create #ask Forms With Ease
          </h3>

          <section className={`text-pretty px-2 ${playpen.className}`}>
            <p className="my-1">
              We offers an interface that is straightforward and easy to
              understand. Users interact to perform actions by simply dragging
              elements within the application.
            </p>

            <hr className="opacity-10 my-2 mx-2" />

            <ul className="px-2 list-inside list-image-[url(./favicon.ico)]">
              <li className="my-1">
                <span className="text-primary text-lg">Questions</span> are the
                fields or prompts that end-users will respond to. They could be
                text boxes, multiple-choice options, checkboxes, or any other
                form input type where users provide information.
              </li>

              <li className="my-1">
                <span className="text-primary text-lg">Sections</span> are like
                containers that organize and group related questions together.
                Sections help in structuring forms, making it easier for users
                to navigate through categories or types of questions.
              </li>
            </ul>
          </section>
        </div>
        <div className="md:w-1/2 p-2 h-72">
          <CreateFormExample />
        </div>
      </div>

      {/* USER FORM */}
      <div className="my-6 flex flex-col-reverse md:flex-row px-2 divide-y md:divide-x md:divide-y-0 divide-text/20">
        <div className="md:w-1/2 p-2 h-72">
          <FormExample />
        </div>

        <div className="md:w-1/2 p-2">
          <h3 className={`text-3xl font-bold ${playpen.className}`}>
            Fill #ask form with ease
          </h3>

          <section className={`text-pretty px-2 ${playpen.className}`}>
            <p className="my-1">
              Users can fill their form easily with no hassle simple sections
              and interactable form
            </p>

            <hr className="opacity-10 my-2 mx-2" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              condimentum varius mi. Nullam egestas a purus a rutrum. Sed varius
              euismod eros a convallis. Cras urna enim, aliquam ut porttitor et,
              mattis in dolor. Fusce luctus erat non justo interdum, sed congue
              dolor bibendum. Mauris mollis venenatis urna in porta. Sed ac
              suscipit dui, sit amet tristique purus.
            </p>
          </section>
        </div>
      </div>

      {/* USER BOARD */}
      <div className="my-6 flex flex-col-reverse md:flex-row px-2 divide-y md:divide-x md:divide-y-0 divide-text/20">
        <div className="md:w-1/2 p-2">
          <h3 className={`text-3xl font-bold ${playpen.className}`}>
            Easy To Manage Boards
          </h3>

          <section className={`text-pretty px-2 ${playpen.className}`}>
            <p className="my-1">
              Users can fill their form easily with no hassle simple sections
              and interactable form
            </p>

            <hr className="opacity-10 my-2 mx-2" />

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              condimentum varius mi. Nullam egestas a purus a rutrum. Sed varius
              euismod eros a convallis. Cras urna enim, aliquam ut porttitor et,
              mattis in dolor. Fusce luctus erat non justo interdum, sed congue
              dolor bibendum. Mauris mollis venenatis urna in porta. Sed ac
              suscipit dui, sit amet tristique purus.
            </p>
          </section>
        </div>

        <div className="md:w-1/2 h-72">
          <BoardExample />
        </div>
      </div>

      <footer className="border-t py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="mb-4 md:mb-0">
            <Link
              className="flex-1 md:flex-none font-bold text-2xl [text-shadow:_0_1px_10px_rgb(255_255_255_/_40%)]"
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
