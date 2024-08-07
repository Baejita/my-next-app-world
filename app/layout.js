import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse",
  keywords: "rentalm property, real estate",
  description: "Find the perfect rental",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
