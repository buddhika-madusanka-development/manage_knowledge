import { Montserrat } from "next/font/google";
import "./styles/globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-base`}
      >
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
