/// <reference types="svelte" />
export interface IMenu {
  code: string
  name: string
  icon?: string
  children?: IMenu[]
}