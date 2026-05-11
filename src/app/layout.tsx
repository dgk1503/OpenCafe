import { title } from "process";
import LenisProvider from "./components/LenisProvider";
import "./globals.css";
import { Icon, icons } from "lucide-react";
import PageTransition from "./components/PageTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className="">
        <PageTransition>
          <LenisProvider>{children}</LenisProvider>
        </PageTransition>
      </body>
    </html>
  );
}
export const metadata = {
  title: "OpenCafe",
  icons: {
    icon: "./favicon_1.png",
  },
  description: "Demo cafe website !",
};
