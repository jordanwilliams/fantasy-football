import { members } from '@/data/members';
import type { Season } from '@/data/seasons';
import { aggregateSeasonsData } from '@/data/seasons';
import styles from './aggregate-seasons.module.css';

import {
	TableContainer,
	Table,
	TableHead,
	TableHeadCell,
	TableBody,
	TableRow,
	TableCell,
} from '@/components/table';

type SeasonProps = {
	season: Season;
};

export function AggregateSeasons() {
	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeadCell>Name</TableHeadCell>
						<TableHeadCell>Rings</TableHeadCell>
						<TableHeadCell>Toilet Bowls</TableHeadCell>
						<TableHeadCell>Record</TableHeadCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{members.map(({ id, teamName }) => {
						const {
							record: { wins, losses, ties },
							championships,
							toiletBowls,
						} = aggregateSeasonsData[id];

						return (
							<TableRow key={`aggregate-${id}`}>
								<TableCell>{teamName}</TableCell>
								<TableCell>
									{championships.map((c) => (
										<span
											key={`championship-${c}-${id}`}
											className={styles.emoji}
										>
											🏆
										</span>
									))}
								</TableCell>
								<TableCell>
									{toiletBowls.map((t) => (
										<span
											key={`toilet-bowl-${t}-${id}`}
											className={styles.emoji}
										>
											💩
										</span>
									))}
								</TableCell>
								<TableCell>{`${wins}-${losses}-${ties}`}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
