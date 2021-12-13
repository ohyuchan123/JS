const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

// const daysOfweek = mon+tue+wed+thu+fri+sat+sun;
// const daysOfweek = [mon,tue,wed,thu,fri,sat,sun];
const daysOfweek = ["mon","tue","wed","thu","fri","sat"];

const nonesence = [1,2,"hello",false,null,true,undefined,"yuchan"];

console.log(daysOfweek,nonesence);
console.log(daysOfweek[0]);

daysOfweek.push("sun");

console.log(daysOfweek);