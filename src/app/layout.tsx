import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://imageconverter.com"),
	title: {
		default: "Image Converter - Free Online Image Conversion Tools",
		template: "%s | Image Converter",
	},
	description:
		"Convert images between different formats online for free. Support for PNG, JPG, JPEG, WebP, and more.",
	icons: {
		icon: "/favicon.ico",
		apple: "/apple-icon.png",
	},
	generator: "v0.dev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className} suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
