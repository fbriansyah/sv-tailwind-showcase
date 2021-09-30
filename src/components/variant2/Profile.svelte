<script lang="ts">
  import type { TDisplayTarget } from "../../global";
  import displayStore from "../../stores/display";


  let isShow = false;

  const onClick = () => {
    isShow = !isShow;
  }

  const onNavigate = (menu: TDisplayTarget) => {
    displayStore.selectMenu({target: menu, type: "profile"})
  }
</script>
<div class="ml-3 relative" on:mouseenter="{() => isShow = true}" on:mouseleave="{() => isShow = false}">
  <div >
    <button on:click="{onClick}" type="button" class="" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <span class="sr-only">Open user menu</span>
      <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
    </button>
  </div>
  {#if isShow}
  <div class:active={isShow} class="profile-menu focus:outline-none transform opacity-0 scale-95" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
    <!-- Active: "bg-gray-100", Not Active: "" -->
    <span on:click="{() => {onNavigate("profile")}}" class="menu-item hover:bg-indigo-400"tabindex="-1">Your Profile</span>

    <span on:click="{() => {onNavigate("profile")}}" class="menu-item hover:bg-indigo-400"tabindex="-1">Settings</span>

    <span on:click="{() => {onNavigate("profile")}}" class="menu-item hover:bg-indigo-400"tabindex="-1">Sign out</span>
  </div>
  {/if}
</div>

<style lang="postcss">
  .profile-menu {
    @apply origin-top-right absolute right-0 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 transition ease-out duration-100;
  }
  .menu-item {
    @apply block px-4 py-2 text-sm text-gray-700 cursor-pointer;
  }
  .active {
    @apply transform opacity-100 scale-100;
  }
  button {
    @apply max-w-xs bg-white flex items-center text-sm rounded-full;
  }
</style>