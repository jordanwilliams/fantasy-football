'use client';
import { useState } from 'react';

import { members } from '@/data/members';
import type { Season } from '@/data/seasons';
import { seasons, seasonsData } from '@/data/seasons';

export function Seasons() {
	const [season, setSeason] = useState<Season>(seasons[0]);

	const seasonData = seasonsData[season];

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Place</th>
						<th>Wins</th>
						<th>Losses</th>
						<th>Ties</th>
					</tr>
				</thead>
				<tbody>
					{members.map(({ firstName, id }) => {
						const {
							place,
							record: { wins, losses, ties },
						} = seasonData[id];

						return (
							<tr key={id}>
								<td>{firstName}</td>
								<td>{place}</td>
								<td>{wins}</td>
								<td>{losses}</td>
								<td>{ties}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
