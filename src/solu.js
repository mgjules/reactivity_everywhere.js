const { reactive, effect } = require('@vue/reactivity')

// reactive makes the provided object reactive.
// i.e `a` and `b` are now reactive
const deps = reactive({
    a: 2,
    b: 3
})

// effect tracks the value of `a` and `b` and 
// re-executes the addition when either of them changes
let result;
effect(() => {
    result = deps.a + deps.b
})

console.info('[before] result =', result)

deps.b = 4

console.info('[after] result =', result)