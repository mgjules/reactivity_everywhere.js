const { effect, computed } = require('@vue/reactivity')
const cliProgress = require('cli-progress')
const { state, increment, decrement } = require('./store')

const multibar = new cliProgress.MultiBar({
    format: ' {bar} {value} | {label}',
    clearOnComplete: false,
    hideCursor: true,
    stopOnComplete: true
}, cliProgress.Presets.rect);

const counter = multibar.create(100, 0, { label: 'Count' })

const message = computed(() => `The count is now at ${state.count}`)

effect(() => {
    counter.update(state.count, { label: message.value })
})

let reverse = false
setInterval(() => {
    if (reverse) {
        decrement()
        reverse = state.count >= 0
    } else {
        increment()
        reverse = state.count >= 99
    }
}, 10)