//JavaScript that I wrote here is actually a bad one. It is functional but I have written a long code to execute a simple problem. So the JavaScript code written here doesn't necessarily need to be exactly the same
//Worst way to write and bad practice to write the js code. As I didn't thought of any other alternatives, I decided to write this one
const extra1 = document.querySelectorAll(".extras")[0];
const extra2 = document.querySelectorAll(".extras")[1];
const extra3 = document.querySelectorAll(".extras")[2];
const extra4 = document.querySelectorAll(".extras")[3];
const extra5 = document.querySelectorAll(".extras")[4];
const extra6 = document.querySelectorAll(".extras")[5];
const extra7 = document.querySelectorAll(".extras")[6];
const extra8 = document.querySelectorAll(".extras")[7];
const extra9 = document.querySelectorAll(".extras")[8];
const loadmore1 = document.querySelectorAll(".loadmore")[0];
const loadmore2 = document.querySelectorAll(".loadmore")[1];
const loadmore3 = document.querySelectorAll(".loadmore")[2];
const loadmore4 = document.querySelectorAll(".loadmore")[3];
loadmore1.addEventListener("click", ()=>{
    extra1.classList.add("show");
    extra2.classList.add("show");
    extra3.classList.add("show");
    extra4.classList.add("show");
    loadmore1.classList.add("extras");
});
loadmore2.addEventListener("click", ()=>{
    extra5.classList.add("show");
    extra6.classList.add("show");
    loadmore2.classList.add("extras");
});
loadmore3.addEventListener("click", ()=>{
    extra7.classList.add("show");
    extra8.classList.add("show");
    extra9.classList.add("show");
    loadmore3.classList.add("extras");
});