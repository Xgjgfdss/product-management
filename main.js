let title=document.getElementById('title');
let price=document.getElementById('price');
let taxes=document.getElementById('taxes');
let ads=document.getElementById('ads');
let discount=document.getElementById('discount');
let total=document.getElementById('total');
let count=document.getElementById('count');
let category=document.getElementById('category');
let submit=document.getElementById('submit');

function getTotal()

{
    if(price.value !=''){
    
    let result=(+price.value + +taxes.value + +ads.value)
    - +discount.value;
    total.innerHTML=result;
    total.style.background='#040';
    }
    else{
        total.innerHTML='';
        total.style.background='#a00d02';
    }
    }
    

let dataPRO;
if(localStorage.product != null){
    dataPRO=JSON.parse(localStorage.product)
}
else{ 
    dataPro=[];
}

submit.onclick=function(){

let newPro={
title:title.value,
price:price.value,
taxes:taxes.value,
ads:ads.value,
discount:discount.value,
total:total.innerHTML,
count:count.value,
category:category.value,
}

 dataPRO.push(newPro);
localStorage.setItem('product',    JSON.stringify(newPro)   )

clearData()
showData()
}

function clearData(){
title.value='';
price.value='';
taxes.value='';
ads.value='';
discount.value='';
total.innerHTML='';
count.value='';
category.value='';
}

function showData()
{
    let table='';
    for(let i=0; i < dataPro.length;i++)
    table +=`       <tr>
    <td>${i}</td>
    <td>${dataPRO[i].title}</td>
    <td>${dataPRO[i].price}</td>
    <td>${dataPRO[i].taxes}</td>
    <td>${dataPRO[i].ads}</td>
    <td>${dataPRO[i].discount}</td>
    <td>${dataPRO[i].total}</td>
    <td>${dataPRO[i].category}</td>
    <td><button id="update">update</button></td>
    <td><button id="delate">delate</button></td>
</tr>
`
}




















