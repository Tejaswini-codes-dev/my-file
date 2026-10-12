let age = 13;
if(age>=18){
    console.log("they can vote")
}
else{
    console.log("they can not vote")
}
//🙋‍♀️WAP WHICH CAN GIVE GRADES TO STUDENT ACCORDING TO THIER SCORES
let number = 45;
if(number>=95 && number<=100 ){
    console.log("A");
}
else if(number<95 && number>=75){
    console.log("B");
}
else if(number<75 && number>=35){
    console.log("c");
}
else{
    console.log("D,FAIL");
}
//OR
let marks=prompt("Enter the marks")
let grade ;
if(marks>=95 && marks<=100 ){
    grade ="A";
}
else if(marks<95 && marks>=75){
    grade ="B";
}
else if(marks<75 && marks>=35){
    grade ="C";
}
else{
    grade="F";
}
console.log(grade);

//OR

//🙋‍♀️TO CHECK WEATHER A GIVEN NUMBER IS EVEN OR ODD
let num =23;
if (num%2===0){
    console.log("EVEN NUMBER");
}else{
    console.log("ODD NUMBER");
}
//🙋‍♀️GET USER TO INPUT NUMBER UDING PROMPT("ENTER A NUMBER:"),CHECK IF THE NUMBER IS MULTIPAL OF 5 OR NOT
num= prompt("ENTER A NUMBER");
if (num % 5 ===0){
    console.log(num,"MULTIPLE IF 5");
}else{
        console.log(num," NOT MULTIPLE IF 5");

}