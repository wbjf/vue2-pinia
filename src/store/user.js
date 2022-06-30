import { defineStore } from 'pinia'

const userStore = defineStore('store', {
    state: () => {
        return {
            userName: '李四',
            telPhone: '13112341234'
        }
    },
    actions: {
        changeUserName() {
            this.userName = `张三----${Math.random()}`
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'userName',
                storage: localStorage,
                paths: ['userName']
            }, {
                key: 'tel',
                storage: localStorage,
                paths: ['telPhone']
            }
        ]
    }
})

export default userStore