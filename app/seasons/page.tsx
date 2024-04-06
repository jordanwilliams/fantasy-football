import type { Metadata } from 'next';
import styles from './page.module.css';
import { Season } from '@/components/season';
import { AggregateSeasons } from '@/components/aggregate-seasons';
import { seasons } from '@/data/seasons';

export const metadata: Metadata = {
	title: 'DLVT - Seasons',
};

export default function Page() {
	return (
		<main className={styles.main}>
			<div className={styles.list}>
				<div className={styles.card}>
					<h2 className={styles.heading} data-aggregate>
						All Seasons
					</h2>
					<AggregateSeasons />
				</div>
				<div className={styles.divider} />
			</div>
			<div className={styles.list}>
				{seasons.map((season) => {
					return (
						<div key={season} className={styles.card}>
							<h2 className={styles.heading}>{season}</h2>
							<Season season={season} />
						</div>
					);
				})}
			</div>
		</main>
	);
}
