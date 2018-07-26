<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h1>{{ username }}</h1>
        <router-link to="/foo/马云">Go to Foo</router-link>
        <router-link to="/bar/马化腾">Go to Bar</router-link>
        <button @click="toPage">编程调往Foo</button>
        <button @click="toPage">编程调往Bar</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'This is Todo Page'
    }
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    toPage () {
      let path = '/foo/' + this.msg
      this.$router.push({ path: path })
    }
  }
}
</script>
<style scoped>
h1 {
    margin: 0;
}
</style>
