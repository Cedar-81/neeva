import { writable } from 'svelte/store';

type Book = {
	id: number;
	name: string;
	genre: string;
	summary: string;
	rating: number;
	image: string;
};

type Categories = {
	name: string;
	important: boolean;
};

type Communities = {
	categoryName: string;
	categoryNumber: number;
};

type Shorts = {
	id: number;
	title: string;
	genre: string;
	viewCount: number;
	likeCount: number;
	commentCount: number;
	read: boolean;
	summary: string;
	progress: number;
};

export type Lens = {
	UserDetails: any;
	author_id: string | null;
	content: string;
	created_at: string;
	genre: string;
	id: string;
	likes: string[] | null;
	summary: string;
	title: string;
	views: number | null;
	progress: number | null;
	comment_count: number;
};

export type UsersLens = {
	author_id: string | null;
	content: string;
	created_at: string;
	genre: string;
	id: string;
	likes: string[] | null;
	summary: string;
	title: string;
	views: number | null;
	published: boolean | null;
};

export type SingleLens = {
	author_id: string | null;
	content: string;
	created_at: string;
	genre: string;
	id: string;
	likes: string[] | null;
	summary: string;
	title: string;
	views: number | null;
	progress: number | null;
	comment_count: number;
	published: boolean | null;
	UserDetails: {
		username: string;
		profile_image: string | null;
		firstname: string;
		lastname: string;
		following: string[] | null;
		followers: string[] | null;
		user_id: string | null;
	} | null;
};

export type Author = {
	banner_image: string | null;
	bio: string | null;
	created_at: string;
	firstname: string;
	followers: string[] | null;
	following: string[] | null;
	id: string;
	lastname: string;
	lens_progress: string | null;
	profile_image: string | null;
	user_id: string | null;
	username: string;
	user_is_following: boolean;
	profile_version_no: number;
	banner_version_no: number;
};

export type Comment = {
	id: number;
	text: string;
	name: string;
	postedAt: string;
	replies: Reply[];
};

export type LensComments = {
	content: string;
	created_at: string;
	id: string;
	lens_id: string;
	author_username: string | null;
	UserDetails: {
		profile_image: string | null;
		username: string;
	} | null;
};

type Reply = {
	id: number;
	text: string;
	parentReplyId: number | null;
	name: string;
	postedAt: string;
};

export const user_id = writable<string>('');

export const redirect_id = writable<string>('');

export const lens = writable<Lens[]>([]);

export const usersLens = writable<UsersLens[]>([]);

export const singleLens = writable<SingleLens>();

export const lensComments = writable<LensComments[]>([]);

export const author = writable<Author>();

//not confirmed below

export const books = writable<Book[]>([
	{
		id: 1,
		name: "The Hitchhiker's Guide to the Galaxy",
		genre: 'Science Fiction',
		summary: 'A comedy science fiction series created by Douglas Adams.',
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/4355630/pexels-photo-4355630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	},
	{
		id: 2,
		name: 'The Lord of the Rings',
		genre: 'Fantasy',
		summary:
			'A high fantasy trilogy written by English philologist and University of Oxford professor J. R. R. Tolkien.',
		rating: 5,
		image:
			'https://images.pexels.com/photos/4526475/pexels-photo-4526475.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 3,
		name: "Harry Potter and the Sorcerer's Stone",
		genre: 'Fantasy',
		summary: 'The first book in the Harry Potter series by J. K. Rowling.',
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/266429/pexels-photo-266429.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 4,
		name: 'The Hunger Games',
		genre: 'Dystopian',
		summary: 'A science fiction novel by American author Suzanne Collins.',
		rating: 4,
		image:
			'https://images.pexels.com/photos/289367/pexels-photo-289367.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 5,
		name: 'To Kill a Mockingbird',
		genre: 'Classic',
		summary: 'A novel by Harper Lee that was published in 1960.',
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/3764876/pexels-photo-3764876.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 6,
		name: 'Pride and Prejudice',
		genre: 'Classic',
		summary: 'A novel of manners by Jane Austen.',
		rating: 5,
		image:
			'https://images.pexels.com/photos/3526022/pexels-photo-3526022.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 7,
		name: 'The Catcher in the Rye',
		genre: 'Coming-of-age',
		summary: 'A novel by J. D. Salinger that was first published in 1951.',
		rating: 4,
		image:
			'https://images.pexels.com/photos/1545590/pexels-photo-1545590.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 8,
		name: '1984',
		genre: 'Dystopian',
		summary: 'A dystopian novel by George Orwell that was published in 1949.',
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/13993939/pexels-photo-13993939.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 9,
		name: 'The Book Thief',
		genre: 'Historical Fiction',
		summary: 'A novel by Markus Zusak set in Nazi Germany.',
		rating: 4.5,
		image:
			'https://images.pexels.com/photos/9119845/pexels-photo-9119845.jpeg?auto=compress&cs=tinysrgb&w=600'
	},
	{
		id: 10,
		name: 'The Alchemist',
		genre: 'Fantasy',
		summary: "A novel by Paulo Coelho about a shepherd boy's journey to find treasure.",
		rating: 4,
		image:
			'https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg?auto=compress&cs=tinysrgb&w=600'
	}
]);

export const categories = writable<Categories[]>([
	{ name: 'Fantasy', important: false },
	{ name: 'Featured Authors', important: true },
	{ name: 'Romance', important: false },
	{ name: 'Mystery', important: false },
	{ name: 'New Books', important: true },
	{ name: 'Science Fiction', important: false },
	{ name: 'Horror', important: false },
	{ name: 'Recommended', important: true },
	{ name: 'Thriller', important: false },
	{ name: 'Young Adult', important: false },
	{ name: 'Popular Books', important: true },
	{ name: 'Historical Fiction', important: false },
	{ name: 'Poetry', important: false },
	{ name: 'Reading Challenges', important: true }
]);

export const communities = writable<Communities[]>([
	{
		categoryName: 'Your Network',
		categoryNumber: 10
	},
	{
		categoryName: 'Most Popular',
		categoryNumber: 5
	},
	{
		categoryName: 'Recommended',
		categoryNumber: 8
	},
	{
		categoryName: 'Newly Created',
		categoryNumber: 3
	},
	{
		categoryName: 'Genre-specific',
		categoryNumber: 12
	},
	{
		categoryName: 'Local',
		categoryNumber: 7
	},
	{
		categoryName: 'Community Spotlights',
		categoryNumber: 2
	},
	{
		categoryName: 'Writing and Creative Communities',
		categoryNumber: 6
	},
	{
		categoryName: 'Fanfiction Communities',
		categoryNumber: 4
	},
	{
		categoryName: 'Book Clubs',
		categoryNumber: 9
	}
]);

export const comments = writable<Comment[]>([
	{
		id: 1,
		name: 'John Doe',
		text: 'This is the first comment.',
		postedAt: '2023-06-01 10:00:00',
		replies: [
			{
				id: 2,
				name: 'Jane Smith',
				text: 'This is a reply to the first comment.',
				postedAt: '2023-06-01 10:05:00',
				parentReplyId: null
			},
			{
				id: 3,
				name: 'John Doe',
				text: 'Another reply to the first comment.',
				postedAt: '2023-06-01 10:10:00',
				parentReplyId: null
			}
		]
	},
	{
		id: 3,
		name: 'Same Some',
		text: 'This is the third comment.',
		postedAt: '2023-06-01 10:00:00',
		replies: [
			{
				id: 2,
				name: 'Jane Smith',
				text: 'This is a reply to the first comment.',
				postedAt: '2023-06-01 10:05:00',
				parentReplyId: null
			},
			{
				id: 3,
				name: 'John Doe',
				text: 'Another reply to the first comment.',
				postedAt: '2023-06-01 10:10:00',
				parentReplyId: null
			}
		]
	},
	{
		id: 4,
		name: 'Alice Johnson',
		text: 'This is the second comment.',
		postedAt: '2023-06-01 11:00:00',
		replies: [
			{
				id: 5,
				name: 'Bob Smith',
				text: 'This is a reply to the second comment.',
				postedAt: '2023-06-01 11:05:00',
				parentReplyId: null
			},
			{
				id: 6,
				name: 'Alice Johnson',
				text: 'Another reply to the second comment.',
				postedAt: '2023-06-01 11:10:00',
				parentReplyId: 5
			},
			{
				id: 7,
				name: 'Bob Smith',
				text: 'Reply to the second comment, but in response to reply 6.',
				postedAt: '2023-06-01 11:15:00',
				parentReplyId: 6
			}
		]
	}
]);
