import localFont from 'next/font/local';
import styles from './page.module.css';

const hubotSans = localFont({
	src: '../fonts/hubot-sans.woff2',
});

export default function Home() {
	return (
		<main className={styles.main}>
			<h1 className={`${hubotSans.className} ${styles.title}`}>DLVT</h1>
			<p className={styles.description}>Fantasy Football League</p>
		</main>
	);
}
