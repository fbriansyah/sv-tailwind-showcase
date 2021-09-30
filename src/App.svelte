<script lang="ts">
  import LayoutVariant2 from "./layouts/LayoutVariant2.svelte";
  import ProfilePage from "./pages/profile-page.svelte";
  import displayStore from "./stores/display";

	export let name: string;
</script>

<LayoutVariant2>
  
    {#if $displayStore.type === "profile"}
      <ProfilePage />
    {:else}
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
        <h1>Hello {name}!</h1>
        <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
      </div>
    {/if}
	
</LayoutVariant2>

<style lang="postcss" global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
</style>