import localFont from 'next/font/local';

import styles from './layout-header.module.css';

const hubotSans = localFont({
	src: '../fonts/hubot-sans.woff2',
});

export default function LayoutHeader() {
	return (
		<header className={`${styles.header} ${hubotSans.className}`}>
			<h1 className={styles.title}>DLVT</h1>
		</header>
	);
}
