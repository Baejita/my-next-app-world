import "@/assets/styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Property Pulse",
  keywords: "rentalm property, real estate",
  description: "Find the perfect rental",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
