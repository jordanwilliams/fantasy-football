import type { MemberID } from '@/data/members';

export type WinLossTie = {
	wins: number;
	losses: number;
	ties: number;
};

export type SeasonPlace = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export const seasons = ['2023', '2022'] as const;

export type Season = (typeof seasons)[number];

export type SeasonMemberData = {
	place: SeasonPlace;
	record: WinLossTie;
};

export type SeasonData = Record<MemberID, SeasonMemberData>;

export type SeasonsData = Record<Season, SeasonData>;

export const seasonsData: SeasonsData = {
	'2023': {
		'aaron-mack': {
			place: 3,
			record: {
				wins: 8,
				losses: 6,
				ties: 0,
			},
		},
		'alex-piering': {
			place: 10,
			record: {
				wins: 5,
				losses: 9,
				ties: 0,
			},
		},
		'ben-johnson': {
			place: 9,
			record: {
				wins: 3,
				losses: 11,
				ties: 0,
			},
		},
		'chase-pritchett': {
			place: 1,
			record: {
				wins: 10,
				losses: 4,
				ties: 0,
			},
		},
		'cody-fields': {
			place: 7,
			record: {
				wins: 7,
				losses: 7,
				ties: 0,
			},
		},
		'collin-barrett': {
			place: 4,
			record: {
				wins: 8,
				losses: 6,
				ties: 0,
			},
		},
		'dan-eckman': {
			place: 5,
			record: {
				wins: 8,
				losses: 6,
				ties: 0,
			},
		},
		'jordan-williams': {
			place: 8,
			record: {
				wins: 6,
				losses: 8,
				ties: 0,
			},
		},
		'kenny-copsey': {
			place: 6,
			record: {
				wins: 7,
				losses: 7,
				ties: 0,
			},
		},
		'max-houston': {
			place: 2,
			record: {
				wins: 8,
				losses: 6,
				ties: 0,
			},
		},
	},
	'2022': {
		'aaron-mack': {
			place: 3,
			record: {
				wins: 7,
				losses: 5,
				ties: 0,
			},
		},
		'alex-piering': {
			place: 1,
			record: {
				wins: 11,
				losses: 1,
				ties: 0,
			},
		},
		'ben-johnson': {
			place: 2,
			record: {
				wins: 10,
				losses: 2,
				ties: 0,
			},
		},
		'chase-pritchett': {
			place: 4,
			record: {
				wins: 6,
				losses: 6,
				ties: 0,
			},
		},
		'cody-fields': {
			place: 5,
			record: {
				wins: 5,
				losses: 7,
				ties: 0,
			},
		},
		'collin-barrett': {
			place: 6,
			record: {
				wins: 4,
				losses: 8,
				ties: 0,
			},
		},
		'dan-eckman': {
			place: 7,
			record: {
				wins: 3,
				losses: 9,
				ties: 0,
			},
		},
		'jordan-williams': {
			place: 8,
			record: {
				wins: 2,
				losses: 10,
				ties: 0,
			},
		},
		'kenny-copsey': {
			place: 9,
			record: {
				wins: 1,
				losses: 11,
				ties: 0,
			},
		},
		'max-houston': {
			place: 10,
			record: {
				wins: 0,
				losses: 12,
				ties: 0,
			},
		},
	},
};

type AggregateSeasonsData = {
	record: WinLossTie;
	championships: Season[];
	toiletBowls: Season[];
};

const initialAggregateData: AggregateSeasonsData = {
	record: {
		wins: 0,
		losses: 0,
		ties: 0,
	},
	championships: [],
	toiletBowls: [],
};

export const aggregateSeasonsData: Record<MemberID, AggregateSeasonsData> =
	Object.entries(seasonsData).reduce(
		(acc, value) => {
			const next = {
				...acc,
			};

			const [season, seasonData] = value as [Season, SeasonData];

			Object.entries(seasonData).forEach((v) => {
				const [memberId, memberSeasonData] = v as [
					MemberID,
					SeasonMemberData,
				];
				const { place, record: seasonRecord } = memberSeasonData;

				const { record, championships, toiletBowls } = next[memberId];
				next[memberId] = {
					record: {
						wins: record.wins + seasonRecord.wins,
						losses: record.losses + seasonRecord.losses,
						ties: record.ties + seasonRecord.ties,
					},
					championships:
						place === 1
							? [...championships, season]
							: championships,
					toiletBowls:
						place === 10 ? [...toiletBowls, season] : toiletBowls,
				};
			});

			return next;
		},
		{
			'aaron-mack': { ...initialAggregateData },
			'alex-piering': { ...initialAggregateData },
			'ben-johnson': { ...initialAggregateData },
			'chase-pritchett': { ...initialAggregateData },
			'cody-fields': { ...initialAggregateData },
			'collin-barrett': { ...initialAggregateData },
			'dan-eckman': { ...initialAggregateData },
			'jordan-williams': { ...initialAggregateData },
			'kenny-copsey': { ...initialAggregateData },
			'max-houston': { ...initialAggregateData },
		}
	);
