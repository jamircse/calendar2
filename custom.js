"use strict"

var date=new Date();
var current_date=date.getDate();

const months=["January","February","March","April","May","June","July","August","September","October","November","December"];

var calendarCreate=()=>{
    var current_month=date.getMonth();
    var current_year=date.getFullYear();
    var current_month_last_date=new Date(current_year,current_month+1,0).getDate();
    var pre_month_last_date=new Date(current_year,current_month,0).getDate();
    var current_day_code=date.getDay();
    
    document.querySelector(".monthyear h2").innerHTML=`${months[current_month]} ${current_year}`
    var shedule=" ";
    // pre month days
     for (let index =current_day_code; index >0; index--) {
        shedule += `<div class="pre_date">${pre_month_last_date-index+1}</div>`;
     }
     // current month days
     for (let index =1; index <current_month_last_date; index++) {
        if(current_date==index){
            shedule += `<div class="current">${index}</div>`;
        }else{
            shedule += `<div>${index}</div>`;
        }
        
     }
     // next month days
     for (let index =1; index <current_day_code; index++) {
        shedule += `<div class="next_date">${index}</div>`;
     }
     document.querySelector(".date_area").innerHTML=shedule;
     shedule=" ";
}
 
document.querySelector(".pre").addEventListener("click",()=>{
    date.setMonth(date.getMonth()-1);

    calendarCreate();
});
document.querySelector(".next").addEventListener("click",()=>{
    date.setMonth(date.getMonth()+1);
    calendarCreate();
});

calendarCreate();