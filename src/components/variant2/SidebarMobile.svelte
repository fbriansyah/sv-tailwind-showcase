<script lang="ts">
  import type { IMenu } from "../../global";
  import { fade } from 'svelte/transition';
  import { createEventDispatcher } from "svelte";
  
  import MenuItem from "./MenuItem.svelte";
  import { checkInclude } from "../../lib/utils";

  export let menus: IMenu[] = [];
  export let isShow: boolean;// state
  
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

  const dispatch = createEventDispatcher()

  const onClose = () => dispatch('close')
</script>
{#if isShow}
<!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
<div transition:fade class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
  
  <div on:click="{onClose}" class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

  <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
    <div class="absolute top-0 right-0 -mr-12 pt-2">
      <button on:click="{onClose}" type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span class="sr-only">Close sidebar</span>
        <!-- Heroicon name: outline/x -->
        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div class="flex-shrink-0 flex items-center px-4">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
    </div>
    <div class="mt-5 flex-1 h-0 overflow-y-auto">
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
      <nav class="px-2 space-y-1 mt-2">
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

  <div class="flex-shrink-0 w-14" aria-hidden="true">
    <!-- Dummy element to force sidebar to shrink to fit close icon -->
  </div>
</div>
{/if}
<style lang="postcss">
 
</style>