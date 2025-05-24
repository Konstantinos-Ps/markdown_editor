import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata = {
  title: "Markdown Editor",
  description: "Markdown Editor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dim">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
