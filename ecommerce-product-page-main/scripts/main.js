
const itemCount = document.getElementById('itemCount')
let count = 0
itemCount.innerHTML = count

function increment(e) {
    count = count + e
    itemCount.innerHTML = count
    return count
}

function decrement(e) {
    count = count + e
    itemCount.innerHTML = count
    // count--
    console.log(itemCount)
}
console.log(itemCount)