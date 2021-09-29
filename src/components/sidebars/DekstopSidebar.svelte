<script lang="ts">
  import { createEventDispatcher } from "svelte";
  
  import type { IMenu } from "../../global";
  import { horizontalSlide } from "../../lib/transition";
  import Icon from "../Icon.svelte";

  export let isShow = true;
  export let title = "Pdam App";
  export let menus: IMenu[] = [];

  const dispatch = createEventDispatcher();
</script>
{#if isShow}
  <!-- Static sidebar for desktop -->
  <div transition:horizontalSlide class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64">
      
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-gray-100">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <span class="font-bold text-lg text-indigo-600">{title}</span>
          </div>
          <nav class="mt-5 flex-1" aria-label="Sidebar">
            <div class="px-2 space-y-1">
              {#each menus as menu (menu.code)}
                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
                <a
                  href="#efn"
                  on:click|preventDefault="{() => dispatch('navigate', menu.code)}"
                  class="{false ? 'bg-gray-200 text-gray-900' :"text-gray-600 hover:bg-gray-50 hover:text-gray-900"} group menu"
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
          <a href="#efn" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  Whitney Francis
                </p>
                <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                  View profile
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .menu {
    @apply flex items-center px-2 py-2 text-base font-medium rounded-md;
  }
</style>