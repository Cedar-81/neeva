import { L as writable } from "./server.js";
import "./index-server2.js";
//#region src/lib/appStore.ts
var personalBio = writable();
var supabaseClient = writable();
var scrollPosition = writable(0);
writable("?/save_details");
var showToast = writable(false);
var loading = writable(false);
writable(false);
var toastMessage = writable("");
var appSession = writable();
var lensCreateForm = writable({
	title: "",
	genre: "",
	summary: "",
	content: ""
});
var genres = [
	"Romance",
	"Fantasy",
	"Science Fiction",
	"Mystery/Thriller",
	"Adventure",
	"Dystopian",
	"Horror",
	"Young Adult (YA)",
	"Historical Fiction",
	"Fan Fiction",
	"Science Fantasy",
	"Adventure/Romance",
	"Urban Fantasy",
	"Paranormal",
	"Comedy",
	"Action",
	"Non-Fiction",
	"Slice of Life",
	"LGBTQ+",
	"Historical Romance",
	"Superhero",
	"Time Travel",
	"Vampire/Werewolf",
	"Magic School",
	"War",
	"Gothic",
	"Alien Invasion",
	"Psychological Thriller",
	"Anthology",
	"Alternate History"
];
//#endregion
export { personalBio as a, supabaseClient as c, loading as i, toastMessage as l, genres as n, scrollPosition as o, lensCreateForm as r, showToast as s, appSession as t };
