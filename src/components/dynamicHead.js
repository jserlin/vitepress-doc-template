import { h } from 'vue'

const DynamicHead = (props, context) => {
  return h(`h${props.level}`, context.attrs, context.slots)
}
DynamicHead.props = ['level']

export default DynamicHead

// 2.x 函数式组件
// export const vue2Fn = () => {
//   functional: true,
//   props: ['level'],
//   render(h, {props, data, children}) {
//     return h(`h${props.level}`, data, children)
//   }
// }
