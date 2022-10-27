let buttons = document.querySelectorAll("button")
console.log(buttons);
let display = document.querySelector('.display')


buttons.forEach(function(button){
    button.addEventListener("click" , calculate)
})

function calculate(e){
    const buttonclickValue = e.target.value

    if (buttonclickValue  === "=") {
        if(display.value !==""){
            display.value = eval(display.value)
        }        
    }else if (buttonclickValue === "C"){
        display.value = ""
    }else{
        display.value += buttonclickValue
    }
}