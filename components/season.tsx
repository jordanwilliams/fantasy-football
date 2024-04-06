import { members } from '@/data/members';
import type { Season } from '@/data/seasons';
import { seasonsData } from '@/data/seasons';

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

export function Season({ season }: SeasonProps) {
	const seasonData = seasonsData[season];

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeadCell>Name</TableHeadCell>
						<TableHeadCell>Place</TableHeadCell>
						<TableHeadCell>Record</TableHeadCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{members.map(({ id, teamName }) => {
						const {
							place,
							record: { wins, losses, ties },
						} = seasonData[id];

						return (
							<TableRow key={`${season}-${id}`}>
								<TableCell>{teamName}</TableCell>
								<TableCell>{place}</TableCell>
								<TableCell>{`${wins}-${losses}-${ties}`}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
