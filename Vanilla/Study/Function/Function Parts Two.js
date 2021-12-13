function sayhello(nameOfPerson,age){
    console.log("My name is "+nameOfPerson+"and I'm "+age);
}
sayhello("yuchan",17);
sayhello("dal",23);
sayhello("lynn",21);

function plus(a,b){
    console.log(a+b);
}
function devide(a,b){
    console.log(a/b);
}
plus(8,60);
devide(98,20);


const player={
    name:"yuchan",
    sayHello : function(otherPersonsName){
        console.log("hello"+otherPersonsName+"nice to meet you !");
    },
};
player.sayHello("lynn");