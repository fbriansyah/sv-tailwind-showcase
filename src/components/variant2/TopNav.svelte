<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import type { IMenu } from "../../global";
  import topnavStore from "../../stores/topnav";
  import menuStore from "../../stores/menu";
  import Icon from "../Icon.svelte";

  const dispatch = createEventDispatcher();

  $: menus = $topnavStore

  function onClose(index: number) {
    const lastMenuIndex = index-1 <= 0 ? 0 : index-1;
    const lastMenu = $topnavStore[lastMenuIndex];
    menuStore.selectMenu(lastMenu);
    topnavStore.remove(index)
  }

  function onNavigate(menu: IMenu) {
    dispatch('navigate', menu);
  }
</script>
<div class="w-full px-2">
  <nav class="flex space-x-4 overflow-x-auto py-2" aria-label="Tabs">
    <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" -->
    {#each menus as menu, i (menu.code)}
      <div class="top-menu-item {menu.code === $menuStore.code ? 'bg-indigo-100 text-indigo-700': 'bg-gray-100 text-gray-500 hover:text-gray-700'}">
        <span on:click="{() => onNavigate(menu)}">
          {menu.name}
        </span>
        {#if i !== 0}
          <Icon
            on:click={ () => onClose(i) }
            name="times"
            className=" text-gray-700 text-sm ml-1 w-4 h-4"
          />
        {/if}
      </div>
    {/each}
  </nav>
</div>

<style lang="postcss">
  .top-menu-item {
    @apply px-3 py-2 font-normal rounded-md cursor-pointer flex-shrink-0;
  }
</style>