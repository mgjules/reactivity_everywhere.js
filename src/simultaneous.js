/*
    NOT THE BEST EXAMPLE :(
    BUT IT WAS FUN TO MAKE :D
*/

const cliProgress = require('cli-progress')
const { reactive, effect } = require('@vue/reactivity')

const multibar = new cliProgress.MultiBar({
    format: ' {bar} {value} | {label}',
    clearOnComplete: false,
    hideCursor: true,
    stopOnComplete: true

}, cliProgress.Presets.rect);

const bar = {
    goku: multibar.create(10000, 0, { label: 'Goku' }),
    vegeta: multibar.create(10000, 0, { label: 'Vegeta' }),
    krillin: multibar.create(10000, 0, { label: 'Krillin' }),
}

const power = reactive({
    goku: 40,
    vegeta: 40,
    krillin: 40
})

// update kakakarot's power bar
effect(() => {
    bar.goku.update(power.goku)

    if (power.goku > 5000) {
        bar.goku.update({ label: "Goku: 😆" })
    } else if (power.goku > 3000) {
        bar.goku.update({ label: "Goku: 😅" })
    } else if (power.goku > 2000) {
        bar.goku.update({ label: "Goku: 😄" })
    } else if (power.goku > 1000) {
        bar.goku.update({ label: "Goku: 🙂" })
    }
})

// update vegeta's power bar
effect(() => {
    bar.vegeta.update(power.vegeta)

    if (power.goku > 9000) {
        bar.vegeta.update({ label: "Vegeta: It's over 9000!!!! 🤬🤬🤬🤬" })
    } else if (power.goku > 7000) {
        bar.vegeta.update({ label: 'Vegeta: 😡' })
    } else if (power.goku > 5000) {
        bar.vegeta.update({ label: 'Vegeta: 😠' })
    } else if (power.goku > 3000) {
        bar.vegeta.update({ label: 'Vegeta: 😫' })
    } else if (power.goku > 1500) {
        bar.vegeta.update({ label: 'Vegeta: 😤' })
    }
})

// update krillin's power bar
effect(() => {
    bar.krillin.update(power.krillin)

    if (power.goku > 7000) {
        bar.krillin.update({ label: 'Krillin: 🤯' })
    } else if (power.goku > 500) {
        bar.krillin.update({ label: 'Krillin: 😮' })
    }
})

// goku is too powerful!!!
effect(() => {
    if (power.goku >= 10000) {
        multibar.stop()
        process.exit(0)
    }
})

setInterval(() => power.goku++, 2)

setInterval(() => power.vegeta++, 4)

setInterval(() => power.krillin++, 20)