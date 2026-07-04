import { M as escape_html, g as unsubscribe_stores, i as bind_props, j as clsx, m as store_get, s as ensure_array_like, t as attr_class } from "../../../../chunks/server.js";
import { t as Icon } from "../../../../chunks/Icon.js";
import { i as communities } from "../../../../chunks/store.js";
import { t as Avatar } from "../../../../chunks/Avatar.js";
//#region src/components/community/ComCard.svelte
function ComCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let community = $$props["community"];
		let { name, shortname, memberCount, threadCount, communitySummary } = community;
		function limitWords(text, limit) {
			const words = text.split(" ");
			if (words.length > limit) return words.slice(0, limit).join(" ") + "...";
			return text;
		}
		$$renderer.push(`<div class="border w-[20rem] hover:shadow-xl cursor-pointer h-[8rem] p-2 pl-3 justify-between flex items-center border-gray-400/30 rounded-lg"><div class="space-y-4"><div class="space-y-1"><h2 class="text-white">#${escape_html(name)}</h2> <p class="text-xs">${escape_html(limitWords(communitySummary, 10))}</p></div> <div class="flex space-x-6"><div class="flex text-xs items-center space-x-3"><div class="flex -space-x-2 pr-1 items-center">`);
		Avatar($$renderer, {
			avatar: {
				image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				name: "SO"
			},
			className: "h-4 w-4"
		});
		$$renderer.push(`<!----> `);
		Avatar($$renderer, {
			avatar: {
				image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				name: "SO"
			},
			className: "h-4 w-4"
		});
		$$renderer.push(`<!----> `);
		Avatar($$renderer, {
			avatar: {
				image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				name: "SO"
			},
			className: "h-4 w-4"
		});
		$$renderer.push(`<!----></div> ${escape_html(memberCount)} members</div> <p class="text-xs">${escape_html(threadCount)} Threads</p></div></div> <div class="w-[30%] flex items-center justify-center h-full">`);
		Icon($$renderer, {
			icon: "fluent-emoji:tokyo-tower",
			class: "h-16 w-16"
		});
		$$renderer.push(`<!----></div></div>`);
		bind_props($$props, { community });
	});
}
//#endregion
//#region src/components/community/ComCategory.svelte
function ComCategory($$renderer) {
	const communities = [
		{
			name: "Books & Beyond",
			shortname: "The Inkwell Society",
			memberCount: 5e3,
			threadCount: 100,
			communitySummary: "A vibrant community for book lovers, where you can discuss your favorite novels, discover new genres, and engage in exciting literary discussions."
		},
		{
			name: "Fantasy Fanatics",
			shortname: "The Enchanted Circle",
			memberCount: 3e3,
			threadCount: 80,
			communitySummary: "Immerse yourself in the enchanting world of fantasy literature. Join fellow fantasy enthusiasts in exploring epic adventures, magical realms, and mythical creatures."
		},
		{
			name: "Romance Retreat",
			shortname: "Amour Haven",
			memberCount: 4500,
			threadCount: 120,
			communitySummary: "Indulge in heartwarming love stories and passionate tales of romance. Connect with fellow hopeless romantics and share your favorite romantic novels and authors."
		},
		{
			name: "Mystery Mania",
			shortname: "Puzzle Solvers Club",
			memberCount: 2500,
			threadCount: 70,
			communitySummary: "Unravel thrilling mysteries and delve into the world of suspense. Join the community of mystery enthusiasts, discuss your favorite crime novels, and solve puzzling cases together."
		},
		{
			name: "Sci-Fi Galaxy",
			shortname: "Cosmic Explorers Union",
			memberCount: 4e3,
			threadCount: 90,
			communitySummary: "Embark on thrilling journeys to distant galaxies and explore the realms of science fiction. Connect with fellow sci-fi fans, discuss futuristic concepts, and share mind-bending stories."
		},
		{
			name: "Horror Haven",
			shortname: "Nightmare Society",
			memberCount: 3500,
			threadCount: 75,
			communitySummary: "Embrace the darkness and dive into the realm of horror. Join a community of horror enthusiasts, discuss spine-chilling tales, and share your favorite terrifying reads."
		},
		{
			name: "Teen Reads",
			shortname: "GenZ Bookworms",
			memberCount: 6e3,
			threadCount: 150,
			communitySummary: "A community exclusively for teenage readers, where you can explore books written for and by young adults. Share your thoughts, find recommendations, and connect with fellow teen readers."
		},
		{
			name: "Historical Hype",
			shortname: "Time Travelers Guild",
			memberCount: 3200,
			threadCount: 85,
			communitySummary: "Step back in time and immerse yourself in the captivating world of historical fiction. Connect with history enthusiasts, discuss your favorite eras, and discover captivating historical novels."
		},
		{
			name: "Writing Workshop",
			shortname: "The Wordsmiths' Den",
			memberCount: 4e3,
			threadCount: 100,
			communitySummary: "A supportive community for aspiring writers. Get valuable feedback, share writing tips, and connect with fellow authors on your journey to becoming a published writer."
		},
		{
			name: "Fan Fiction Frenzy",
			shortname: "Fandom Chronicles",
			memberCount: 5500,
			threadCount: 130,
			communitySummary: "Dive into the world of fan fiction and unleash your creativity. Join a community of fanfic enthusiasts, write your own stories based on your favorite fandoms, and share your work with fellow fans."
		}
	];
	$$renderer.push(`<div class="grid-container svelte-lfd2rj"><!--[-->`);
	const each_array = ensure_array_like(communities);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let community = each_array[$$index];
		ComCard($$renderer, { community });
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/components/community/ComCategories.svelte
function ComCategories($$renderer) {
	var $$store_subs;
	$$renderer.push(`<section class="pb-10"><!--[-->`);
	const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$communities", communities));
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let category = each_array[$$index];
		$$renderer.push(`<div${attr_class(clsx(category.categoryName == "Your Network" ? "bg-base-200 space-y-6 px-8 pt-16 pb-24" : "space-y-6 px-8 pt-16"))}><div class="flex items-center space-x-2"><h2 class="text-xl text-white">${escape_html(category.categoryName)}</h2> <p>${escape_html(category.categoryNumber)}</p></div> `);
		ComCategory($$renderer, {});
		$$renderer.push(`<!----></div>`);
	}
	$$renderer.push(`<!--]--></section>`);
	if ($$store_subs) unsubscribe_stores($$store_subs);
}
//#endregion
//#region src/components/community/ComSearch.svelte
function ComSearch($$renderer) {
	$$renderer.push(`<section class="z-20 relative pt-8"><input type="text" placeholder="Search books" class="input input-bordered border-gray-400/30 bg-black/5 input-md rounded-full w-60"/></section>`);
}
//#endregion
//#region src/components/community/ComHeader.svelte
function ComHeader($$renderer) {
	$$renderer.push(`<section class="pt-20 px-8 bg-base-200 flex justify-between items-end"><div class="space-y-1"><p class="text-sm">Search for communities</p> <h1 class="text-3xl text-white">Get Connected</h1></div> `);
	ComSearch($$renderer, {});
	$$renderer.push(`<!----></section>`);
}
//#endregion
//#region src/routes/(dashboard)/community/+page.svelte
function _page($$renderer) {
	ComHeader($$renderer, {});
	$$renderer.push(`<!----> `);
	ComCategories($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _page as default };
