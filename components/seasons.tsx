'use client';
import { useState } from 'react';

import { members } from '@/data/members';
import type { Season } from '@/data/seasons';
import { seasons, seasonsData } from '@/data/seasons';

import {
	TableContainer,
	Table,
	TableHead,
	TableHeadCell,
	TableBody,
	TableRow,
	TableCell,
} from '@/components/table';

export function Seasons() {
	const [season, setSeason] = useState<Season>(seasons[0]);

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
					{members.map(({ firstName, id }) => {
						const {
							place,
							record: { wins, losses, ties },
						} = seasonData[id];

						return (
							<TableRow key={id}>
								<TableCell>{firstName}</TableCell>
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
