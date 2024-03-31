'use client';
import { useState } from 'react';

import { members } from '@/data/members';
import type { Season } from '@/data/seasons';
import { seasons, seasonsData } from '@/data/seasons';

import {
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
		<div>
			<Table>
				<TableHead>
					<TableRow>
						<TableHeadCell>Name</TableHeadCell>
						<TableHeadCell>Place</TableHeadCell>
						<TableHeadCell>Wins</TableHeadCell>
						<TableHeadCell>Losses</TableHeadCell>
						<TableHeadCell>Ties</TableHeadCell>
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
								<TableCell>{wins}</TableCell>
								<TableCell>{losses}</TableCell>
								<TableCell>{ties}</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
}
