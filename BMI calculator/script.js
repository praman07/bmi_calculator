const form = document.getElementById("bmiForm")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const result = document.getElementById("result")
const historyList = document.getElementById("history")
const resetBtn = document.getElementById("resetBtn")
const nameInput = document.getElementById("name")
const clearHistoryBtn = document.getElementById("clearHistory")
const metricBtn = document.getElementById("metricBtn")
const imperialBtn = document.getElementById("imperialBtn")

let metric = true

metricBtn.onclick = () => {
metric = true
metricBtn.classList.add("active")
imperialBtn.classList.remove("active")
height.placeholder="Height (cm)"
weight.placeholder="Weight (kg)"
}

imperialBtn.onclick = () => {
metric = false
imperialBtn.classList.add("active")
metricBtn.classList.remove("active")
height.placeholder="Height (ft)"
weight.placeholder="Weight (lbs)"
}

form.addEventListener("submit",(e)=>{

e.preventDefault()

let h = parseFloat(height.value)
let w = parseFloat(weight.value)
let name = nameInput.value || "Anonymous"

if(!h || !w || h<=0 || w<=0){
alert("Enter valid values")
return
}

if(!metric){
h = h * 30.48
w = w * 0.453592
}

h = h / 100

let bmi = (w / (h*h)).toFixed(2)

let category=""
let color=""

if(bmi < 18.5){
category="Underweight"
color="underweight"
}

else if(bmi < 25){
category="Normal"
color="normal"
}

else if(bmi < 30){
category="Overweight"
color="overweight"
}

else{
category="Obese"
color="obese"
}

result.className=color
result.innerHTML=`BMI: ${bmi} <br> ${category}`

saveHistory(name,bmi)

})

resetBtn.onclick=()=>{
form.reset()
result.innerHTML=""
}

function saveHistory(name,bmi){

let history=JSON.parse(localStorage.getItem("bmiHistory")) || []

history.push({name,bmi})

localStorage.setItem("bmiHistory",JSON.stringify(history))

renderHistory()
}

function renderHistory(){

historyList.innerHTML=""

let history=JSON.parse(localStorage.getItem("bmiHistory")) || []

history.forEach(item=>{
let li=document.createElement("li")
li.textContent=`${item.name} : BMI ${item.bmi}`
historyList.appendChild(li)
})

}
clearHistoryBtn.onclick = () => {

localStorage.removeItem("bmiHistory")

historyList.innerHTML = ""

}
renderHistory()