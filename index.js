let screen= document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
        item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is ',buttonText);
        if(buttonText == 'X')
        {
            buttonText='*';
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText =='C')
        {
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText == '='){
            screen.value=eval(screenValue);
        }else if(buttonText=='←')
        {
            var value = screen.value;           
            screenValue= value.substr(" ", value.length - 1);
            screen.value=screenValue;
        }else if(buttonText =='√')
        {
            screen.value=Math.sqrt(screen.value)
        }else if(buttonText =='sin')
        {
            var rad = (Math.PI / 180) *screen.value;
            screen.value=Math.sin(rad);
        }else if(buttonText=='cos')
        {
      
            var rad = (Math.PI / 180) *screen.value;
            screen.value=Math.cos(rad);
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }


    })
}
