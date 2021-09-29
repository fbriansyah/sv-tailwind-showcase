<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  
  import type { IMenu } from "../../global";
  import Icon from "../Icon.svelte";

  export let isShow = false;
  export let title = "Pdam App";
  export let menus: IMenu[] = [];

  const dispatch = createEventDispatcher();
</script>

{#if isShow}
  <div
  transition:fade={{duration:300}}
    class="fixed inset-0 flex z-40 lg:hidden"
    role="dialog"
    aria-modal="true"
  >
    <div on:click={() => dispatch("close")} class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true" />

    <div
      
      class="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none"
    >
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button
          on:click={() => dispatch("close")}
          type="button"
          class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span class="sr-only">Close sidebar</span>
          <!-- Heroicon name: outline/x -->
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        <div class="flex-shrink-0 flex items-center px-4">
          <span>{title}</span>
        </div>
        <nav aria-label="Sidebar" class="mt-5">
          <div class="px-2 space-y-1">
            {#each menus as menu (menu.code)}
              <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
              <a
                href="#efn"
                on:click|preventDefault="{() => dispatch('navigate', menu)}"
                class="{false ? 'bg-gray-100 text-gray-900' :"text-gray-600 hover:bg-gray-50 hover:text-gray-900"} group menu"
              >
                  <!--
                  Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"
                -->
                <Icon name={menu.icon} className="text-lg mr-2 {false ? 'text-gray-500' :"text-gray-400 group-hover:text-gray-500"} " />
                {menu.name}
              </a>
            {/each}

            
          </div>
        </nav>
      </div>
      <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
        <a href="#efn" class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div>
              <img
                class="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div class="ml-3">
              <p
                class="text-base font-medium text-gray-700 group-hover:text-gray-900"
              >
                Whitney Francis
              </p>
              <p
                class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
              >
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="flex-shrink-0 w-14" aria-hidden="true">
      <!-- Force sidebar to shrink to fit close icon -->
    </div>
  </div>
{/if}

<style lang="postcss">
  .menu {
    @apply flex items-center px-2 py-2 text-base font-medium rounded-md;
  }
</style>