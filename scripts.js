// Show error message  variable
const ERROR_MESSAGE = document.querySelector(".firstErrorText")
const SECOND_ERROR = document.querySelector(".secondErrorText")
let monthError = document.querySelector(".monthYearError")
let cvcError = document.querySelector(".cvcError")

//Input variable
let nameInput =document.querySelector(".cardname")
let numberInput =document.querySelector(".cardInput")
let numberText =document.querySelector(".card-number")
let monthInput = document.querySelector(".a")


//selected From html variable
let form =document.querySelector("form")
let nameText = document.querySelector(".name")
let circleText = document.querySelector(".circle")
let circleColor = document.querySelector(".circle1")
let yearInput = document.querySelector(".b")
let cvcInput = document.querySelector(".c")
let showMonthText = document.querySelector(".M")
let showYearText = document.querySelector(".Y")

//text in card variable
let backNumber = document.querySelector(".back-number")


//button
let button = document.querySelector("button")




form.addEventListener("click",(e)=>{
    e.preventDefault()
})

//card number input format 
new Cleave('.cardInput',{
    creditCard:true,

})

new Cleave(".a",{
    date: true,
    datePattern: ['Y', 'm', 'd'],
})
new Cleave(".b",{
    date: true,
    datePattern: ['Y']
})
new Cleave(".c",{
    date: true,
    datePattern: ['Y', 'm', 'd'],
})
//click 
button.addEventListener("click",(e)=>{
    console.log(e)
    e.preventDefault()
    
    let valueText = nameInput.value
    let cvc = cvcInput.value
    let numberValueText = numberInput.value
    let monthText = monthInput.value
    let yearText = yearInput.value
    
    //  function 
    const removeErrorMessage =() =>{
        ERROR_MESSAGE.innerHTML= ""
        cvcError.innerText = ""
        SECOND_ERROR.innerHTML = ""
        monthError.innerHTML = ""
    }

    const errorFunction = () =>{
        ERROR_MESSAGE.innerHTML = "Don't blank this area!"
        SECOND_ERROR.innerHTML = "Don't blank this area!"
    }
    const errorFunction1 =() =>{
        
        cvcError.innerText = "Don't blank this area!"
        
        monthError.innerText = "Don't blank this area!"
    }

    const showContentFunction =() =>{
        nameText.innerHTML = valueText.toUpperCase()
        circleText.innerHTML = valueText.charAt(0).toUpperCase()
        circleText.style.background = "linear-gradient(hsla(278, 73%, 31%, 0.8),hsl(327, 60%, 52%))"
        ERROR_MESSAGE.innerHTML = ""
        circleColor.style.background = "linear-gradient( hsl(147, 91%, 50%), hsla(197, 90%, 59%,0.8))"

        backNumber.innerHTML = cvc
        
        SECOND_ERROR.innerHTML = ""
        numberText.style.opacity ="1"
        numberText.innerHTML = numberValueText

        showMonthText.innerHTML = monthText
        showYearText.innerHTML = yearText.slice(-2)
    }
    /* function*/
    
    if((!(valueText && numberText) ) ){
        errorFunction()
        
    }else if(!(monthText && yearText) || !(cvc && numberText)){
        errorFunction1()
        
    }else if((valueText && numberInput) && cvc || (monthText && yearText)){
        showContentFunction()
        removeErrorMessage()
    }

    // if(!(valueText && numberText) || !cvc ){
    //     errorFunction()
    // }else if (valueText && numberText){
    //    if(!cvc && !(valueText || numberText)){
    //     errorFunction()
    //    }else{
    //     removeErrorMessage()
    //     showContentFunction()
    //    }
    // }


})