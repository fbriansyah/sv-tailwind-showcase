/// <reference types="svelte" />
export interface IMenu {
  code: string
  name: string
  icon?: string
  children?: IMenu[]
}

export type TDisplayTarget = "profile" | "setting" | "password" | "page";

export interface IDisplay {
  type: "profile" | "page";
  target: TDisplayTarget;
}