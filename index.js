
const loginButton= document.getElementById("login_btn");
 
loginButton.addEventListener("click", function(out){
    out.preventDefault();
    //login area display None 
    const fullArea= document.getElementById("login_area");
    fullArea.style.display="none";

    //trx Area display block 
    const textArea= document.getElementById("tranx_area");
    textArea.style.display="block";

})

//deposite button handler



const addDeposit= document.getElementById("addDeposit");
addDeposit.addEventListener("click", function(){

const depositAmount= parseFloat(document.getElementById("depositAmount").value); 
const currentDeposit= parseFloat( document.getElementById("currentDeposit").innerText);
const totaldeposit= currentDeposit + depositAmount;
document.getElementById("currentDeposit").innerText= totaldeposit;


const currentblance = parseFloat( document.getElementById("currentblance").innerText);
const totalBlance = currentblance + depositAmount;
document.getElementById("currentblance").innerText = totalBlance;

document.getElementById("depositAmount").value="";

});


//widthdraw button handler

const addwidthraw= document.getElementById("addwidthraw");
addwidthraw.addEventListener("click", function(){
const currentblance= parseFloat( document.getElementById("currentblance").innerText);
const widthrawAmount= parseFloat( document.getElementById("widthrawAmount").value);
const currentWidthdraw= parseFloat( document.getElementById("currentWidthdraw").innerText);
const totalwidthraw= currentWidthdraw + widthrawAmount;
document.getElementById("currentWidthdraw").innerText= totalwidthraw; 

 const updateblance=  currentblance - widthrawAmount;
 document.getElementById("currentblance").innerText=updateblance;
 

})