import { writable } from 'svelte/store';
import { menus } from '../data/menus';
import type { IMenu } from '../global';
import displayStore from './display';

function createFn() {
  const {subscribe, set} = writable(menus[0]);

  const selectMenu = (menu: IMenu) => {
    set(menu);
    displayStore.selectMenu({target: "page", type: "page"})
  }

  return {
    subscribe,
    selectMenu
  }
}

export default createFn()