import { defineStore } from 'pinia'
import type { IData } from '../types'
import { generateRandomNumber } from '../utils'

interface IState {
  data: IData[]
  isError: boolean
}

const localStorageName = 'notesData'

export const useDataStore = defineStore('data', {
  state: (): IState => {
    if (localStorage.getItem(localStorageName) === null) {
      localStorage.setItem(localStorageName, JSON.stringify([]))
    }
    return {
      data: JSON.parse(localStorage.getItem(localStorageName) || '') as IData[],
      isError: false
    }
  },
  actions: {
    createNote() {
      this.data.push({
        id: generateRandomNumber(4),
        marks: [],
        type: 'local',
        login: '',
        password: ''
      })
      localStorage.setItem(localStorageName, JSON.stringify(this.data))
    },
    deleteNote(id: number) {
      this.data = this.data.filter(item => item.id !== id)
      localStorage.setItem(localStorageName, JSON.stringify(this.data))
    },
    updateNote(id: number, values: Omit<IData, 'id'>) {
      this.data[this.data.findIndex(item => item.id === id)] = { id, ...values }
      localStorage.setItem(localStorageName, JSON.stringify(this.data))
    },
    setErrorState(state: boolean) {
      this.isError = state
    }
  }
})
