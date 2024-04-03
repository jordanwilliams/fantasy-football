import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const monaSans = localFont({
	src: '../fonts/mona-sans.woff2',
});

export const metadata: Metadata = {
	title: 'DLVT',
	description: 'The fantasy football website for the DLVT league members',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={monaSans.className}>{children}</body>
		</html>
	);
}
