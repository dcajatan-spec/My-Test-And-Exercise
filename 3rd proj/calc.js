let num1 = 8
let num2 = 2
document.getElementById("num1-el").innerText = num1
document.getElementById("num2-el").innerText = num2
function add() {
outcome = num1 + num2
document.getElementById("sum-el").innerText = outcome
console.log(outcome)
}
function sub() {
outcome = num1 - num2
document.getElementById("sum-el").innerText = outcome
console.log(outcome)
}
function mul() {
    outcome = num1 * num2
    document.getElementById("sum-el").innerText = outcome
    console.log(outcome)
}
function div() {
    outcome = num1 / num2
    document.getElementById("sum-el").innerText = outcome
    console.log(outcome)
}