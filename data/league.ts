import type { Members } from '@/data/members';
import { members } from '@/data/members';
import type { SeasonsData } from '@/data/seasons';
import { seasonsData } from '@/data/seasons';

export type LeagueData = {
	members: Members;
	seasonsData: SeasonsData;
};

export const leagueData: LeagueData = {
	members,
	seasonsData,
};
