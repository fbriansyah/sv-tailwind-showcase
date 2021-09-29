<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { slide } from 'svelte/transition';
  import { cubicIn } from 'svelte/easing';

  import type { IMenu } from "../../global";
  import Icon from "../Icon.svelte";

  import menuStore from "../../stores/menu";
  import { checkInclude } from "../../lib/utils";

  export let menu: IMenu;

  const dispatch = createEventDispatcher();

  $: isActive = checkInclude($menuStore.code, menu.code);
  $: isShowChildren = true; // checkInclude($menuStore.code, menu.code);

  const onParentClick = () => {
    if (menu.children && menu.children.length > 0) {
      isShowChildren = !isShowChildren;
    } else {
      onNavigate({ code: menu.code, name: menu.name, icon: menu.icon });
    }
  };

  const onNavigate = (_menu: IMenu) => {
    dispatch("navigate", {
      code: _menu.code,
      name: _menu.name,
      icon: _menu.icon,
    });
  };
</script>

<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
<div
  transition:slide|local={{duration: 300, easing: cubicIn}}
  on:click={() => onParentClick()}
  class="{isActive
    ? 'bg-indigo-100 text-indigo-900'
    : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-900'} group menu"
>
  <Icon
    name={menu.icon}
    className="text-lg mr-2 w-4 h-4 {isActive
      ? 'text-indigo-700'
      : 'text-gray-300 group-hover:text-indigo-700'} "
  />
  <span class="mr-auto">{menu.name}</span>
  {#if menu.children && menu.children.length > 0}
    <Icon
      name={isShowChildren ? "caret-down" : "caret-right"}
      className="text-lg mr-2 w-4 h-4 text-gray-600 "
    />
  {/if}
</div>
{#if menu.children && menu.children.length > 0 && isShowChildren}
  <ul transition:slide|local={{duration: 300, easing: cubicIn}} class="pl-4">
    {#each menu.children as child, i (child.code + i)}
      <li
        on:click={() => onNavigate({ ...child })}
        class="text-lg child group {$menuStore.code === child.code
          ? 'text-indigo-700 border-l-2 border-indigo-500'
          : 'text-gray-600 group-hover:text-indigo-700 border-l-2 border-gray-400'} mt-1"
      >
        <Icon
          name={child.icon}
          className="{$menuStore.code === child.code
            ? 'text-indigo-700'
            : 'text-gray-300 group-hover:text-indigo-700'} text-sm mr-2 w-4 h-4"
        />
        <span class="text-sm">{child.name}</span>
      </li>
    {/each}
  </ul>
{/if}

<style lang="postcss">
  .menu {
    @apply flex items-center px-4 py-2 text-base font-medium rounded-md cursor-pointer;
  }
  .child {
    @apply flex items-center px-2 py-1 cursor-pointer font-medium;
  }
</style>
