export enum Gender {
	'male' = 0,
	'female',
	'unknown' 
}

export enum Title {
	'mr.',
	'ms',
	'miss',
	'mrs',
	'monsieur',
	'madame',
	'mademoiselle',
	'unknown'
}

export class User {

	_id: string;
	gender: Gender = Gender.unknown;
	name: {
		title: Title;
		first: string;
		last: string
	} = {
		title: Title.unknown,
		first: '',
		last: ''
	};
	location: {
		street: string;
		city: string;
		state: string;
		postcode: number;
		coordinates: {
			latitude: string;
			longitude: string
		};
		timezone: {
			offset: string;
			description: string
		};
	};
	email: string = '';
	login: {
		uuid: string;
		username: string;
		password: string;
		salt: string;
		md5: string;
		sha1: string;
		sha256: string
	};
	dob: {
		date: Date;
		age: number
	};
	registered: {
		date: Date;
		age: number
	};
	phone: string;
	cell: string;
	picture: {
		large: string;
		medium: string;
		thumbnail: string
	} = {
		large: './assets/images/anonymous-person.png',
		medium: './assets/images/anonymous-person.png',
		thumbnail: './assets/images/anonymous-person.png'
	};
	nat: string

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}

}