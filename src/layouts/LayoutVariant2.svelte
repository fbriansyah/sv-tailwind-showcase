<script lang="ts">
  import SidebarMobile from "../components/variant2/SidebarMobile.svelte";
  import DesktopSidebar from "../components/variant2/DesktopSidebar.svelte";
  import Profile from "../components/variant2/Profile.svelte";
  import TopNav from "../components/variant2/TopNav.svelte";
  import { menus } from "../data/menus";
  import type { IMenu } from "../global";
  import menuStore from '../stores/menu';
  import topnavStore from "../stores/topnav";
  import PageTitle from "../components/PageTitle.svelte";
  import menuHistory from "../stores/menuHistory";

  let isMenuDesktopShow = true;
  let isMenuMobileShow = false;

  const onToggleSidebar = (mode: "desktop" | "mobile") => {
    if(mode === 'desktop') {
      isMenuDesktopShow = !isMenuDesktopShow;
    } else if(mode === 'mobile') {
      isMenuMobileShow = !isMenuMobileShow;
    }
  }

  const navigate = (menu: IMenu) => {
    menuHistory.selectMenu($menuStore);
    menuStore.selectMenu(menu);
  }

  const onNavigate = (e:CustomEvent) => {
    const menu: IMenu = e.detail;
    navigate(menu);
    topnavStore.add(menu);
  }

  const onTopNavigate = (e: CustomEvent) => {
    const menu: IMenu = e.detail;
    navigate(menu);
  }

</script>

<div class="h-screen flex overflow-hidden bg-gray-100">
  <SidebarMobile isShow={isMenuMobileShow} {menus} on:close={() => isMenuMobileShow = false} on:navigate={onNavigate} />
  <DesktopSidebar isShow={isMenuDesktopShow} {menus} on:navigate={onNavigate} />
  
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <div class="relative z-10 flex-shrink-0 flex justify-between h-12 bg-white shadow">
      
      <button on:click="{() => onToggleSidebar("mobile")}" type="button" class="px-4 border-r mr-auto border-gray-200 text-gray-500 md:hidden">
        <span class="sr-only">Open sidebar mobile</span>
        <!-- Heroicon name: outline/menu-alt-2 -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>

      <div class="flex-1 px-4 flex justify-between items-center ml-auto md:ml-0">
        <button on:click="{() => onToggleSidebar("desktop")}" type="button" class="hidden md:block px-4 text-gray-500">
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu-alt-2 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div class="w-10 h-10 mr-auto"></div>

        <!-- <span class="mr-auto text-lg font-semibold text-gray-800">{$menuStore.name}</span> -->

        <div class="ml-4 flex items-center md:ml-6">
          <button type="button" class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <Profile />
        </div>
      </div>
    </div>

    <main class="flex-1 relative overflow-y-auto focus:outline-none">
      
      <div class="2xl:px-6 mx-auto sm:px-4 bg-white">
        <TopNav on:navigate={onTopNavigate} />
      </div>

      <div class="py-1">
        <div class="2xl:px-6 mx-auto sm:px-4 my-2">
          <!-- <h1 class="text-2xl font-semibold text-gray-900">{$menuStore.name}</h1> -->
          <PageTitle title={$menuStore.name} breadcrumbs={$menuStore.code.split("/")} />
        </div>
        <div class="2xl:px-6 mx-auto sm:px-4">
          <!-- Replace with your content -->
          <div class="py-2">
            <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <slot />
            </div>
          </div>
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</div>
