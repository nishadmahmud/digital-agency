import { DM_Sans, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: "Digital Agency | Grow Your Business with Powerful Digital Solutions",
  description:
    "We help brands scale through marketing, design & video editing with proven strategies and creative excellence.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${plusJakarta.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-text">
        {children}
      </body>
    </html>
  );
}
