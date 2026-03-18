"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "@/redux/ReduxProvider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Laurencio Paez — Mechanical Engineer & Full Stack Developer</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 60%), #0d1117",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <NextUIProvider>
            <ReduxProvider>
              {children}
            </ReduxProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
