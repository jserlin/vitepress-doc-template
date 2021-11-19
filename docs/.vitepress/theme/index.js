import 'vitepress-theme-demoblock/theme/styles/index.css'
import 'element-plus/dist/index.css'
import '../../../src/styles/index.less'

import Button from '../../../src/components/Button.vue'
import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import dynamicHead from '../../../src/components/dynamicHead'
import { registerComponents } from './register-components.js'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    registerComponents(app)
    app.use(ElementPlus)
    app.component('customHead', dynamicHead)
    app.component(Button.name, Button)
    // app.component('VueClickAwayExample', VueClickAwayExample)
  }
}