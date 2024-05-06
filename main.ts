import inquirer from "inquirer";
class Person{
    personality:string="Mysterious";
    name:string;
    askNumber:number;
constructor(name:string,askNumber:number){
    this.name=name
this.askNumber=askNumber;
if(askNumber===1){
    this.personality="Introvert";
    console.log(`You are an ${this.personality} person`)
}else if(askNumber===2){
    this.personality="Extrovert"
    console.log(`You are an ${this.personality} person`)
}else{
    console.log(`You are still mysterious person`)
}
}
}
// class Student extends Person{
//     name:string;
//     constructor(name:string,personality:number){
//         super(personality)
//         this.name=name
//     }
// }

var questions=await inquirer.prompt([{
    name:"UserNum",
    type:"number",
    message:"Type 1 if you love to talk to other or Type 2 if you avoid talking to others"
},{
    name:"UserName",
    type:"string",
    message:"Enter your name"
}])
var userNumber=questions.UserNum;
var userName=questions.UserName;
var objStudent=new Person(userName,userNumber);
console.log(`Your name is ${objStudent.name} and your personality is ${objStudent.personality}`);
if(objStudent.personality==="Introvert"){
    console.log("\nYou might prefer reading a book over attending a party.\nYou might enjoy deep conversations with person more than chatting in a large group.\nYou might feel drained after social events,needing time to recharge alone."); 
} else if(objStudent.personality==="Extrovert"){
    console.log("\nYou might enjoy striking up conversations with strangers rather than sticking to familiar faces.\nYou might energizing in lively social gatherings rather than quiest solitiary activities.\nYou might prefer engaging in animated discussions at parties over sitting back and observing.");
}



