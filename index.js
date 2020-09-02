let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
// let equalButton= document.querySelector('.equals');
for (item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button Text is ', buttonText);
          
        if(buttonText == 'AC'){
            screenValue=" ";
            screen.value= screenValue;
        }

        else if(buttonText == 'DEL'){
            screenValue= screenValue.toString().slice(0,-1);
            screen.value = screenValue;
        }

        else if(buttonText == '='){
             screen.value= eval(screen.value);
        }

        else{
            screenValue += buttonText;
            screen.value =screenValue;
        }

    })

}

// screen.addEventListener("onkeyup",(e) =>{
//     console.log(e);
//     if (e.keyCode==13){
//        e.preventDefault();
//         screen.value= eval(screen.value);
//     }



