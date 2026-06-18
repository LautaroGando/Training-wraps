import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Training Wraps | Formación Profesional en Car Wrapping",
  description:
    "Aprendé car wrapping con el instructor más reconocido de la región. Cursos presenciales e intensivos desde nivel inicial hasta profesional. Pro Expert e Instructor Oficial Alltak.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
