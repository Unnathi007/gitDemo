const show = {
    name : 'GoT',
    seasons : 8,
    watch() {console.log(this)}
}

show.watch()
const show1 = show.watch.bind(show)
show1()
