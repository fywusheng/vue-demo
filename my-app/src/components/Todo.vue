<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>
<style scoped>
h1 {
    margin: 0;
}
</style>
