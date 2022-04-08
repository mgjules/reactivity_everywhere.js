const { reactive, readonly } = require('@vue/reactivity')

const state = reactive({
    count: 0
})

const increment = () => {
    state.count++
}

const decrement = () => {
    state.count--
}

module.exports = {
    state: readonly(state),
    increment,
    decrement
}
