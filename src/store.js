import { reactive } from 'vue'

export const store = reactive({
  status: false,
  login () {
    this.login++
  },
  logout () {
    this.login--
  }
})
