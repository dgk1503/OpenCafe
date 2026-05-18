// app/layout.tsx
import LenisProvider from "./components/LenisProvider";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import PreloaderShell from "../app/components/PreLoaderShell";

export const metadata = {
  title: "OpenCafe",
  icons: { icon: "./favicon_1.png" },
  description: "Demo cafe website !",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <PreloaderShell />
        <PageTransition>
          <LenisProvider>{children}</LenisProvider>
        </PageTransition>
      </body>
    </html>
  );
}