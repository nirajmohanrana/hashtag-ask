import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "ASK",
  description: "Redefining Ticket Requests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Toaster
        closeButton
        important
        cancel
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: "w-full flex items-center px-4 py-2 rounded-md bg-toast-bg",
          },
        }}
      />
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`bg-background ${poppins.className}`}>{children}</body>
    </html>
  );
}
