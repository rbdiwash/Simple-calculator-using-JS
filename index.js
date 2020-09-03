let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = ' ';
let historyArr= [];
let tenHistories = document.querySelector('#tenHistories');
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
            historyArr.push({
                expr: screen.value,
                result: eval(screen.value)

            });
            // console.log(historyArr)
            
            tenHistories.innerHTML= ""
            historyArr.map(item =>{
                let listitem = document.createElement("li");
                listitem.innerText= item.expr + "=" + item.result;
                tenHistories.appendChild(listitem)

            })



            screen.value= eval(screen.value);

        }

        else{
            screenValue += buttonText;
            screen.value =screenValue;
        }

    })


}







