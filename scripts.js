



const ERROR_MESSAGE = document.querySelector(".firstErrorText")
const SECOND_ERROR = document.querySelector(".secondErrorText")

let nameInput =document.querySelector(".cardname")
let numberInput =document.querySelector(".cardInput")
let numberText =document.querySelector(".card-number")
let form =document.querySelector("form")
let nameText = document.querySelector(".name")
let circleText = document.querySelector(".circle")
let monthInput = document.querySelector(".a")
let yearInput = document.querySelector(".b")
let cvcInput = document.querySelector(".c")
let backNumber = document.querySelector(".back-number")
let monthError = document.querySelector(".monthYearError")
let cvcError = document.querySelector(".cvcError")
let button = document.querySelector("button")




form.addEventListener("click",(e)=>{
    e.preventDefault()
    
    
})
new Cleave('.a',{
    creditCard:true,
})

new Cleave('.cardInput',{
    creditCard:true,

})





button.addEventListener("click",(e)=>{
    console.log(e)
    e.preventDefault()
    
    let valueText = nameInput.value
    let cvc = cvcInput.value
    let numberValueText = numberInput.value
    
    if((!valueText && !cvc) || !numberText ){
        ERROR_MESSAGE.innerHTML = "Don't blank this area!"
        cvcError.innerText = "Don't blank this area!"
        SECOND_ERROR.innerHTML = "Don't blank this area!"
    }

    // if(valueText === ""){
    //     ERROR_MESSAGE.innerHTML = "Don't blank this area!"
    // }else{
    //     ERROR_MESSAGE.innerHTML= ""
    //     nameText.innerHTML = valueText.toUpperCase()
    //     circleText.innerHTML = valueText.charAt(0).toUpperCase()
    //     circleText.style.background = "linear-gradient(hsla(278, 73%, 31%, 0.8),hsl(327, 60%, 52%))"
    //     return 
    // }

    // // for CVC input
    
    // if(cvc == ''){
    //     cvcError.innerText = "Don't blank this area!"
    // }else{
    //     cvcError.innerText = ""
    //      backNumber.innerHTML
    // }

    // // for Card-Number Input

    
    
    // if(numberValueText ==''){
    //     SECOND_ERROR.innerHTML = "Don't blank this area!"
    // }else{
    //     SECOND_ERROR.innerHTML = ""
    //     numberText.style.opacity ="1"
    //     numberText.innerHTML = numberValueText
    //     return
    // }

})