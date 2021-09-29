import { writable } from 'svelte/store';
import { menus } from '../data/menus';
import type { IMenu } from '../global';

function createFn() {
  const {subscribe, set} = writable(menus[0]);

  const selectMenu = (menu: IMenu) => set(menu);

  return {
    subscribe,
    selectMenu
  }
}

export default createFn()