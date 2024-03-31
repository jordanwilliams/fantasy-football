'use client';

import { useState } from 'react';

import type { MemberID } from '@/data/members';
import type { Season, SeasonMemberData } from '@/data/seasons';
import { seasons, seasonsData } from '@/data/seasons';

export function Seasons() {
	const [season, setSeason] = useState<Season>(seasons[0]);

	const seasonData = seasonsData[season];
	const data = Object.entries(seasonData) as [MemberID, SeasonMemberData][];

	return (
		<div>
			{data.map(([memberId, seasonMemberData]) => {
				const {
					place,
					record: { wins, losses, ties },
				} = seasonMemberData;

				return (
					<div key={memberId}>
						<span>{memberId}</span>
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
