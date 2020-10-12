const {reactive, effect} = require('@vue/reactivity')

// reactive makes the provided object reactive. duh!
const power = reactive({
    level: 0
})

// effect tracks changes to its dependencies (i.e power.level)
effect(() => {
    console.info('level =', power.level)
})

// setInterval executes the provided (i.e arrow) function every 1s
setInterval(() => power.level++, 1000)