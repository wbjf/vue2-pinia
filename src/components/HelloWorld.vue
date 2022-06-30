<template>
  <div class="hello">
    {{name}}
  </div>
</template>

<script>
import userStore from '../store/user'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    const UserStore = userStore()
    this.name = UserStore.userName
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
