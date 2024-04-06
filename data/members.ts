// @todo add teamName
export const members = [
	{
		firstName: 'Aaron',
		lastName: 'Mack',
		id: 'aaron-mack',
		teamName: 'Nothing but a (Jimmy) G Thang',
	},
	{
		firstName: 'Alex',
		lastName: 'Piering',
		id: 'alex-piering',
		teamName: 'Master Pie',
	},
	{
		firstName: 'Ben',
		lastName: 'Johnson',
		id: 'ben-johnson',
		teamName: "Bruce's Buff Boys",
	},
	{
		firstName: 'Chase',
		lastName: 'Pritchett',
		id: 'chase-pritchett',
		teamName: 'Team RG3PO',
	},
	{
		firstName: 'Cody',
		lastName: 'Fields',
		id: 'cody-fields',
		teamName: 'Team Fields',
	},
	{
		firstName: 'Collin',
		lastName: 'Barrett',
		id: 'collin-barrett',
		teamName: 'Comeback Kid',
	},
	{
		firstName: 'Dan',
		lastName: 'Eckman',
		id: 'dan-eckman',
		teamName: 'Touchdown Tom',
	},
	{
		firstName: 'Jordan',
		lastName: 'Williams',
		id: 'jordan-williams',
		teamName: 'Lord Commander',
	},
	{
		firstName: 'Kenny',
		lastName: 'Copsey',
		id: 'kenny-copsey',
		teamName: "Keeping Up Wth The Copsey's",
	},
	{
		firstName: 'Max',
		lastName: 'Houston',
		id: 'max-houston',
		teamName: 'Hut Hut HEIKS',
	},
] as const;

export type Members = typeof members;

export type Member = (typeof members)[number];

export type MemberID = Member['id'];
