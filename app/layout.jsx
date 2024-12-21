import { Analytics } from "@vercel/analytics/react";
import { Dancing_Script } from "next/font/google";
import { ScrollProvider } from "./contexts/ScrollContext";
import BackgroundColorHandler from "./ui/BackgroundColorHandler";
import "./globals.css";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export const metadata = {
  title: "Sushi",
  description: "Made with love by uwu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto max-w-7xl ${dancingScript.className}`}
      >
        <ScrollProvider>
          <BackgroundColorHandler />
          {children}
          <Analytics />
        </ScrollProvider>
      </body>
    </html>
  );
}
