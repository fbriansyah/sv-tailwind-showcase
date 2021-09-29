<script lang="ts">
  import type { IMenu } from "../../global";
  import { checkInclude } from "../../lib/utils";
  import MenuItem from "./MenuItem.svelte";

  // props
  export let menus: IMenu[] = [];
  export let isShow: boolean = true;
  
  // state
  let filteredMenu : IMenu[] = [];
  let searchedMenu = '';

  // computed
  $: isSearchingMenu = searchedMenu !== '';
  $: if (searchedMenu !== '') {
    filteredMenu = []
    menus.forEach(menu => {
      if(menu.children && menu.children.length > 0) {
        // search in children
        const parentMenu: IMenu = {...menu, children: []}
        menu.children.forEach(child => {
          if(checkInclude(child.code, searchedMenu)) {
            const findIndex = filteredMenu.findIndex((m) => m.code === child.code) === -1;
            if (findIndex) {
              parentMenu.children.push(child)
              // filteredMenu = [...filteredMenu, child]
            }
          }
        })

        if(parentMenu.children && parentMenu.children.length > 0) {
          filteredMenu = [...filteredMenu, parentMenu]
        }
      } else {
        // search in parent
        if(checkInclude(menu.code, searchedMenu)) {
          const findIndex = filteredMenu.findIndex((m) => m.code === menu.code) === -1;
          if (findIndex) {
            filteredMenu = [...filteredMenu, menu]
          }
        }
      }
    })
  }
  // method
  

</script>
{#if isShow}
<!-- Static sidebar for desktop -->
<div class="hidden {isShow ? "md:flex": "md:hidden"} md:flex-shrink-0">
  <div class="flex flex-col w-64">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto"
    >
      <div class="flex items-center flex-shrink-0 px-4">
        <span class="text-lg font-bold"> App Name </span>
      </div>
      <div class="mt-5 flex-grow flex flex-col">
        <div class="px-2 mt-5">
          <label for="search" class="sr-only">Search</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              aria-hidden="true"
            >
              <!-- Heroicon name: solid/search -->
              <svg
                class="mr-3 h-4 w-4 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="search-menu"
              id="search-menu"
              bind:value="{searchedMenu}"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-9 sm:text-sm border-gray-300 rounded-md"
              placeholder="Cari menu"
            />
          </div>
        </div>
        <nav class="flex-1 px-2 bg-white space-y-1 mt-4">
          {#if isSearchingMenu}
            {#each filteredMenu as menu (menu.code)}
              <MenuItem {menu} on:navigate />
            {/each}
          {:else}
            {#each menus as menu (menu.code)}
              <MenuItem {menu} on:navigate />
            {/each}
          {/if}
        </nav>
      </div>
    </div>
  </div>
</div>
{/if}
<style lang="postcss">

</style>
