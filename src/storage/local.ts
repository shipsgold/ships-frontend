/* eslint-disable class-methods-use-this */
import { Store } from "./store"

export class LocalStore implements Store{
  put(key: string, data: string): void{
    localStorage.setItem(key, data)
  }

  get(key: string):null | string{
    return localStorage.getItem(key) as string
  }
}

export const localStore = new LocalStore()