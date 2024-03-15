import { Inter } from "next/font/google";
import "./globals.css";
import Menu from "@/component/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ostad Pre-recorded",
  description: "For practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
      <Menu/>
      {children}
      </body>
    </html>
  );
}
