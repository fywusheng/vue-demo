<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h1>{{ localComputed.username }}</h1>
        <button type="button" @click="goBack">返回</button>
        <hr>
         <h2> 全局store.count: {{ count }}</h2>
         <h2> 全局store.city: {{ city }}</h2>
         <button type="button" @click="add">+10</button>
         <button type="button" @click="reduce">-1</button>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      msg: '这是 vuex 练习页面'
    }
  },
  computed: {
    localComputed () {
      return {username: '一飞冲天'}
    },
    ...mapState({
      count: state => state.count,
      city: state => state.city,
      countPlusLocalState (state) {
        return state.count + this.city
      }
    }),
    ...mapGetters([
      'doneTodos'
    ])
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
    add () {
      // let data = {count: 10}
      // this.$store.commit('increment', data)
      this.$store.dispatch('increment', {count: 100})
    },
    reduce () {
      this.$store.commit('reduce')
    }
  },
  created () {
    console.log(this.$store.getters.doneTodos[0])
  }
}
</script>
<style scoped lang="scss">
$bag : black;
.demo {
  h1 {
    margin: 0;
    color: $bag;
    background: red;
  }
  button {
    outline: none;
    border: 1px solid greenyellow;
    background: greenyellow;
    padding: 6px 12px;
    margin: 15px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        color: red;
        background: rgb(71, 255, 47);
    }
  }
}
</style>
