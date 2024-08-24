import type { Metadata } from 'next';
import Link from 'next/link';
import { members } from '@/data/members';
import type { MemberID } from '@/data/members';
import styles from './page.module.css';

export const metadata: Metadata = {
	title: 'DLVT - Draft Weekend',
};

const draftPositions: Record<MemberID, number> = {
	'cody-fields': 1,
	'max-houston': 2,
	'dan-eckman': 3,
	'chase-pritchett': 4,
	'alex-piering': 5,
	'collin-barrett': 6,
	'ben-johnson': 7,
	'jordan-williams': 8,
	'kenny-copsey': 9,
	'aaron-mack': 10,
};

export default function Page() {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<div className={styles.card}>
					<h2 className={styles.heading}>Location</h2>
					<div>
						<Link
							className={styles.externalLink}
							href="https://maps.app.goo.gl/JPK7yTE5yAAND2kT9"
						>
							39513 Lake Dr Big Bear Lake, CA 92315
						</Link>
					</div>
				</div>
				<div className={styles.divider} />

				<div className={styles.card}>
					<h2 className={styles.heading}>Draft Details</h2>
					<ul className={styles.list}>
						<li>
							<span className={styles.bold}>Draft Time:</span> TBD
						</li>
						<li>
							<span className={styles.bold}>Draft Type:</span>{' '}
							Snake Draft
						</li>
						<li>
							<span className={styles.bold}>Draft Order:</span>{' '}
							TBD
							<ul className={styles.list}>
								{members.map(({ teamName, id }) => (
									<li key={teamName}>
										<span className={styles.bold}>
											{teamName}:
										</span>{' '}
										{draftPositions[id]}
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}
