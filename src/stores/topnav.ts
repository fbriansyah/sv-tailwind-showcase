import { writable } from "svelte/store";
import type { IMenu } from "../global";

const defaultState: IMenu[] = [
  { code: "dashboard", name: "Dashboard", icon: "home" },
];

function createFn() {
  const { subscribe, update } = writable(defaultState);

  const remove = (index: number) => {
    update((state: IMenu[]) => {
      const removedMenu = { ...state[index] };

      return state.filter((menu) => menu.code !== removedMenu.code);
    });
  };

  const add = (menu: IMenu) => {
    update((state) => {
      const findIndex = state.findIndex((m) => m.code === menu.code) === -1;
      if (findIndex) {
        return [...state, menu];
      } else {
        return state;
      }
    });
  };

  return {
    subscribe,
    remove,
    add,
  };
}

export default createFn();
