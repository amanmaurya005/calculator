
    
   
    let button=document.getElementById("submit")
    button.addEventListener("click",()=>{


         let input1=Number(document.getElementById("inp1").value);
    let oppretions=document.getElementById("oppretions").value;
    let input2=Number(document.getElementById("inp2").value);
    
       let ans=""; 

 

    if(oppretions=="+")
    {
        ans=input1+input2;
        
    }
    else if(oppretions=="-")
    {
        ans=input1-input2;
      
    }
    else if(oppretions=="*")
    {
        ans=input1*input2;
       
    }
    else if(oppretions=="/")
    {
        ans=input1/input2;
    
    }
    else if(oppretions=="%")
    {
        ans=input1%input2;
       
    }
     document.getElementById("result").value=ans;
    
    })
    
