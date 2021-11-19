## 基础用法

基础的按钮用法。

:::demo 自定义组件

```vue
<template>
  <xl-button>默认按钮</xl-button>
  <xl-button type="primary">主要按钮</xl-button>
  <xl-button type="success">成功按钮</xl-button>
  <xl-button type="info">信息按钮</xl-button>
  <xl-button type="warning">警告按钮</xl-button>
  <xl-button type="danger">危险按钮</xl-button>
</template>
```

:::
## 第三方组件库引入
:::demo 第三方组件库引入

```vue
<template>
  <div class="card-wrap">
    <div class="card">{{ title }}</div>
    <el-button type="primary" @click="onClick">点击</el-button>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'

const title = ref('屠龙宝刀 点击就送')

const instance = getCurrentInstance()

const onClick = () => {
  instance.appContext.config.globalProperties.$message.success(title.value)
}
</script>
```

:::


## 组件引入

:::demo 组件实例
``` vue
<ButtonDemo></ButtonDemo>
```
:::

