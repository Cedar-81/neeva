<script lang="ts">
	import { goto } from "$app/navigation";
  import { genres, loading, personalBio } from "$lib/appStore";
  import { View } from  "lucide-svelte"
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";
  let showModal = true;
  let text = '';
  let charCount = 0;
  const maxChars = 500; // Change this to your desired character limit
  
  function updateCharCount() {
    charCount = text.length;
    if (charCount > maxChars) {
      text = text.substring(0, maxChars);
      charCount = maxChars;
    }
  }

  $: updateCharCount();

  function openModal() {
    // @ts-ignore
    document.getElementById("my_modal_1")?.showModal()
  }

  function closeModal() {
    showModal = false;
  }

  const detailFormVal = {
    title: "",
    genre: "",
    summary: "",
    author_id: $personalBio.id
  }
   const saveDetail = () => {
    loading.set(true);
    const formData = new FormData();
    let responseData: any;

      formData.append('details', JSON.stringify(detailFormVal))

      let submit = fetch('?/save_details', {
          method: 'POST',
          body: formData
          
      })
      .then(response => response.json())
      .then(data => responseData = data)
      .finally(() =>{
        loading.set(false);
        toast.success('Story details successfully saved and added to your drafts.')
        toast("Creating writing workspace.",
            {
              duration: 6000,
            }
          );
 
        location.href = `/create/lens/write/${JSON.parse(responseData.data)[1]}`
      })
    
  }
  
</script>

<div class="w-full h-full flex items-center justify-center">
  <div class="tooltip" data-tip="Click to start writing">
    <button on:click={openModal}>
      <div class="flex flex-col items-center justify-center border-2 transition-all border-transparent hover:border-accent-focus/30 bg-base-200 rounded-lg m-8 min-h-[11rem] p-8">
        <View class='w-[8rem] h-[9rem] text-accent-focus/60' />
        <p class="pt-4 text-center text-accent-focus font-bold">Start Writing</p>
      </div>
    </button>
  </div>  
</div>


<dialog id="my_modal_1" class="modal">
  <form  class="modal-box space-y-4">
        <h3 class="text-xl">Create Lens</h3>
        <div class="form-control w-full">
            <label for="title" class="label">
                <span class="label-text">Title</span>
            </label>
            <input id="title" bind:value={detailFormVal.title} name="title" type="text" placeholder="Enter lens title" class="input input-bordered w-full" />
        </div>

        <div class="form-control w-full">
            <label for="genre" class="label">
                <span class="label-text">Genre</span>
            </label>
            <select name="genre" bind:value={detailFormVal.genre} id="genre" class="select select-bordered">
                <option disabled selected class="text-normal">Select genre</option>
                {#each genres as genre}
                  <option>{genre}</option>
                {/each}
            </select>
        </div>

        <div  class="form-control">
            <label for="summary" class="label">
                <span class="label-text">Summary</span>
            </label>
            <textarea bind:value={detailFormVal.summary} rows="4" cols="50" on:input={updateCharCount} name="summary"  id="summary" class="textarea textarea-bordered h-24" placeholder="Lens summary"></textarea>
            <div class="w-full flex justify-end pt-2"><p class="text-xs"><span>{charCount}</span> / {maxChars} characters</p></div>
        </div>
        
        <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button type="submit" on:click={saveDetail}  class="btn">Create</button>
        </div>
  </form>
</dialog> 