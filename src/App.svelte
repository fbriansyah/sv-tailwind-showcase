<script lang="ts">
  // import AdminLayout from "./layouts/AdminLayout.svelte";
  import LayoutVariant2 from "./layouts/LayoutVariant2.svelte";
  // import ThreeColumnLayout from "./layouts/ThreeColumnLayout.svelte";

	export let name: string;
</script>

<LayoutVariant2>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</LayoutVariant2>

<style lang="postcss" global>
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
</style>