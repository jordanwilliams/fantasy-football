export const members = [
	{
		firstName: 'Aaron',
		lastName: 'Mack',
		id: 'aaron-mack',
	},
	{
		firstName: 'Alex',
		lastName: 'Piering',
		id: 'alex-piering',
	},
	{
		firstName: 'Ben',
		lastName: 'Johnson',
		id: 'ben-johnson',
	},
	{
		firstName: 'Chase',
		lastName: 'Pritchett',
		id: 'chase-pritchett',
	},
	{
		firstName: 'Cody',
		lastName: 'Fields',
		id: 'cody-fields',
	},
	{
		firstName: 'Collin',
		lastName: 'Barrett',
		id: 'collin-barrett',
	},
	{
		firstName: 'Dan',
		lastName: 'Eckman',
		id: 'dan-eckman',
	},
	{
		firstName: 'Jordan',
		lastName: 'Williams',
		id: 'jordan-williams',
	},
	{
		firstName: 'Kenny',
		lastName: 'Copsey',
		id: 'kenny-copsey',
	},
	{
		firstName: 'Max',
		lastName: 'Houston',
		id: 'max-houston',
	},
] as const;

export type Members = typeof members;

export type Member = (typeof members)[number];

export type MemberID = Member['id'];
