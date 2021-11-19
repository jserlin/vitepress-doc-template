<template>
  <div>
    <xl-button>默认按钮</xl-button>
    <xl-button type="primary">主要按钮</xl-button>
    <xl-button type="success">成功按钮</xl-button>
    <xl-button type="info">信息按钮</xl-button>
    <xl-button type="warning">警告按钮</xl-button>
    <xl-button type="danger">危险按钮</xl-button>
    <p @click="handleClick"> <xl-button>加</xl-button>  num : {{num}}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num: 2
      }
    },
    methods: {
      handleClick() {
        this.num =  this.num + 1
      }
    }
  }
  // setup 写法
  // import { ref, getCurrentInstance } from 'vue'
  // let num = ref(1)
  // const instance = getCurrentInstance()
  // const handleClick = () => { 
    
  // console.log(`>_< ~ file: buttonDemo.vue ~ line 15 ~ instance`, num)
  //   num.value = 233
    
  // console.log(`>_< ~ file: buttonDemo.vue ~ line 15 ~ num`, num)
  //   instance.appContext.config.globalProperties.$message.success(num.value)
  // }
</script>
