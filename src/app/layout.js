import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Jacob Samas | Portfolio",
  description: "A mind-blowing portfolio showcasing my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-deepOcean text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
