<template>
  <div>
    <h1>哈哈哈哈哈哈或</h1>
    <h2>{{ counter.count }}</h2>
    <h2>{{ counter.doubleCount }}</h2>
    <button @click="counter.increment">add</button>
  </div>
</template>

<script>
import { useCounterStore } from './stores'
export default {
  setup() {
    const counter = useCounterStore()
    console.log('123312312312============')

    return { counter }
  },
}
</script>

<style lang="scss" scoped></style>
