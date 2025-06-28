import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://yourdomainname.com"),
	title: {
		default: "Image Converter - Free Online Image Conversion Tools",
		template: "%s | Image Converter",
	},
	description:
		"Convert images between different formats online for free. Support for PNG, JPG, JPEG, WebP, and more. Fast, secure, and no registration required.",
	keywords: [
		"image converter",
		"image conversion",
		"online image converter",
		"free image converter",
		"png to jpg",
		"jpg to png",
		"jpeg to webp",
		"image format converter",
		"online photo converter",
		"image editing tools",
	],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://yourdomainname.com",
		title: "Image Converter - Free Online Image Conversion Tools",
		description:
			"Convert images between different formats online for free. Support for PNG, JPG, JPEG, WebP, and more. Fast, secure, and no registration required.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Image Converter Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@yourdomainname",
		creator: "@yourdomainname",
		title: "Image Converter - Free Online Image Conversion Tools",
		description:
			"Convert images between different formats online for free. Support for PNG, JPG, JPEG, WebP, and more. Fast, secure, and no registration required.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Image Converter Logo",
			},
		],
	},
	robots: "index, follow",
	alternates: {
		canonical: "https://yourdomainname.com",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Google Analytics and tracking scripts
	const analyticsScript = `
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-xxxxxxxxx'); // Replace with your Google Analytics ID
	`;

	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				{/* Google Analytics */}
				<Script
					strategy='afterInteractive'
					src={`https://www.googletagmanager.com/gtag/js?id=G-xxxxxxxxx`} // Replace with your Google Analytics ID
				/>
				<Script
					id='google-analytics'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: analyticsScript,
					}}
				/>
				{/* Google Search Console */}
				<meta
					name='google-site-verification'
					content='xxxxxxxxxxxxxx' // Replace with your Google Search Console verification code
				/>
				{/* AdSense */}
				<Script
					strategy='afterInteractive'
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxx' // Replace with your AdSense ID
					crossOrigin='anonymous'
				/>
			</head>
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
