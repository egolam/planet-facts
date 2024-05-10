import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Planet Facts",
  description: "A Challenge by Frontend Mentor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-dvh bg-[#070724] bg-[url('/background-stars.svg')]">
        <Navbar/>
        <main className="h-full flex lg:items-center lg:justify-center pb-8">{children}</main>
      </body>
    </html>
  );
}
