import { writable } from 'svelte/store';
import type { IDisplay } from '../global';

const initialState: IDisplay = {
  type: "page",
  target: "page"
}

function createFn() {
  const {subscribe, set} = writable(initialState);

  const selectMenu = (menu: IDisplay) => set(menu);

  return {
    subscribe,
    selectMenu
  }
}

export default createFn()