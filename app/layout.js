import "./globals.css";
import { Poppins, Playfair_Display } from "next/font/google";
import Nav from "./shared/Nav";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
const playfair = Playfair_Display({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Next 13",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${playfair.variable} ${poppins.className}`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
