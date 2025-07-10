import { defineStore } from 'pinia'
import type { IData } from '../types'

export const useDataStore = defineStore('data', {
  state: (): IData[] => [],
  getters: {},
  actions: {
    increment() {}
  }
})
