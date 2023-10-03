export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
	public: {
		Tables: {
			Lens: {
				Row: {
					author_id: string;
					content: string;
					created_at: string;
					genre: string;
					id: string;
					likes: string[] | null;
					published: boolean | null;
					summary: string;
					title: string;
					views: number | null;
				};
				Insert: {
					author_id?: string;
					content: string;
					created_at?: string;
					genre: string;
					id?: string;
					likes?: string[] | null;
					published?: boolean | null;
					summary: string;
					title: string;
					views?: number | null;
				};
				Update: {
					author_id?: string;
					content?: string;
					created_at?: string;
					genre?: string;
					id?: string;
					likes?: string[] | null;
					published?: boolean | null;
					summary?: string;
					title?: string;
					views?: number | null;
				};
				Relationships: [
					{
						foreignKeyName: 'Lens_author_id_fkey';
						columns: ['author_id'];
						referencedRelation: 'UserDetails';
						referencedColumns: ['id'];
					}
				];
			};
			LensComments: {
				Row: {
					author_username: string | null;
					content: string;
					created_at: string;
					id: string;
					lens_id: string;
				};
				Insert: {
					author_username?: string | null;
					content: string;
					created_at?: string;
					id?: string;
					lens_id: string;
				};
				Update: {
					author_username?: string | null;
					content?: string;
					created_at?: string;
					id?: string;
					lens_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'LensComments_author_username_fkey';
						columns: ['author_username'];
						referencedRelation: 'UserDetails';
						referencedColumns: ['username'];
					},
					{
						foreignKeyName: 'LensComments_lens_id_fkey';
						columns: ['lens_id'];
						referencedRelation: 'Lens';
						referencedColumns: ['id'];
					}
				];
			};
			UserDetails: {
				Row: {
					banner_image: string | null;
					banner_version_no: number;
					bio: string | null;
					created_at: string;
					firstname: string;
					followers: string[] | null;
					following: string[] | null;
					id: string;
					lastname: string;
					lens_progress: Json | null;
					profile_image: string | null;
					profile_version_no: number;
					user_id: string | null;
					username: string;
				};
				Insert: {
					banner_image?: string | null;
					banner_version_no?: number;
					bio?: string | null;
					created_at?: string;
					firstname: string;
					followers?: string[] | null;
					following?: string[] | null;
					id?: string;
					lastname: string;
					lens_progress?: Json | null;
					profile_image?: string | null;
					profile_version_no?: number;
					user_id?: string | null;
					username: string;
				};
				Update: {
					banner_image?: string | null;
					banner_version_no?: number;
					bio?: string | null;
					created_at?: string;
					firstname?: string;
					followers?: string[] | null;
					following?: string[] | null;
					id?: string;
					lastname?: string;
					lens_progress?: Json | null;
					profile_image?: string | null;
					profile_version_no?: number;
					user_id?: string | null;
					username?: string;
				};
				Relationships: [
					{
						foreignKeyName: 'UserDetails_user_id_fkey';
						columns: ['user_id'];
						referencedRelation: 'users';
						referencedColumns: ['id'];
					}
				];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
