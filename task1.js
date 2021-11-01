//Write a javascript program to calculate days left until next christmas

const months = { 1 : 31, 2 : 28 , 3 : 31 , 4 : 30 , 5 : 31 , 6 : 30 , 7 : 31 , 8 : 31 , 9 : 30 , 10 : 31 , 11 : 30 , 12 : 31};

var date = 31;
var month = 12;
var year = 2021;

var today_date = 4;
var today_month = 10;
var today_year = 2021;

var rem_days = months[today_month] - today_date;
var last_days = 25;

if(today_month == 12){
	console.log("Days left for Christmas : ", last_days - today_date );
}else{
	for(var i = today_month+1 ; i<=11 ; i++){
		rem_days = rem_days + months[i];
	}
	console.log("Days left for Christmas : ",rem_days + last_days);

}


/*Write a javascrpt program to check two given numbers and return true if one of the number is 50 
or if their sum is 50*/
function check(num1 ,num2){
    if( num1 == 50 || num2 == 50 || num1+num2 == 50){
        return true;
    }else{
        return false;
    }
}

var a = 10;
var b = 50;

if(check(a,b)){
    console.log("True - Condition Satisfied");
}else{
    console.log("False - Condition not Satisfied");
}


//Write a javascript program to check the length of the string
let sentence = "ReactJS-Internship";

let len = sentence.length;

console.log("The length of the given sentence : " , len);
