


let nameInput =document.querySelector(".cardname")
let numberInput =document.querySelector(".cardInput")
let numberText =document.querySelector(".card-number")
let form =document.querySelector("form")
let nameText = document.querySelector(".name")
const ERROR_MESSAGE = document.querySelector(".firstErrorText")
const SECOND_ERROR = document.querySelector(".secondErrorText")
let circleText = document.querySelector(".circle")



form.addEventListener("click",(e)=>{
    e.preventDefault()
    
    
})

new Cleave('.cardInput',{
    creditCard:true,

})
nameInput.addEventListener("click",(e)=>{
    let valueText = e.target.value
    
    if(valueText === ""){
        ERROR_MESSAGE.innerHTML = "Don't blank this area..."
    }else{
        ERROR_MESSAGE.innerHTML=""
        nameText.innerHTML = valueText.toUpperCase()
        circleText.innerHTML = valueText.charAt(0).toUpperCase()
        return 
    }
})
numberInput.addEventListener("click",(e)=>{
    let numberValueText = e.target.value
    console.log(numberValueText.at(0))
    if(numberValueText ==''){
        SECOND_ERROR.innerHTML = "Don't blank this area..."
    }else{
        SECOND_ERROR.innerHTML = ""
        numberText.innerHTML = numberValueText
        return
    }
    
})


