"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import ReduxProvider from "@/redux/ReduxProvider";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <head>
        <title>Lauren PortFolio</title>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
          minBreakpoint="xxs"
        >
          <NextUIProvider>
            <ReduxProvider>
              <div className="flex flex-row w-full">
                {path === "/" ? null : (
                  <div></div>
                )}
                <div style={{
                backgroundImage: `url("https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?&dpr=1")`,
                backgroundSize: 'cover',
                width: 'screen',
              }}>{children}</div>
              </div>
            </ReduxProvider>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
