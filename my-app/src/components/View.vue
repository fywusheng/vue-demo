<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h1>{{ this.$route.params.username }}</h1>
        <button type="button" @click="goBack">返回</button>
        <router-link to="/view">./</router-link>
        <!-- <router-view class="view one"></router-view> -->
        <router-view class="view two" name="a">1</router-view>
        <router-view class="view three" name="b">1</router-view>
    </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'This  is View Page'
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
