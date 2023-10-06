<script lang="ts">
  import StarterKit from "@tiptap/starter-kit";
  import { Editor } from "@tiptap/core";
  import { Bold, Undo, Redo, Italic, TextQuote, PencilIcon } from 'lucide-svelte';
  import { onMount, afterUpdate } from "svelte";
  import { genres, lensCreateAction, lensCreateForm, loading } from "$lib/appStore";
	import CreateLensDetails from "./CreateLensDetails.svelte";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import toast from "svelte-french-toast";

  let element: HTMLDivElement | undefined;
  let editor: Editor | undefined;
  let text = $lensCreateForm.summary;
  let charCount = 0;
  let { params } = $page
  let lensId = params.bookid
  const maxChars = 500;

  onMount(() => {
    if (element) {
      element.focus()
      editor = new Editor({
        element: element,
        extensions: [StarterKit],
        content: $lensCreateForm.content,
        onTransaction: () => {
          // force re-render so `editor.isActive` works as expected
          if (editor) {
            editor = editor;
          }
        },
      });
    }
  });

  const handlePublish = () => {
    loading.set(true)
    const formData = new FormData();
    
    if (editor) {
      const writtenText = editor.getHTML(); // Get the HTML content
      formData.append('content', writtenText)

      let submit = fetch('?/publish', {
          method: 'POST',
          body: formData
          
      })
      .finally(() => {
          loading.set(false)
          toast.success('Congratulations... your story is now available to everyone.')
          goto('/lens/read/' + lensId)
      })
    }
    
  }


  const handleDraft = (redirect:boolean) => {
    loading.set(true);
    const formData = new FormData();
    
    if (editor) {
      const writtenText = editor.getHTML(); // Get the HTML content
      formData.append('content', writtenText)

      let submit = fetch('?/save', {
          method: 'POST',
          body: formData
          
      })
      .finally(() =>{
        loading.set(false);
        toast.success('Story successfully added to your drafts. Check your profile to continue writing.')
        redirect && goto('/lens/read/' + lensId)
      })
    }
    
  }

  function updateCharCount() {
    charCount = text.length;
    if (charCount > maxChars) {
      text = text.substring(0, maxChars);
      charCount = maxChars;
    }
  }

  $: updateCharCount();

  function openModal() {
    handleDraft(false)
    // @ts-ignore
    document.getElementById("my_modal_1")?.showModal()
  }



</script>


<div class="h-full max-h-full w-full overflow-y-auto">

    <!-- for mobile screens -->
    <div class="flex space-x-3 lg:hidden fixed right-4 top-4">
      <button on:click={openModal} class="btn btn-outline btn-sm"><PencilIcon /></button>
      <button on:click={ () => {handleDraft(true)}} class="btn btn-sm btn-outline">Draft</button>
      <button on:click={handlePublish} class="btn btn-sm btn-accent">Publish</button>
    </div>
    <!-- for mobile screens end -->

    <dialog id="my_modal_1" class="modal">
      <form method="POST" action="?/update_details"  class="modal-box space-y-4">
            <h3 class="text-xl">Create Lens</h3>
            <div class="form-control w-full">
                <label for="title" class="label">
                    <span class="label-text">Title</span>
                </label>
                <input id="title" value={$lensCreateForm.title} name="title" type="text" placeholder="Enter lens title" class="input input-bordered w-full" />
            </div>

            <div class="form-control w-full">
                <label for="genre" class="label">
                    <span class="label-text">Genre</span>
                </label>
                <select name="genre" value={$lensCreateForm.genre} id="genre" class="select select-bordered">
                    <option disabled selected class="text-normal">Select genre</option>
                    {#each genres as genre}
                      <option>{genre}</option>
                    {/each}
                </select>
            </div>

            <div  class="form-control">
                <label for="summary" class="label">
                    <span class="label-text">Plot</span>
                </label>
                <textarea bind:value={text} maxlength="500"  rows="4" cols="50" on:input={updateCharCount} name="summary"  id="summary" class="textarea textarea-bordered h-24" placeholder="Lens summary"></textarea>
                <div class="w-full flex justify-end pt-2"><p class="text-xs"><span>{charCount}</span> / {maxChars} characters</p></div>
            </div>
            
            <div class="modal-action">
            <!-- if there is a button in form, it will close the modal -->
            <button type="submit"  class="btn">Update</button>
            </div>
      </form>
    </dialog> 
    
    
    <div class="w-full h-max min-h-full px-8 pt-16 lg:px-20 lg:pt-8" bind:this={element}/>
    

        {#if editor}
            <div class="navbar fixed lg:sticky bottom-0 w-full lg:w-[70%] mx-auto px-4 flex justify-between rounded-lg bg-base-200 min-h-[1rem] h-[4rem]">
                <button
                    on:click={() => editor?.chain().focus().undo().run()}
                    disabled={!editor.can().chain().focus().undo().run()}
                    class={editor.isActive("undo") ? "is-active text-accent" : "btn"}
                  >
                    <Undo />
                </button>
                <button
                    on:click={() => editor?.chain().focus().toggleBold().run()}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                    class={editor.isActive("bold") ? "is-active text-accent" : "btn"}
                >
                    <Bold />
                </button>
                <button
                  on:click={() => editor?.chain().focus().toggleItalic().run()}
                  disabled={!editor.can().chain().focus().toggleItalic().run()}
                  class={editor.isActive("italic") ? "is-active text-accent" : "btn"}
                >
                  <Italic/>
                </button>
                <button
                  on:click={() => editor?.chain().focus().toggleBlockquote().run()}
                  class={ editor.isActive("blockquote") ? "is-active text-accent" : "btn"}
                >
                  <TextQuote />
                </button>
                <button
                  class={editor.isActive("redo") ? "is-active text-accent" : "btn"}
                  on:click={() => editor?.chain().focus().redo().run()}
                  disabled={!editor.can().chain().focus().redo().run()}
                >
                  <Redo />
                </button>
                <div class="space-x-3 hidden lg:flex">
                  <div class="tooltip" data-tip="Edit book details">
                    <button on:click={openModal} class="btn btn-outline"><PencilIcon /></button>
                  </div>
                  <button on:click={() => handleDraft(true)} class="btn btn-outline">Draft</button>
                  <button on:click={handlePublish} class="btn btn-accent">Publish</button>
                </div>
                <!-- Other buttons with similar structure -->
            </div>
        {/if}
</div>

