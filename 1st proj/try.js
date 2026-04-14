const countEl = document.getElementById("count-el")
const buttonEl = document.getElementById("button-el")
let count = 0
buttonEl.addEventListener("click", function() {
    count++
    countEl.textContent = count
})
