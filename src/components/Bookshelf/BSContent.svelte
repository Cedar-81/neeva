<script lang="ts">
    import { marked } from "marked";
	import BsAppBar from "./BSAppBar.svelte";
	import Icon from "@iconify/svelte";
	import CommentList from "../comment/CommentList.svelte";

let markdownContent = `# The Enchanted Forest

Once upon a time, in a distant land, there existed an enchanted forest shrouded in mystery. Legends spoke of its magical powers and the extraordinary beings that resided within its depths. Many sought to uncover its secrets, but few were brave enough to venture into its realm.

One day, a young adventurer named Amelia heard whispers of the enchanted forest's existence. Fueled by curiosity and a longing for adventure, she embarked on a perilous journey to find the fabled forest. With a map in hand and determination in her heart, she set off on her quest.

As Amelia ventured deeper into the uncharted wilderness, the air grew thick with anticipation. The forest seemed to beckon her, its ancient trees whispering secrets carried on the wind. Each step brought her closer to the heart of the unknown.

Days turned into nights, and Amelia traversed treacherous terrains, overcoming obstacles with resilience and unwavering determination. Finally, after weeks of tireless exploration, she stumbled upon a hidden glade bathed in ethereal light.

In the center of the glade stood a majestic waterfall, its cascading waters glistening under the sunlight. Amelia's heart skipped a beat as she realized she had reached the legendary site. This was the entrance to the fabled enchanted forest.

As she stepped through the shimmering veil of water, Amelia was greeted by an otherworldly beauty. The forest came alive with vibrant colors, and the air was filled with the sweet scent of blooming flowers. Magical creatures darted between the trees, their presence both awe-inspiring and humbling.

Guided by an inner compass, Amelia followed a winding path that led her to an ancient oak tree. Nestled among its branches was a wise old owl, its piercing eyes filled with ancient knowledge.

"Welcome, seeker of wishes," the owl spoke with a voice that resonated through the forest. "What brings you to this sacred place?"

Amelia gazed into the owl's wise eyes and shared her deepest desires. She longed for a world where compassion and understanding reigned, where people lived in harmony with nature, and where all beings were treated with respect.

The owl nodded, acknowledging the purity of Amelia's intentions. "You seek a noble wish," it said. "But be warned, for every wish comes at a price. Are you prepared to face the consequences?"

Amelia hesitated for a moment, contemplating the weight of her decision. She knew that true change required sacrifice, but her unwavering belief in a better world propelled her forward.

With a steady voice, she affirmed her wish, her words carrying the hopes of countless souls longing for a brighter future. The forest trembled, and a surge of energy enveloped Amelia, connecting her to the very essence of nature.

Days turned into weeks, and weeks into months. Amelia witnessed the gradual transformation of her world. The people she encountered along her journey began to awaken, embracing kindness, empathy, and a deeper connection with the natural world.

Communities formed, working together to heal the wounds of the past and create a more harmonious society. The environment flourished as people became custodians of the earth, nurturing and protecting its fragile ecosystems.

Amelia's name became synonymous with hope and inspiration. She traveled far and wide, sharing her story and igniting the flames of change in the hearts of those she encountered. Her bravery and selflessness touched the lives of many, leaving an indelible mark on the tapestry of time.

As for the enchanted forest, it continued to grant wishes to those who dared to seek it. But the lesson remained etched in the hearts of all who visited: true change begins with an unwavering belief and the courage to take action.

Amelia's legacy lived on, reminding future generations that the power to create a better world lies within each and every one of us. And as the enchanted forest whispered its eternal melody, it carried the echoes of Amelia's journey, a testament to the boundless potential that lies dormant within the human spirit.

---

*Note: This captivating story is a work of fiction and does not depict any real events or individuals.*`;
let htmlText = marked.parse(markdownContent);
let showComment = false
let handleShowComment = () => showComment = !showComment

</script>


<div class="p-8 pr-4">
  <div id="one" class="bg-base-200  mx-auto max-w-4xl rounded-lg min-h-[90vh]">
    <div class="p-8 prose">{@html htmlText}</div>
    <div class="sticky bottom-0">
      <div class="flex flex-col items-end space-y-4 pr-4 mb-8">
        <button class="p-3 rounded-full bg-base-300/60 w-max cursor-pointer" on:click={handleShowComment}><Icon class="h-8 w-8" icon="basil:comment-outline" /></button>
        <div class="p-3 rounded-full bg-base-300/60 w-max cursor-pointer"><Icon class="h-8 w-8" icon="solar:heart-broken" /></div>
      </div>
      {#if showComment }
        <CommentList />
      {/if}
      <BsAppBar />  
    </div>
  </div>
</div>
