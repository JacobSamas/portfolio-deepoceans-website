import "./globals.css";
import Navbar from "../components/Navbar";
import OceanEffect from "../components/OceanEffect";

export const metadata = {
  title: "Jacob Samas | Portfolio",
  description: "Explore my dynamic, ocean-themed portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Ocean Animation */}
        <OceanEffect />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
