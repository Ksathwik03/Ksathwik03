let a=document.querySelector('.menubtn');
let b=document.querySelector('.na');

    b.style.display="none";
    a.addEventListener("click",function(){
        if(b.style.display=="none"){
            b.style.display="block";
        }
        else{
            b.style.display="none";
        }
    });

