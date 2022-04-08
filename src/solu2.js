const { ref, computed } = require('@vue/reactivity')

// const deps = reactive({
//     a: 2,
//     b: 3
// })

const a = ref(2)
const b = ref(3)

const sumFn = () => a.value + b.value

const result = computed(sumFn)

console.info('[before] result =', result.value)

b.value = 4

console.info('[after] result =', result.value)