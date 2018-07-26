<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h1>{{ username }}</h1>
        <button type="button" @click="goBack">返回</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'This  is Foo Page'
    }
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
<style scoped>
h1 {
    margin: 0;
}
</style>
