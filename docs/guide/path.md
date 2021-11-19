

 <script setup>
  import { useData } from 'vitepress'
  const { page } = useData()
  import CustomComponent from '../../src/components/dynamicHead'
</script>

<pre>{{ page }}</pre>


 {{ 1 + 1 }}

 <span v-for="i in 3">{{ i }} </span>


::: v-pre
`{{ This will be displayed as-is }}`
:::
