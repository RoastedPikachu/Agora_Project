import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Script from 'next/script';

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agora",
  description: "Agora - это мощное и гибкое приложение для коммуникации и сотрудничества, которое помогает координировать планы и управлять вектором развития проекта в мессенджере, объединяющем всех работников вашей компании. Оно предлагает удобные инструменты для командной работы, обмена информацией и организации рабочих процессов, представляя собой центральное место для эффективного взаимодействия команд.",
  keywords: "Agora, Агора, Messanger, Мессенджер"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
