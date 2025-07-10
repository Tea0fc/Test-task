import { defineStore } from 'pinia'
import type { IData } from '../types'
import { generateRandomNumber } from '../utils'

interface IState {
  data: IData[]
}

export const useDataStore = defineStore('data', {
  state: (): IState => {
    return {
      data: [
        {
          id: 1111,
          marks: [{ text: 'fafe' }],
          type: 'local',
          login: 'wfew',
          password: 'fwefw'
        }
      ]
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
    },
    deleteNote(id: number) {
      this.data = this.data.filter(item => item.id !== id)
    },
    updateNote(id: number, values: Omit<IData, 'id'>) {
      this.deleteNote(id)
      this.data.push({ id, ...values })
    }
  }
})
