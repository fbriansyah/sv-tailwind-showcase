<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const onClick = (cmd: string) => {
    dispatch('click', cmd)
  }
</script>

<div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
  <button on:click="{() => onClick("cancel")}" type="button" class="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Cancel
  </button>
  <button  on:click="{() => onClick("save")}" type="button" class="ml-5 bg-indigo-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
    Save
  </button>
</div>