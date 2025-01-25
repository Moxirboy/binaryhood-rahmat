import { BiSolidLike } from "react-icons/bi";
import { GiQueenCrown } from "react-icons/gi";
import { FaRegSmile } from "react-icons/fa";

export const blogData = [
	{
		team: true,
		id: 1,
		points: 425,
		author: {
			name: 'Quinn Lee',
			avatarImage: 'https://randomuser.me/api/portraits/men/1.jpg',
			avatarFallback: 'Q',
		},
		message:
			'@rhea.mariano Here is +250 to celebrate your birthday on November 16. Happy Birthday! 🎂',
		recognitionPoints: 250,
		comments: [
			{
				id: 1,
				author: {
					name: 'Shashank Shastri',
					avatarImage: 'https://randomuser.me/api/portraits/men/2.jpg',
					avatarFallback: 'S',
				},
				message: 'Happy birthday in advance Rhea!',
				points: 25,
				timestamp: '4h ago',
			},
			{
				id: 2,
				author: {
					name: 'Ezequiel Pilcsuk',
					avatarImage: 'https://randomuser.me/api/portraits/men/3.jpg',
					avatarFallback: 'E',
				},
				message: 'Wishing you a fantastic day, Rhea!',
				points: 25,
				timestamp: '3h ago',
			},
		],
	},
	{
		team: false,
		id: 2,
		points: 380,
		author: {
			name: 'Sophia Johnson',
			avatarImage: 'https://randomuser.me/api/portraits/women/1.jpg',
			avatarFallback: 'SJ',
		},
		message:
			'@lucas.mei Here is +200 for your outstanding project delivery this month. Great work!',
		recognitionPoints: 200,
		comments: [
			{
				id: 1,
				author: {
					name: 'Lucas Mei',
					avatarImage: 'https://randomuser.me/api/portraits/men/4.jpg',
					avatarFallback: 'LM',
				},
				message: 'Thanks so much, Sophia!',
				points: 10,
				timestamp: '2h ago',
			},
		],
	},
	{
		team: false,
		id: 3,
		points: 300,
		author: {
			name: 'Carlos Rivera',
			avatarImage: 'https://randomuser.me/api/portraits/men/5.jpg',
			avatarFallback: 'CR',
		},
		message:
			'@emma.wong Kudos for leading the team meeting today. Here’s +150!',
		recognitionPoints: 150,
		comments: [
			{
				id: 1,
				author: {
					name: 'Emma Wong',
					avatarImage: 'https://randomuser.me/api/portraits/women/2.jpg',
					avatarFallback: 'EW',
				},
				message: 'Thank you, Carlos! Glad to help out.',
				points: 15,
				timestamp: '5h ago',
			},
		],
	},
	{
		team: false,
		id: 4,
		points: 450,
		author: {
			name: 'Mia Chen',
			avatarImage: 'https://randomuser.me/api/portraits/women/3.jpg',
			avatarFallback: 'MC',
		},
		message:
			'@alex.james A huge +250 for all your hard work in organizing the team retreat!',
		recognitionPoints: 250,
		comments: [
			{
				id: 1,
				author: {
					name: 'Alex James',
					avatarImage: 'https://randomuser.me/api/portraits/men/6.jpg',
					avatarFallback: 'AJ',
				},
				message: 'It was my pleasure! Thanks for the shoutout!',
				points: 20,
				timestamp: '6h ago',
			},
		],
	},
	{
		team: true,
		id: 5,
		points: 500,
		author: {
			name: 'David Kim',
			avatarImage: 'https://randomuser.me/api/portraits/men/7.jpg',
			avatarFallback: 'DK',
		},
		message:
			'@natalie.smith +300 for hitting the quarterly target ahead of time. Amazing effort!',
		recognitionPoints: 300,
		comments: [
			{
				id: 1,
				author: {
					name: 'Natalie Smith',
					avatarImage: 'https://randomuser.me/api/portraits/women/4.jpg',
					avatarFallback: 'NS',
				},
				message: 'Couldn’t have done it without the team. Thanks, David!',
				points: 30,
				timestamp: '8h ago',
			},
		],
	},
	{
		team: true,
		id: 6,
		points: 275,
		author: {
			name: 'Rhea Mariano',
			avatarImage: 'https://randomuser.me/api/portraits/women/5.jpg',
			avatarFallback: 'RM',
		},
		message:
			'@guillermo.jureidin Thanks for mentoring new hires. Here’s +100 as a token of appreciation!',
		recognitionPoints: 100,
		comments: [
			{
				id: 1,
				author: {
					name: 'Guillermo Jureidin',
					avatarImage: 'https://randomuser.me/api/portraits/men/8.jpg',
					avatarFallback: 'GJ',
				},
				message: 'Happy to help, Rhea!',
				points: 15,
				timestamp: '7h ago',
			},
		],
	},
	{
		team: true,
		id: 7,
		points: 325,
		author: {
			name: 'Samuel Ocampo',
			avatarImage: 'https://randomuser.me/api/portraits/men/9.jpg',
			avatarFallback: 'SO',
		},
		message:
			'@lisa.zhang +175 for your excellent client presentations this quarter!',
		recognitionPoints: 175,
		comments: [
			{
				id: 1,
				author: {
					name: 'Lisa Zhang',
					avatarImage: 'https://randomuser.me/api/portraits/women/6.jpg',
					avatarFallback: 'LZ',
				},
				message: 'Thanks, Samuel! It was a team effort.',
				points: 20,
				timestamp: '3h ago',
			},
		],
	},
	{
		team: true,
		id: 8,
		points: 410,
		author: {
			name: 'Amir Patel',
			avatarImage: 'https://randomuser.me/api/portraits/men/10.jpg',
			avatarFallback: 'AP',
		},
		message:
			'@sophie.lee Thanks for coordinating the product launch. Here’s +250!',
		recognitionPoints: 250,
		comments: [
			{
				id: 1,
				author: {
					name: 'Sophie Lee',
					avatarImage: 'https://randomuser.me/api/portraits/women/7.jpg',
					avatarFallback: 'SL',
				},
				message: 'Appreciate it, Amir!',
				points: 25,
				timestamp: '2h ago',
			},
		],
	},
	{
		team: true,
		id: 9,
		points: 390,
		author: {
			name: 'Ethan Brown',
			avatarImage: 'https://randomuser.me/api/portraits/men/11.jpg',
			avatarFallback: 'EB',
		},
		message:
			'@mike.dawson A well-deserved +200 for organizing the new workflow system!',
		recognitionPoints: 200,
		comments: [
			{
				id: 1,
				author: {
					name: 'Mike Dawson',
					avatarImage: 'https://randomuser.me/api/portraits/men/12.jpg',
					avatarFallback: 'MD',
				},
				message: 'Glad it’s helpful! Thanks, Ethan!',
				points: 10,
				timestamp: '5h ago',
			},
		],
	},
	{
		team: true,
		id: 10,
		points: 455,
		author: {
			name: 'Olivia Green',
			avatarImage: 'https://randomuser.me/api/portraits/women/8.jpg',
			avatarFallback: 'OG',
		},
		message:
			'@harry.thompson +300 for setting up the holiday event. Great work!',
		recognitionPoints: 300,
		comments: [
			{
				id: 1,
				author: {
					name: 'Harry Thompson',
					avatarImage: 'https://randomuser.me/api/portraits/men/13.jpg',
					avatarFallback: 'HT',
				},
				message: 'Thank you, Olivia!',
				points: 25,
				timestamp: '1h ago',
			},
		],
	},
	{
		team: true,
		mine: true,
		id: 11,
		points: 425,
		author: {
			name: 'Xaitov Jasurbek',
			avatarImage: 'https://randomuser.me/api/portraits/men/14.jpg',
			avatarFallback: 'XJ',
		},
		message:
			'@rhea.mariano Here is +250 to celebrate your birthday on November 16. Happy Birthday! 🎂',
		recognitionPoints: 250,
		comments: [
			{
				id: 1,
				author: {
					name: 'Shashank Shastri',
					avatarImage: 'https://randomuser.me/api/portraits/men/14.jpg',
					avatarFallback: 'SS',
				},
				message: 'Happy birthday in advance Rhea!',
				points: 25,
				timestamp: '4h ago',
			},
		],
	},
]

export const usersData = [
	{
		id: 1,
		userName: 'quinn.lee',
		name: 'Quinn Lee',
		avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
		birthday: 'July 06, 2015',
		coins: 160,
	},
	{
		id: 2,
		userName: 'sophia.johnson',
		name: 'Sophia Johnson',
		avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
		birthday: 'June 19, 2010',
		coins: 180,
	},
	{
		id: 3,
		userName: 'carlos.rivera',
		name: 'Carlos Rivera',
		avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
		birthday: 'January 09, 1998',
		coins: 224,
	},
	{
		id: 4,
		userName: 'mia.chen',
		name: 'Mia Chen',
		avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
		birthday: 'December 17, 2001',
		coins: 167,
	},
	{
		id: 5,
		userName: 'david.kim',
		name: 'David Kim',
		avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
		birthday: 'December 10, 2021',
		coins: 192,
	},
	{
		id: 6,
		userName: 'rhea.mariano',
		name: 'Rhea Mariano',
		avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
		birthday: 'January 21, 1998',
		coins: 107,
	},
	{
		id: 7,
		userName: 'samuel.ocampo',
		name: 'Samuel Ocampo',
		avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
		birthday: 'December 25, 1995',
		coins: 182,
	},
	{
		id: 8,
		userName: 'amir.patel',
		name: 'Amir Patel',
		avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
		birthday: 'March 25, 2011',
		coins: 247,
	},
	{
		id: 9,
		userName: 'ethan.brown',
		name: 'Ethan Brown',
		avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
		birthday: 'January 03, 2013',
		coins: 20,
	},
	{
		id: 10,
		userName: 'olivia.green',
		name: 'Olivia Green',
		avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
		birthday: 'April 02, 2021',
		coins: 231,
	},
	{
		id: 11,
		userName: 'xaitov.jasurbek',
		name: 'Xaitov Jasurbek',
		avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
		birthday: 'November 17, 1995',
		coins: 146,
	},
]

export const myData = {
	userName: 'xaitov.jasurbek',
	name: 'Xaitov Jasurbek',
	avatar: 'https://randomuser.me/api/portraits/men/14.jpg',
	birthday: 'November 17, 1995',
	coins: 250,
	rewards: 300,
}

export const stickers = [
  { id: 1, name: 'Good', cost: 5, image: <BiSolidLike className='text-xl text-red-600'/> },

  { id: 2, name: 'Crown', cost: 10, image: <GiQueenCrown className='text-xl text-yellow-600'/> },

  { id: 3, name: 'Fire', cost: 15, image: <FaRegSmile className='text-xl text-green-600'/> },
]