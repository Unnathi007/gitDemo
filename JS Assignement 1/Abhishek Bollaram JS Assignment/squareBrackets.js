const show = {
    name : 'GoT',
    seasons : 8,
    watch : () => {}
}

const inputVal = 'seasons'
console.log(show[inputVal])
const inputVal2 = 'name'
console.log(show[inputVal2])

show[inputVal.value] = 7
console.log(show[inputVal.value])
console.log(show.seasons)
console.log(show)