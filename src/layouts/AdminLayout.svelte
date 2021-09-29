<script lang="ts">
  import DekstopSidebar from "../components/sidebars/DekstopSidebar.svelte";
  import MobileSidebar from "../components/sidebars/MobileSidebar.svelte";
  
  import { menus } from "../data/menus";

  let mobileSidebar = false;
  let desktopSidebar = true;
  let activeMenu = 'dashboard';

  const onNavigate = (e: CustomEvent) => {
    activeMenu = e.detail;
  }

</script>
<!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden bg-white">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <MobileSidebar menus={menus} isShow={mobileSidebar} on:close={() => mobileSidebar = false} />

  <DekstopSidebar menus={menus} isShow={desktopSidebar} on:navigate={onNavigate}/>
  <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
    <div class="">
      <div class="flex items-center bg-gray-50 border-b border-gray-200 px-4 py-1.5">
        <div>
          <button on:click="{() => mobileSidebar = !mobileSidebar}" type="button" class="-ml-3 h-12 w-12 inline-flex items-center lg:hidden justify-center rounded-md text-gray-500 hover:text-gray-900">
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button on:click="{() => desktopSidebar = !desktopSidebar}" type="button" class="hidden lg:inline-flex -ml-3 h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
            <span class="sr-only">Open sidebar</span>
            <!-- Heroicon name: outline/menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div>
          Dashboard
        </div>
      </div>
    </div>
    <div class="flex-1 relative z-0 flex overflow-hidden">
      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
        <!-- Start main area-->
        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div class="h-full border-2 border-gray-200 border-dashed rounded-lg">
            <slot/>
          </div>
        </div>
        <!-- End main area -->
      </main>
      <aside class="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 border-l border-gray-200">
        <!-- Start secondary column (hidden on smaller screens) -->
        <div class="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
          <div class="h-full border-2 border-gray-200 border-dashed rounded-lg"></div>
        </div>
        <!-- End secondary column -->
      </aside>
    </div>
  </div>
</div>
