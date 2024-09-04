let numberCount=0;
//localStorage.clear();
const store=[];
console.log(store);
for(i=0;i<localStorage.length;i++)
{
    store.push(localStorage.getItem(i));
}

let k=0;
while(localStorage.getItem(k)=="")
{
    k+4;
}
let reloadCount1=k;
console.log(reloadCount1);

console.log(localStorage);
const button=document.getElementById("StudentDetails");
const form=document.querySelector("form");
const arr1=["StudentName","StudentId","Class","RollNo"];
const arr=[];
for(i=0;i<4;i++)
{
    const get=document.getElementById(arr1[i]);
    arr.push(get);
    console.log(arr);
}
const list=document.getElementById("list");
button.addEventListener("click",addRow);
if(localStorage.length>0)
{
    let i=0;
    while(i<store.length){
        reload();
        i=i+4;
                                                                                                           

    }
}
//function to reload previous data
function reload(){
    const deleteCount=numberCount;
    const reloadCount=reloadCount1;
    const listDiv=document.createElement("div");
    const deleteButton=document.createElement("button");
    const resetButton=document. createElement("button");
    const resetButton2=document.createElement("button");
    resetButton2.innerHTML="Reset"
    form.appendChild(resetButton2);
    resetButton2.classList.add("resetButton");
    deleteButton.classList.add("buttons");
    resetButton.classList.add("buttons");
    resetButton.innerHTML="Reset";
    deleteButton.innerHTML="Delete";
    const values=[];
    for(let i=reloadCount1;i<reloadCount1+4;i++)
    {
        console.log(i);
        const text=document.createElement("p"); 
        text.innerHTML=localStorage.getItem(i);
        listDiv.appendChild(text);
        values.push(localStorage.getItem(i));
    }
    listDiv.appendChild(resetButton);
    listDiv.appendChild(deleteButton);
    listDiv.classList.add("listDiv")
    list.appendChild(listDiv);
    numberCount=numberCount+4;
    reloadCount1=reloadCount1+4;
     deleteButton.addEventListener("click",deleteRow);
function deleteRow(){
    let localValue3=deleteCount;
    store.splice(localValue3++,4);
    localStorage.clear();
    for(i=0;i<store.length;i++)
    {
        localStorage.setItem(i,store[i]);
    }
    
    listDiv.remove();
    reloadCount1=reloadCount1+4;
    
}
resetButton.addEventListener("click",resetRow);
    function resetRow(){
        resetButton2.style.visibility="visible";
        for(i=0;i<4;i++)
        {
            
            arr[i].value=values[i];
        }
        
        alert("Reset the desired fields");
        
        resetButton2.addEventListener("click",function(){
            if(arr.every(x=>x.value!=""))
            {
                let localValue=deleteCount;
                let localValue2=deleteCount;
            for( j=0;j<4;j++)
            {
                
                localStorage.removeItem(localValue++);
                localStorage.setItem(localValue2++,arr[j].value);
                listDiv.childNodes[j].innerHTML=arr[j].value;
            }
            resetButton2.style.visibility="hidden";
        }
        else
    {
        alert("Please fill all the values")
    }
    arr.map(x=>x.value="");
        })
    }
}


//function to add new row
function addRow()                  
{
    if(arr.every(x=>x.value!=""))
    {
        const deleteCount=numberCount;
    const listDiv=document.createElement("div");
    const deleteButton=document.createElement("button");
    const resetButton=document. createElement("button");
    const resetButton2=document.createElement("button");
    resetButton2.innerHTML="Reset"
    form.appendChild(resetButton2);
    resetButton2.classList.add("resetButton");
    deleteButton.classList.add("buttons");
    resetButton.classList.add("buttons");
    resetButton.innerHTML="Reset";
    deleteButton.innerHTML="Delete";
    const values=[];
    for(i=0;i<4;i++)
    {
        const text=document.createElement("p");
       console.log('hii');
       localStorage.setItem(numberCount++,arr[i].value); 
       store.push(arr[i].value);
        text.innerHTML=arr[i].value;
        listDiv.appendChild(text);
        values.push(arr[i].value);
    }
    listDiv.appendChild(resetButton);
    listDiv.appendChild(deleteButton);
    listDiv.classList.add("listDiv")
    list.appendChild(listDiv);
    deleteButton.addEventListener("click",deleteRow);
function deleteRow(){
    let localVlaue3=deleteCount;
    for(i=0;i<4;i++)
    {
        localStorage.removeItem(localVlaue3++);
    }
    listDiv.remove();
}
    resetButton.addEventListener("click",resetRow);
    function resetRow(){
        resetButton2.style.visibility="visible";
        for(i=0;i<4;i++)
        {
            arr[i].value=values[i];
        }
        
        alert("Reset the desired fields");
        
        resetButton2.addEventListener("click",function(){
            if(arr.every(x=>x.value!=""))
            {
            for( j=0;j<4;j++)
            {
                const localValue=deleteCount;
                store.push(arr[j].value);
                localStorage.setItem(localValue++,arr[j].value);
                listDiv.childNodes[j].innerHTML=arr[j].value;
            }
            resetButton2.style.visibility="hidden";
        }
        else
    {
        alert("Please fill all the values")
    }
    arr.map(x=>x.value="");
        })
    }
}
else{
    alert("PLease fill all the values")
}
arr.map(x=>x.value="");
console.log(store.length);
}


