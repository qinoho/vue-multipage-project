<template>
  <div>
    <div ref="echartRef" id="echart"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const echartRef = ref(null)
let myChart = null
// 初始化echarts实例
onMounted(() => {
  myChart = echarts.init(echartRef.value)
  myChart.setOption(option)
})
const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b}: {c} ({d}%)',
  },
  legend: {},
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['45%', '60%'],
      labelLine: {
        length: 30,
      },
      label: {
        formatter: '{d}% ',
      },
      data: [
        { value: 1048, name: 'aaa' },
        { value: 335, name: 'bbb' },
        { value: 310, name: 'ccc' },
      ],
    },
  ],
}
</script>

<style scoped>
#echart {
  width: 500px;
  height: 500px;
}
</style>
