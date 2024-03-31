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
			{members.map(({ firstName, id }) => {
				const {
					place,
					record: { wins, losses, ties },
				} = seasonData[id];

				return (
					<div key={id}>
						<span>{firstName}</span>
						<span>{place}</span>
						<span>{wins}</span>
						<span>{losses}</span>
						<span>{ties}</span>
					</div>
				);
			})}
		</div>
	);
}
