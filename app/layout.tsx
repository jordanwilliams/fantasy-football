import type { Metadata } from 'next';
import localFont from 'next/font/local';
import LayoutHeader from '@/components/layout-header';
import './globals.css';
import styles from './layout.module.css';

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
			<body className={monaSans.className}>
				<div className={styles.layout}>
					<LayoutHeader />
					{children}
				</div>
			</body>
		</html>
	);
}
