import { Dosis } from "next/font/google";
import "./globals.css";
import { ScoreProvider } from "@/context/ScoreContext";

const dosis = Dosis({
  variable: "--font-dosis-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Geek Plots",
  description: "A quiz app for geeky shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dosis.variable} antialiased`}
      >
        <ScoreProvider>{children}</ScoreProvider>
      </body>
    </html>
  );
}
