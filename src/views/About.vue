<template>
  <div class="about">
    <h2><i>姓名：</i>{{userName}}</h2>
    <h2><i>手机号：</i>{{telPhone}}</h2>
    <button @click="changeUserName">修改姓名</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import userStore from '../store/user'

export default {
  computed: {
    ...mapState(userStore, ['userName', 'telPhone'])
  },
  methods: {
    ...mapActions(userStore, ['changeUserName'])
  }
}
</script>
