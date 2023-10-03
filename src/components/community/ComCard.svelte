<script lang="ts">
	import Icon from "@iconify/svelte";
    import Avatar from "../Avatar.svelte";

    export let community;
    let {name, shortname, memberCount, threadCount, communitySummary} = community

    function limitWords(text: string, limit:number) {
        const words = text.split(" ");
        if (words.length > limit) {
            return words.slice(0, limit).join(" ") + "...";
        }
        return text;
    }

</script>
<div class="border w-[20rem] hover:shadow-xl cursor-pointer h-[8rem] p-2 pl-3 justify-between flex items-center border-gray-400/30 rounded-lg">
    <div class="space-y-4">
        <div class="space-y-1">
            <h2 class="text-white" >#{name}</h2>
            <p class="text-xs">
                {limitWords(communitySummary, 10)}
            </p>
        </div>
        <div class="flex space-x-6">
            <div class="flex text-xs items-center space-x-3">
                <div class="flex -space-x-2 pr-1 items-center">
                    <Avatar avatar={{
                        image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "SO",
                    }} className="h-4 w-4" />
                    <Avatar avatar={{
                        image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "SO",
                    }} className="h-4 w-4" />
                    <Avatar avatar={{
                        image: "https://images.pexels.com/photos/17309420/pexels-photo-17309420/free-photo-of-passion-portrait.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                        name: "SO",
                    }} className="h-4 w-4" />
                </div>
                {memberCount} members
            </div>
            <p class="text-xs">{threadCount} Threads</p>
        </div>
    </div>

    <div class="w-[30%] flex items-center justify-center h-full">
        <Icon icon="fluent-emoji:tokyo-tower" class='h-16 w-16' />
    </div>
</div>