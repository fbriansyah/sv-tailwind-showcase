<script lang="ts">
import Icon from "./Icon.svelte";

  export let title = '';
  export let breadcrumbs: string[] = [];

</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white px-3 py-2 rounded-md shadow-sm">
  <div>
    <!-- <nav class="sm:hidden" aria-label="Back">
      <span class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
        
        <svg class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        Back
      </span>
    </nav> -->
    <nav class="flex" aria-label="Breadcrumb">
      <ol role="list" class="flex items-center space-x-4">
        <li>
          <div class="flex">
            <span class="capitalize text-sm font-medium text-gray-500 hover:text-gray-700">{breadcrumbs[0]}</span>
          </div>
        </li>
        {#if breadcrumbs.length > 1}
        <li>
          <div class="flex items-center">
            <!-- Heroicon name: solid/chevron-right -->
            <svg class="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
            <span class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{title}</span>
          </div>
        </li>
        {/if}
      </ol>
    </nav>
  </div>
  <div class="mt-1 md:flex md:items-center md:justify-between">
    <div class="flex-1 min-w-0">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        {title}
      </h2>
    </div>
    <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4 space-x-3 items-center">
      <div class=" cursor-pointer">
        <Icon name="file-excel" className="text-2xl text-green-600" />
      </div>
      <div class=" cursor-pointer">
        <Icon name="print" className="text-2xl text-gray-600" />
      </div>
      <button type="button" class="inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
        <Icon name="plus-circle" className="text-2xl text-white mr-2" />
        Add
      </button>
    </div>
  </div>
</div>
