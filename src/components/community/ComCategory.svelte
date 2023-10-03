<script>
	import ComCard from "./ComCard.svelte";

    const communities = [
        {
            name: "Books & Beyond",
            shortname: "The Inkwell Society",
            memberCount: 5000,
            threadCount: 100,
            communitySummary: "A vibrant community for book lovers, where you can discuss your favorite novels, discover new genres, and engage in exciting literary discussions."
        },
        {
            name: "Fantasy Fanatics",
            shortname: "The Enchanted Circle",
            memberCount: 3000,
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
            memberCount: 4000,
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
            memberCount: 6000,
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
            memberCount: 4000,
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


</script>

<div class="grid-container">
    {#each communities as community}
        <ComCard {community} />
    {/each}
</div>

<style>
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        gap: 35px;
    }

</style>