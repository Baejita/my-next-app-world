import "@/assets/styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Property Pulse",
  keywords: "rentalm property, real estate",
  description: "Find the perfect rental",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
