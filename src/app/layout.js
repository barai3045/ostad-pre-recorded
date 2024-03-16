"use client"
import "./globals.css";
import Menu from "@/component/Menu";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Menu/>
      <ProgressBar />
      {children}
      </body>
    </html>
  );
}
