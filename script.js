const dateFrom = document.getElementById("date-from");
const dateTo = document.getElementById("date-to");
const btnCalculate = document.getElementById("btn-calculate");
const inYearsText = document.getElementById("in-years");
const inMonthsText = document.getElementById("in-months");
const inDaysText = document.getElementById("in-days");

btnCalculate.addEventListener("click",calculateDate);

function calculateDate(){
    let d1 = new Date(dateFrom.value);
    let d2 = new Date(dateTo.value);

    let diffDays = differenceDays(d1,d2);

    if(isNaN(diffDays)){
        alert("Invalid Date, Please Try Again.");
    }
    else{
        setDaysText(inDaysText, diffDays);
    }
}

function differenceDays(d1, d2){
    return ((d2-d1)/(1000*60*60*24));
}


function setDaysText(target, value){
    target.textContent = `${value} Days`;
}