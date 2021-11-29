const colorBtn = document.querySelector("#color")
const placeBtn =  document.querySelector("#place")
const ritualBtn = document.querySelector("#ritual")

const colorFunc = () =>{
    alert("blue")
}
const placeFunc = () =>{
    alert("utah")
}
const ritualFunc = () =>{
    alert("macarena")
}


colorBtn.addEventListener("click", colorFunc)
placeBtn.addEventListener("click", placeFunc)
ritualBtn.addEventListener("click", ritualFunc)