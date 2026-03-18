//operators

//1 ARITHMETIC
 var a=10
 var b=20

var c= a+ b
console.log(c);


var c=a - b
console.log(c);

var c=a * b
console.log(c);

var c=a / b
console.log(c);// quotient


var c=a % b
console.log(c); // reminder


var c=a **b
console.log(c); //power root

//2 Assignment opeator

var a = 20
var b=10

a= a+b      // a=20+10=30
console.log(a)

a= a-b     // a=30-10=20
console.log(a)

a=a*b      // a=20*10=200
console.log(a)

a/=b        //a=200/10=20
console.log(a)


a%=b         //a =20%10=0
console.log(a)


a**=b         // a=0*10=0  
console.log(a)

// comparison

var a=100
var b= "100"

console.log(a==b)  // it will check loosely content value

console.log(a===b) // it will check type of value and content value

console.log(a < b)

console.log(a <= b)


console.log(a > b)

console.log(a >= b)

console.log(a != b)

console.log(a !==b)

//4 logical operators

//  && AND ,||OR,!NOT
//AND
if(23==="23" && 18>23 && 23<23){ //TRUE && FALSE
console.log("same")
}
else{
console.log("not same!")

}
//OR
if(23==="23" && 18>23 && 23<20)// TRUE ||FALSE
    {
        console.log('YES')
    }

    else{
        
    console.log('NO')
}

//true=1,false=0

let input=true

if(input) console.log(true)
else console.log(false)

//NOT
let input1= 20
if(!input1) console.log(true)
else console.log(false)

//5 TERNARY ? sign instead of using if & else
let age=18

age = (age > 18 && age < 56) ? 'eligible': 'not eligible'
console.log(age)

//example
let age1=18
let result=(age1>=18)? 'eligible to vote':'not eligible to vote'
console.log(result)
//6 UNARY
//POST INCREAMENT/DECREAMENT
var a=100
console.log(a++)
console.log(a)
var d=300
console.log(d--)
console.log(d)
// PRE-INCREMENT / DECREAMENT

var b=200
console.log(--b)
console.log(b)
var c=201
console.log(++c)

// CONDITIONAL STATEMENTS

//IF,ELSE IF,ELSE,NESTED IF,SWITCH,BREAK,CONTINUE

let mark=34
if(mark <= 95 && mark>=85){
    console.log(" GRADE A ")
}

else if(mark <=55& mark>=55 )
{
    console.log('grade b')
}

else if (mark<=55 & mark >=35)
{
    console.log("grade c")
}

else{
    console.log('grade d')
}

if(mark!==34){
console.log(true)

if(mark>30){   // NESTED IF

    console.log('eligible')
}

}

else{
    console.log('not eligible')
}

// SWITCH

















let day=3

switch(day){
case 1:
 console.log("MONDAY")
case 2:
console.log("tuesday")

case 3:
console.log("wednesday")

case 4:
console.log("thrusday")

case 5:
console.log("friday")
default:
    console.log("week end")
}


// break
let day1=3

switch(day1){
case 1:
 console.log("MONDAY")
 break
case 2:
console.log("tuesday")
break
case 3:
console.log("wednesday")
break
case 4:
console.log("thrusday")
break
case 5:
console.log("friday")
break
default:
    console.log(" week end")

}






