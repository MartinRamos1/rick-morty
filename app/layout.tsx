import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

export const metadata: Metadata = {
  title: "RICK & MORTY",
  description: "RICK & MORTY CHARACTERS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header> <Navbar /> </header>
        <main>  {children}</main>
        <footer> <Footer /> </footer>
      </body>
    </html> 
  );
}
