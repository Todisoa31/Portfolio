import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Todisoa Herinjanahary",
  description: "Fullstack JavaScript Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}