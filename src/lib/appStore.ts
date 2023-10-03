import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '$lib/DatabaseDefinitions';
import { writable } from 'svelte/store';
import type { Redirect } from '@sveltejs/kit';

type LensForm = {
	title: string;
	genre: string;
	summary: string;
	content: string;
};

export type PersonalBio = {
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
	profile_version_no: number;
	banner_version_no: number;
};

//constant details are entered here

export const personalBio = writable<PersonalBio>(); //logged in user's details

export const supabaseClient = writable<SupabaseClient<Database>>();

export const scrollPosition = writable<number>(0);

export const lensCreateAction = writable<string>('?/save_details');

export const showToast = writable<boolean>(false);

export const loading = writable<boolean>(false);

export const submitForm = writable<boolean>(false)

export const toastMessage = writable<string>('');

export const lensCreateForm = writable<LensForm>({
	title: '',
	genre: '',
	summary: '',
	content: ''
});

export const genres: string[] = [
	'Romance',
	'Fantasy',
	'Science Fiction',
	'Mystery/Thriller',
	'Adventure',
	'Dystopian',
	'Horror',
	'Young Adult (YA)',
	'Historical Fiction',
	'Fan Fiction',
	'Science Fantasy',
	'Adventure/Romance',
	'Urban Fantasy',
	'Paranormal',
	'Comedy',
	'Action',
	'Non-Fiction',
	'Slice of Life',
	'LGBTQ+',
	'Historical Romance',
	'Superhero',
	'Time Travel',
	'Vampire/Werewolf',
	'Magic School',
	'War',
	'Gothic',
	'Alien Invasion',
	'Psychological Thriller',
	'Anthology',
	'Alternate History'
];

export function openModal() {
	// @ts-ignore
	document.getElementById('my_modal_1')?.showModal();
}

// Function to show the toast
export function showToastMessage() {
	showToast.set(true);
	// Automatically hide the toast after 10 seconds (10000 milliseconds)
	setTimeout(() => {
		showToast.set(false);
		toastMessage.set('');
	}, 5000);
}
