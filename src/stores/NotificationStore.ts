import { defineStore } from 'pinia'
import { generateRandomNumber } from '../utils'

interface IState {
  notifications: number[]
}

export const useNotificationStore = defineStore('notifications', {
  state: (): IState => {
    return {
      notifications: []
    }
  },
  actions: {
    pushNotification() {
      const id = generateRandomNumber(4)
      this.notifications.push(id)
    },
    deleteNotification(id: number) {
      this.notifications = this.notifications.filter(item => item !== id)
    }
  }
})
