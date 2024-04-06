import type { Metadata } from 'next';
import styles from './page.module.css';
import { Season } from '@/components/season';
import { seasons } from '@/data/seasons';

export const metadata: Metadata = {
	title: 'DLVT - Seasons',
};

export default function Page() {
	return (
		<main className={styles.main}>
			<div className={styles.seasonsList}>
				{seasons.map((season) => {
					return (
						<div key={season} className={styles.season}>
							<h2 className={styles.seasonHeading}>{season}</h2>
							<Season season={season} />
						</div>
					);
				})}
			</div>
		</main>
	);
}
