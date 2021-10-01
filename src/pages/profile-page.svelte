<script lang="ts">
  import type { TDisplayTarget } from "../global";

  import displayStore from "../stores/display";
  import UserProfile from "./profile/user-profile.svelte";
  import UserSetting from "./profile/user-setting.svelte";

  const navigate = (target :TDisplayTarget) => {
    displayStore.selectMenu({type: "profile", target})
  }

  const buttonActionHandler = (e :CustomEvent) => {
    const cmd: string = e.detail;

    if(cmd === "save") {
      // do something
    } else {
      // something else
    }
    displayStore.selectMenu({type: "page", target: "page"})
  }

</script>
<div class="max-w-screen-xl mx-auto pb-6 lg:pb-16">
    <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
        <aside class="py-6 lg:col-span-3">
          <nav class="space-y-1">
            <!-- Current: "", Default: "" -->
            <span 
              on:click="{() => navigate("profile")}" 
              class="{$displayStore.target === "profile" ? "bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700": "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"} group menu-item" aria-current="page">
              <!--
                Heroicon name: outline/user-circle

                Current: "text-indigo-500 group-hover:text-indigo-500", Default: "text-gray-400 group-hover:text-gray-500"
              -->
              <svg class="{$displayStore.target === "profile" ? "text-indigo-500 group-hover:text-indigo-500": "text-gray-400 group-hover:text-gray-500"} menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="truncate">
                Profile
              </span>
            </span>

            <span 
              on:click="{() => navigate("setting")}"
              class="{$displayStore.target === "setting" ? "bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700": "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"} group menu-item">
              <!-- Heroicon name: outline/cog -->
              <svg class="{$displayStore.target === "setting" ? "text-indigo-500 group-hover:text-indigo-500": "text-gray-400 group-hover:text-gray-500"} menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="truncate">
                Settings
              </span>
            </span>

            <span 
              class="{$displayStore.target === "password" ? "bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700": "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"} group menu-item">
              <!-- Heroicon name: outline/key -->
              <svg class="{$displayStore.target === "password" ? "text-indigo-500 group-hover:text-indigo-500": "text-gray-400 group-hover:text-gray-500"} menu-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
              <span class="truncate">
                Password
              </span>
            </span>
          </nav>
        </aside>
        {#if $displayStore.target === "setting"}
          <UserSetting on:click={buttonActionHandler} />
        {:else if $displayStore.target === "profile"}
          <UserProfile on:click={buttonActionHandler} />
        {/if}
      </div>
    </div>
  </div>

<style lang="postcss">
  .menu-item {
    @apply border-l-4 px-3 py-2 flex items-center text-sm font-medium cursor-pointer;
  }
  .menu-icon {
    @apply flex-shrink-0 -ml-1 mr-3 h-6 w-6;
  }
</style>  