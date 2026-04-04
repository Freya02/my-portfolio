import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata = {
  title: "Freya Jayant Vora | Full Stack Developer",
  description: "Professional Portfolio of Freya Jayant Vora, a Full Stack Developer specialized in React, Java, and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} scroll-smooth`}>
      <body>
        {/* Background Elements */}
        <div className="bg-glow bg-glow-1"></div>
        <div className="bg-glow bg-glow-2"></div>
        <div className="grid-overlay"></div>

        <Navbar />

        {children}
      </body>
    </html>
  );
}
